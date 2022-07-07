const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Look mama can write NODE asdfasdf asdfasdf ok auto restart asdfasdfasdf ar br cr dr ');
});

const users = [
    {id:1, name:'Sabana', email:'sabana@gmail.com', phone: '01713420140'},
    {id:2, name:'Shabnoor', email:'sabana1@gmail.com', phone: '01714420140'},
    {id:3, name:'Suchorita', email:'sabana2@gmail.com', phone: '01715420140'},
    {id:4, name:'srabonti', email:'sabana3@gmail.com', phone: '01716420140'},
    {id:5, name:'sabila', email:'sabana4@gmail.com', phone: '01717420140'},
    {id:6, name:'sohana', email:'sabana5@gmail.com', phone: '01718420140'},
    {id:7, name:'suchoonda', email:'sabana6@gmail.com', phone: '01719420140'},
]

app.get('/users', (req, res) =>{
    res.send(users);
});

app.post('/user', (req, res) =>{
    console.log('Request ', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send('user');
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
    
})

app.listen(port, () => {
    console.log('listening to port', port);
  })