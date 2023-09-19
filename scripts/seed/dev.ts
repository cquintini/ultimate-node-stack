import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.productComment.createMany({
    data: [
      {
        id_product: 1,
        id_customer: 1,
        id_guest: 1,
        content: 'Me gusta el Producto',
        title: 'title',
        customer_name: 'Cesar Quintini',
        grade: 5,
        validate: true,
        deleted: false,
        date_add: new Date(),
      },   
      {
        id_product: 2,
        id_customer: 2,
        id_guest: 2,
        content: 'Me gusta el Producto Mucho',
        title: 'Me encanta',
        customer_name: 'Chloe Quintini',
        deleted: false,
        grade: 5,
      }
    
    ]
  });
};
// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}
