
exports.up = function (knex) {
    return knex.schema.createTable('tweet', tbl => {
        tbl.increments()

        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('user')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        tbl
            .string('tweet')


        tbl
            .timestamp('created_at').defaultTo(knex.fn.now())


        tbl
            .integer('likes')
            .defaultTo(0)


        tbl
            .integer('retweets')
            .defaultTo(0)

        tbl
            .integer('comments')
            .defaultTo(0)

    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tweet')
};
