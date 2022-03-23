import express from "express";
import router from "./Routes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Projeto Web - VIASOFT"})
    })

    app.use(
        express.json(),
        router
    )
}

export default routes 