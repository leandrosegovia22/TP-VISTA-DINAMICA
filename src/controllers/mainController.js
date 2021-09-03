const platos = require('../data/platos_db')

module.exports = {
    index : (req,res) => {
    
        return res.render('index', { 
            platos, 
        })
    },
    detail : (req,res) => {

        let plato = platos.find(plato => plato.id === +req.params.id);
        /* console.log(plato)
        res.send(plato) */
        return res.render('detalleMenu', {
            plato,
        })
    }
    
}