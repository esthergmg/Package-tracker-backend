const Package = require('../models/package');
const io = require('../socket.io/socket.io');

exports.createPackage = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const packages = new Package( req.body );

  // Save Package in the database
  packages
    .save(packages)
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Package.'
      });
    });
};

//   Find a single

exports.findOnePackage = (req, res) => {
  const id = req.params.id;

  Package.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: 'Not found Package with id ' + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: 'Error retrieving Package with id=' + id });
    });
};

//   Retrieve all Packages

exports.findAllPackage = (req, res) => {
  const id = req.params.id;

  Package.find(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Packages.'
      });
    });
};

//   Update an object

exports.updatePackage = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }

  const id = req.params.id;

  Package.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Package with id=${id}. Maybe Package was not found!`
        });
      } else res.send({ message: 'Package was updated successfully.' });
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Package with id=' + id
      });
    });
};

//   Delete an object

exports.deletePackage = (req, res) => {
  const id = req.params.id;

  Package.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Package with id=${id}. Maybe Package was not found!`
        });
      } else {
        res.send({
          message: 'Package was deleted successfully!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Package with id=' + id
      });
    });
};

