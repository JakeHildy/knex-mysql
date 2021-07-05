const express = require('express');
const knexConfig = require('./../knexfile').development;
const knex = require('knex')(knexConfig);
const router = express.Router();

router.route('/').get((req, res) => {
  knex
    .select('*')
    .from('warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
