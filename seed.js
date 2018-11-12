const db = require('./models.js');

const dbPromise = db.sync({force: true});
dbPromise.then(() => {
    console.log('Database synced')
    db.close();
})

         .catch(err => {
             console.error(err);
             db.close();
         })

