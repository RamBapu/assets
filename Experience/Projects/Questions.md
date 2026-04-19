### What is Microsoft Fabric

Microsoft Fabric - all in one platform that combines data engineering, data science, data warehousing, and business intelligence.

It includes

- Data Factory (data pipelines)
- Data Engineering (Spark, notebooks)
- Data Storage (Lakehouse, warehouse)
- Real-time analytics
- Power BI (for dashboards)

### What are Fabric semantic models

A semantic model organizes raw data into simple, meaningful business terms so that business users can easily create reports without understanding technical database structures

A **semantic model** is a **clean, business-friendly layer on top of raw data**

Raw data:

tbl_sales → rev_amt, cust_id, dt_key

Semantic model:

Revenue
Customer
Date

Defines:

- Measures (Revenue, Profit)
- Relationships (Customer ↔ Orders)

### Challenge

_One of the biggest challenges I faced was building a **complex data grid with real-time simulation capabilities** on top of Fabric semantic models — where business users could tweak planning assumptions and instantly see forecasted outcomes._

_The core challenge was **performance** . The grid had hundreds of rows with interdependent calculated cells — when a user changed one input, it triggered cascading recalculations across the entire dataset. With naive re-rendering, the UI would freeze for 2–3 seconds, which was unacceptable for a planning tool._

_My approach was three-pronged:_

_First, I **virtualized the grid** using a library like AG Grid or TanStack Virtual so only visible rows were in the DOM. Second, I moved the **recalculation logic to a Web Worker** so the main thread stayed unblocked during heavy computation. Third, I implemented **debounced updates with optimistic UI** — showing the user an immediate visual response while the actual model recalculation completed in the background._

_The result was a UI that felt near-instantaneous even with large datasets, and our business users could run forecasting simulations without interruption_
