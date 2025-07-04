import mongoose from "mongoose";
const {Schema, model}  = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    coverpic: {
        type: String,
        required: false
    },
    profilepic: {
        type: String,
        required: false
    },
    razorpayid:{
        type: String,
        required: false
    },
    razorpaysecret: {
        type: String,
        required: false
    },
})

export default mongoose.models.User || model("User", UserSchema);