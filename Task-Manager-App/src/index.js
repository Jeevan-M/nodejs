const express = require("express")
require("./db/db_connect_mangoose")
const User = require("../src/models/user")
const Task = require("../src/models/task")


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/users", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get("/users", (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch(() => {
        res.status(500).send()
    })
})

app.get("/users/:id", (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.post("/tasks", (req, res) => {
    const task = new Task(req.body)
    task.status(201).save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        if (!tasks) {
            return res.status(404).send()
        }
        res.send(tasks)
    }).catch((er) => {
        res.status(500).send(er)
    })
})

app.get("/tasks/:id", (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((er) => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})