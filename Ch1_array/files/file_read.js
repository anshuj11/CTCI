const fs = require('fs') 

// fs.readFile('https://s3-us-west-2.amazonaws.com/periscope-public/alice-in-wonderland.txt', (err, data) => {
//     if (err) throw err;

//     console.log(data.toString());
// }) 

function getText() {
var request = new XMLHttpRequest();
    request.open('GET', 'https://s3-us-west-2.amazonaws.com/periscope-public/alice-in-wonderland.txt', true);
request.send(null);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader('Content-Type');
        if (type.indexOf("text") !== 1) {
            return request.responseText;
        }
    }
}
}

getText();