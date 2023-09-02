const express = require("express");
const favoriteRouter = express.Router();
const authenticate = require("../authenticate");
const Favorite = require("../models/favorite");
const cors = require("./cors");

favoriteRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {})
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {})
    .delete(
        cors.corsWithOptions,
        authenticate.verifyUser,
        (req, res, next) => {}
    );

favoriteRouter
    .route("/:campsiteId")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {})
    .delete(
        cors.corsWithOptions,
        authenticate.verifyUser,
        (req, res, next) => {}
    );

module.exports = favoriteRouter;
