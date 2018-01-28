exports.up = (knex, Promise) => {
  return knex.schema.createTable('gamecollection', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('developer');
    table.float('rating');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('gamecollection');
};
