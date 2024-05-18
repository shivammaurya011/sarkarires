import express from 'express';
import { 
  createPost, 
  getAllPosts, 
  getPostById, 
  updatePostById, 
  deletePostById,
  likePost,
  dislikePost
} from '../controllers/post.controller.js';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getAllPosts);

// Get a post by ID
router.get('/:id', getPostById);

// Update a post by ID
router.put('/:id', updatePostById);

// Delete a post by ID
router.delete('/:id', deletePostById);

// Like a post
router.post('/:id/like', likePost);

// Dislike a post
router.post('/:id/dislike', dislikePost);

export default router;
