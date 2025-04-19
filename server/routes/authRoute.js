//authRoute                                                                                                              import express from "express"; 
import {
  inscriptionController,
  loginController,
  testController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


const router = express.Router();
//routing
//inscription
router.post("/inscription", inscriptionController);
//login
router.post("/login", loginController);
router.get("/test",requireSignIn,isAdmin,testController) ;
export default router ; 