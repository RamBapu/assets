# TypeORM

### ORM

ORM is a technique that lets you interact with the database using classes and objects instead of writing raw SQL queries.
ORM converts TS / JS code into SQL queries.

### TypeORM

TypeORM supports MySQL, Postgres and MongoDB databases.
Works in Node.js / Electron and React Native projects.
It supports Entities, Migrations, Query Builder, Transactions

### Entity

```ts
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

### Repository Pattern vs Query Builder Pattern

| Repository               | Query Builder                                         |
| ------------------------ | ----------------------------------------------------- |
| Higher-level abstraction | Lower-level abstraction                               |
| Best for CRUD            | Best for complex queries                              |
| Generates SQL internally | You control SQL generation                            |
| Used for simpler queries | Used for multiple joins, aggregations and sub-queries |

### Migrations

Migration is a version controlled script that changes database structure. When we create a table, alter a table, add / rename a column, app and DB becomes inconsistent.
Suppose I add an 'age' field in my User entity and deploy the backend without updating production DB. The application will try to read or insert into a column that doesn’t exist and fail. A migration creates and applies that column change before deployment, preventing schema mismatch issues.

### Eager vs Lazy loading

Eager loading - loads automatically and Lazy loading - loads when accessed

### Synchronization vs Migration

Synchronize in development only. Auto updates DB. Use migration to update DB in production

### Indexing

Indexing is used for faster search queries by creating columns as indexes

### Optimistic locking

Use version number for updating, so when the version number changes - update fails which prevents concurrent update fails

```ts
@VersionColumn()
version:number
```

### Inverse Relationship

Instead of creating unidirectional relation, we can create bidirectional relationship by creating one to one relationship in both customers and orders.
