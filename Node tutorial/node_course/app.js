const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogroutes');

const app = express();//invoking a fn

//connect to Mongodb
const dbURI = 'mongodb+srv://paddu123:paddu1234@nodetuts.if1m16z.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine','ejs');



//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

//middleware
// app.use((req, res,next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
//   });

//mongoose and mango sandbox routes
app.get('/add-blog', (req,res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
  });
  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get('/single-blog', (req, res) => {
    Blog.findById('62bc8ff9c248e07651ef141c')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

//routes
app.get('/',(req,res) => {
    //res.send('<p><center>Homepage</center></p>');
    // res.sendFile('./viewss/index.html', { root: __dirname});

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title :'home', blogs });
});


app.use((req, res,next) => {
    console.log('in the next middleware');
    next();
  });

app.get('/about',(req,res) => {
    //res.send('<p><center>About page</center></p>');
    //res.sendFile('./viewss/about.html', { root: __dirname});
    res.render('about', {title :'About'});

});

//blog routes
app.use('/blogs',blogRoutes);

//error page
app.use((req,res) => {
    res.status(404).render('404',{title :'404'});
});