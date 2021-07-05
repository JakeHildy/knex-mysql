const express = require('express');
const app = express();
const warehouseRouter = require('./routes/warehouseRoutes');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/warehouses', warehouseRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
