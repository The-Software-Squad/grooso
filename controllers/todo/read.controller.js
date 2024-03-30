const TodoModel = require("../../models/todo.model");

const readController = async (req, res) => {
    try {
        const allData =await TodoModel.find();
        res.status(200).send({
            "status":200,
            "data": allData
        });
    } catch (error) {
        console.log(error);
       return res.status(401).send({
            "message": 'error fetching data',
            'status' : 401
        })
    }

}

module.exports = readController ;