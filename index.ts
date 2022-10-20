import http from "http"
import app from "./app"
import { connectDb } from "./utils/db.util"
import dotenv from "dotenv"

dotenv.config()

const PORT:number = Number(process.env.PORT) || 8080


const server = http.createServer(app)

server.listen(PORT, async () => {
    await connectDb()
    console.log(`listening on ${PORT}`)
})

