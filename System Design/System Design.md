# System Design

### RADIO Framework for System Design

**R → Requirements**

**A → Architecture**

**D → Data**

**I → Interface**

**O → Optimizations**

### Basic Structure

Client --> CDN Edge Server
↓
API gateway (Reverse proxy)
↓
Load Balancer
↓
API Servers (different services)
↓
Cache (Redis)
↓
Database (Sharded + Replicated) - read replicas > write replicas
↓
Message Queue (Kafka) for sending email, payments
↓
Workers

### Vertical vs Horizantal Scaling

- **Vertical scaling** means upgrading a single machine, like adding more CPU, RAM, or faster storage.
- **Horizontal scaling** means adding more machines and spreading work across them.

Vertical is easier but hits hardware limits and becomes expensive.

Horizontal is harder because you need load balancing, stateless services, and shared storage.

### CAP Theorem

**CAP Theorem** says that in the presence of a network partition, a distributed system must choose between **Consistency** and **Availability** .

Consistency means every user sees the same data at the same time.

Availability means the system always responds, even if the data might be slightly stale.

You cannot have perfect consistency and perfect availability when your network is broken, so you decide which one to sacrifice for your use case.

### CAP Theorem exp

CAP(Consistency-Availability-Partition Tolerance) theorem says that a distributed system cannot guarantee C, A and P simultaneously. It can at max provide any 2 of the 3 guarantees. Let us understand this with the help of a distributed database system.

- **Consistency** : This states that the data has to remain consistent after the execution of an operation in the database. For example, post database updation, all queries should retrieve the same result.
- **Availability** : The databases cannot have downtime and should be available and responsive always.
- **Partition Tolerance** : The database system should be functioning despite the physical network partitions.

RDBMS - MySQL, Postgres - CA

Cassandra - AP

Redis, MongoDB - CP

### PACELC Theorem

**PACELC** extends CAP and says: if there is a Partition, choose Availability or Consistency; Else choose Latency or Consistency.

Even when the network is fine, you still trade off slow but consistent reads vs fast but eventually consistent reads. Systems that sync across regions often pay in latency to keep strong consistency.

### Throughput vs Latency

- **Throughput** is how many requests your system can handle per second.
- **Latency** is how long a single request takes from start to finish.

### Amadh's Law

Amdahl’s Law says that the speedup from parallelization is limited by the part that cannot be parallelized

If 20 percent of your system is always sequential, no amount of extra machines will fix that bottleneck.

### Strong vs Eventual Consistency

- **Strong consistency** means all users see the same data immediately after a write. After a data write, the subsequent reads will see the latest data. Here, the data is replicated synchronously. This is seen in RDBMS and file systems and are suitable for banks.
- **Eventual consistency** means updates spread over time and nodes will match eventually. Post data write, the reads will eventually see the latest data within milliseconds. Here, the data is replicated asynchronously. These are seen in DNS and email systems. This works well in highly available systems.

### Stateful vs Stateless Architecture

- A **stateful** service remembers user context between requests, often storing session data locally.
- A **stateless** service treats every request as new, sending tokens in every request.

### Serverless functions

**Serverless** lets you run small functions in the cloud without managing servers directly. You pay only when your code runs, and the platform handles scaling and infrastructure for you.

It is ideal for event-driven workloads such as webhooks, background jobs, or light APIs with spiky traffic. Eg: AWS lamda functions for sending emails

### Microservices vs Monoliths

A **monolith** is a single application that contains many features in one deployable unit.

**Microservices** split features into separate services that communicate over the network.

### Load Balancing

**Load balancing** spreads incoming traffic across multiple servers so no single server gets overloaded. It improves both reliability and performance, since a single server’s failure does not bring down the entire system.

They often support health checks so they stop sending traffic to unhealthy instances.
Requests sent to the servers are encrypted and the responses are decrypted.

### Load Balancing Algorithms

Common **load balancing algorithms** include Round Robin, Least Connections, and IP Hash.

- **Round Robin** cycles through servers in order and is simple to implement.
- **Least Connections** sends traffic to the server with the fewest active connections, which helps when requests vary in length.
- **IP Hash** uses a hash of the client IP so the same user usually goes to the same server, which helps with simple session stickiness.

### Reverse Proxy vs Forward Proxy

- A **reverse proxy** sits in front of servers and represents them to clients. It hides the inner topology, can do TLS termination, caching, compression, and routing. It is used for load balancing, DDos Protection.
- A **forward proxy** sits in front of clients and represents them to the outside world, often for security, caching, logging or content filtering.

Think of a reverse proxy as the reception desk of a company that hides all the internal rooms, and a forward proxy as a gateway your laptop must pass through to reach the internet.

### API Gateway

An **API gateway** is a special reverse proxy that acts as a single entry point for all API calls in a microservices system. It handles routing to the right service, rate limiting, authentication, logging, and sometimes response shaping.

### CDN (Content Delivery Network)

A **CDN** is a network of geographically distributed servers that cache static content like images, videos, and scripts closer to users.

When a user requests content, they are routed to the nearest CDN node, which greatly reduces latency. This also offloads traffic from your origin servers, improving scalability and resilience.

- **Push CDNs** : Here, the content is received by the CDNs whenever changes occur on the server. The responsibility lies in us for uploading the content to CDNs. Content gets updated to the CDN only when it is modified or added which in turn maximises storage by minimising the traffic. Generally, sites with lesser traffic or content work well using push CDNs. Eg: blog posts
- **Pull CDNs** : Here new content is grabbed from the server when the first user requests the content from the site. This leads to slower requests for the first time till the content gets stored/cached on the CDN. These CDNs minimizes space utilized on CDN but can lead to redundant traffic when expired files are pulled before they are changed. Websites having heavy traffic work well when used with pull CDNs. Eg: featured products

### DNS (Domain Name System)

**DNS** maps human readable domain names to IP addresses.

When you type a website name, your device queries DNS to find the numeric address of the server.

has multiple layers of caching, so responses are fast after the first lookup. It can also be used to perform simple load balancing by returning different IPs for the same name.

### TCP vs UDP

- **TCP (Transmission Control Protocol)** is a reliable, connection-oriented protocol. It guarantees ordered, error checked delivery by using acknowledgments and retries.
- **UDP (User Datagram Protocol)** is connectionless and does not guarantee delivery or order, which makes it much faster and lighter.

TCP suits APIs, web pages, and file transfers where accuracy matters.

UDP works well for real time applications like video calls or games where occasional packet loss is acceptable.

Think of TCP as registered mail and UDP as quick postcards.

### HTTP/1.1

- uses TCP - One request per connection. Connection 1 for HTML. Connection 2 for CS etc.

### HTTP/2

- single TCP connection called multiplexing. But problem of head-of-line blocking
- Req 1 -> Req 2 -> Req 3. If packet is lost for Req 1, everything waits
- TCP handshake -> TLS handshake -> HTTP request

### HTTP/3

- replaces TCP with QUIC (Quick UDP Internet Connection) built on UDP.
- packet lost for req 1, continue
- QUIC + TLS together -> HTTP request

  Enable HTTP/3 in CDN like CloudFlare

### HTTP/2 vs HTTP/3 (QUIC)

- **HTTP/2** introduced multiplexing, which lets multiple requests share a single TCP connection, reducing overhead. It also brought features like header compression and server push.
- **HTTP/3** runs over QUIC, which is built on UDP and improves connection setup time and performance on unreliable networks. These versions mainly aim to reduce latency and better use modern network conditions.

### TLS (Transport Layer Security)

It is the protocol that **encrypts communication between browser and server** .

Without TLS (http)

Anyone on the network could read:

- passwords
- cookies
- API responses

With TLS (https)

Only the server and client can read the data. This is what puts the little lock icon in your browser.

Traditional Handshake - connection breaks because it uses IPs

1 Browser → Hello (supported encryption methods)
2 Server → Certificate + chosen encryption
3 Browser → Verify certificate
4 Secure session created

QUIC Handshake - connection doesn't break on mobiles switching WiFi → 4G (uses connectionIds)

1 Browser → QUIC handshake + TLS

### gRPC vs REST

- **REST** typically uses HTTP with JSON and focuses on resources like `/users` or `/orders`. It is simple, human-readable, and widely used for public APIs.
- **gRPC** uses HTTP/2 and binary encoded messages (protobuf), which are smaller and faster over the wire. It also supports bidirectional streaming and strong typing.

In microservices, gRPC is often preferred for service-to-service calls, while REST is common for external clients.

### WebSocket and Server-Sent Events (SSE)

**WebSockets** create a full-duplex connection where client and server can send messages to each other at any time.

**SSE** allows the server to push events to the client over a one way channel using HTTP.

WebSockets are great for chats, multiplayer games, and live collaboration.

SSE is simpler and fits cases like live score updates or notifications, where only the server needs to push updates.

### Long Polling

**Long polling** is a technique where the client sends a request and the server holds it open until there is new data or a timeout.

When the response comes back, the client immediately opens another request. This simulates real time updates over plain HTTP without special protocols.

Think of it as asking “anything new?” and waiting quietly until there is an answer.

### SQL vs NoSQL

SQL

- Follows relational model
- Follows strict schema
- Follows ACID properties

NoSQL

- follows non-relational model
- follows dynamic schema - semi-structed data
- follows BASE properties

### ACID vs BASE

**ACID** is about strict, reliable transactions: Atomicity, Consistency, Isolation, Durability. It suits financial systems, inventory, and anything where mistakes are very costly.

**BASE** stands for Basically Available, Soft state, Eventual consistency and is used in large distributed systems that need to stay up and respond quickly.

ACID for payment and BASE for inventory feeds.

### Sharding - Horizontal Partitioning

Sharding is a process of splitting the large logical dataset into multiple databases. It also refers to horizontal partitioning of data as it will be stored on multiple machines. By doing so, a sharded database becomes capable of handling more requests than a single large machine. we divide the large 1TB database into smaller chunks of 256GB into partitions called shards.

### Partitioning

Partitioning is the process of separating stored database objects (tables, indexes, and views) into distinct portions. When a large portion of one area is used in the resultset, scanning that region is much faster than accessing data scattered throughout the entire table by index.

### Consistent Hashing

**Consistent hashing** is a technique to distribute keys across nodes in a way that minimizes data movement when nodes are added or removed.

Keys and nodes are placed on a logical ring, and each key belongs to the next node on the ring.

When a node joins or leaves, only a small portion of keys need to move. This property is very helpful in distributed caches and databases.

### Database Indexing (B Trees, LSM Trees)

**Indexes** speed up queries by organizing data in a way that allows fast lookup.

B Trees are balanced trees that keep data sorted and let you find ranges efficiently, common in relational databases.

LSM Trees batch writes in memory and periodically flush them to disk, which makes writes very fast but reads more complex.

The tradeoff is write heavy vs read heavy workloads.

The key idea is that indexes are a separate structure that must be updated on every write, which is why too many indexes hurt insert performance.

### Normalization vs Denormalization

- **Normalization** organizes data into tables that reduce redundancy and dependencies, following rules like first normal form, second normal form, and so on. This avoids anomalies on updates and inserts.
- **Denormalization** intentionally duplicates data to speed up reads and reduce joins. In high scale systems, denormalization is common for read heavy paths, such as storing user names along with posts instead of joining every time.

### Vector Databases

**Vector databases** store and query vectors, which are numeric representations of data such as text, images, or audio. These vectors come from models like embeddings and allow similarity search, such as “find documents most similar to this one.”

vector databases support nearest neighbor search over high-dimensional data.

### Caching

Caching refers to the process of storing file copies in a temporary storage location called cache which helps in accessing data more quickly thereby reducing site latency. The cache can only store a limited amount of data.

Common cache layers include in process caches, external key value stores, and CDNs.

### Caching strategies

**Cache-aside** : In this strategy, our application is responsible to write and read data from the storage. Cache interaction with the storage is not direct. Here, the application looks for an entry in the cache, if the result is not found, then the entry is fetched from the database and is added to the cache for further use. Eg: memcached - lazy loading strategy

Cons:

- In cases of a cache miss, there would be a noticeable delay as it results in fetching data from the database and then caching it.
- The chances of data being stale are more if it is updated in the database. This can be reduced by defining the time-to-live parameter which forces an update of the cache entry.
- When a cache node fails, it will be replaced by a new, empty node which results in increased latency.

**Write-through** : In this strategy, the cache will be considered as the main data store by the system and the system reads and writes data into it. The cache then updates the database synchronously.

Write-back: In this strategy, the application does the following steps

- Add or update an entry in the cache
- Write the entry into the data store asynchronously - uses Queue

Cons: chances of data loss if the cache goes down before the contents of the cache are written into the database.

**Refresh-ahead** : Using this strategy, we can configure the cache to refresh the cache entry automatically before its expiration.

### Cache Eviction Policies (LRU, LFU)

**Cache eviction policies** decide which items to remove when the cache is full.

- **LRU** (Least Recently Used) evicts items that have not been accessed recently, assuming recent items are more likely to be used again.
- **LFU** (Least Frequently Used) evicts items that are rarely accessed, focusing on long term popularity.

### Rate Limiting

**Rate limiting** controls how many requests a user, IP, or API key can make in a given time window.

### Circuit Breaker Pattern

A **circuit breaker** monitors calls to a remote service and “opens” if there are too many failures.

When open, it immediately fails new requests instead of trying the broken service again.

After a cooldown period, it allows a few trial calls to see if the service has recovered and closes if they succeed.

### Bulkhead Pattern

The **bulkhead pattern** isolates parts of a system so a failure in one area does not sink everything.

### Idempotency

An operation is **idempotent** if performing it multiple times has the same effect as performing it once.

For example, “set user status to active” is idempotent

### Distributed Transactions (SAGA Pattern)

A **distributed transaction** spans multiple services or databases.

The **SAGA pattern** models such a transaction as a sequence of local steps with compensating actions for rollbacks.

Instead of locking everything like a single ACID transaction, each service performs its part and publishes an event. If something fails, compensating steps attempt to undo previous changes. This fits naturally with microservices and eventual consistency.

### Message Queues (Point to Point)

A **message queue** allows one component to send messages to another without needing both to be online at the same time.

In a point to point model, messages in a queue are consumed by one receiver and then removed. This decouples sender and receiver so they can scale and fail independently.

Queues are great for background jobs, email sending, and processing heavy tasks asynchronously.

### Pub Sub (Publish Subscribe)

In **pub sub** , publishers send messages to topics, not directly to consumers.

Subscribers listen to topics they care about and receive copies of relevant messages. This enables broadcast style communication and loose coupling between producers and consumers.

Multiple services can react to the same event in different ways, such as logging, analytics, and notifications.

In interviews, pub sub often appears in event driven designs like activity feeds or event sourcing.

### Distributed Tracing

**Distributed tracing** tracks a single request as it flows through multiple services. Each service adds a trace ID and span information so you can reconstruct the full path of a request. This is extremely helpful when debugging slow responses or failures in microservice architectures.

### OAuth 2.0 and OIDC

**OAuth 2.0** is a framework for delegated authorization. It lets users grant an application limited access to their resources without sharing passwords.

**OIDC** (OpenID Connect) builds on OAuth 2.0 to add authentication, letting clients verify who the user is and get user identity information. This is the basis of many “Login with X” flows.

### Webhooks

### Core Web Vitals

Core Web Vitals (CWV) are =a set of three specific, user-centric metrics created by Google to measure real-world performance, interactivity, and visual stability= . They are crucial ranking factors that help identify how quickly a page loads ( **LCP** ), responds to user input ( **INP** ), and remains stable while loading ( **CLS** ).

**Key Core Web Vitals Metrics:**

- **[Largest Contentful Paint](https://www.google.com/search?q=Largest+Contentful+Paint&oq=core+web&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCQgBEEUYORiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM0MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwjFr5LG79CTAxWTcGwGHRdeOmAQgK4QegYIAQgAEAo) (LCP):** **Measures** _loading_ **speed—how long it takes for the largest image or text block to load, ideally within 2.5 seconds.**
- **[Interaction to Next Paint](https://www.google.com/search?q=Interaction+to+Next+Paint&oq=core+web&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCQgBEEUYORiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM0MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwjFr5LG79CTAxWTcGwGHRdeOmAQgK4QegYIAQgAEAw) (INP):** **Measures** _interactivity_ **—how quickly a page responds to user actions (clicks, taps)**. A good response time is under 0.2 seconds. _Note: INP replaced FID (First Input Delay) as a core metric._
- **[Cumulative Layout Shift](https://www.google.com/search?q=Cumulative+Layout+Shift&oq=core+web&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCQgBEEUYORiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM0MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwjFr5LG79CTAxWTcGwGHRdeOmAQgK4QegYIAQgCEAE) (CLS):** **Measures** _visual stability_ **—how much elements on the page shift around while loading. A score of 0.1 or less is considered good.**

**Google categorizes CWV results into "Good," "Needs Improvement," or "Poor." At least 75% of your page loads should meet the "Good" criteria to achieve a positive user experience.**

### Access Token vs Refresh Token

Access token

- Short-lived (e.g., 15 min)
- Sent in every API request
- Stored in **memory / HTTP-only cookie - stateless**

Refresh token

- Long-lived (e.g., 7–30 days)
- Used to generate new access tokens
- Stored securely (DB + HTTP-only cookie) - stateful

Login flow

1. User sends email + password
2. Validate password (bcrypt)
3. Generate Access Token (15 min)
4. Generate Refresh Token (store in DB)
5. Send:
   - Access Token → response body
   - Refresh Token → HTTP-only cookie

Refresh token flow

1. Client sends refresh token (cookie)
2. Verify token
3. Check DB (token exists & not revoked)
4. Issue new access token

Logout flow

1. Delete refresh token from DB
2. Clear cookie

### Stateless token

A stateless access token is a self-contained token, typically a JWT, that carries user identity and metadata within itself. The server validates it using a signature without quering a database, making it highly scalable and ideal for distributed systems

How it works

1. User logs in
2. Server generates JWT (signed)
3. Client sends token in every request
4. Server verifies signature
5. Server allows/denies access

### SSO Architecture

Login once → access Admin Panel, Analytics, Dashboard

Frontend → API Gateway → Microservices
↓
Auth Service (central)

How it works

1. User clicks Login with Google
2. Backend centralized auth server redirects to IDP (Identity Provider) - Google
3. Google returns token
4. API Backend validates
5. Create internal session/JWT
6. JWT sent to all services
7. Services verify the token (no DB call)
