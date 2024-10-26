const express = require('express');
const router = express.Router();
const BLController = require('./controllers/BLController');
const ContainerController = require('./controllers/ContainerController');

// Rotas para BL
router.post('/bl', BLController.create);
router.get('/bl', BLController.findAll);
router.get('/bl/:id', BLController.findOne);
router.put('/bl/:id', BLController.update);
router.delete('/bl/:id', BLController.delete);

// Rotas para Container
router.post('/containers', ContainerController.create);
router.get('/containers', ContainerController.findAll);
router.get('/containers/:id', ContainerController.findOne);
router.put('/containers/:id', ContainerController.update);
router.delete('/containers/:id', ContainerController.delete);

module.exports = router;
