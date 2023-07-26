const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    pickup_time : { type : Date },
    start_time : { type : Date },
    end_time : { type : Date },
    // location : { lat: { type: Number }, lng: { type: Number } },
    location : { type: Object, required: true },
    status: {
        type: String,
        enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed'],
        default: 'open',
      },
    package_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'package',
    },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Delivery', deliverySchema);