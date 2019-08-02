const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('reservation',{
    id_reservation:{type: Sequelize.SMALLINT, primaryKey:true},
    date_reservation: Sequelize.DATE,
    id_services: Sequelize.INTEGER,
    mail: Sequelize.STRING,
    names: Sequelize.STRING,
    hour_reservation: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName:true
}
)