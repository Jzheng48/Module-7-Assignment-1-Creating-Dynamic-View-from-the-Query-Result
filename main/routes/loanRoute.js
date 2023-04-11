const express = require('express')
const router = express.Router();
const loanController = require('../controllers/loanController')


/*router.route('/')
.get( loanController.getData)
*/

router.get('/', async (req, res) => {
    const loans = await loanController.getData();
    res.render('index', { data: loans });
    //res.json(loans);
  });


module.exports = router
