
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { 
          make: "Chevy" ,
          model: "Camaro", 
          VIN: "DSKD81KD241ND", 
          mileage: 12034, 
          "Title Status": "clean"
        },
        { 
          make: "Ford",
          model: "Mustang", 
          VIN: "GASD81KD01ND", 
          mileage: 234214, 
          "Title Status": null
        },
        { 
          make: "Audi",
          model: "S7", 
          VIN: "DSKD81KD101ND", 
          mileage: 4353, 
          "Title Status": "Salvaged"
        },
      ]);
    });
};
