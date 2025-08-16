# Viva Preparation - Unique Questions and Tips

## Core Technical Questions

### Database & ORM

1. **What is ORM? Explain its advantages and disadvantages**  
   - **ORM (Object‑Relational Mapping)**: Maps database tables to language objects/classes so you interact with DB records as objects instead of writing raw SQL.  
   - **Advantages**: Faster development, safer parameterized queries (reduces SQL injection), DB‑agnostic models, easier to maintain and test.  
   - **Disadvantages**: Performance overhead vs optimized SQL, less control for complex queries, can produce inefficient SQL if misused, additional abstraction to learn.

2. **What is SQLAlchemy? Is it a class or function?**  
   - **SQLAlchemy**: A Python SQL toolkit and ORM library with two main parts — the Core (SQL expression language & Engine) and the ORM (Session, declarative models).  
   - **Not a single class or function**: it's a library comprising modules, classes (Engine, Session, MetaData, etc.) and helper functions.

3. **What is db.Model? Where is it inherited from?**  
   - **db.Model**: In Flask‑SQLAlchemy, the base declarative class that application models inherit from (e.g., `class User(db.Model): ...`).  
   - **Inherited from**: SQLAlchemy’s declarative base (created via `declarative_base()`); Flask‑SQLAlchemy exposes it as `db.Model` through the `SQLAlchemy()` extension.

4. **Explain database normalization - different normal forms (1NF, 2NF, 3NF)**  
   - **1NF (First Normal Form)**: Atomic column values, no repeating groups or multi-valued attributes.  
   - **2NF (Second Normal Form)**: 1NF + every non‑key attribute fully depends on the entire primary key (eliminate partial dependencies on composite keys).  
   - **3NF (Third Normal Form)**: 2NF + no transitive dependencies — non‑key attributes depend only on the primary key, not on other non‑key attributes.

5. **What is the difference between primary key and foreign key?**
   - **Primary Key**: Unique identifier for each record in a table, cannot be null
   - **Foreign Key**: References primary key of another table, creates relationships between tables

6. **What is the difference between primary key and unique key?**
   - **Primary Key**: Only one per table, cannot be null, automatically creates index
   - **Unique Key**: Multiple allowed per table, can be null, ensures uniqueness

7. **Does a foreign key need to be unique? In what cases?**
   - **Usually NO** - foreign keys can have duplicate values (many records can reference same parent)
   - **YES when**: Implementing one-to-one relationships

8. **What is CASCADE in database? Types: CASCADE DELETE, DELETE ORPHAN**
   - **CASCADE DELETE**: When parent record is deleted, all child records are automatically deleted
   - **DELETE ORPHAN**: Removes child records when they're no longer referenced by parent

9. **What is the difference between backref and backpopulate?**
   - **backref**: Automatically creates reverse relationship, defined on one side only
   - **backpopulate**: Manually define both sides of relationship, more explicit control

10. **What is lazy loading in SQLAlchemy? What does lazy=True mean?**
    - **Lazy Loading**: Related data is loaded only when accessed, not immediately
    - **lazy=True**: Default behavior - loads related objects on first access

11. **What is db.relationship? How do you define relationships?**
    - **db.relationship()**: Defines relationships between models without creating database columns
    - **Example**: `users = db.relationship('User', backref='posts')`

12. **Explain one-to-one, one-to-many, and many-to-many relationships**
    - **One-to-One**: One user has one profile (user_id unique in profiles)
    - **One-to-Many**: One user has many posts (user_id in posts table)
    - **Many-to-Many**: Students and courses (junction table needed)

13. **What is uselist in relationships?**
    - **uselist=False**: Returns single object instead of list (for one-to-one relationships)
    - **uselist=True**: Default behavior - returns list of objects

14. **What are the advantages of SQLite vs MySQL?**
    - **SQLite**: Serverless, lightweight, file-based, good for development/small apps
    - **MySQL**: Server-based, better performance, supports multiple users, production-ready

15. **Is your database normalized? What normal form is it in?**
    - **Answer based on your project**: Usually 3NF if properly designed with separate tables for users, posts, categories, etc.

16. **What is referential integrity?**
    - **Referential Integrity**: Ensures foreign key values always reference valid primary key values
    - **Prevents**: Orphaned records and invalid references

17. **Difference between structured and unstructured databases**
    - **Structured**: Fixed schema (SQL databases) - tables, rows, columns
    - **Unstructured**: Flexible schema (NoSQL) - documents, key-value pairs

### Flask & Web Development
18. **What is Flask? Why use Flask over Django?**
    - **Flask**: Lightweight Python web framework, minimalist and flexible
    - **Why Flask**: Simpler to learn, more control, better for small-medium projects, microframework approach

19. **What is app = Flask(__name__)? Why do we use __name__?**
    - **Creates Flask application instance**
    - **__name__**: Tells Flask where to find resources (templates, static files) relative to current module

20. **What is @app.route()? What does @ mean?**
    - **@app.route()**: Decorator that maps URL paths to Python functions
    - **@ symbol**: Python decorator syntax - modifies function behavior

21. **What is url_for() vs redirect() vs render_template()?**
    - **url_for()**: Generates URL for a given function name
    - **redirect()**: Sends user to different URL/page
    - **render_template()**: Renders HTML template with data

22. **What is Flask(__name__)? Can we remove the __name__ parameter?**
    - **Flask(__name__)**: Creates app instance with current module name
    - **Cannot remove**: Required parameter for Flask to locate resources

23. **What is app.config["SECRET_KEY"]? What happens if it's not there?**
    - **SECRET_KEY**: Used for session encryption and CSRF protection
    - **Without it**: Sessions won't work, security vulnerabilities, Flask may refuse to start

24. **What is app.app_context().push()? Why is it needed?**
    - **Creates application context** for database operations outside request
    - **Needed for**: Database operations in scripts, testing, background tasks

25. **What is Flask blueprint? Why use it?**
    - **Blueprint**: Way to organize routes and functions into modules
    - **Why use**: Code organization, reusability, better project structure

26. **What is Flask-Login? What is UserMixin?**
    - **Flask-Login**: Extension for user session management
    - **UserMixin**: Provides default implementations for user authentication methods

27. **What is @login_required decorator?**
    - **Decorator that ensures user is logged in** before accessing a route
    - **Redirects to login page** if user not authenticated

28. **What is Flask-WTF?**
    - **Extension for form handling and validation** in Flask
    - **Provides**: CSRF protection, form classes, validators

29. **What is WSGI?**
    - **Web Server Gateway Interface** - standard for Python web applications
    - **Connects** web servers with Python applications

30. **How do you change the port from 5000 to 8000?**
    - **app.run(port=8000)** or **flask run --port 8000**

### HTTP Methods & APIs
31. **What are HTTP methods? Explain GET, POST, PUT, PATCH, DELETE**
    - **GET**: Retrieve data (safe, idempotent)
    - **POST**: Create new data (not idempotent)
    - **PUT**: Update entire resource (idempotent)
    - **PATCH**: Partial update (not necessarily idempotent)
    - **DELETE**: Remove resource (idempotent)

32. **What is the difference between GET and POST?**
    - **GET**: Data in URL, visible, limited size, cacheable, idempotent
    - **POST**: Data in body, hidden, unlimited size, not cacheable, not idempotent

33. **What is the difference between PUT and PATCH?**
    - **PUT**: Replaces entire resource, idempotent
    - **PATCH**: Updates specific fields only, may not be idempotent

34. **Can we send data through GET? Is it recommended?**
    - **Yes**: Through query parameters in URL
    - **Not recommended for**: Sensitive data, large data, or data modification

35. **Can we fetch data using POST? Is it recommended?**
    - **Yes**: Possible but not recommended
    - **GET is better**: For data retrieval (semantic clarity, caching, bookmarking)

36. **Which is more secure: GET or POST?**
    - **POST is more secure**: Data not visible in URL, logs, or browser history
    - **Both need HTTPS** for true security

37. **What is REST API? What is RESTful?**
    - **REST**: Representational State Transfer - architectural style for web services
    - **RESTful**: API that follows REST principles (stateless, uniform interface, etc.)

38. **What are the constraints of RESTful APIs?**
    - **Stateless**: Each request independent
    - **Uniform Interface**: Standard HTTP methods
    - **Client-Server**: Separation of concerns
    - **Cacheable**: Responses can be cached
    - **Layered System**: Multiple architectural layers

39. **Can Flask endpoints return boolean values?**
    - **Not directly**: Must return Response object, string, or tuple
    - **Convert to**: String, JSON, or use jsonify()

40. **What are HTTP status codes? Explain 200, 302, 400, 403, 404, 500, 501, 503**
    - **200**: OK - Success
    - **302**: Found - Temporary redirect
    - **400**: Bad Request - Client error
    - **403**: Forbidden - Access denied
    - **404**: Not Found - Resource doesn't exist
    - **500**: Internal Server Error
    - **501**: Not Implemented
    - **503**: Service Unavailable

41. **What is stateless vs stateful?**
    - **Stateless**: No client information stored between requests (HTTP/REST)
    - **Stateful**: Server remembers client state between requests (TCP connections)

42. **What is HTTP vs HTTPS? Which is more secure and why?**
    - **HTTP**: Plain text communication (port 80)
    - **HTTPS**: Encrypted with SSL/TLS (port 443)
    - **HTTPS is secure**: Encrypts data, prevents eavesdropping and tampering

### Frontend & Templates
43. **What is Jinja2 templating? How do you use it?**
    - **Jinja2**: Template engine for Python that generates HTML dynamically
    - **Usage**: Pass variables from Flask routes to HTML templates using render_template()

44. **What is template inheritance? How do you implement it?**
    - **Template inheritance**: Child templates extend parent templates to avoid code duplication
    - **Implementation**: Use {% extends "base.html" %} and {% block content %}{% endblock %}

45. **How do you write a for loop in Jinja?**
    - **Syntax**: {% for item in items %} ... {% endfor %}

46. **How do you write if-else conditions in Jinja?**
    - **Syntax**: {% if condition %} ... {% elif condition %} ... {% else %} ... {% endif %}

47. **What are the symbols used: {{ }}, {% %}, {# #}?**
    - **{{ }}**: Expression/variable output
    - **{% %}**: Statements (loops, conditions, blocks)
    - **{# #}**: Comments (not rendered)

48. **How does Jinja access variables?**
    - **Direct access**: {{ variable_name }}
    - **Attribute access**: {{ user.name }}
    - **Dictionary access**: {{ data['key'] }}

49. **What is DOM? Which language manipulates DOM dynamically?**
    - **DOM**: Document Object Model - tree structure of HTML elements
    - **JavaScript**: Primary language for dynamic DOM manipulation

50. **What is the difference between id and name attributes in HTML?**
    - **id**: Unique identifier for CSS/JS targeting
    - **name**: Form field identifier for server-side processing

51. **What is the difference between id and class in HTML/CSS?**
    - **id**: Unique identifier, one per page (#myId)
    - **class**: Reusable identifier, multiple elements (.myClass)

52. **What symbols are used for id and class in CSS? (# for id, . for class)**
    - **# for id**: #myId { }
    - **. for class**: .myClass { }

53. **What are CSS selectors? How many types?**
    - **CSS selectors**: Patterns to select HTML elements
    - **Types**: Element, ID, Class, Attribute, Pseudo-class, Descendant, Child selectors

54. **What are the types of CSS? (inline, internal, external)**
    - **Inline**: style="..." directly in HTML tags
    - **Internal**: <style> tags in HTML head
    - **External**: Separate .css files linked to HTML

55. **What is the precedence order of CSS? (inline > internal > external)**
    - **Order**: Inline > Internal > External > Browser defaults
    - **Specificity**: ID > Class > Element

56. **What is cell-spacing vs cell-padding?**
    - **Cell-spacing**: Space between table cells
    - **Cell-padding**: Space between cell border and content

57. **What is Bootstrap? Why use it? What is CDN?**
    - **Bootstrap**: CSS framework for responsive web design
    - **Why use**: Pre-built components, responsive grid, faster development
    - **CDN**: Content Delivery Network - serves files from distributed servers

58. **What is the difference between block and inline elements?**
    - **Block**: Take full width, start on new line (div, p, h1)
    - **Inline**: Take only needed width, stay in line (span, a, strong)

### Authentication & Security
59. **What is the difference between authentication and authorization?**
    - **Authentication**: Verifying who you are (login with username/password)
    - **Authorization**: Verifying what you can access (permissions and roles)

60. **How do you implement RBAC (Role-Based Access Control)?**
    - **Create roles** (admin, user, moderator)
    - **Assign permissions** to roles
    - **Check user role** before allowing access to resources

61. **What is session vs cookies? Where are they stored?**
    - **Session**: Server-side storage of user data
    - **Cookies**: Client-side storage in browser
    - **Storage**: Sessions on server, cookies in browser

62. **What is token-based vs session-based authentication?**
    - **Session-based**: Server stores session data, client stores session ID
    - **Token-based**: Client stores token (JWT), server validates token

63. **What is JWT? How does it work?**
    - **JWT**: JSON Web Token - self-contained token with user info
    - **Works**: Header.Payload.Signature - client sends token, server validates signature

64. **What is password hashing vs encryption?**
    - **Hashing**: One-way process, cannot be reversed (bcrypt, SHA)
    - **Encryption**: Two-way process, can be decrypted with key

65. **What security measures have you implemented?**
    - **Password hashing**, input validation, CSRF protection, SQL injection prevention, authentication

66. **What is CSRF?**
    - **Cross-Site Request Forgery**: Attack that tricks user into performing unwanted actions
    - **Prevention**: CSRF tokens, SameSite cookies

67. **What are SQL injections? How to prevent them?**
    - **SQL injection**: Malicious SQL code inserted through user input
    - **Prevention**: Use ORM, parameterized queries, input validation

68. **What is a man-in-the-middle attack?**
    - **Attack where attacker intercepts communication** between client and server
    - **Prevention**: HTTPS, certificate validation

### Architecture & Design Patterns
69. **What is MVC architecture? Show it in your code**
    - **Model**: Database models (models.py) - data and business logic
    - **View**: Templates (HTML files) - user interface
    - **Controller**: Routes/views (main.py) - handles requests and responses

70. **What is client-server vs distributed architecture?**
    - **Client-Server**: One central server serves multiple clients
    - **Distributed**: Multiple servers work together, no single point of failure

71. **What are other architectural patterns you know?**
    - **MVP** (Model-View-Presenter), **MVVM** (Model-View-ViewModel), **Microservices**, **Layered Architecture**

72. **What is horizontal vs vertical scaling?**
    - **Horizontal**: Add more servers (scale out)
    - **Vertical**: Upgrade existing server hardware (scale up)

73. **What is load balancing?**
    - **Distributes incoming requests** across multiple servers to prevent overload

74. **What is SPA (Single Page Application)?**
    - **Web app that loads once** and updates content dynamically without page refreshes

75. **What is a microservices architecture?**
    - **Application broken into small, independent services** that communicate via APIs

### Version Control & Development
76. **What is Git vs VCS?**
    - **VCS**: Version Control System - general concept for tracking changes
    - **Git**: Specific distributed VCS implementation

77. **Is Git centralized or distributed? Why?**
    - **Distributed**: Every developer has complete repository copy
    - **Why**: Works offline, faster operations, no single point of failure

78. **What are other functions of Git apart from tracking?**
    - **Branching**, merging, collaboration, backup, rollback, conflict resolution

79. **What is GitHub? What are collaborators?**
    - **GitHub**: Cloud platform for Git repositories
    - **Collaborators**: People with access to contribute to a repository

80. **What is a repository?**
    - **Storage location** for project files and their version history

### Programming Concepts
81. **What is the difference between list and tuple?**
    - **List**: Mutable (changeable), uses [], slower
    - **Tuple**: Immutable (unchangeable), uses (), faster

82. **What is the difference between mutable and immutable?**
    - **Mutable**: Can be changed after creation (list, dict, set)
    - **Immutable**: Cannot be changed after creation (string, tuple, int)

83. **What is a dictionary? How is data stored in memory?**
    - **Dictionary**: Key-value pairs, unordered collection
    - **Memory**: Hash table implementation for fast key lookup

84. **What is a lambda function?**
    - **Anonymous function** defined in single line: lambda x: x*2

85. **What are decorators in Python?**
    - **Functions that modify other functions** without changing their code
    - **Example**: @login_required, @app.route()

86. **What is OOP? What is inheritance?**
    - **OOP**: Object-Oriented Programming - using classes and objects
    - **Inheritance**: Child class inherits properties and methods from parent class

87. **What is class vs object?**
    - **Class**: Blueprint/template for creating objects
    - **Object**: Instance of a class with actual data

88. **What are packages vs modules?**
    - **Module**: Single Python file (.py)
    - **Package**: Directory containing multiple modules with __init__.py

89. **What is try-catch block? What is exception handling?**
    - **Try-catch**: try/except blocks to handle errors gracefully
    - **Exception handling**: Managing errors without crashing the program

90. **What are different types of testing?**
    - **Unit testing**: Individual functions
    - **Integration testing**: Component interactions
    - **System testing**: Complete application

### Data & Visualization
91. **What is JSON vs CSV?**
    - **JSON**: JavaScript Object Notation - structured data format with key-value pairs
    - **CSV**: Comma-Separated Values - tabular data format for spreadsheets

92. **What is jsonify vs json.dumps?**
    - **jsonify**: Flask function that converts data to JSON response with proper headers
    - **json.dumps**: Python function that converts data to JSON string

93. **What charting libraries have you used? (Chart.js, Matplotlib)**
    - **Chart.js**: JavaScript library for interactive web charts
    - **Matplotlib**: Python library for static charts and plots

94. **How do you implement charts dynamically?**
    - **Pass data from Flask route** to template, use JavaScript to render charts with that data

### Vue.js (if applicable)
95. **What is Vue.js? Why use it?**
    - **Vue.js**: Progressive JavaScript framework for building user interfaces
    - **Why use**: Easy to learn, reactive data binding, component-based, good performance

96. **What is Vue CLI vs CDN?**
    - **Vue CLI**: Command-line tool for project setup and build process
    - **CDN**: Include Vue via external link, simpler but less features

97. **What are Vue lifecycle hooks?**
    - **Methods called at different stages**: created(), mounted(), updated(), destroyed()

98. **What is v-if vs v-show?**
    - **v-if**: Conditionally renders element (adds/removes from DOM)
    - **v-show**: Conditionally displays element (toggles CSS display)

99. **What is v-model vs v-bind?**
    - **v-model**: Two-way data binding for form inputs
    - **v-bind**: One-way data binding for attributes

100. **What are Props in Vue?**
     - **Props**: Data passed from parent component to child component

101. **What is Vuex? What are state, mutations, actions?**
     - **Vuex**: State management library for Vue
     - **State**: Application data
     - **Mutations**: Synchronous state changes
     - **Actions**: Asynchronous operations

102. **What are Vue routes?**
     - **Vue Router**: Official routing library for single-page applications

103. **What is the difference between var and let?**
     - **var**: Function-scoped, can be redeclared, hoisted
     - **let**: Block-scoped, cannot be redeclared, not hoisted

104. **What are Promises?**
     - **Objects representing eventual completion** of asynchronous operations

105. **What is AJAX?**
     - **Asynchronous JavaScript and XML** - technique for updating web pages without refresh

### Advanced Topics
106. **What is CORS?**
     - **Cross-Origin Resource Sharing**: Mechanism that allows web pages to access resources from different domains

107. **What is Redis? What is Celery?**
     - **Redis**: In-memory data store used for caching and message queuing
     - **Celery**: Distributed task queue for handling background jobs

108. **What is caching?**
     - **Storing frequently accessed data** in fast storage for quick retrieval

109. **What is lazy loading vs eager loading?**
     - **Lazy loading**: Load data only when needed
     - **Eager loading**: Load all related data immediately

110. **What are webhooks vs websockets?**
     - **Webhooks**: HTTP callbacks triggered by events
     - **WebSockets**: Real-time bidirectional communication channel

111. **What is CDN?**
     - **Content Delivery Network**: Distributed servers that deliver content based on user location

112. **What is the difference between frontend and backend validation?**
     - **Frontend**: User experience, immediate feedback, can be bypassed
     - **Backend**: Security, data integrity, cannot be bypassed

113. **Which is more important: frontend or backend validation?**
     - **Backend validation is more important** for security and data integrity

## Live Implementation Challenges (Code Changes During Viva)

### Immediate Frontend Changes (Most Common)
1. **Color & Styling Changes**:
   - Change background color/image
   - Change button color on hover (to red/green)
   - Change navbar position (top to bottom)
   - Change text color and font styling
   - Move login button to top-right corner
   - Center align elements (forms, text, divs)

2. **Layout Modifications**:
   - Move navigation elements to different positions
   - Change form layout (horizontal vs vertical alignment)
   - Add/remove CSS classes for positioning
   - Implement responsive design changes
   - Add hover effects and transitions

### Critical Backend Validations (High Priority)
1. **Password Validation Implementation**:
   - Minimum 8 characters
   - At least 1 uppercase letter
   - At least 1 lowercase letter  
   - At least 1 number
   - At least 1 special character
   - Show error messages for invalid passwords

2. **User Input Restrictions**:
   - Username maximum 10 characters
   - Email format validation (something@something.something)
   - Age validation (minimum 18 years for legal compliance)
   - Input length restrictions and character validation
   - Prevent special character injection

3. **Database Constraints**:
   - Add new columns to existing models
   - Implement foreign key constraints
   - Add unique constraints to prevent duplicates
   - Set up cascading delete operations
   - Data type validations

### Business Logic Implementations
1. **Inventory & Stock Management**:
   - Update stock when items are purchased
   - Prevent booking more than available capacity
   - Show "out of stock" or "houseful" messages
   - Implement quantity decrease logic (buy 1 get 1 offers)
   - Stock validation before allowing purchases

2. **User Management Features**:
   - Create admin vs user differentiation
   - Implement role-based access control
   - Add bulk operations (approve all, delete all)
   - User search and filtering functionality
   - Account lockout after failed login attempts

3. **Data Processing & Display**:
   - Sort data alphabetically or by criteria
   - Store data in uppercase format by default
   - Calculate and display summaries/statistics
   - Implement search functionality
   - Add pagination for large datasets

### Advanced Feature Additions
1. **Security Enhancements**:
   - Password hashing implementation
   - Session timeout handling
   - Input sanitization and validation
   - CSRF token implementation
   - SQL injection prevention

2. **User Experience Improvements**:
   - Add confirmation dialogs for delete operations
   - Implement "remember me" functionality
   - Add progress indicators and loading states
   - Error message display and handling
   - Form reset and clear functionality

3. **Reporting & Analytics**:
   - Generate summary reports
   - Create charts and visualizations (bar to pie chart conversion)
   - Export functionality (CSV/PDF)
   - User activity tracking
   - Sales/booking analytics

### Project-Specific Live Changes

#### E-commerce/Grocery Store
- Product expiry date validation
- Category management with duplicate prevention
- Shopping cart quantity management
- Price calculations and discount applications
- Inventory tracking and alerts

#### Ticket Booking System
- Venue capacity vs booking validation
- Show timing conflict prevention
- Ticket cancellation and refund logic
- User booking history display
- Admin booking management tools

#### Library Management
- Book availability checking
- User borrowing limits
- Overdue book tracking
- Fine calculation system
- Book rating and review system

#### Music/Entertainment Apps
- Playlist management features
- User preference tracking
- Content recommendation logic
- Download and offline access
- User interaction analytics

### Database Schema Modifications
1. **Adding New Fields**:
   - Age field with minimum value constraints
   - Phone number with format validation
   - Address fields with proper data types
   - Timestamp fields for tracking
   - Status fields for workflow management

2. **Relationship Changes**:
   - Convert one-to-many to many-to-many
   - Add junction tables for complex relationships
   - Implement self-referential relationships
   - Add lookup tables for better normalization
   - Foreign key constraint modifications

### Common Implementation Patterns
1. **Form Validation Flow**:
   - Frontend validation for immediate feedback
   - Backend validation for security
   - Error message display
   - Success confirmation
   - Data persistence

2. **CRUD Operation Enhancement**:
   - Add confirmation before delete
   - Implement soft delete vs hard delete
   - Add edit history tracking
   - Bulk operation capabilities
   - Undo functionality

3. **User Interface Improvements**:
   - Modal dialogs for important actions
   - Toast notifications for feedback
   - Loading indicators for slow operations
   - Progressive disclosure for complex forms
   - Keyboard navigation support

### Most Requested Live Changes (Frequency)
1. **Change background/button colors** (95% of vivas)
2. **Move UI elements to different positions** (85% of vivas)  
3. **Implement password validation** (80% of vivas)
4. **Add form field validation** (75% of vivas)
5. **Modify database models** (70% of vivas)
6. **Add search functionality** (60% of vivas)
7. **Implement sorting/filtering** (55% of vivas)
8. **Add new database fields** (50% of vivas)
9. **Create admin functionality** (45% of vivas)
10. **Add confirmation dialogs** (40% of vivas)

### Preparation Strategy for Live Implementation
1. **Practice Common Changes**: Master the top 10 most requested changes
2. **Understand Code Flow**: Know how data flows from database to frontend
3. **Keep Reference Code**: Have snippets ready for common validations
4. **Test Environment**: Ensure your development environment works smoothly
5. **Error Handling**: Know how to debug and fix common issues quickly
6. **Database Tools**: Be comfortable with database browser/admin tools
7. **CSS Proficiency**: Know basic CSS for styling changes
8. **Validation Libraries**: Understand your framework's validation capabilities

### Tips for Smooth Implementation
1. **Read Requirements Carefully**: Make sure you understand what's asked
2. **Start Small**: Implement basic version first, then enhance
3. **Test Immediately**: Verify each change works before moving on
4. **Explain Your Process**: Talk through your implementation approach
5. **Handle Errors Gracefully**: Don't panic if something breaks
6. **Ask for Clarification**: If unsure, ask the proctor for specifics
7. **Time Management**: Don't spend too long on one change
8. **Show Alternatives**: If stuck, suggest alternative approaches

**Remember**: Live implementation separates good students from great ones. Practice these scenarios regularly and you'll handle any request with confidence!

## Important Tips for Viva Preparation

### General Preparation
1. **Know your code thoroughly**: Be able to explain every line, especially models.py and main routes
2. **Practice common changes**: Password validation, UI changes, database modifications
3. **Understand the flow**: From URL to template rendering, database operations
4. **Prepare your demo**: Have a smooth walkthrough of all functionalities
5. **Read your project report**: Know what you've written about AI usage, challenges faced

### During the Viva
1. **Be confident**: Rate your project realistically but don't undersell yourself
2. **Stay calm**: If you don't know something, say so honestly
3. **Think aloud**: Explain your thought process while making changes
4. **Ask for clarification**: If you don't understand a question, ask them to repeat
5. **Use internet if allowed**: Some proctors allow documentation lookup
6. **Test your changes**: Always verify that your code changes work

### Common Proctor Behaviors
1. **Friendly proctors**: Give time to think, help with hints, focus on understanding
2. **Strict proctors**: Fast-paced, less explanation time, focus on accuracy
3. **Code-focused proctors**: More emphasis on coding changes and implementation
4. **Theory-focused proctors**: More questions on concepts and explanations

### What Impresses Proctors
1. **Extra features**: Beyond basic requirements (charts, search, validation)
2. **Good code structure**: Clean, organized, well-commented code
3. **Security implementation**: Password hashing, input validation, authorization
4. **Error handling**: Proper exception handling and user feedback
5. **Documentation**: Clear project report, ER diagrams, proper Git usage

### Red Flags to Avoid
1. **Not knowing your own code**: Inability to explain what you wrote
2. **No error handling**: App breaks on invalid input
3. **Poor security**: Plain text passwords, no validation
4. **Unclear about AI usage**: Not documenting LLM assistance properly
5. **Bad database design**: No relationships, poor normalization

### Final Checklist
- [ ] Can explain MVC in your project
- [ ] Know all your database models and relationships
- [ ] Can implement basic password validation
- [ ] Understand HTTP methods used in your routes
- [ ] Can change CSS styling (colors, positions)
- [ ] Know the difference between authentication and authorization
- [ ] Can explain your security implementations
- [ ] Understand your template inheritance structure
- [ ] Can add new fields to database models
- [ ] Know your project's tech stack thoroughly

**Remember**: The viva is not just about getting the right answers, but demonstrating your understanding of web development concepts and your ability to implement changes in real-time. Good luck!
