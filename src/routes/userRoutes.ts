import { Router } from 'express';
import { createUser, getUserById } from '../controllers/userController';
import { validateDto } from '../middlewares/validateDto';
import { CreateUserDto } from '../dtos/createUser.dto';

const router = Router();

router.post('/users', validateDto(CreateUserDto) as any, createUser as any);
router.get('/users/:id', getUserById as any);

export default router;
