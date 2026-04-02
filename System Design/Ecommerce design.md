# Ecommerce

## Requirements

### Functional Requirements

- User authentication (login/signup)
- Product listing & search
- Product details page
- Cart & checkout
- Order placement
- Payment integration
- Order history
- Admin panel (CRUD products, orders)

### Non-functional Requirements

- High availability
- Scalability (millions of users)
- Low latency (<200ms APIs)
- Security (payments, auth)
- Fault tolerance

## Architecture

Client (React)
↓
CDN (Cloudflare)
↓
API Gateway / Load Balancer (NGINX)
↓
Backend Services (Node.js / Express)
↓
Databases + Caches + External Services

### Frontend

- React + Typescript + Zustand
- Next.js (for SSR & SEO)

### Backend

Node.js + ExpressJs

- Auth Service
- Product Service
- Cart Service
- Order Service
- Payment Service

## Data

### Database

- MongoDB - users, products, orders

ProductSchema.index({ name: "iphone", description: "camera" });
ProductSchema.index({ category: 'mobile', price: 1 });

## Interface

### API Interface

POST /auth/signup
POST /auth/login
POST /auth/refresh
POST /auth/logout
GET /auth/me

GET /products
GET /products/:id
POST /products (admin)
PUT /products/:id (admin)
DELETE /products/:id (admin)

POST /orders
GET /orders/:id
PUT /orders/:id/status (admin)

## Optimizations

- Event driven architecture - RabbitMQ / Kafka for notifications
- Distributed locking - for inventory consistency & prevent overselling
- Collaborative filtering - for recommendations
- Lazy loading images - CloudFlare - CDN optimizations
- For fast access cart - Redis cache
- Search, filter and autocomplete - ElasticSearch
- Horizontal scaling using stateless Node services
- Load balancing using Nginx
- Webhooks to verify the payments
- Rate limiting, token authentication for security
- XSS / SQL injection for input validation
- logs using ELK stack
- metrics using prometheus + grafana

### Concurrency and race conditions

- Atomic DB update

  await Product.updateOne(
  { \_id: productId, stock: { $gte: qty } },
  { $inc: { stock: -qty } }
  );

- Distributed Lock (Redis)
  Acquire Lock → Update Stock → Release Lock
