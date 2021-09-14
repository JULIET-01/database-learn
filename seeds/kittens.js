
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kittens').del()
    .then(function () {
      // Inserts seed entries
      return knex('kittens').insert([
        {id: 1, name: 'Pickles', owner: 'Barry'},
        {id: 2, name: 'Elton', owner: 'Manny'},
        {id: 3, name: 'Maurice', owner: 'Rollando'}
      ]);
    });
};
