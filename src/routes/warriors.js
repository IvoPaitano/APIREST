const express = require('express');
const router = express.Router();

const warriorsControllers = require ('../controllers/warriorsControllers');

router.get('/',warriorsControllers.list);
router.get('/add',warriorsControllers.addWarriorGet);
router.post('/add',warriorsControllers.addWarriorPost);

router.get('/:id/edit',warriorsControllers.editWarriorGet);
router.post('/:id/edit',warriorsControllers.editWarriorPost);

router.get('/:id/delete',warriorsControllers.deleteWarriorGet)

module.exports = router;