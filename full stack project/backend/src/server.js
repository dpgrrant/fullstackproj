const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var cors = require('cors')
app.use(cors())
const port = process.env.PORT || 4000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
app.use(bodyParser.json())



app.use(express.json())


app.get('/', async (req, res) =>  {
  const allQuotes =  await prisma.post.findMany({
    include: {author: true },
  });
  res.json({data:allQuotes});

  
});
app.post('/register', async (req, res) =>  {
  const createdUser=await prisma.user.create({
    data:{
      username:req.body.Username,
      password: req.body.Password,
    }
  })
  res.json(createdUser)
});

app.post('/create', async (req, res) =>  {

  const {title,text}=req.body
  const goal= +req.body.goal
  const createdPost=await prisma.post.create({
    data:{
      title,
      text,
      goal,
      author:{ connect: { id: 1 } }
    }
  })
  res.json(createdPost)
});

app.delete('/post/:id',async (req, res)=>{
  const id  = +req.params.id

  const deleted=await prisma.post.delete({
    where:{
      id: id,
    }
  })
  res.json(deleted)
});

app.get(`/post/:id`, async (req, res) => {
  const id  = +req.params.id
  const found = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: { author: true }
  })
  res.json(found)
})


app.put('/editprofile', async (req, res) => {
  const upsertProfile = await prisma.profile.upsert({
    where: {
      userId: 1,
    },
    update: {
      bio: req.body.bio,
      about:req.body.about
    },
    create: {
      bio: req.body.bio,
      about:req.body.about,
      author:{ connect: { id: 1 } }
    },
  })
})

app.get(`/profile/:id`, async (req, res) => {
  const id  = +req.params.id
  const found = await prisma.profile.findUnique({
    where: {
      userId: id,
    }
  })
  res.json(found)
})


app.get(`/allPosts/:id`, async (req, res) => {
  const id  = +req.params.id
  const found = await prisma.post.findMany({
    where: {
      authorId: id,
    }
  })
  res.json(found)
})


app.listen(port, () => {
  console.log(`"server on localhost:4000" ${port}`);
});
