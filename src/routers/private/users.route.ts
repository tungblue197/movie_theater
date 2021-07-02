import { Router } from "express";
import UsersController from "../../controllers/users.controller";

const router = Router();

router
  .route("/")
  .get(UsersController.getUsersWithPaging)
  .post(UsersController.insertUser)
  .put(UsersController.updateUser);

export default router;
