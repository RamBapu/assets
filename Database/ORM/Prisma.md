# Prisma

### Steps

- Install Prisma & Prisma Client and initialize schema.prisma file with .env = POSTGRES_DB_URL

What this does, Prisma reads the DB connection details

- Create the models for tables with primary keys, foreign keys
- Generate migration - Running migration command, creates SQL queries for the modals and save it in migrations folder and executes it.
- Automatically generate Prisma client and we can use this so the prisma methods will be available to query the database
- If we change the database schema, run migration again and update the database

We define models in the ORM schema, then the ORM generates migration files containing SQL statements and executes those SQL commands against PostgreSQL. PostgreSQL creates and stores the actual tables.
