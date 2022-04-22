const express = require('express');
const {getAllRoom, createRoomm}  = require('../controllers/roomControllers.js');
const router = express.Router();

router.route('/rooms').get(getAllRoom);

router.route('/create-room').post(createRoomm);

module.exports = router;