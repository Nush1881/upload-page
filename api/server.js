const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './',
    filename: function(req, file, cb){
        cb(null, Date.now()+'.'+ file.mimetype.split('/')[1])
    }
})

const upload = multer({storage: storage})
app.use(cors());
app.post('/', upload.single('file'), (req, res)=> {
    if(res.statusCode === 200){
        console.log("Ok! it is 200")
    }else{
        console.log("Not Ok!")
    }
})

app.listen(3000, ()=> console.log("Listening on port 3000"))


