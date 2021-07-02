import { Router } from "express";
import UsersController from "../../controllers/users.controller";

const router = Router();

router.get('/',UsersController.getUsersWithPaging);
router.post('/',UsersController.insertUser);
router.put('/',UsersController.updateUser)
router.post('/trash', UsersController.deleteUsers);
router.get('/trash', UsersController.getUserDeletedWithPaging);
router.get('/',UsersController.getUserDeletedWithPaging)
router.put('/block/:id', UsersController.blockUser)
router.delete('/:id',UsersController.moveToTrash);

export default router;
