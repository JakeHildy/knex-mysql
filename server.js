const express = require('express');
const app = express();

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
const PORT = process.env.PORT || 5000;

console.log(knexConfig);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
