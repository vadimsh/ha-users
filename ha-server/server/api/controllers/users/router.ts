import express from 'express';
import controller from './controller'
export default express.Router()
    .get('/', controller.all)
    .post('/', controller.create)
    .post('/login', controller.login)
    .get('/:id', controller.byId);