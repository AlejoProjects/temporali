const EmpresaModel = require('../models/Empresa.js');

const createEmpresa = (req, res) => {
    EmpresaModel.createEmpresa(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
        return res.status(500).send({ message:"Algún error en la creación de la empresa, "+error });
    });
};
const getEmpresa = (req, res) => {
    EmpresaModel.getEmpresa(req.params.id)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error,  "+error })
    });
};
const getAllEmpresas = (req, res) => {
    EmpresaModel.getAllEmpresas()
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"Ocurrio un error , "+error })
    });
};
module.exports = {
    createEmpresa,
    getEmpresa,
    getAllEmpresas
}