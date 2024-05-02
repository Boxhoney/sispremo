const express = require('express');
const exPhb = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const conn = require('./db/conn');
//models imports -------------
const User = require('./models/User');
const Obra = require('./models/Obra');
//Routers-------------------------
const Pages = require('./routers/pagesRouters');
const PageControllers = require('./controllers/PageControllers');

// --------------------------------
const app = express();
const hbs = exPhb.create({partialsDir:['views/partials']})
app.engine('handlebars', exPhb.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    session({
    name:"session", 
    secret:"meu_segredo",
    resave: false, 
    saveUninitialized:false,
        store: new FileStore({
            logFn:function(){},
            path: require('path').join(require('os').tmpdir(),"sessions"),
            
        }),
    cookie:{
        secure:false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
      }   
   }),
)

app.use(flash());
app.use(express.static('public'));
app.use((req,res, next)=>{
    if(req.session.userId){
       res.locals.session = req.session
    }
    next()
})

//routers --------------------------
app.use(Pages)


conn.
sync().
//sync({force:true}).
then(()=>{
    app.listen(3000);
}).catch((err) => console(err,"banco de dados ausente!"))
