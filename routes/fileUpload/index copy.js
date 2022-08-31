// var multer = require('multer');
const express = require("express");
const fileUploads = require(".");
let app = express.Router();

// const DIR =  './../../uploads';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, __dirname + DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, Date.now() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

// const fileUploads = upload.array('image_file');

app.post('/upload', fileUploads, (req, res) => {
    console.log(req.body);
    res.send({status: "ok", message: "Uploaded!"});
});

module.exports = app;