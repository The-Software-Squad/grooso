const TodoModel = require("../../models/todo.model");

const createController = async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    //validation
    if (!title.trim() && !description.trim()) res.send({ 'status': 400, "message": 'both title and description required .' })
    //new data  defined
    const newData = new TodoModel({
        "title": title,
        "description": description
    })
    try {
        const savedData = await newData.save();
        res.status(201).send(savedData)
    } catch (error) {
        res.sendStatus(500).send({
            'error': 'Internal server error'
        })
    }

}

module.exports = createController ;