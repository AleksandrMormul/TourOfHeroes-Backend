const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const jsonParser = express.json();

router.get('/', heroController.hero_detail);
router.get('/api/heroes/:id', heroController.hero_get);
router.route('/api').post(jsonParser, heroController.hero_post);
router.route('/api').put(jsonParser, heroController.hero_update);
router.route('/api/heroes/:id').delete(heroController.hero_delete);

module.exports = router;
