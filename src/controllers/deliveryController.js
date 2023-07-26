const Delivery = require('../models/delivery');
const io = require('../socket.io/socket.io');

exports.createDelivery = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const delivery = new Delivery(req.body);

  // Save Delivery in the database
  delivery
    .save(delivery)
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Delivery.'
      });
    });
};

// Find a single

exports.findOneDelivery = (req, res) => {
  const id = req.params.id;

  Delivery.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: 'Not found Delivery with id ' + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: 'Error retrieving Delivery with id=' + id });
    });
};

//   Retrieve all Packages

exports.findAllDelivery = (req, res) => {
  const id = req.params.id;

  Delivery.find(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving delivery.'
      });
    });
};

//   Update an object

exports.updateDelivery = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }

  const id = req.params.id;

  Delivery.findByIdAndUpdate(id, req.body)
    // Delivery.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Delivery with id=${id}. Maybe Delivery was not found!`
        });
      } else res.send({ message: 'Delivery was updated successfully.' });
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Delivery with id=' + id
      });
    });
};

//   Delete an object

exports.deleteDelivery = (req, res) => {
  const id = req.params.id;

  Delivery.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Delivery with id=${id}. Maybe Delivery was not found!`
        });
      } else {
        res.send({
          message: 'Delivery was deleted successfully!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Delivery with id=' + id
      });
    });
};
