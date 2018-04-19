var express = require('express');
var videocontroller = require('../controller/videoAppController');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

/* GET home page. */
router.get('/', videocontroller.get_all_movies);

router.get('/movies/:id/:vidsrc', videocontroller.get_one_movie);

router.post('/api', videocontroller.post_new_movie);
//db an sql query to post a revi
module.exports = router;



// router.get('/', (req, res, next) => {
//   // do an SQL query to get all of the movies, including genre
//   connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows)=> {
//     if (error) {
//       console.log(error);
//       // throw error;
//     } else {
//       res.render('home', {
//         defaultMovie : rows[Math.floor(Math.random() * rows.length)],
//         data : JSON.stringify(rows),
//         mainpage : true,
//         videopage : false
//       });
//     }
//   })
// });
// router.get('/movies/:id/:vidsrc', (req, res) => {
//   //get the
//   console.log(req.params.id, req.params.vidsrc);
//   connect.query(`SELECT * FROM tbl_comments WHERE comments_movie ="${req.params.id}"`, (err, rows) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows);
//       res.render('movie', {
//         movie : req.params.id,
//         trailer : req.params.vidsrc,
//         data : JSON.stringify(rows),
//         mainpage : false,
//         videopage : true
//       });
//     }
//   })
// });
// module.exports = router;
