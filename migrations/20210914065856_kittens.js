
exports.up = function(knex) {
  return knex.schema.createTable('kittens', (table) => {
    table.increments()
    table.string('name')
    table.string('ownder')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable ('kittens')
};
