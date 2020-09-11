const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

let app = express();

app.engine("hbs", expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res, next){
    res.render("index", {
        pageTitle: "EBDA Validator"
    })
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        pageTitle: "Page Not Found"
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Listening...');
});