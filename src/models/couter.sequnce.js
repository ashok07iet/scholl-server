const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    _id:String,
    sequence_value: Number
});
const counterModel = mongoose.model('Counters', schema);
module.exports = {
    nextVal: async function () {
        const doc = await counterModel.findOneAndUpdate({_id:"roll_number"}, { $inc: { sequence_value: 1 } }, { new: true });
        return doc.sequence_value;
    }
}