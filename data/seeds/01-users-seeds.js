
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {   id:1,
          title:"Is There Anyone Like Lorem Ipsum?",
          author:"Created by Lorem Ipsum",
          storybody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
        
      ]);
    });
};