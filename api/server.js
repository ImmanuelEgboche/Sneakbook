const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors());
server.use(express.json());

const loginRoutes = require("./controllers/auth")
const postsRoutes = require("./controllers/posts")
const friendsRoutes = require("./controllers/users")

server.get('/', (req, res) => res.send('Hello, world!'))

// server.use("/friends", friendsRoutes)
// server.use("/posts", postsRoutes)
// server.use("/login", loginRoutes)

module.exports = server