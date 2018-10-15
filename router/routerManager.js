var express = require('express');

var router = express.Router();

var homeController = require('../controller/HomeController');
var adminController = require('../controller/AdminController');


///Main Page
router.get('/', homeController.index);
router.post('/', homeController.indexSendMessage);

///Admin Panel
router.get('/AdminPanel', adminController.index);
router.post('/deleteMessage', adminController.deleteMessage);

router.post('/insertProject', adminController.insertProject);
router.post('/deleteProject', adminController.deleteProject);

router.post('/updateProject', adminController.updateProject)
router.get('/updateProject?:id', adminController.updateProject)


router.post('/insertTeam', adminController.insertTeam);
router.post('/deleteTeam', adminController.deleteTeam);
router.post('/updateTeam', adminController.updateTeam)
router.get('/updateTeam?:id', adminController.updateTeam)



/// Deneme Page
router.get('/deneme', homeController.deneme);
router.post('/deneme', homeController.denemeSendMessage);

module.exports = router;