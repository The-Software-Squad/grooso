const TodoModel = require('../../models/todo.model.js')

const updateContoller = async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    
    console.log(req.params, req.body);
    // Check if ID and update data are provided
    if (!id) {
        res.status(400).json({ error: 'Document ID is required' });
    }
    if (!update || Object.keys(update).length === 0) {
        res.status(400).json({ error: 'Update data is required' });
    }

    try {
        const updateData = await TodoModel.findByIdAndUpdate(id, update);
        if (updateData) {
            res.status(200).json({
                "status": 200,
                "data": updateData
            }); // Send the updated document as a JSON response
        } else {
            res.status(404).json({ error: 'Document not found' }); // If document not found
        }

    } catch (error) {
        res.status(500).json({
            "error": 'internal server error.'
        })
    }

}

module.exports = updateContoller;