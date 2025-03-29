// import from files
import exampleModel from '../models/exampleModel.js';


// test middleware
export const testMiddleware = async (req, res, next) => {
    try {
        console.log("Success in Test Middleware!");
        next();
    } catch (error) {
        console.log(`Error: ${error}\n`.red);
        return res.status(401).send({
            success: false,
            message: "Error in Test Middleware!",
            error
        })
    }
}

