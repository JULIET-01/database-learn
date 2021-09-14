
exports.up = function(knex) {
  return knex.schema.createTable('kittens', (table) => {
    table.increments()
    table.string('name')
    table.string('owner')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable ('kittens')
};
