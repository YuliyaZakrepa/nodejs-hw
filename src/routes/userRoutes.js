import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { updateUserAvatar } from "../controllers/userController.js";
import { upload } from "../middleware/multer.js";

const userRoute = Router();
userRoute.patch('/users/me/avatar', authenticate, upload.single('avatar'), updateUserAvatar);
export default userRoute;
