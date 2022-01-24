import 'reflect-metadata';
import express from "express";
import './database'
import { router } from "./routes";
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './shared/container'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(3000, () => {
    console.log('Server is running')
})
