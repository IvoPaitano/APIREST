const express = require('express');
const { warrior } = require('../../controllers/API/warriorsControllersAPI');
const router = express.Router();

const warriorsControllersAPI = require('../../controllers/API/warriorsControllersAPI');

router.get('/',warriorsControllersAPI.list);
router.get('/:id',warriorsControllersAPI.warrior);
router.post('/add',warriorsControllersAPI.warriorAdd);
router.put('/update/:id',warriorsControllersAPI.warriorUpdate);
router.delete('/delete/:id',warriorsControllersAPI.warriorRemove);

module.exports = router;