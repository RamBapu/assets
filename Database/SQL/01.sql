CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2),

    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);

INSERT INTO customers (customer_id, customer_name, email)
VALUES
(1, 'Ram', 'ram@example.com'),
(2, 'John', 'john@example.com');

INSERT INTO orders (order_id, customer_id, order_date, total_amount)
VALUES
(101, 1, '2026-06-18', 2500.00),
(102, 1, '2026-06-19', 1800.00),
(103, 2, '2026-06-20', 3200.00);

SELECT
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM customers c
JOIN orders o
    ON c.customer_id = o.customer_id; /* Inner join */

SELECT * FROM customers

SELECT name FROM customers WHERE email = 'ram@example.com' ORDER BY customer_id DESC

CREATE INDEX id_customer_name ON customers(customer_name)

SELECT region, SUM(amount) AS total_amount FROM sales GROUP BY region HAVING region > or < sample_value

UPDATE employees SET salary = 60000 WHERE department = 'IT'

/* SELF JOIN */
SELECT e.name, m.name
    FROM employees e
    LEFT JOIN employees m
ON e.manager_id = m.employee_id

