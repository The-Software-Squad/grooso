const TodoModel = require('../../models/todo.model.js')

const updateContoller = async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    console.log(req.params, req.body);
    // Check if ID and update data are provided
    if (!id) {
       return res.status(400).json({ error: 'Document ID is required' });
    }
    if (!update || Object.keys(update).length === 0) {
       return res.status(400).json({ error: 'Update data is required' });
    }

    try {
        const updateData = await TodoModel.findOneAndUpdate({ "_id": id }, update);
        if (updateData) {
           return res.status(200).json({
                "status": 200,
                "message": updateData
            }); // Send the updated document as a JSON response
        } else {
           return res.status(500).json({ error: 'Failed to update the data' }); // If document not found
        }

    } catch (error) {
       return res.status(500).json({
            "error": 'internal server error.'
        })
    }

}

module.exports = updateContoller;