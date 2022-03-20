import express from "express";
import CadastrosController from "../controllers/cadastrosController.js";
import FeedbacksController from "../controllers/feedbacksController.js";

const router = express.Router();

router
   .get("/cadastros", CadastrosController.mostrarCadastros)
   .get("/cadastros/:id", CadastrosController.mostrarCadastrosPorId)
   .post("/cadastros", CadastrosController.incluirCadastro)

   .get("/feedbacks/buscaPorUsuario", FeedbacksController.mostrarFeedbackPorUsuario)
   .get("/feedbacks/buscaPorRemetente", FeedbacksController.mostrarFeedbackPorRemetente)
   .get("/feedbacks", FeedbacksController.mostrarFeedbacks)
   .get("/feedbacks/:id", FeedbacksController.mostrarFeedbacksPorId)
   .post("/feedbacks", FeedbacksController.incluirFeedback)
   .put("/feedbacks/:id", FeedbacksController.editarFeedback)
   .delete("/feedbacks/:id", FeedbacksController.deletarFeedback)

export default router
   