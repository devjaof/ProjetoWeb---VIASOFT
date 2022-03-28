import express from "express";
import FeedbacksController from "../controllers/feedbacksController.js";

const router = express.Router();

router
   .get("/feedbacks", FeedbacksController.mostrarFeedbacks)
   .post("/feedbacks", FeedbacksController.incluirFeedback)
   .put("/feedbacks/:id", FeedbacksController.editarFeedback)
   .delete("/feedbacks/:id", FeedbacksController.deletarFeedback)

export default router
   