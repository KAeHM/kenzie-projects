import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import editUserController from "../controllers/editUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUserController from "../controllers/listUser.controller";

import verifyEmailAvaliability from "../middlewares/verifyEmailAvaliability.middlewares";
import verifyAuthTokenMiddlewares from "../middlewares/verifyAuthToken.middlewares";
import verifyUserRoleMiddleware from "../middlewares/verifyUserRole.middlewares";

const router = Router();

router.post("", verifyEmailAvaliability, createUserController);
router.get(
  "",
  verifyAuthTokenMiddlewares,
  verifyUserRoleMiddleware,
  listUsersController
);
router.get("/profile", verifyAuthTokenMiddlewares, listUserController);
router.patch("/:uuid", verifyAuthTokenMiddlewares, editUserController);
router.delete("/:uuid", verifyAuthTokenMiddlewares, deleteUserController);

export default router;
