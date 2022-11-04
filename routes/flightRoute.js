const express = require('express')
const router = express.Router()

const {
  getFlights,
  bookFlight,
  singleFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flightController');


router.route('/').get(getFlights)
router.route('/').post(bookFlight)
router.route('/:id').get(singleFlight)
router.route('/:id').put(updateFlight)
router.route('/:id').delete(deleteFlight)

module.exports = router