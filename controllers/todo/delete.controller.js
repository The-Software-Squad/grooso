const TodoModel = require('../../models/todo.model.js');

const deleteController = async(req,res) => {
    const { id } = req.params ;
    if(!id) res.status(400).send({
        "status": 400,
        "message": 'send document id'
    })

    try {
        const deleteData = await TodoModel.deleteOne({"_id": id});
        if(deleteData.deletedCound === 0){
            res.status(404).json({
                status: 404,
                "error": "Document not found",
            })
        }else{
            res.status(200).send({
                'status':200,
                "message": "document deleted successfully"
            })
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).send({
            'status': 404,
            "error": 'Internal server error'
        })
    }
}

module.exports = deleteController ;