const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    active_delivery_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'delivery',
    },
    description : { type: String, required: true },
    weight : { type: Number, required: true },
    width : { type: Number, required: true },
    height : { type: Number, required: true },
    depth : { type: Number, required: true },
    from_name : { type: String, required: true },
    from_address : { type: String, required: true },
    from_location : { type: Object, required: true },
    to_name : { type: String, required: true },
    to_address : { type: String, required: true },
    to_location : { type: Object, required: true }
},
    {
        timestamps: true
    }

);

module.exports = mongoose.model('Package', packageSchema);