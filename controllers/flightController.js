const { flights } = require('../models/flightmodel')
const { v4: uuid } = require('uuid')

//Get all flight
const getFlights = async (req, res) => {
  try {
        const Flights = flights;
        res.status(200).json({ 
            valid: true,
            Flights 
            });
    } catch (error) {
        return res.status(500).json({ 
            valid: false, 
            message: error.message });
    }
}

//book flight
const bookFlight = async (req, res) => {
  try {
        const { title, price } = await req.body
        const newFlight = {
        id: uuid(),
        title,
        time: new Date().toLocaleTimeString(),
        price, 
        date: new Date().toLocaleDateString(),
        }
        const AddFlight = flights.push(newFlight)
        res
        .status(201)
        .json({ message: 'new flight booked successfully', AddFlight })
    } catch (error) {
        return res.status(400).json
        ({ 
            valid: false,
            message: error.message 
        })
    }
}

//Get single flight
const singleFlight = async (req, res) => {
  try {
      const { id } = req.params;
      const flightPlan = flights.find((user) => user.id === id);
      res
        .status(200)
        .json({ message: `The flight with ${id} found`, flightPlan })
  } catch (error) {
      return res.status(400).json({ 
          valid: false, 
          message: error.message 
      })
  }
}

//update flight
const updateFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flightPlan = flights.find((user) => user.id === id);
    const {title, price} = await req.body;
    
    flightPlan.title = title;
    flightPlan.price = price;
    res.status(200).json({
          message: `flight updated Successfully`, 
          flightPlan
        });
  } catch (err) {
        return res.status(400).json({ valid: false, message: err.message })
  }
}

//delete flight
const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params
    const flightPlan = flights.find((flight) => flight.id === id)
    flights.splice(flights.indexOf(flightPlan), 1)
    res
      .status(200)
      .json({ 
        message: `flight deleted successfully`,
        flightPlan 
      })
  } catch (error) {
    return res.status(400).json({ 
      validity: false, 
      message: error.message })
  }
}

module.exports = {
  getFlights,
  bookFlight,
  singleFlight,
  updateFlight,
  deleteFlight,
}