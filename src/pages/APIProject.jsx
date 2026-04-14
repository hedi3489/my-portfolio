import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet } from '../components/ProjectPageComponents.jsx'
import olympicsDBDiagram from '../assets/olympicsDBDiagram.png'
import waiterJson from "../assets/waiter-json.png"
import waiterJson2 from "../assets/waiter-json-2.png"

function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card">
                <div className='prose'>
                    <h1>2024 Paris Olympics API</h1>
                    <h4>An API providing resources and remote computing over HTTPS</h4>
                    <TechStackInline items={["REST API", "PHP", "Slim Framework", "PDO", "MySQL", "Valitron", "MVC", "HTTP"]} />
                    <TextSection className="text-section" title="Overview"
                        paragraphs={[
                            <>The Olympics API is a RESTful web service built around the 2024 Paris Olympics providing structured access to data on athletes, coaches, venues, and sports events, and supporting pagination, filtering, sorting, and proper error handling.</>,
                            <>The API was built using <b style={{ color: '#bfbfff' }}>PHP</b> and the <b style={{ color: '#bfbfff' }}>Slim Framework</b>, backed by a MySQL database, and following the REST conventions throughout - each resource has its own collection and singleton endpoints supporting full CRUD operations. All inputs go through Valitron validation with custom HTTP exceptions for clean, descriptive error responses. </>
                        ]}
                    />
                    <p>I personally owned the venues and events endpoints, including their filtering logic:</p>
                    <BulletList
                        intro={<b>⦿ Venues:</b>}
                        items={[
                            <>Filterable by: <b>name</b>, <b>capacity range</b>, and <b>construction date range</b></>,
                            <>Sortable by: venue ID, name, location, capacity, type, date constructed, and address</>
                        ]}
                    />
                    <BulletList
                        intro={<b>⦿ Events:</b>}
                        items={[
                            <>Filterable by: <b>event name</b>, <b>participant count range</b>, and <b>paralympic status</b></>,
                            <>Sortable by: event ID, name, sport, start/end date, participant count, and venue</>
                        ]}
                    />

                    <TextSection title="Database Design">

                        <p>The schema was designed around the core entities of the 2024 Paris Olympics. Events are tied to a Venue through a foreign key, and results are stored in a junction table linking Athletes to Events. Coaches are connected to Athletes through a separate junction table. Each table was kept focused and normalized to avoid redundancy while keeping queries straightforward.</p>
                        <CaptionedImage
                            image={olympicsDBDiagram}
                            caption='Entity Relation Diagram of the Olympics Database'
                            alt='Database Entity Relation Diagram'
                            imageSizeClass='larger-image'
                        />
                    </TextSection>

                    <TextSection
                        title="Request Processing"
                        paragraphs={[
                            <>To give a sense of how the API is structured, here's what happens under the hood when a client requests a filtered and sorted list of venues. Each step shows how the request is routed through the system, validated, and finally paginated.</>
                        ]}
                    />
                    <p>1. User sends a request</p>
                    <CodeSnippet language="http" code="GET /venues?min_capacity=50000&sort_by=capacity&order_by=desc" />

                    <p>2. The request is carried by routes.php to the controller</p>
                    <CodeSnippet subtitle="routes.php" code="$app->get('/venues', [VenueController::class, 'handleGetVenues']);" />

                    <p>3. The controller extracts the parameters and passes them off to the model</p>
                    <CodeSnippet subtitle="VenuesController.php" code="public function handleGetVenues(Request $request, Response $response): Response
{
    $req_params = $request->getQueryParams();
    $current_page = $req_params['current_page'] ?? 1;
    $page_size = $req_params['page_size'] ?? 15;
    $this->venue_model->setPaginationOptions($current_page, $page_size);

    $venues = $this->venue_model->getVenues($req_params, $request);

    if (empty($venues['data'])) {
        throw new HttpNotFoundException($request, 'No venues found.');
    }
    return $this->renderJson($response, $venues);
}"/>

                    <p>4. The model validates the params before querying the database</p>
                    <CodeSnippet subtitle="VenuesModel.php" code="if (isset($req_params['min_capacity'])) {
    (int) $cap = $req_params['min_capacity'];
    if (!ValidationHelper::isIntAndInRange($cap, 0, 100000) || $cap == NULL) {
        throw new HttpBadRequestException(
            $request,
            'Min_capacity must be a number between 0 and 100000.'
        );
    } else {
        $sql .= ' AND capacity >= :min_capacity';
        $query_args['min_capacity'] = $req_params['min_capacity'];
    }
}"/>

                    <p>5. Only whitelisted fields are allowed</p>
                    <CodeSnippet subtitle="VenuesModel.php" code="$valid_sort_fields = ['venue_id', 'venue_name', 'location', 'capacity', 'type', 'date_constructed', 'address'];
$valid_orders = ['asc', 'desc'];

if (in_array($sort_by, $valid_sort_fields) && in_array($order_by, $valid_orders)) {
    $sql .= ' ORDER BY $sort_by $order_by';
} else {
    throw new HttpBadRequestException($request, 'Invalid sorting or ordering parameter.');
}"/>


                    <div className='flex'>

                        <div className='flex-5-6'>
                            <p>6. A paginated JSON object is served to the user</p>
                            <div className=''>
                                <CodeSnippet language="json" code='{
  "pagination": {
    "current_page": 1,
    "page_size": 15,
    "total_records": 4
  },
  "data": [
    {
      "venue_id": 3,
      "venue_name": "Stade de France",
      "location": "Saint-Denis",
      "capacity": 81338,
      "type": "Stadium",
      "date_constructed": "1998-01-28"
    }
  ]
}'/>
                            </div>
                        </div>
                        <div className='flex-5'>
                            <CaptionedImage
                                image={waiterJson2}
                                alt='Artwork of waiter serving a JSON package'
                                imageSizeClass='medium-image margin-0 margin-left-3em full-height'
                            />
                        </div>
                    </div>
                    <TextSection
                        title="Error Handling"
                        paragraphs={["Rather than relying on generic HTTP errors, the API uses a set of custom exception classes that extend a base HttpSpecializedException. Each exception carries a status code, a short message, and a human-readable description — making it easy for users to understand exactly what went wrong."]}
                    />
                    <CodeSnippet
                        code='class HttpBadFilterException extends HttpSpecializedException
{
    protected $code = 400;
    protected $message = "Invalid filter provided.";
    protected string $title = "400 Bad Request";
    protected string $description = "Please make sure you provide a valid filter. 
    Only alphanumeric characters and spaces are allowed.";
}'
                    />

                    <CodeSnippet
                        code='class HttpInternalServerErrorException extends HttpSpecializedException
{
    protected $code = 500;
    protected $message = "Internal server error.";
    protected $title = "500 Internal Server Error.";
    protected string $description = "The server has encountered an unexpected 
    situation preventing it from fulfilling its request.";
}'
                    />

                </div>
            </div>
        </div>
    )
}

export default APIProjectPage

