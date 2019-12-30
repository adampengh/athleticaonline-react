const mysql = require('mysql');
const connections = require('../connections');

const connection = mysql.createConnection(connections.connections.DevMain01);

const getStates = (params) => {
    let sql;
    if (params) {
        sql = 'SELECT * FROM states WHERE ?';
    } else {
        sql = 'SELECT * FROM states';
    }

    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, rows) => {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(rows);
            }
        });
        connection.end();
    });
};

getStates({'countryCodeAlpha2': 'US'})
    .then((results) => {
        const stateNames = results.map(row => row.state_name);
        console.log(stateNames);
    })
    .catch((err) => {
        console.log("Promise rejection error:", err);
    });
