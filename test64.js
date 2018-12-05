var base64Img = require('base64-img');
var fs = require('fs')
var data = base64Img.base64Sync('/home/ddmadmin/Downloads/Saad/google-images-master/1.jpg');

var filepath = base64Img.imgSync(data, '/home/ddmadmin/Downloads/Saad/google-images-master', 'file2.jpg');
//fs.writeFile("/home/ddmadmin/Downloads/Saad/google-images-master/file2.jpg", filepath, function(err) {});

