# MAD2 Viva Preparation - Questions and Tips

## Core Technical Questions

### Vue.js Framework
1. What is Vue.js? Why use Vue over React?
2. What is a reactive framework?
3. What is Vue CLI vs Vue CDN? Which did you use and why?
4. What are Vue components? How do you create them?
5. What are Vue directives? Name the built-in directives
6. What is v-if vs v-show? When to use which?
7. What is v-model vs v-bind? Show usage in your code
8. What is v-for? How do you implement loops in Vue?
9. What is v-cloak?
10. What are Vue lifecycle hooks? Which ones did you use?
11. What is the difference between created() and mounted()?
12. What is watch in Vue? How does it work?
13. What are Props in Vue? How do you pass data from parent to child?
14. How do you pass data from child to parent?
15. What are slots in Vue? Did you use them?
16. What is Vue Router? What functions did you use (push, go, etc.)?
17. What is Vuex? What are state, mutations, and actions?
18. What is the use of actions in Vuex?
19. What is Virtual DOM?
20. What is Single Page Application (SPA)?
21. Is your app responsive? How did you make it responsive?
22. What are the advantages of Vue/React over vanilla JavaScript?

### Backend & APIs
23. What is Flask? Why use Flask for large applications?
24. What is ORM? Which ORM did you use?
25. What is Flask-SQLAlchemy?
26. Which databases are supported by SQLAlchemy?
27. What changes would you make to move from SQLite to PostgreSQL?
28. What is lazy loading in SQLAlchemy?
29. What is CASCADE DELETE? What is delete-orphan?
30. What is the difference between backref and back_populates?
31. What is an API? What is a RESTful API?
32. What are HTTP verbs? Explain GET, POST, PUT, PATCH, DELETE
33. What is the difference between PUT and PATCH?
34. What is the difference between POST and PUT?
35. Can we use POST instead of PUT?
36. What are HTTP status codes? Explain common ones
37. What is authentication vs authorization?
38. How did you implement RBAC (Role-Based Access Control)?
39. What is JWT? How is it built? Explain the token flow
40. What is session vs token-based authentication?
41. What are decorators in Python? Show usage
42. Can you swap the order of @jwt_required and @role_required decorators?
43. What is Flask-Security?
44. What is WSGI?

### Caching & Background Tasks
45. What is caching? Why do we need it?
46. What is Redis? Why use Redis over a normal database?
47. What is the difference between Redis and Memcached?
48. Where did you implement caching in your project?
49. What is memoization? Difference between memoization and caching?
50. What is Celery? What are the components of Celery?
51. What is the difference between Celery worker and Celery beat?
52. How do you prioritize Celery tasks?
53. How do you shut down Celery tasks without terminal?
54. What are Celery jobs you implemented?
55. How do you handle long-running Celery tasks when user logs out?
56. What is a message broker?
57. What is task queue vs message queue?
58. What is publish/subscribe vs point-to-point messaging?

### Security & Validation
59. What is CORS? How did you handle it?
60. What is CSRF? How to prevent it?
61. What is XSS? How to prevent it?
62. What is SQL injection? How to prevent it?
63. What is man-in-the-middle attack?
64. What is DOS attack?
65. What security measures did you implement?
66. What is the difference between security and privacy?
67. What is frontend vs backend validation? Which is more important?
68. How do you hide password in network payload?
69. What happens when you enter string data in an int field?
70. What happens when you query an empty table?

### Database & SQL
71. What are SQL aggregate functions?
72. What is GROUP BY? What is HAVING?
73. What are SQL joins? Explain LEFT JOIN
74. What is the difference between DELETE and TRUNCATE?
75. What are SQL constraints?
76. What is the difference between primary key and unique key?
77. Can we replace primary key with unique+not null+auto increment?
78. What happens to foreign key references when parent is deleted?
79. How do you create indexes in SQLAlchemy?
80. What is database normalization?
81. What is the difference between relational and non-relational databases?

### Frontend Technologies
82. What are CSS selectors? How many types?
83. What is the difference between inline and internal CSS?
84. What is the difference between flexbox and grid?
85. What is Bootstrap? Why use it?
86. What is template inheritance? How to implement in Vue?
87. What is DOM? How to access elements by ID in JavaScript?
88. What are different ways to declare variables in JavaScript?
89. What are async functions in JavaScript?
90. What is event loop in JavaScript?
91. What are Promises in JavaScript?
92. What is AJAX vs Fetch?
93. What is local storage vs session storage vs cookies?
94. What are other file transfer protocols?

### Architecture & Scaling
95. What architecture did you use? What is MVC?
96. What is horizontal vs vertical scaling?
97. What is load balancing?
98. Would your current stack be efficient at large scale?
99. What is microservices architecture?
100. What is client-server vs distributed architecture?
101. How would you scale your app to the size of BigBasket?

### Advanced Topics
102. What are webhooks vs websockets?
103. What is Server-Sent Events (SSE)?
104. What is SMTP? What are its advantages/disadvantages?
105. What is callback function?
106. What is jsonify vs json.dumps?
107. What are exception classes in Python? What is the base class?
108. What are dunder methods? What is __repr__ vs __str__?
109. What is serialize in models?
110. What is virtual environment? Why is it needed?
111. What is dataclass in Python?
112. What is opaque request?
113. What is PWA (Progressive Web App)?
114. What is lazy loading in frontend?
115. What is cron job? Explain crontab statements

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
