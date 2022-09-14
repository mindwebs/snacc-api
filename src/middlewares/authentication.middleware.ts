import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWTPayload } from "../interfaces/user.interface";

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // step 1 - fetch token from the header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) return res.status(403).json({ "message": "token does not exist in req header" });

        // step 2 - use jwt.verify() to unhash the token using the initial JWT_SECRET we had used to hash it.
        const decodedPayload: JWTPayload = jwt.verify(token, String(process.env.JWT_SECRET)) as JWTPayload;

        if (!decodedPayload) return res.status(403).json({ "message": "Invalid token" });

        // step 3 - add the payload in the req body.
        req.body.user = decodedPayload;

        // send the flow of control to the next middleware / controller as defined in the route definition.
        next();
    } catch (err: unknown) {
        return res.status(500).json({ "message": "Internal Server Error"});
    }
}