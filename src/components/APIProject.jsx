
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet } from './ProjectPageComponents.jsx'
import apiSS1 from '../assets/olympics-api-ss1.png'

const code = `// Sorting & Ordering
$sort_by = $req_params['sort_by'] ?? 'venue_name';
$order_by = $req_params['order_by'] ?? 'asc';

$valid_sort_fields = ['venue_id', 'venue_name', 'location', 'capacity', 'type', 'date_constructed', 'address'];
$valid_orders = ['asc', 'desc'];

if (in_array($sort_by, $valid_sort_fields) && in_array($order_by, $valid_orders)) {
    $sql .= " ORDER BY $sort_by $order_by";
} else {
    throw new HttpBadRequestException($request, "Invalid sorting or ordering parameter.");
}`;

const http_exception = `class HttpBadFilterException extends HttpSpecializedException
{
    protected $code = 400;
    protected $message = "Invalid filter provided.";
    protected string $title = "400 Bad Request";
    protected string $description = "Please make sure you provide a valid filter before submitting. Only alphanumeric characters and spaces are allowed.";
}`;

const pagination_code = `public function __construct(int $page_number = 1, int $page_size = 15, int $total_count = 0)
{
    $this->current_page = $page_number;
    $this->records_per_page = $page_size;
    $this->total_records = $total_count;
    $this->total_pages = $this->getTotalPages();
    // Set the current page to 1 if the current page is negative
    // or the current page is greater than the total number of pages.
    if ($this->current_page < 1 || $this->current_page > $this->total_pages) {
        $this->current_page = 1;
    }
}`;

function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card">
                <div className='prose'>
                    <h1>2024 Paris Olympics API</h1>
                    <h4>An API providing resources and remote computing over HTTPS</h4>
                    <TechStackInline items={["REST API", "PHP", "Slim Framework", "PDO", "MySQL", "Valitron", "MVC",]} />
                    <TextSection className="text-section" title="Overview"
                        paragraphs={[
                            <>The Olympics API is a RESTful web service built around the 2024 Paris Olympics providing structured access to access data on athletes, coaches, venues, events, countries, and results, and supporting pagination, filtering, sorting, and proper error handling.</>,
                            <>The API was built using <b>PHP</b> and the <b>Slim Framework</b>, backed by a MySQL database, and following the REST conventions throughout. Each resource has its own collection and singleton endpoints supporting full CRUD operations. All inputs go through Valitron validation with custom HTTP exceptions for clean, descriptive error responses.</>
                        ]}
                    />
                    <BulletList 
                    intro='I personally owned the venues and events endpoints, including their filtering logic:'
                    items={[
                        <>venues can be filtered & sorted by <b>name</b>, <b>capacity</b>, and <b>construction date</b></>,
                        <> events can be filtered & sorted by <b>sport</b>, <b>date</b>, and <b>participant count</b></>
                    ]} />

                    <TextSection 
                        title="Request Processing"
                        paragraphs={[
                            <>To give a sense of how the API is structured, here's what happens under the hood when a client requests a filtered and sorted list of venues. Each step shows how the request is routed through the system, validated, and finally paginated.</>
                        ]}
                    />
                    
                    <p>The Request</p>
                    <CodeSnippet language="http" code="GET /venues?min_capacity=50000&sort_by=capacity&order_by=desc" />

                    <p>The Route</p>
                    <CodeSnippet subtitle="routes.php" code="$app->get('/venues', [VenueController::class, 'handleGetVenues']);" />

                    <p>The Controller</p>
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

                    <p>Validation & Querying</p>
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

                    <p>Sorting</p>
                    <CodeSnippet subtitle="VenuesModel.php" code="$valid_sort_fields = ['venue_id', 'venue_name', 'location', 'capacity', 'type', 'date_constructed', 'address'];
$valid_orders = ['asc', 'desc'];

if (in_array($sort_by, $valid_sort_fields) && in_array($order_by, $valid_orders)) {
    $sql .= ' ORDER BY $sort_by $order_by';
} else {
    throw new HttpBadRequestException($request, 'Invalid sorting or ordering parameter.');
}"/>

                    <p>The Response</p>
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




                    {/* <TextSection
                        title="Code Snippets"
                    />
                    <CodeSnippet title="Sorting and ordering snippet from venue_model.php" code={code} />
                    <CodeSnippet title="Brief snippet from HttpBadFilterException.php" code={http_exception} />
                    <CodeSnippet title="Snippet from PaginationHelper.php" code={pagination_code} /> */}

                </div>
            </div>
        </div>
    )
}

export default APIProjectPage

