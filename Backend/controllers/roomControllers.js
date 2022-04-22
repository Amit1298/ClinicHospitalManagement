let roomData = [];

//get all room => /api/rooms
exports.getAllRooms = (req,res)=>{
    res.status(200).json({
        message: "Successfull",
        result: roomData
    })
};

//create a room => /api/create-room
exports.createRoom = (req,res)=>{
    const id = Math.random().toString(16).slice(4);
    const newRoom = {
        ...req.body,
        id: id
    }

    roomData.push(newRoom);
    res.status(200).json({
        message: "Sucessfully created room",
        result: newRoom
    })
}