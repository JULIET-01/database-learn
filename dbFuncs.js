const knex = require('knex')
const config = require('./knexfile'). development 

const connection = knex(config)

const getAllKittens = (db = connection) => {
  db('kittens')
  .select()
  .then(kittens => {
    console.log(kittens)
  })
}

const getKittenById = (id, db = connection) => {
  db('kittens')
  .select()
  .where('id', id)
  .first()
  .then(kitten => {
    console.log(kitten)
  })
}


// getAllKittens()
getKittenById(2)