const mysql = require('mysql');
const connections = require('../connections');

const connection = mysql.createConnection(connections.connections.DevSchool01);

const getAthletes = (params) => {
    let sql;
    if (params) {
        sql = 'SELECT * FROM ATHLETE WHERE ?';
    } else {
        sql = 'SELECT * FROM ATHLETE';
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

getAthletes()
    .then((results) => {
        console.log(results);
    })
    .catch((err) => {
        console.log("Promise rejection error:", err);
    });
