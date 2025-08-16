# MAD1 Viva Preparation5. **What is the difference between primary key and foreign key?**
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
    - **Unstructured**: Flexible schema (NoSQL) - documents, key-value pairsand Tips

## Core Technical Questions

### Database & ORM
1. **What is ORM? Explain its advantages and disadvantages**
   - **ORM (Object-Relational Mapping)**: Maps database tables to Python classes, allowing you to work with database records as objects.
   - **Advantages**: No SQL needed, prevents SQL injection, database-independent code, easier maintenance
   - **Disadvantages**: Slower than raw SQL, less control over queries, learning curve

2. **What is SQLAlchemy? Is it a class or function?**
   - **SQLAlchemy**: A Python ORM library that provides tools for working with databases
   - **It's a library/toolkit** containing classes, functions, and modules - not just one class or function

3. **What is db.Model? Where is it inherited from?**
   - **db.Model**: Base class for all database models in Flask-SQLAlchemy
   - **Inherited from**: SQLAlchemy's declarative_base() through Flask-SQLAlchemy extension

4. **Explain database normalization - different normal forms (1NF, 2NF, 3NF)**
   - **1NF**: Each column contains atomic values, no repeating groups
   - **2NF**: 1NF + all non-key attributes fully depend on primary key
   - **3NF**: 2NF + no transitive dependencies (non-key attributes don't depend on other non-key attributes)

5. **What is the difference between primary key and foreign key?**
6. What is the difference between primary key and unique key?
7. Does a foreign key need to be unique? In what cases?
8. What is CASCADE in database? Types: CASCADE DELETE, DELETE ORPHAN
9. What is the difference between backref and backpopulate?
10. What is lazy loading in SQLAlchemy? What does lazy=True mean?
11. What is db.relationship? How do you define relationships?
12. Explain one-to-one, one-to-many, and many-to-many relationships
13. What is uselist in relationships?
14. What are the advantages of SQLite vs MySQL?
15. Is your database normalized? What normal form is it in?
16. What is referential integrity?
17. Difference between structured and unstructured databases

### Flask & Web Development
18. What is Flask? Why use Flask over Django?
19. What is app = Flask(__name__)? Why do we use __name__?
20. What is @app.route()? What does @ mean?
21. What is url_for() vs redirect() vs render_template()?
22. What is Flask(__name__)? Can we remove the __name__ parameter?
23. What is app.config["SECRET_KEY"]? What happens if it's not there?
24. What is app.app_context().push()? Why is it needed?
25. What is Flask blueprint? Why use it?
26. What is Flask-Login? What is UserMixin?
27. What is @login_required decorator?
28. What is Flask-WTF?
29. What is WSGI?
30. How do you change the port from 5000 to 8000?

### HTTP Methods & APIs
31. What are HTTP methods? Explain GET, POST, PUT, PATCH, DELETE
32. What is the difference between GET and POST?
33. What is the difference between PUT and PATCH?
34. Can we send data through GET? Is it recommended?
35. Can we fetch data using POST? Is it recommended?
36. Which is more secure: GET or POST?
37. What is REST API? What is RESTful?
38. What are the constraints of RESTful APIs?
39. Can Flask endpoints return boolean values?
40. What are HTTP status codes? Explain 200, 302, 400, 403, 404, 500, 501, 503
41. What is stateless vs stateful?
42. What is HTTP vs HTTPS? Which is more secure and why?

### Frontend & Templates
43. What is Jinja2 templating? How do you use it?
44. What is template inheritance? How do you implement it?
45. How do you write a for loop in Jinja?
46. How do you write if-else conditions in Jinja?
47. What are the symbols used: {{ }}, {% %}, {# #}?
48. How does Jinja access variables?
49. What is DOM? Which language manipulates DOM dynamically?
50. What is the difference between id and name attributes in HTML?
51. What is the difference between id and class in HTML/CSS?
52. What symbols are used for id and class in CSS? (# for id, . for class)
53. What are CSS selectors? How many types?
54. What are the types of CSS? (inline, internal, external)
55. What is the precedence order of CSS? (inline > internal > external)
56. What is cell-spacing vs cell-padding?
57. What is Bootstrap? Why use it? What is CDN?
58. What is the difference between block and inline elements?

### Authentication & Security
59. What is the difference between authentication and authorization?
60. How do you implement RBAC (Role-Based Access Control)?
61. What is session vs cookies? Where are they stored?
62. What is token-based vs session-based authentication?
63. What is JWT? How does it work?
64. What is password hashing vs encryption?
65. What security measures have you implemented?
66. What is CSRF?
67. What are SQL injections? How to prevent them?
68. What is a man-in-the-middle attack?

### Architecture & Design Patterns
69. What is MVC architecture? Show it in your code
70. What is client-server vs distributed architecture?
71. What are other architectural patterns you know?
72. What is horizontal vs vertical scaling?
73. What is load balancing?
74. What is SPA (Single Page Application)?
75. What is a microservices architecture?

### Version Control & Development
76. What is Git vs VCS?
77. Is Git centralized or distributed? Why?
78. What are other functions of Git apart from tracking?
79. What is GitHub? What are collaborators?
80. What is a repository?

### Programming Concepts
81. What is the difference between list and tuple?
82. What is the difference between mutable and immutable?
83. What is a dictionary? How is data stored in memory?
84. What is a lambda function?
85. What are decorators in Python?
86. What is OOP? What is inheritance?
87. What is class vs object?
88. What are packages vs modules?
89. What is try-catch block? What is exception handling?
90. What are different types of testing?

### Data & Visualization
91. What is JSON vs CSV?
92. What is jsonify vs json.dumps?
93. What charting libraries have you used? (Chart.js, Matplotlib)
94. How do you implement charts dynamically?

### Vue.js (if applicable)
95. What is Vue.js? Why use it?
96. What is Vue CLI vs CDN?
97. What are Vue lifecycle hooks?
98. What is v-if vs v-show?
99. What is v-model vs v-bind?
100. What are Props in Vue?
101. What is Vuex? What are state, mutations, actions?
102. What are Vue routes?
103. What is the difference between var and let?
104. What are Promises?
105. What is AJAX?

### Advanced Topics
106. What is CORS?
107. What is Redis? What is Celery?
108. What is caching?
109. What is lazy loading vs eager loading?
110. What are webhooks vs websockets?
111. What is CDN?
112. What is the difference between frontend and backend validation?
113. Which is more important: frontend or backend validation?

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
