const express = require('express');
const {getAllRoom, createRoom, updateRoom, deleteRoom}  = require('../controllers/roomControllers.js');
const router = express.Router();

router.route('/rooms').get(getAllRoom);

router.route('/create-room').post(createRoom);

router.route('/room/:id').put(updateRoom);

router.route('/room/:id').delete(deleteRoom);

module.exports = router;