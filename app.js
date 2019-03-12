const bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      express     = require("express"),
      app = express()

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

const blogs = [{
  author: "Jeph",
  title: "The point of no return",
  post: "This is some post content",
  date: "March 4th 2019",
  image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
},{
  author: "Mike",
  title: "Old mans beard",
  post: "This is some post content",
  date: "March 4th 2019",
  image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
},{
  author: "Pat",
  title: "Wubba dubba hoekeey",
  post: "This is some post content",
  date: "March 4th 2019",
  image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
}]



app.get('/', (req, res)=>{
  res.render('index')
})
app.get('/blog', (req, res)=>{
  res.render('blog', {blogs: blogs})
})
app.get('/portfolio', (req, res)=>{
  res.render('portfolio')
})

app.listen(3000, ()=>{
  console.log("server started")
});
