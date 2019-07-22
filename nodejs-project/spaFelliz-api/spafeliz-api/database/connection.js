const Sequelize = require('sequelize')

const conn = new Sequelize('b66Qd2Xd2Z','b66Qd2Xd2Z','xmETEWt3J5',{
    host:'remotemysql.com',
    dialect: 'mysql'
})

conn.authenticate()
.then(()=>console.log('connection ok with database'))
.catch((err) =>console.log('connection error with database', err))

module.exports = conn;