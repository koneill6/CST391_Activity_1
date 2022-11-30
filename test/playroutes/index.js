import data from './data/data.json'
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   });
app.get('/', function (_req, res)
{
res.send('This is the default root Route.');
})
app.get('/users', function (_req, res){
    res.json(data)
})
app.get('/users/:id', function (_req, res)
{
    console.log(_req.params.id)
    let userId = Number(_req.params.id)

    if(userId >= data.length){
        res.status(200).json({"error" : "Invalid User Id"})
    }else {
        res.status(200).json(data[userId - 1])
    }
})
app.post('/users', function (_req, res)
{
    console.log(JSON.stringify(_req.body))
    // res.send(_req.body.first_name)
    if(!_req.body.first_name || !_req.body.last_name || !_req.body.email || !_req.body.gender || !_req.body.ip_address){
        res.send("Missing first or last name")
    }
    else{
        var newId = data[data.length-1].id+1
        var user = { id: newId, first_name: _req.body.first_name, last_name: _req.body.last_name, email: _req.body.email, gender: _req.body.gender, ip_address: _req.body.ip_address}
        data.push(user)
        res.status(200).json({error: "New user added", location: "/users/" + (newId-1)})
    }
})
app.listen(port, () =>
{
console.log(`Example app listening on port ${port}!`);
});
