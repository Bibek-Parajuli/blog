const express=require('express');
const cors=require('cors')
const app=express();
const exRouter=require('./routes/index')
const dbRouter=require('./routes/db')
require('./modules/index')

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static('public'))
app.use(cors());
app.use(express.json());
app.use("/", exRouter);
app.use("/api/blogs", dbRouter);


app.listen(3000);