const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3080;
const urlMetadata = require('url-metadata')
const app = express();
app.use(cors());
app.use(express.json())

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

// api for metadata
app.use('/api/metadata', (req, res) => {
    const url = req.query.url
    getmetadata(url).then(function(e){
        res.send(e)
    })
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})