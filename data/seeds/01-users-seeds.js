
exports.seed = function(knex) {

      return knex('stories').insert([
        {   id:1,
          title:"Is There Anyone Like Lorem Ipsum?",
          author:"Created by Lorem Ipsum",
          storybody: "Lorem ipsum dolor sit amet"
      }
        
      ]);
};
