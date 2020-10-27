const controllerAPI = {}

controllerAPI.list = (req,res) =>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM guerreros',(err,data)=>{
            res.json(data);
        })
    })
}

controllerAPI.warrior = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err,conn)=>{
        conn.query(`SELECT * FROM guerreros WHERE id=${id}`,(err,data)=>{
            res.json(data);
        })
    })
}


controllerAPI.warriorAdd = (req, res) =>{
    const warrior = req.body;
    req.getConnection((err, conn) =>{
        conn.query(`INSERT INTO guerreros VALUES (id,'${warrior.name}','${warrior.mainAttack}','${warrior.race}','${warrior.gender}')`,(err,customer) =>{
            res.json({Status : 'Warrior Saved'})
            console.log(req.body);
        })
    })
}

controllerAPI.warriorUpdate = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query(`UPDATE guerreros SET name='${req.body.name}',mainAttack='${req.body.mainAttack}',race='${req.body.race}',gender='${req.body.gender}' WHERE id=${req.params.id}`,(err, customer)=>{
            res.json({Status : 'Warrior Updated'})
        })
    })
}

controllerAPI.warriorRemove = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query(`DELETE FROM guerreros WHERE id=${req.params.id}`,(err, customer) =>{
            res.json({Status : 'Warrior Removed'})
        })
    })
}

module.exports = controllerAPI;