let roomData = [];

//get all rooms => /api/rooms
exports.getAllRoom = (req,res)=>{
    const data = {
        message: "Sucessfull",
        result: roomData,
        count: roomData.length
    };
    res.status(200).json(data);
    console.log(data);
    console.log(req.body);
}

//create a room => /api/create-room
exports.createRoom = (req,res)=>{
    const uniqueId = Math.random().toString(16).slice(4);
    const newRoom = {
        ...req.body,
        id: uniqueId
    };
    console.log(newRoom);

    roomData.push(newRoom);
    console.log(roomData);
    res.status(200).json({
        message: "Sucessfully created the Room",
        result: newRoom
    });
};

//create a room => /api/room/id
exports.updateRoom = (req,res)=>{
    let roomId = req.params.id;
    console.log(roomId);
    let room = roomData.find(item=>item.id === roomId)
    console.log(room);
    if(!room){
        res.status(404).json({
            message:"Book not fount"
        })
    }else{
    let updatedRoom = {
         ...room,
         ...req.body
    };
    
    roomData = roomData.map((el)=>el.id === roomId ? updatedRoom: el);
    
    res.status(200).json({
        message:"Scucessfully updated the room",
        result: updatedRoom
    });
  }
}

exports.deleteRoom = (req,res)=>{
    let roomId = req.params.id;
    let room = roomData.find(item=>item.id === roomId);
    if(!room){
        res.status(404).json({
            message: "Room not found"
        });
    }else{
    roomData = roomData.filter(item => item.id !== roomId);
    res.status(200).json({
        message: "SucessFully Deleted the book",
        result: room
    });
  }
}

/*
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
*/