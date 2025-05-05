const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const EventController = require('../controllers/EventController');

router.post('/', auth, EventController.createEvent);
router.get('/', auth, EventController.getAllEvents);
router.get('/:id', auth, EventController.getEventById);
router.patch('/:id', auth, EventController.updateEvent);
router.delete('/:id', auth, EventController.deleteEvent);

module.exports = router;