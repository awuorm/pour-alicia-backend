exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username")
        .notNullable()
        .unique();
      table.integer("age").notNullable();
      table.string("password").notNullable();
    })
    .createTable("stories", table => {
      table.increments();
      table
        .string("title")
        .notNullable()
        .unique();
      table.string("author").notNullable();
      table.text("storybody").notNullable();
    })
    .createTable("storiesTag", table => {
      table.increments();
      table.string("tag").notNullable();
      table
        .integer("storiesId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("stories");
    })
    .createTable("ageRange", table => {
      table.increments();
      table.integer("minAge").notNullable();
      table.integer("maxAge").notNullable();
      table
        .string("description")
        .notNullable()
        .unique();
    })
    .createTable("ageGroup", table => {
      table.increments();
      table
        .integer("storiesId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("stories");
      table
        .string("age")
        .notNullable()
        .references("description")
        .inTable("ageRange");
    })
    .createTable("favourites", table => {
      table.increments();
      table
        .integer("userId")
        .notNullable()
        .unique()
        .references("id")
        .inTable("users");
      table
        .integer("storiesId")
        .notNullable()
        .unique()
        .references("id")
        .inTable("stories");
      table
        .boolean("favourites")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("favourites")
    .dropTableIfExists("ageGroup")
    .dropTableIfExists("storiesTag")
    .dropTableIfExists("ageRange")
    .dropTableIfExists("stories")
    .dropTableIfExists("users")

};
