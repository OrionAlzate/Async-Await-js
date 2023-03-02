// funcion em5 para solicitar información de un usuario (ejemplo)

//calback
function requestHandler(req, res){

    user.findById(req.userId, function(err, user){
        if (err){
            res.send(err);
        } else {
            Task.findById(user.taskId, function(err, tasks){
                if(err){
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err){
                        if (err){
                            return res.send(err)
                        } else {
                            res.send("Task completed");
                        }
                    })
                }
            })
        }
    })
    // otro codigo
}