const mongoose = require ("mongoose");

//import schema from mongoose
const schema = mongoose.schema;

//creation schema model contact
const contactSchema = new schema ({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    phone: {
        type:String,
    },
});

//export schema contact model
module.exports = contact = mongoose.model("contact",contactSchema);