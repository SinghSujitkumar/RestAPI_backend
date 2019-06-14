const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja schema and model
// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   },
const GeoSchema = new Schema({
	type: {
		type: String,
		default: 'Point'
	},
	coordinates: {
		type: [ Number ],
		index: '2dsphere'
	}
});
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [ true, 'Name required' ]
	},
	rank: {
		type: String
	},
	available: {
		type: Boolean,
		default: false
	},
	geometry: GeoSchema
});
const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;
