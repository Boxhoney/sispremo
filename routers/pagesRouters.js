const express = require('express');
const PageControllers = require('../controllers/PageControllers');
const router = express.Router();

router.get('/',PageControllers.home);
router.get('/1000',PageControllers.adicionarObra);
router.get('/2000',PageControllers.obra);
router.get('/3000',PageControllers.login);
router.get('/4000',PageControllers.cadastrar);


module.exports = router;