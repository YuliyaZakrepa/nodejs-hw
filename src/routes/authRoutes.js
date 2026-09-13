import { Router } from "express";
import { celebrate } from "celebrate";
import { registerUserSchema, loginUserSchema, requestResetEmailSchema, resetPasswordSchema } from "../validations/authValidation.js";
import { registerUser, loginUser, logoutUser, refreshUserSession,requestResetEmail, resetPassword } from "../controllers/authController.js";

const authRoute = Router();
authRoute.post('/auth/register', celebrate(registerUserSchema), registerUser);
authRoute.post('/auth/login', celebrate(loginUserSchema), loginUser);
authRoute.post('/auth/logout', logoutUser);
authRoute.post('/auth/refresh', refreshUserSession);
authRoute.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail);
authRoute.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword );
export default authRoute;
