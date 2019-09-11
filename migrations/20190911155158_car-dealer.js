
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
      tbl.increments()
      tbl.text('make')
        .notNullable(); 
      tbl.text('model')
        .notNullable(); 
      tbl.text('VIN')
        .unique()
        .notNullable(); 
      tbl.integer('mileage')
        .notNullable()
      tbl.text('Title Status')
  }
  )};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer'); 
};
