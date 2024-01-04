var express = require('express');
var router = express.Router();

var user = require('../controler/controler');
/* GET home page. */
router.get('/',user.select_data);
router.post('/insert',user.insert);
router.post('/update/:id',user.update_data);
router.get('/delete/:id',user.delete_data);


router.post('/pending/:id',user.pen);
router.get('/pending',user.pending);

router.post('/running/:id',user.run);
router.get('/running',user.running);

router.post('/complate/:id',user.com);
router.get('/complate',user.complate);

router.post('/dicline/:id',user.dic);
router.get('/dicline',user.dicline);

module.exports = router;
