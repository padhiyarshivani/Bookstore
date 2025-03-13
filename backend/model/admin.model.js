import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
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
    profession:{
        type:String,
        required:true,
    }
});
const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;