import express from "express"
import http from "http"
import { connectDb } from "./utils/db.util"

const PORT = 8080

const app = express()

const server = http.createServer(app)

server.listen(PORT, async () => {
    await connectDb()
    console.log(`listening on ${PORT}`)
})

