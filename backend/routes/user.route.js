import express from 'express';
import { signup, signin, getAllUsers, getUserById, getCurrentUser, updateUserById, updateCurrentUser, deleteUserById, deleteCurrentUser } from '../controllers/user.controller.js';

const router = express.Router();

// POST /api/users/signup - Create a new user
router.post('/signup', signup);

// POST /api/users/signin - User login
router.post('/signin', signin);

// GET /api/users/ - Get all users
router.get('/', getAllUsers);

// GET /api/users/:id - Get user details by ID
router.get('/:id', getUserById);

// GET /api/users/me - Get current user's details
router.get('/me', getCurrentUser);

// PUT /api/users/:id - Update user details by ID
router.put("/:id", updateUserById);

// PATCH /api/users/me - Update current user's details
router.patch("/me", updateCurrentUser);

// DELETE /api/users/:id - Delete user by ID
router.delete("/:id", deleteUserById);

// DELETE /api/users/me - Delete current user
router.delete("/me", deleteCurrentUser);

export default router;
