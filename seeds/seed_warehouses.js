exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('warehouses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('warehouses').insert([
        {
          id: 1,
          name: 'Warehouse1',
          address: '2345 Fake Ave',
          city: 'Atlanta',
          country: 'USA',
        },
        {
          id: 2,
          name: 'Warehouse2',
          address: '1234 Blake Ave',
          city: 'Houston',
          country: 'USA',
        },
      ]);
    });
};
