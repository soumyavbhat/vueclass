var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

/* add review to the comment table*/
router.post('/', (req, res) =>{
  //db an sql query to post a review
  console.log('post a review');
  connect.query(`INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP, "${req.body.id}", "${req.body.stars}");`, (error, data) => {
    if (error) {
      // throw error;
      console.log(error);
    }else {
      res.json(data);
    }
  })
});


module.exports = router;
