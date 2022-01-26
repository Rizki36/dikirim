import { Express } from 'express-serve-static-core'
import * as IndexController from '../controllers/index.controller'
import * as UserController from '../controllers/user.controller'
import { validate } from "../middlewares/validators/wrapper.validator";
import { indexValidator } from "../middlewares/validators/index.validations";

/**
 *
 * @param app
 */
export const api = (app: Express) => {
    app.get('/', IndexController.index)
    app.post('/', validate(indexValidator), IndexController.indexPost)
    app.get('/user', UserController.getUsers)
    app.post('/user', UserController.createUser)
    app.delete('/user/:id', UserController.deleteUser)
    app.post('/user/:id', UserController.updateUser)
}