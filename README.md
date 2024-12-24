## Shoppers Backend API

1. [x] Authentication and Authorization
 

1. User Authentication: Secure login and registration using JWT or OAuth.
2. Role-based Access Control (RBAC): Different permissions for Admins, Customers, and Vendors.
3. Multi-Factor Authentication (MFA): For enhanced security.


2. [x] Product Management


1.    CRUD for Products: Add, update, delete, and retrieve products with detailed attributes (name, description, price, category, brand, SKU, etc.).
2.    Inventory Management: Track stock levels, manage low-stock alerts, and prevent overselling.
3.    Category and Subcategory Management: Organize products into categories for better browsing.


3. [x] Order Management


1.    Order Placement: API to create and confirm orders.
2.    Order Tracking: Update order status (Pending, Processing, Shipped, Delivered, Cancelled).
3.    Returns and Refunds: Manage product returns and initiate refunds.


4. [x] User Management
   User Profiles: Allow users to update their personal details, preferences, and addresses.
   Address Management: Save multiple delivery addresses for each user.
   Wishlist and Favorites: Save products for future purchase.
   Review and Ratings: Allow customers to leave feedback for products.
5. [x] Payment Gateway Integration
   Multiple Payment Methods: Support for credit/debit cards, wallets, UPI, and bank transfers.
   Secure Payments: Use libraries like Stripe, PayPal SDK, or Razorpay.
   Fraud Detection: Verify transactions to detect suspicious activities.
6. [x] Shopping Cart and Checkout
   Persistent Cart: Save cart data in the database to persist across sessions.
   Promotions and Discounts: Apply discount codes, coupons, or seasonal sales.
   Tax Calculation: Calculate taxes based on user location or product type.
   Shipping Options: Provide multiple shipping methods with real-time cost estimates.
7. [x] Search and Filtering
   Full-Text Search: Implement Elasticsearch or MongoDB Atlas Search for faster and advanced querying.
   Sorting and Filtering: By price, category, brand, rating, and availability.
   Autocomplete Suggestions: Suggest products as users type.
8. [x] Notifications
   Email Notifications: Order confirmations, delivery updates, and promotions.
   SMS Notifications: Important updates like OTPs and delivery statuses.
   Push Notifications: For web or mobile apps.
9. [x] Advanced Analytics and Reporting
   Dashboard for Admins: Insights into sales, orders, and user activity.
   Product Performance: Top-selling and low-performing products.
   Customer Analytics: User behavior, retention, and spending patterns.
10. [x] Security
    Data Encryption: Use HTTPS and encrypt sensitive data like passwords (bcrypt).
    Rate Limiting: Prevent DDoS attacks using tools like express-rate-limit.
    Input Validation: Sanitize inputs to prevent SQL injection and XSS attacks.
    Content Security Policy (CSP): Mitigate script-based attacks.
11. [x] Scalability and Performance
    Load Balancing: Distribute traffic across multiple servers.
    Caching: Use Redis for frequently accessed data (e.g., product listings).
    Database Optimization: Use indexes, optimize queries, and consider database sharding for scalability.
    Microservices Architecture: Modularize components for better maintainability and scaling.
12. [x] APIs and Webhooks
    RESTful APIs: Follow REST conventions or use GraphQL for flexible querying.
    Webhooks: Enable integrations for payment gateways, shipping services, and third-party tools.
13. [x] Admin Panel
    User Management: View and manage customer accounts.
    Product and Inventory Management: Bulk product uploads and stock management.
    Order Management: Update and manage orders, refunds, and cancellations.
14. [x] Multi-Language and Multi-Currency Support
    Localization: Serve content in multiple languages.
    Currency Conversion: Show prices in the user's preferred currency.
15. [x] Customer Support
    Live Chat: Integrate a real-time chat service.
    Helpdesk System: Ticketing system for queries and complaints.
    FAQ and Knowledge Base: Address common issues and questions.
16. [x] Logging and Monitoring
    Request and Error Logging: Use tools like Winston or Bunyan for logging.
    Performance Monitoring: Integrate APM tools like New Relic or Datadog.
    Error Tracking: Use services like Sentry for real-time bug tracking.
17. [x] Backup and Recovery
    Database Backups: Regular automated backups of all data.
    Disaster Recovery Plan: Ensure minimal downtime in case of failures.
18. [x] Compliance
    GDPR and CCPA: Protect user data and provide options to delete or download it.
    PCI DSS Compliance: Secure payment data handling.
19. [x] Third-Party Integrations
    Shipping APIs: Automate shipping calculations and tracking.
    CRM Integration: Sync user data with tools like Salesforce.
    Marketing Tools: Integrate email marketing tools like Mailchimp.


### Implementing Authentication
We are going to use JWT for authentication and authorization functionalities. We required a few dependencies to 
successfully implement this.

`jsonwebtoken`: For generating access tokens

`bcryptjs`: For password hashing(encryption)

`body-parser`:For passing the request body to JSON 

## Research Areas

How to integrate Relationships in MongoDB(refs).

## Checks
1. [ ] Authentication
2. [ ] Authorization
3. [ ] CRUD
4. [ ] Payments
5. [ ] Analytics
6. [ ] Documentation
7. [ ] Database Design
8. [ ] Deployment
