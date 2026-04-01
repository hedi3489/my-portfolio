
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

const pagination_code = ` public function __construct(int $page_number = 1, int $page_size = 15, int $total_count = 0)
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
                    <TechStackInline
                        items={[
                            "REST API",
                            "PHP",
                            "Slim",
                            "PDO",
                            "MySQL",
                            "Valitron",
                            "MVC",
                        ]}
                    />
                    <TextSection
                        className="text-section"
                        title="Overview"
                        paragraphs={[
                            <>
                                The Olympics API is a RESTful web service built around the 2024 Paris Olympics (roughly...) providing structured access to access data on athletes, coaches, venues, events, countries, and results. The goal was to design and deliver a production level API with all the expected features: authentication, pagination, filtering, sorting, and proper error handling.
                            </>,
                            <>
                                The API was written using <b>PHP</b> and the <b>Slim Framework</b>, backed by a (dummy-filled) MySQL database, and following the REST conventions throughout - each resource has its own collection and singleton endpoints supporting full CRUD operations. All inputs go through Valitron validation with custom HTTP exceptions for clean, descriptive error responses.
                            </>,
                            <>
                                I personally owned the venues and events endpoints, including their filtering logic — venues can be filtered by <b>name</b>, <b>capacity range</b>, and <b>construction date</b>, while events support sorting by fields like <b>sport</b>, <b>date</b>, and <b>participant count</b>.
                            </>
                        ]}
                    />

                    <CodeSnippet title="Sorting and ordering snippet from venue_model.php" code={code} />
                    <CodeSnippet title="Brief snippet from HttpBadFilterException.php" code={http_exception} />
                    <CodeSnippet title="Snippet from PaginationHelper.php" code={pagination_code} />

                </div>
            </div>
        </div>
    )
}

export default APIProjectPage

