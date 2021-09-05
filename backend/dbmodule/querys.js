const { executeQuery } = require('./sqlconnection');

const insertUserinfo = (param) => {
    return new Promise((resolve, reject) => {
        console.log('insertUserinfo', param);

        let email = param.email;
        let username = param.username;
        let password = param.pwd;

        let query = `call InsertUser('${email}','${username}','${password}')`;

        // console.log('insertUserinfo', query);

        executeQuery(query)
        .then((qeuryResult) => {
            // console.log(qeuryResult);
            resolve(qeuryResult);
        })
        .catch(reject);
    });
};

const getUserinfo = (param) => {
    return new Promise((resolve, reject) => {
        console.log('getUserinfo', param);

        let email = param.email;
        let password = param.pwd;

        let query = `select * from users where email like '${email}' and pwd like '${password}';`;

        console.log('getUserinfo', query);

        executeQuery(query)
        .then((qeuryResult) => {
            // console.log(qeuryResult);
            resolve(qeuryResult);
        })
        .catch(reject);
    });
};


module.exports = {
    insertUserinfo,
    getUserinfo,
}