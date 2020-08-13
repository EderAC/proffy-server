import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;

// routes.delete('/users/:id', (request, response) => {
//     // params retorna os parametros
//     console.log(request.params)
//     return response.json([
//         {name: 'Diego', age:21},
//         {name: 'Eder', age:23}
//     ])
// })

// routes.get('/users', (request, response) => {
//     // query retorna os dados para query
//     console.log(request.query)
//     return response.json([
//         {name: 'Diego', age:21},
//         {name: 'Eder', age:23}
//     ])
// })

