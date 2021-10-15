
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Kemal", last_name:"Bekcan", email:"kemalbekcan@gmail.com", role_id: 2}
      ]);
    });
};
