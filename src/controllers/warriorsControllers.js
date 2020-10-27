const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM guerreros',(err, rows) =>{
            res.render('warrior',{
                warriors : rows
            })
        })
    })
};

controller.addWarriorGet = (req,res) =>{
    res.render('addWarrior')
}

controller.addWarriorPost = (req,res) =>{
    let warrior = req.body;
    req.getConnection((err, conn) =>{
        conn.query(`INSERT INTO guerreros VALUES (id,'${warrior.name}','${warrior.attack}','${warrior.race}','${warrior.gender}')`,(err,customer)=>{
            res.redirect('/');
        });
    })
}

controller.editWarriorGet = (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query(`SELECT * FROM guerreros WHERE id=${req.params.id}`,(err,rows)=>{
            res.render('editWarrior',{
                warrior: rows[0]
            })
        });
    })
}

controller.editWarriorPost = (req, res) =>{
    let warrior = req.body;
    req.getConnection((err, conn) =>{
        conn.query(`UPDATE guerreros SET name='${warrior.name}',mainAttack='${warrior.attack}',race='${warrior.race}',gender='${warrior.gender}' WHERE id=${req.params.id}`,(err,customer)=>{
            res.redirect('/');
        });
    })
}

controller.deleteWarriorGet = (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query(`DELETE FROM guerreros WHERE id=${req.params.id}`,(err,customer)=>{
            res.redirect('/');
        });
    })
}

module.exports = controller;