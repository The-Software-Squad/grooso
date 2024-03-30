const TodoModel = require('../../models/todo.model.js');

const deleteController = async(req,res) => {
    const { id } = req.params ;
    if(!id){
       return res.status(400).send({
            "status": 400,
            "message": 'send document id'
        })
    } 

    try {
        const deleteData = await TodoModel.deleteOne({"_id": id});
        if(deleteData.deletedCound === 0){
           return res.status(404).json({
                status: 404,
                "error": "Document not found",
            })
        }else{
           return res.status(200).send({
                'status':200,
                "message": "document deleted successfully"
            })
        }
       
    } catch (error) {
        console.error(error);
       return res.status(500).send({
            'status': 404,
            "error": 'Internal server error'
        })
    }
}

module.exports = deleteController ;