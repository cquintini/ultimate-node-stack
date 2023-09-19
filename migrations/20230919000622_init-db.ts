import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('psne_product_comment', (table) => {

        table.increments('id_product_comment').primary();
        table.integer('id_product').unsigned().notNullable();
        table.integer('id_customer').unsigned().notNullable();
        table.integer('id_guest').unsigned().notNullable();
        table.text('content');
        table.string('title');
        table.string('customer_name');
        table.float('grade');
        table.boolean('validate');
        table.boolean('deleted').defaultTo(false);
        table.dateTime('date_add').defaultTo(knex.fn.now());
        
    
    
      });
}


export async function down(knex: Knex): Promise<void> {
}

