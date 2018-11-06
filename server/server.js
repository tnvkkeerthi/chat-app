var express = require("express"),
    app = express();
const path = require("path");
const publicPath = path.join(__dirname,'../public');

console.log(publicPath);

app.use(express.static(publicPath));
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("chat app Started");
});
