import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "User",
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    address: {  
        type: String,
    },
    city: {
        type: String,
    },  
    availablity: {
        type: Boolean,  
    },
    gender: {
        type: String,
    },  
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

const User = mongoose.model("User", userSchema);

export default User;