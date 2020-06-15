'use strict';

const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.get('/usuarios/', cors(), (req, res) => {
    if (!usuarios) {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuarios);
});

app.get('/usuarios/:id', cors(), (req, res) => {
    const requestId = request.params.id;

    let usuario = usuarios.filter(usuario => {
        return usuario.id == requestId;
    });
    if (!usuario) {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario[0]);
});

app.post('/usuarios', cors(), (req, res) => {
    const usuario = {
        id: usuarios.lenght + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        website: req.body.website
    }
    usuarios.push(usuario);

    res.json(usuario);
});

app.put('/usuarios/:id', cors(), (req, res) => {
    const requestId = request.params.id;

    let usuario = usuarios.filter(usuario => {
        return usuario.id == requestId;
    })[0];

    const index = usuarios.indexOf(usuario);

    const keys = Object.keys(req.body);

    keys.forEach(key => {
        usuario[key] = req.body[key];
    });
    usuarios[index] = usuario;
    res.json(usuarios[index]);
});

app.delete('/usuarios/:id', cors(), (req, res) => {
    const requestId = request.params.id;

    let usuario = usuarios.filter(usuario => {
        return usuario.id == requestId;
    })[0];
    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);
});

const hostname = 'localhost';
const port = 3001;
app.listen(port, hostname, () => {
    console.log('Estamos escuchando en http://' + hostname + ':' + port);
});





const vec=[2,4,6,8,10];

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
  });
  

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3005");
});


app.get("/",cors(),(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send({message:"Bienvenido, ya estamos respondiendo"})
});

app.get("/usuarios/:dato?",cors(),(req,res)=>{
    if(req.params.dato){
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec[i]==parseInt(req.params.dato))
                encontrado=i;
            i++;
        }
        if(encontrado==-1)
            res.status(500).send({tipo:"Error",message:"No existe"});
        else
            res.status(200).send({tipo:"Exito",message:"Hallado en "+encontrado})
    }
    else

    if(!vec)
        res.status(500).send({tipo:"Error",message:"No se encuentra"})
    else
        res.status(200).send({message:"Todos",datos:vec})
});

app.post("/usuarios",cors(),(req,res)=>{
    console.log(req.body);
    if(!req.body.usuario || !req.body.numero){
        res.status(500).send({tipo:"ERROR",message:"faltan datos"})
    }
    else{
        let dato=parseInt(req.body.numero);
        let encontrado=-1;
        let i=0;
        while(i<vec.length){
            if(vec[i]==parseInt(req.params.dato))
                encontrado=i;
            i++;
        }
        if(encontrado==-1){
            vec.push(dato);
            res.status(200).send({tipo:"Existo",message:"El dato se ha agregado"});
        }
        else
            res.status(500).send({tipo:"Error",message:"El dato ya existe"});
    }
});
