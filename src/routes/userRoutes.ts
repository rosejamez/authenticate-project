import { Router } from 'express';
import { addUser, getUserDetails, updateUser, deleteUser, getAllUsers } from '../controller/userController';

const router = Router();

router.post('/', addUser);
router.get('/:id', getUserDetails);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);

export default router;
