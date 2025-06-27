"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/tasks", (req, res) => {
    try {
        const task = (0, app_1.addTask)(req.body);
        res.status(201).json(task);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.get("/tasks", (_req, res) => {
    res.json((0, app_1.listTasks)());
});
app.get("/tasks/upcoming", (_req, res) => {
    res.json((0, app_1.getUpcomingTasks)());
});
exports.default = app;
