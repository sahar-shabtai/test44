const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3080;
const admin = require("firebase-admin");
const db = require("./db");
const app = express();
app.use(cors());
app.use(express.json())

const booksDb = db.collection('book'); 
const authorsDb = db.collection('author'); 


// function that gets a URL and returns metadata for it 
async function getmetadata(url){
    return new Promise(e =>{
        urlMetadata(url).then(
            function (metadata) { // success handler
                return e(metadata)
            },
            function (error) { // failure handler
                return e("This url is not valid")
            }
        )
    })
}
async function createAuthor(author){
    const id = (await authorsDb.get()).size + 1;
    const newAuthor = authorsDb.doc(id.toString());
    return newAuthor.set(author)
}
async function createBook(book){
    const id = (await booksDb.get()).size + 1;
    const newBook = booksDb.doc(id.toString());
    return newBook.set(book)
}
// api for metadata
app.use('/api/metadata', (req, res) => {
    const url = req.query.url
    getmetadata(url).then(function(e){
        res.send(e)
    })
});
app.get('/book', (req, res) => {
    booksDb.get().then(b =>{
        res.send(b.docs.map(doc => doc.data()))
    })
});

app.get('/book/:id', (req, res) => {
    booksDb.doc(req.params.id).get().then(b=>res.send(b))
});

app.get('/authors', (req, res) => {
    authorsDb.get().then(a =>{
        res.send(a.docs.map(doc => doc.data()))
    })
});

app.get('/authors/:id', (req, res) => {
    authorsDb.doc(req.params.id).get().then(b=>res.send(b))
});

app.post('/authors/', (req, res) => {
    createauthor()
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})