import Admin from "../model/admin.model.js";
import bcryptjs from "bcryptjs";

// export const AdminNew = async(req, res) => 
//     {
//     try {
//         const { email, password } = req.body;
//         const admin = await Admin.findOne({ email });
//         if (admin) {
//             return res.status(400).json({ message: "admin already exists" });
//         }
//         const hashPassword = await bcryptjs.hash(password, 10);
//         const baap = "Admin";
//         const createdAdmin = new Admin({
//             fullname: fullname,
//             email: email,
//             password: hashPassword,
//             profession: baap
//         });
//         await createdAdmin.save();
//         res.status(201).json({
//             message: "Admin created successfully",
//             admin: {
//                 _id: createdAdmin._id,
//                 fullname: createdAdmin.fullname,
//                 email: createdAdmin.email,
//                 profession: createdAdmin.profession

//             },
//         });
//     } catch (error) {
//         console.log("Error: " + error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

export const AdminNew = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });

        // Check if admin exists
        if (!admin) {
            return res.status(400).json({ message: "You are Not the admin so you attemp on user login" });
        }

        // If admin exists, compare passwords
        const isMatch = await bcryptjs.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({ message: "You are Not the admin so you attemp on user login" });
        }

        // If password matches, return success response
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: admin._id,
                fullname: admin.fullname,
                email: admin.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
