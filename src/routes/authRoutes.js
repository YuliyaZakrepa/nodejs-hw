import { Router } from "express";
import { celebrate } from "celebrate";
import { registerUserSchema, loginUserSchema } from "../validations/authValidation.js";
import { registerUser, loginUser, logoutUser, refreshUserSession} from "../controllers/authController.js";

const authRoute = Router();
authRoute.post('/auth/register', celebrate(registerUserSchema), registerUser);
authRoute.post('/auth/login', celebrate(loginUserSchema), loginUser);
authRoute.post('/auth/logout', logoutUser);
authRoute.post('/auth/refresh', refreshUserSession);
export default authRoute;
