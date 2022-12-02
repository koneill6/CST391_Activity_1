const { Album } = require('./lib/app/models/Album');
const { Track } = require('./lib/app/models/Track');
const { MusicDAO } = require('./lib/app/database/MusicDAO.js')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const dbHost = "localhost"
const dbPort = 3306;
const dbUsername = "root"
const dbPassword = "root"

app.use(express.static('app/images'))
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.get('/', function (_req, res)
{
    res.send('This is the default root Route.');
})

app.get('/artists', function (_req, res)
{
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findArtists(function(artists)
    {
        res.json(artists);
    });
})

app.get('/albums', function (req, res)
{
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAllAlbums(function(albums)
    {
        res.json(albums);
    });
})

app.get('/albums/:artist', function (req, res)
{
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbums(req.params.artist, function(albums)
    {
        res.json(albums);
    });
})


app.get('/albums/search/artist/:search', function (req, res)
{
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbumsByArtist(req.params.search, function(albums)
    {
        res.json(albums);
    });
})

app.get('/albums/search/description/:search', function (req, res)
{
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbumsByDescription(req.params.search, function(albums)
    {
        res.json(albums);
    });
})

app.get('/albums/:artist/:id', function (req, res)
{
    let albumId = Number(req.params.id);
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbum(albumId, function(album)
    {
        if(album == null)
            res.status(200).json({"error" : "Invalid Album ID"})
        else
            res.status(200).json(album)
    });
 })

app.post('/albums', function (req, res)
{
    if(!req.body.title)
    {
        res.status(400).json({error: "Invalid Album Posted"});
    }
    else
    {
        let tracks = [];
        for(let x=0;x < req.body.tracks.length;++x)
        {
            tracks.push(new Track(req.body.tracks[x].id, req.body.tracks[x].number, req.body.tracks[x].title, req.body.tracks[x].lyrics, req.body.tracks[x].video));
        }
        let album = new Album(-1, req.body.title, req.body.artist, req.body.description, req.body.year, req.body.image, tracks);   
        let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.create(album, function(albumId)
        {
            if(albumId == -1)
                res.status(200).json({"error" : "Creating Album failed"})
            else
                res.status(200).json({"success" : "Creating Album passed with an Album ID of " + albumId});
        });     
      }
})

app.put('/albums', function (req, res)
{
    if(!req.body.title)
    {
        res.status(400).json({error: "Invalid Album Posted"});
    }
    else
    {
        let tracks = [];
        for(let x=0;x < req.body.tracks.length;++x)
        {
            tracks.push(new Track(req.body.tracks[x].id, req.body.tracks[x].number, req.body.tracks[x].title, req.body.tracks[x].lyrics, req.body.tracks[x].video));
        }
        let album = new Album(req.body.id, req.body.title, req.body.artist, req.body.description, req.body.year, req.body.image, tracks);  
        let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.update(album, function(changes)
        {
            if(changes == 0)
                res.status(200).json({"error" : "Updating Album passed but nothing was changed"})
            else
                res.status(200).json({"success" : "Updating Album passed and data was changed"});
        });     
      }
})

app.delete('/albums/:artist/:id', function (req, res)
{
    let albumId = Number(req.params.id);
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.delete(albumId, function(changes)
    {
        if(changes == 0)
            res.status(200).json({"error" : "Delete Album failed"})
        else
            res.status(200).json({"success" : "Delete Album passed"})
    });
 })

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
});
