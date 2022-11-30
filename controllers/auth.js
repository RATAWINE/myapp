const User = require("../models/User")


exports.newUser = async (req, res)=>{
    const {username, email, password} = req.body

    try {
        const newUser = await User.create({
            username,
            email,
            password
        })
        res.status(200).json({
            status:"success",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        })
    }
}