const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');
module.exports = db;

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

try{
let squash = Vegetable.create({
    name: 'squash',
    color: 'yellow',
    planted_on: '2018-11-10'    
  }   
)

let parsley = Vegetable.create({
    name: 'parsley',
    color: 'green',
    planted_on: '2018-11-10'    
  }   
)

let eggplant = Vegetable.create({
    name: 'eggplant',
    color: 'purple',
    planted_on: '2018-11-10'    
  })  
  
let lettuce = Vegetable.create({
    name: 'lettuce',
    color: 'light-green',
    planted_on: '2018-11-10'
}) 


const values = Promise.all([squash, parsley, eggplant, lettuce]);

console.log(values);} catch (err) {
    console.log(err);
}

