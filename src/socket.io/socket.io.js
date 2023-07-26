const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
// const io = socketio(server);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const Delivery = require('../models/delivery');
// Configuring WebSocket events

const socketIo = async () => {
  io.on('connection', socket => {
    console.log('New WebSocket connection');

    // Listen to the 'location_changed' event
    socket.on('location_changed', async ({ _id, location }) => {
      try {
        // Update delivery location in database
        await Delivery.findByIdAndUpdate(_id, { location }, { new: true });

        // Broadcast 'delivery_updated' event to all customers
        const updatedDelivery = await Delivery.findById(_id);
        io.emit('delivery_updated', {
          event: 'delivery_updated',
          delivery_object: updatedDelivery
        });
      } catch (error) {
        console.error(error);
      }
    });

    // Écouter l'événement 'status_changed'
    socket.on('status_changed', async ({ _id, status }) => {
      try {
        let updateFields = {};
        if (status === 'picked-up') {
          updateFields.pickup_time = new Date();
        } else if (status === 'in-transit') {
          updateFields.start_time = new Date();
        } else if (status === 'delivered' || status === 'failed') {
          updateFields.end_time = new Date();
        }

        // Update delivery status in database
        await Delivery.findByIdAndUpdate(
          _id,
          { status, ...updateFields },
          { new: true }
        );

        // Broadcast 'delivery_updated' event to all customers
        const updatedDelivery = await Delivery.findById(_id);
        io.emit('delivery_updated', {
          event: 'delivery_updated',
          delivery_object: updatedDelivery
        });
      } catch (error) {
        console.error(error);
      }
    });
  });

  server.listen(process.env.SOCKET_PORT, () => {
    console.log('socket.io listening on: 3000');
  });
};

module.exports = { socketIo };
