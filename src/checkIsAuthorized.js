import jwt from "jsonwebtoken";

export const checkIsAuthorizedUser = (req, res, next) => {
    const token = req.cookies["auth-token"];

    if(!token) {
        return res.status(401).json({message: "Unauthorized user"});
    }

    try {
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err) {
        return res.status(403).json({message: "Invalid or Expired token"});
    }
}