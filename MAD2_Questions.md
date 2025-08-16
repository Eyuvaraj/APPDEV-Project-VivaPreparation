# MAD2 Viva Preparation - Questions and Tips

## Core Technical Questions

### Vue.js Framework
1. **What is Vue.js? Why use Vue over React?**
   - Vue.js is a JavaScript framework for building user interfaces. It's easier to learn than React, has better documentation, and allows you to gradually adopt it in existing projects.

2. **What is a reactive framework?**
   - A reactive framework automatically updates the user interface when data changes. When you change a variable, the webpage updates itself without manual DOM manipulation.

3. **What is Vue CLI vs Vue CDN? Which did you use and why?**
   - Vue CLI is a command-line tool for creating full Vue projects with build tools. Vue CDN is just including Vue via a script tag. CLI is better for complex apps, CDN for simple prototypes.

4. **What are Vue components? How do you create them?**
   - Components are reusable pieces of UI code. Create them using `Vue.component()` or as `.vue` files with template, script, and style sections.

5. **What are Vue directives? Name the built-in directives**
   - Directives are special HTML attributes that tell Vue what to do. Built-in ones: v-if, v-show, v-for, v-model, v-bind, v-on, v-html, v-text.
6. **What is v-if vs v-show? When to use which?**
   - v-if completely removes/adds elements from DOM. v-show just hides/shows with CSS. Use v-if for rarely changing conditions, v-show for frequently toggled elements.

7. **What is v-model vs v-bind? Show usage in your code**
   - v-model creates two-way data binding (input changes variable, variable changes input). v-bind is one-way (variable to element only). Example: `<input v-model="name">` vs `<img v-bind:src="imageUrl">`

8. **What is v-for? How do you implement loops in Vue?**
   - v-for repeats elements for each item in an array. Usage: `<li v-for="item in items" :key="item.id">{{ item.name }}</li>`

9. **What is v-cloak?**
   - v-cloak hides uncompiled Vue templates until Vue is ready. Prevents users from seeing `{{ }}` before Vue loads.

10. **What are Vue lifecycle hooks? Which ones did you use?**
    - Functions that run at different stages of component life. Common ones: created() (after data setup), mounted() (after DOM ready), destroyed() (before cleanup).

11. **What is the difference between created() and mounted()?**
    - created(): Component data is ready but not yet in DOM. mounted(): Component is in DOM and ready for user interaction.

12. **What is watch in Vue? How does it work?**
    - watch listens for changes in data and runs code when that data changes. Example: watching a search input to automatically filter results.

13. **What are Props in Vue? How do you pass data from parent to child?**
    - Props are data passed from parent component to child. Parent: `<child-component :message="hello">`. Child receives it as a prop.

14. **How do you pass data from child to parent?**
    - Use `$emit()` to send events from child to parent. Child: `this.$emit('update', data)`. Parent listens with `@update="handleUpdate"`

15. **What are slots in Vue? Did you use them?**
    - Slots are placeholders in components where parent can insert content. Like putting different content in the same template structure.

16. **What is Vue Router? What functions did you use (push, go, etc.)?**
    - Vue Router handles navigation between pages in single-page apps. push() goes to new page, go() goes back/forward in history.

17. **What is Vuex? What are state, mutations, and actions?**
    - Vuex manages shared data across components. State = data storage, Mutations = direct data changes, Actions = async operations before mutations.

18. **What is the use of actions in Vuex?**
    - Actions handle async operations (API calls) and then commit mutations to change state. They can't directly change state.

19. **What is Virtual DOM?**
    - A JavaScript copy of the real DOM. Vue compares virtual DOM changes and only updates the real DOM where needed, making apps faster.

20. **What is Single Page Application (SPA)?**
    - An app that loads once and changes content without full page reloads. Feels like a desktop app but runs in browser.

21. **Is your app responsive? How did you make it responsive?**
    - Responsive means it looks good on all screen sizes. Use CSS media queries, Bootstrap classes, or flexible layouts (flexbox/grid).

22. **What are the advantages of Vue/React over vanilla JavaScript?**
    - Easier to manage complex apps, automatic UI updates, reusable components, better code organization, and huge community support.

### Backend & APIs
23. **What is Flask? Why use Flask for large applications?**
    - Flask is a lightweight Python web framework. For large apps, it's flexible and lets you choose your own tools, but you need to add more components yourself.

24. **What is ORM? Which ORM did you use?**
    - ORM (Object-Relational Mapping) converts database tables to Python objects. Makes database work easier. SQLAlchemy is the popular Python ORM.

25. **What is Flask-SQLAlchemy?**
    - A Flask extension that integrates SQLAlchemy ORM with Flask, making database operations simpler in Flask apps.

26. **Which databases are supported by SQLAlchemy?**
    - SQLite, PostgreSQL, MySQL, Oracle, Microsoft SQL Server, and many others.

27. **What changes would you make to move from SQLite to PostgreSQL?**
    - Change the database URL in config from `sqlite:///` to `postgresql://username:password@host/database` and install PostgreSQL driver.

28. **What is lazy loading in SQLAlchemy?**
    - Related data is only loaded from database when you actually access it, not immediately. Saves memory and improves performance.

29. **What is CASCADE DELETE? What is delete-orphan?**
    - CASCADE DELETE: When parent is deleted, all children are automatically deleted. delete-orphan: When a child loses its parent reference, it gets deleted.

30. **What is the difference between backref and back_populates?**
    - backref automatically creates reverse relationship. back_populates requires you to define both sides manually, giving more control.

31. **What is an API? What is a RESTful API?**
    - API lets different software talk to each other. RESTful API follows REST rules: uses HTTP methods (GET, POST, etc.) and treats everything as resources.

32. **What are HTTP verbs? Explain GET, POST, PUT, PATCH, DELETE**
    - GET: retrieve data, POST: create new data, PUT: replace entire resource, PATCH: update part of resource, DELETE: remove data.

33. **What is the difference between PUT and PATCH?**
    - PUT replaces the entire resource with new data. PATCH only updates specific fields you provide.

34. **What is the difference between POST and PUT?**
    - POST creates new resources (server decides ID). PUT creates or replaces resources at specific location (client can specify ID).

35. **Can we use POST instead of PUT?**
    - Yes, but it's not RESTful. POST should be for creating, PUT for updating. Using POST for everything works but breaks REST conventions.

36. **What are HTTP status codes? Explain common ones**
    - Numbers that tell you what happened. 200: success, 201: created, 400: bad request, 401: unauthorized, 404: not found, 500: server error.

37. **What is authentication vs authorization?**
    - Authentication: proving who you are (login). Authorization: checking what you're allowed to do (permissions).

38. **How did you implement RBAC (Role-Based Access Control)?**
    - Users have roles (admin, user), roles have permissions. Check user's role before allowing access to features.

39. **What is JWT? How is it built? Explain the token flow**
    - JWT (JSON Web Token) is a secure way to send user info. Built with header, payload, and signature. User logs in → gets token → sends token with requests → server verifies token.

40. **What is session vs token-based authentication?**
    - Session: server stores user info, client gets session ID. Token: all user info in token itself, server just verifies signature.

41. **What are decorators in Python? Show usage**
    - Functions that modify other functions. Example: `@login_required` checks if user is logged in before running the function.

42. **Can you swap the order of @jwt_required and @role_required decorators?**
    - No, order matters. @jwt_required should come first to verify token, then @role_required to check permissions.

43. **What is Flask-Security?**
    - A Flask extension that provides user authentication, authorization, and security features out of the box.

44. **What is WSGI?**
    - Web Server Gateway Interface - a standard way for Python web apps to communicate with web servers.

### Caching & Background Tasks
45. **What is caching? Why do we need it?**
    - Storing frequently used data in fast memory so you don't have to fetch it repeatedly. Makes apps much faster.

46. **What is Redis? Why use Redis over a normal database?**
    - Redis is an in-memory database that's extremely fast. Use it for caching, sessions, and real-time data because it's much faster than regular databases.

47. **What is the difference between Redis and Memcached?**
    - Redis has more data types and features (lists, sets, persistence). Memcached is simpler and only stores key-value pairs.

48. **Where did you implement caching in your project?**
    - Common places: user sessions, frequently accessed data, API responses, database query results.

49. **What is memoization? Difference between memoization and caching?**
    - Memoization caches function results. Caching is broader - can cache any data. Memoization is a type of caching.

50. **What is Celery? What are the components of Celery?**
    - Celery runs background tasks asynchronously. Components: Worker (runs tasks), Beat (scheduler), Broker (message queue), Result backend (stores results).

51. **What is the difference between Celery worker and Celery beat?**
    - Worker executes tasks. Beat schedules tasks to run at specific times (like cron jobs).

52. **How do you prioritize Celery tasks?**
    - Use priority parameter when calling tasks. Higher priority tasks run first.

53. **How do you shut down Celery tasks without terminal?**
    - Use Celery management commands or send SIGTERM signal to gracefully stop workers.

54. **What are Celery jobs you implemented?**
    - Common examples: sending emails, generating reports, data processing, file uploads, scheduled backups.

55. **How do you handle long-running Celery tasks when user logs out?**
    - Tasks continue running in background. Store task IDs in database, show progress when user logs back in.

56. **What is a message broker?**
    - Middleware that handles message passing between applications. Examples: Redis, RabbitMQ, handles task queues.

57. **What is task queue vs message queue?**
    - Task queue specifically handles background jobs. Message queue is broader - handles any type of messages between systems.

58. **What is publish/subscribe vs point-to-point messaging?**
    - Publish/subscribe: one sender, multiple receivers get same message. Point-to-point: one sender, one receiver gets each message.

### Security & Validation
59. **What is CORS? How did you handle it?**
    - CORS (Cross-Origin Resource Sharing) allows websites to make requests to different domains. Handle with Flask-CORS extension.

60. **What is CSRF? How to prevent it?**
    - CSRF (Cross-Site Request Forgery) tricks users into performing unwanted actions. Prevent with CSRF tokens in forms.

61. **What is XSS? How to prevent it?**
    - XSS (Cross-Site Scripting) injects malicious scripts into websites. Prevent by escaping user input and validating data.

62. **What is SQL injection? How to prevent it?**
    - Attackers insert malicious SQL code through user inputs. Prevent by using parameterized queries and ORM (never concatenate SQL strings).

63. **What is man-in-the-middle attack?**
    - Attacker intercepts communication between two parties. Use HTTPS/SSL encryption to prevent this.

64. **What is DOS attack?**
    - Denial of Service attack overwhelms your server with requests to make it unavailable. Use rate limiting and load balancers to prevent.

65. **What security measures did you implement?**
    - Password hashing, JWT tokens, input validation, HTTPS, rate limiting, SQL injection prevention, XSS protection.

66. **What is the difference between security and privacy?**
    - Security protects against unauthorized access. Privacy controls what personal information is collected and shared.

67. **What is frontend vs backend validation? Which is more important?**
    - Frontend validation improves user experience. Backend validation ensures security. Backend is more important as frontend can be bypassed.

68. **How do you hide password in network payload?**
    - Hash passwords before sending, use HTTPS encryption, never send plain text passwords over network.

69. **What happens when you enter string data in an int field?**
    - Should show validation error and prevent submission. Server should also validate and return error if invalid data reaches backend.

70. **What happens when you query an empty table?**
    - Returns empty result set (no error). Your code should handle empty results gracefully.

### Database & SQL
71. **What are SQL aggregate functions?**
    - Functions that operate on groups of data: COUNT(), SUM(), AVG(), MAX(), MIN(). They summarize multiple rows into single values.

72. **What is GROUP BY? What is HAVING?**
    - GROUP BY groups rows with same values. HAVING filters groups (like WHERE but for groups). Example: GROUP BY category HAVING COUNT(*) > 5.

73. **What are SQL joins? Explain LEFT JOIN**
    - JOINs combine data from multiple tables. LEFT JOIN returns all rows from left table and matching rows from right table (or NULL if no match).

74. **What is the difference between DELETE and TRUNCATE?**
    - DELETE removes specific rows and can be rolled back. TRUNCATE removes all rows, is faster, but can't be rolled back.

75. **What are SQL constraints?**
    - Rules that limit what data can be stored: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK constraints.

76. **What is the difference between primary key and unique key?**
    - Primary key uniquely identifies each row (only one per table, cannot be NULL). Unique key ensures uniqueness but allows NULL values.

77. **Can we replace primary key with unique+not null+auto increment?**
    - Functionally yes, but primary key has special meaning for database engine and is better for performance and relationships.

78. **What happens to foreign key references when parent is deleted?**
    - Depends on CASCADE setting: CASCADE (delete children), SET NULL (set to null), RESTRICT (prevent deletion), or SET DEFAULT.

79. **How do you create indexes in SQLAlchemy?**
    - Use `db.Index()` or `index=True` parameter in column definition. Indexes speed up queries but slow down inserts.

80. **What is database normalization?**
    - Organizing data to reduce redundancy and improve data integrity. Split data into related tables instead of storing everything in one table.

81. **What is the difference between relational and non-relational databases?**
    - Relational (SQL): structured tables with relationships. Non-relational (NoSQL): flexible structure, better for big data and rapid scaling.

### Frontend Technologies
82. **What are CSS selectors? How many types?**
    - Ways to target HTML elements for styling. Types: element (div), class (.classname), ID (#idname), attribute ([type="text"]), pseudo-classes (:hover).

83. **What is the difference between inline and internal CSS?**
    - Inline CSS: styles directly in HTML elements (`style="color: red"`). Internal CSS: styles in `<style>` tag within HTML document.

84. **What is the difference between flexbox and grid?**
    - Flexbox: one-dimensional layout (row or column). Grid: two-dimensional layout (rows and columns together). Use flexbox for simple layouts, grid for complex.

85. **What is Bootstrap? Why use it?**
    - CSS framework with pre-built styles and components. Saves time, ensures responsive design, and maintains consistency across browsers.

86. **What is template inheritance? How to implement in Vue?**
    - Reusing common layout across pages. In Vue, create base layout component and use slots for different content sections.

87. **What is DOM? How to access elements by ID in JavaScript?**
    - DOM (Document Object Model) represents HTML as JavaScript objects. Access by ID: `document.getElementById('myId')`.

88. **What are different ways to declare variables in JavaScript?**
    - `var` (function-scoped, can be redeclared), `let` (block-scoped, can be reassigned), `const` (block-scoped, cannot be reassigned).

89. **What are async functions in JavaScript?**
    - Functions that handle asynchronous operations (like API calls) without blocking other code. Use `async/await` syntax.

90. **What is event loop in JavaScript?**
    - Mechanism that handles asynchronous operations. Executes code, handles events, and manages callbacks in order.

91. **What are Promises in JavaScript?**
    - Objects representing eventual completion of asynchronous operations. Have three states: pending, fulfilled, rejected.

92. **What is AJAX vs Fetch?**
    - Both make HTTP requests without page reload. AJAX is older (XMLHttpRequest), Fetch is modern and uses Promises (cleaner syntax).

93. **What is local storage vs session storage vs cookies?**
    - Local storage: persists until manually cleared. Session storage: clears when tab closes. Cookies: sent with every HTTP request, have expiration dates.

94. **What are other file transfer protocols?**
    - FTP (File Transfer Protocol), SFTP (Secure FTP), SCP (Secure Copy), FTPS (FTP over SSL), WebDAV.

### Architecture & Scaling
95. **What architecture did you use? What is MVC?**
    - MVC (Model-View-Controller): Model handles data, View handles UI, Controller handles user input and coordinates between Model and View.

96. **What is horizontal vs vertical scaling?**
    - Horizontal: add more servers (scale out). Vertical: upgrade existing server hardware (scale up). Horizontal is more flexible and fault-tolerant.

97. **What is load balancing?**
    - Distributing incoming requests across multiple servers to prevent any one server from being overwhelmed.

98. **Would your current stack be efficient at large scale?**
    - Depends on implementation. Need caching (Redis), load balancing, database optimization, CDN for static files, and microservices architecture.

99. **What is microservices architecture?**
    - Breaking large application into small, independent services that communicate via APIs. Easier to scale, develop, and maintain than monolithic apps.

100. **What is client-server vs distributed architecture?**
     - Client-server: clients request data from central server. Distributed: processing and data spread across multiple machines working together.

101. **How would you scale your app to the size of BigBasket?**
     - Use microservices, multiple databases, caching layers, CDN, load balancers, auto-scaling servers, and distributed file storage.

### Advanced Topics
102. **What are webhooks vs websockets?**
     - Webhooks: server sends HTTP request to your app when event occurs. Websockets: real-time two-way communication channel between client and server.

103. **What is Server-Sent Events (SSE)?**
     - One-way real-time communication from server to client. Simpler than websockets, good for live feeds and notifications.

104. **What is SMTP? What are its advantages/disadvantages?**
     - SMTP (Simple Mail Transfer Protocol) sends emails. Advantages: reliable, universal. Disadvantages: can be slow, complex setup, security concerns.

105. **What is callback function?**
     - Function passed as argument to another function, called when specific event occurs or task completes.

106. **What is jsonify vs json.dumps?**
     - jsonify: Flask function that creates HTTP response with JSON data and proper headers. json.dumps: Python function that converts object to JSON string.

107. **What are exception classes in Python? What is the base class?**
     - Classes that handle errors. Base class is `BaseException`. Common ones: Exception, ValueError, TypeError, KeyError.

108. **What are dunder methods? What is __repr__ vs __str__?**
     - Dunder (double underscore) methods define object behavior. __repr__: developer representation (debugging). __str__: user-friendly string representation.

109. **What is serialize in models?**
     - Converting object data to JSON format so it can be sent over HTTP. Transforms database objects into dictionaries.

110. **What is virtual environment? Why is it needed?**
     - Isolated Python environment for each project. Prevents package conflicts between different projects and keeps dependencies separate.

111. **What is dataclass in Python?**
     - Decorator that automatically generates common methods (__init__, __repr__, etc.) for classes that mainly store data.

112. **What is opaque request?**
     - Request where client doesn't understand the internal structure, just passes data through. Used in caching and proxying.

113. **What is PWA (Progressive Web App)?**
     - Web app that works like native mobile app. Can work offline, send notifications, and be installed on device.

114. **What is lazy loading in frontend?**
     - Loading content only when needed (like images when scrolling). Improves initial page load time and saves bandwidth.

115. **What is cron job? Explain crontab statements**
     - Scheduled tasks that run automatically at specified times. Crontab format: minute hour day month weekday command. Example: `0 9 * * *` runs daily at 9 AM.

## Live Implementation Challenges (Code Changes Asked During Viva)

### Critical Frontend Changes
1. **Immediate UI Modifications**:
   - Change background color (white to red/blue/any color)
   - Change button color to specific colors (green, red, yellow)
   - Change navbar color and position (top to bottom, center alignment)
   - Change text/font color throughout the app
   - Add background image instead of solid color
   - Center align login form/cards vertically and horizontally

2. **Layout Restructuring**:
   - Move navbar from top to bottom/footer
   - Move buttons to top-right corner
   - Change form layout (side by side vs vertical)
   - Push search bar to bottom
   - Implement card layouts for forms
   - Add tables instead of card views
   - Change appearance of pages (overall styling)

3. **Component-Level Changes**:
   - Add validation messages/alerts for seat allocation
   - Change button text or appearance (play button styling)
   - Add hover effects on buttons (color change on hover)
   - Implement shimmer effects
   - Show password in red next to login button

### Live Business Logic Implementation
1. **Validation & Constraints**:
   - **Venue/Show Capacity**: Prevent booking more tickets than venue capacity
   - **Password Validation**: 8+ characters, uppercase, lowercase, number, special character
   - **Email Format**: Accept only proper email format (abc@xyz.com)
   - **Duplicate Prevention**: Show warning when adding existing category/product names
   - **Date Validations**: Prevent past dates for shows, expiry date validations
   - **Stock Management**: Prevent buying more than available stock, negative quantities

2. **Real-time Feature Additions**:
   - **Export Functionality**: Add CSV export for all venues at once
   - **Booking Count Display**: Show total number of current bookings
   - **Tickets Remaining**: Display tickets left for each show
   - **User Booking Count**: Show number of bookings in user summary
   - **Search Implementation**: Add search by username functionality
   - **Favorite Feature**: Implement theater/song favoriting system

3. **Database Operations**:
   - Add new columns (amount_received, age, phone number)
   - Change data storage (store names in uppercase)
   - Implement cascading operations
   - Add constraints and foreign key relationships
   - Sort data alphabetically in admin dashboard

### Advanced Live Challenges
1. **Security Implementations**:
   - **URL Access Control**: Prevent users from accessing admin pages via URL
   - **Token Validation**: Handle expired tokens and logout scenarios
   - **Password Hiding**: Hide password in network payload
   - **Role-based Access**: Implement proper RBAC restrictions

2. **Complex Feature Development**:
   - **Single Login System**: Combine admin/user login into one system
   - **Email Notifications**: Send emails when new shows are created
   - **Priority Management**: Set Celery task priorities (daily vs monthly reports)
   - **Chart Modifications**: Change chart colors, types (bar to pie)
   - **Data Filtering**: Filter bookings, shows, users based on criteria

3. **Error Handling & Edge Cases**:
   - Handle booking deletion when venue is deleted
   - Manage existing bookings when seat capacity is reduced
   - Handle string input in integer fields
   - Manage empty table queries
   - Fix bugs found during demonstration

### Technical Implementation Challenges
1. **Vue.js Specific**:
   - **Component Creation**: Create new Vue components on the spot
   - **Data Binding**: Implement v-model, v-bind in forms
   - **Conditional Rendering**: Use v-if/v-show appropriately
   - **Template Inheritance**: Implement navbar on every page
   - **Router Implementation**: Add new routes and navigation

2. **Backend API Changes**:
   - **New Endpoints**: Create APIs for new features
   - **Decorator Usage**: Implement @jwt_required, @role_required
   - **Celery Tasks**: Schedule new background jobs
   - **Database Queries**: Write complex queries with filters
   - **Error Handling**: Add try-catch blocks and proper responses

3. **Integration Challenges**:
   - **Frontend-Backend Connection**: Connect new Vue components to APIs
   - **Real-time Updates**: Ensure UI reflects database changes
   - **State Management**: Update Vuex store for new features
   - **Responsive Design**: Make changes work across screen sizes

### Project-Specific Live Implementations

#### Ticket Booking System
- Venue capacity vs show capacity validation
- Booking refund system when venue is deleted
- Export theater reports with revenue data
- Houseful display when tickets are sold out
- User booking history with ticket counts

#### E-commerce/Grocery Store
- Product expiry date validations (no past dates)
- Stock quantity management and warnings
- Category duplicate prevention
- Price range limitations
- Shopping cart quantity restrictions

#### Music Streaming App
- Song play button modifications
- Playlist management features
- Like/favorite song functionality
- Audio streaming controls
- Chart color customizations

#### Library Management
- Book rating system updates
- Search functionality implementation
- User borrowing limits
- Section-wise book organization
- Overdue book handling

### Common Implementation Patterns
1. **Start Simple**: Begin with basic color/text changes
2. **Add Validation**: Implement form validations and constraints
3. **Database Integration**: Modify schemas and update related code
4. **Error Handling**: Add proper error messages and edge case handling
5. **User Experience**: Ensure changes improve overall UX

### Tips for Live Implementation
1. **Think Before Coding**: Understand the requirement completely
2. **Break Down Tasks**: Split complex changes into smaller steps
3. **Test Immediately**: Verify each change works before moving on
4. **Handle Errors Gracefully**: Don't let the app crash during demo
5. **Explain Your Process**: Talk through your implementation approach
6. **Ask for Clarification**: If unsure, ask the proctor to elaborate
7. **Use Documentation**: Some proctors allow checking documentation
8. **Stay Calm**: If stuck, explain your thought process and ask for hints

### Most Common Live Implementation Requests
1. Change background colors (90% of vivas)
2. Move UI elements (navbar, buttons) (80% of vivas)
3. Add form validations (70% of vivas)
4. Implement capacity/stock constraints (60% of vivas)
5. Add new database fields (50% of vivas)
6. Create export functionality (40% of vivas)
7. Implement search features (40% of vivas)
8. Add booking/count displays (30% of vivas)

**Remember**: Live implementation is where many students struggle. Practice these common changes beforehand and understand the flow from database to frontend to ensure smooth execution during your viva!

### Backend Logic Changes
1. **Validation Implementation**:
   - Password validation (8+ chars, uppercase, lowercase, number, special char)
   - Email format validation (something@something.something)
   - Username length restrictions
   - Age validation (18+ years)
   - Date validations (future dates only)

2. **Business Logic**:
   - Prevent booking more tickets than available
   - Add constraints for venue capacity vs show capacity
   - Implement quantity management in inventory
   - Add duplicate prevention (same category/product names)
   - Implement expiry date validations

3. **Feature Additions**:
   - Export functionality for CSV/PDF
   - Search functionality implementation
   - Sorting (alphabetical, by price, etc.)
   - Favorite/flag features
   - Email notifications

### Database Modifications
1. **Schema Changes**:
   - Add new columns to existing tables
   - Change data types
   - Add constraints and validations
   - Implement cascading deletes

2. **Data Management**:
   - Store data in uppercase by default
   - Add auto-increment fields
   - Implement proper relationships
   - Add indexing for performance

## Project-Specific Implementation Details

### Ticket Booking System
- Venue capacity constraints
- Show capacity vs venue capacity validation
- Booking management and cancellation
- Export theater reports
- User booking history and summaries

### E-commerce/Grocery Store
- Product management with categories
- Inventory management
- Shopping cart functionality
- Order management
- Stock validation

### Music Streaming App
- Audio streaming implementation
- Playlist management
- User favorites/liked songs
- Music player controls
- Artist and album management

### Library Management
- Book and section management
- User borrowing system
- Rating and review system
- Search and filter functionality
- Admin vs user access control

## Important Tips for MAD2 Viva

### Technical Preparation
1. **Know Your Stack**: Be thorough with Vue.js, Flask, SQLAlchemy, Redis, Celery
2. **Practice Code Changes**: Focus on UI modifications and validation implementations
3. **Understand Architecture**: Know how your frontend communicates with backend
4. **Database Relationships**: Understand your models and their connections
5. **Security Implementation**: Know your authentication and authorization flow

### Vue.js Specific Preparation
1. **Component Structure**: Understand your component hierarchy
2. **State Management**: If using Vuex, know state, mutations, actions
3. **Routing**: Understand how navigation works in your SPA
4. **Lifecycle Hooks**: Know when to use created vs mounted vs other hooks
5. **Data Binding**: Practice v-model, v-bind, v-if, v-show usage

### Backend Specific Preparation
1. **API Endpoints**: Know all your routes and their purposes
2. **Authentication Flow**: Understand JWT token generation and validation
3. **Background Tasks**: Know your Celery implementations
4. **Caching Strategy**: Understand where and why you used Redis
5. **Database Operations**: Know your CRUD operations and relationships

### During the Viva
1. **Demo Preparation**: Have a smooth walkthrough ready
2. **Code Explanation**: Be able to explain any part of your code
3. **Problem Solving**: Think aloud when making changes
4. **Stay Calm**: If you don't know something, admit it honestly
5. **Ask Questions**: Clarify requirements before implementing changes

### Common Proctor Patterns
1. **Code-focused**: Emphasis on implementation and modifications
2. **Theory-heavy**: Focus on concepts and explanations
3. **Architecture-focused**: Interest in design patterns and scalability
4. **Security-conscious**: Questions about vulnerabilities and protections

### What Impresses Proctors
1. **Clean Code Structure**: Well-organized components and modules
2. **Security Implementation**: Proper authentication, validation, error handling
3. **Performance Optimization**: Caching, lazy loading, efficient queries
4. **User Experience**: Responsive design, good UI/UX practices
5. **Scalability Considerations**: Understanding of production concerns

### Red Flags to Avoid
1. **Hardcoded Values**: Especially for admin credentials
2. **No Error Handling**: App crashes on invalid input
3. **Security Gaps**: Plain text passwords, no input validation
4. **Poor Architecture**: Tightly coupled code, no separation of concerns
5. **Inconsistent Data**: Database integrity issues

### Technical Depth Areas
1. **Frontend**: Component communication, state management, routing
2. **Backend**: API design, authentication, background processing
3. **Database**: Relationships, constraints, performance optimization
4. **Security**: Authentication, authorization, input validation, CORS/CSRF
5. **Architecture**: MVC pattern, scalability, separation of concerns

### Final Preparation Checklist
- [ ] Can explain Vue.js concepts and your component structure
- [ ] Know your API endpoints and their implementations
- [ ] Understand your database models and relationships
- [ ] Can implement common UI changes (colors, layouts)
- [ ] Know your authentication and authorization flow
- [ ] Understand caching and background task implementation
- [ ] Can explain security measures you've implemented
- [ ] Know the difference between various HTTP methods
- [ ] Can handle validation implementations
- [ ] Understand your project's architecture and scalability

**Remember**: MAD2 vivas tend to be more technically demanding than MAD1, focusing on modern web development practices, API design, and frontend frameworks. Be prepared to demonstrate both theoretical knowledge and practical implementation skills. Good luck!
