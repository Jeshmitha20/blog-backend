import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email: email, password: password});
    if(user){
        const token = jwt.sign(
            {email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );
        res.cookie("auth-token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
        });
        return res.json(user);
    }else{
        res.status(401).json({message: "Unauthorized user"});
    }
}

export const createUser = async (req, res) => {
    try {
        console.log("req body is : ",req.body);
        const {firstName, lastName, email, password} = req.body;

        if(!firstName || !lastName || !email || !password) {
            res.status(400).json({message: "Invalid parameters"});
        }

        const user = new User({firstName, lastName, email, password});
        user.save();
        console.log("User data is: ",user);
        res.status(201).json({message: "User has been created successfully", user});
    }catch(err) {
        res.status(500).json({error: err.message})
    }

}

export const logout = async (req, res) => {
    try {
        console.log("inside logout");
        console.log("auth token is:",req.cookies);
        res.clearCookie("auth-token");
        res.json({message: "Logged out successfully"});
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}