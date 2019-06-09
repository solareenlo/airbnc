var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = mysql.createConnection(
  {
    host : "mysql",
    user : "dev",
    password : "password",
    port : 3306,
    database: "dev"
}
);

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/', (req, res, next) => {
  res.status(200).render('index');
});

app.get('/api/houses', function(req, res, next) {
  connection.query(`select * from houses;`, function (err, result) {
    res.status(200).json(result);
  })
});

app.get('/api/users', function(req, res, next) {
  connection.query(`select * from users;`, function (err, result) {
    res.status(200).json(result);
  })
});

module.exports = app;

/* GET home page. */
// router.get('/api/users', function(req, res, next) {
//   connection.query(`select * from users;`, function (err, result) {
//     res.json(result);
//   })
// });

// router.get('/', function(req, res, next) {
//   res.render('index')
// })

// router.get('/api/houses', function(req, res, next) {
//   connection.query(`select * from houses;`, function (err, result) {
//     res.json(result);
//   })
// });
// module.exports = router;
