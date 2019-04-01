const expressSanitizer = require("express-sanitizer"),
      methodOverride = require('method-override'),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      express     = require("express"),
      app = express()

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(expressSanitizer());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/Paulina_Blog_v6", { useNewUrlParser: true });
app.use(methodOverride('_method'));

// Mongoose / Model Config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  description: String,
  created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)



// const blogs = [{
//   author: "Jeph",
//   title: "The point of no return",
//   post: "This is some post content",
//   date: "March 4th 2019",
//   image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
// },{
//   author: "Mike",
//   title: "Old mans beard",
//   post: "This is some post content",
//   date: "March 4th 2019",
//   image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
// },{
//   author: "Pat",
//   title: "Wubba dubba hoekeey",
//   post: "This is some post content",
//   date: "March 4th 2019",
//   image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
// }]



app.get('/', (req, res)=>{
  res.render('index')
})

// Blog Routes

// Blog Index
app.get('/blog', (req, res)=>{
  Blog.find({}, (err, blogs)=>{
    if(err){
      console.log("Error")
    } else {
      res.render('blog', {blogs: blogs})
    }
  })
})
// Blog New
app.get('/blog/new', (req, res)=>{
  res.render('blog_new')
})
// Blog Create
app.post("/blog", (req, res)=>{
  req.body.blog.body = req.sanitize(req.body.blog.body)
  Blog.create(req.body.blog, (err, newBlog)=>{
    if (err){
      res.render('new')
    } else {
      res.redirect('/blog')
    }
  })
})
// Blog Show
app.get('/blog/:id', (req, res)=>{
  Blog.findById(req.params.id, (err, foundBlog)=>{
        if (err){
            res.redirect("/blogs");
        } else {
            res.render("blog_show", {blog: foundBlog});
        }
    });
});

app.get('/portfolio', (req, res)=>{
  res.render('portfolio')
})

app.listen(3000, ()=>{
  console.log("server started")
});
