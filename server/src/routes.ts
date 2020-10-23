import express from 'express'

import UsersControllers from './controllers/UsersControllers'
import ClassesControllers from './controllers/ClassesControllers'
import ConnectionsControllers from './controllers/ConnectionsControllers'
import AuthControllers from './controllers/AuthControllers'

const routes = express.Router()

const usersControllers = new UsersControllers()
const authControllers = new AuthControllers()
const classesControllers = new ClassesControllers()
const connectionsControllers = new ConnectionsControllers()

routes.post('/users', usersControllers.create)

routes.post('/login', authControllers.create)

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)

export default routes 