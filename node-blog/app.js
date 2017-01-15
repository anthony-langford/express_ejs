/* app.js */

// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Tony',
    title: 'What are ligers?',
    body: 'Ligers are my soul.'
  },
  {
    id: 2,
    author: 'Unicorn',
    title: 'Contemplating the Meaning of Life',
    body: 'I have one corn.'
  },
  {
    id: 3,
    author: 'Dog',
    title: 'Woof',
    body: 'Feed me.'
  },
  {
    id: 4,
    author: 'EPIC AUTHOR',
    title: 'EPIC TITLE',
    body: 'EPIC BODY'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')