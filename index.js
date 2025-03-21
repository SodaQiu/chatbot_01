// const express = require('express')
// const app = express()
// const port = 5000
// // // 端口号


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/echochat')
//   .then(() => console.log("MongoDB Connected!"))
//   .catch(err => console.error(err));


// app.get('/', (req, res) => {
//   res.send('Hello World!~~ good')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const { User } = require("./models/User");
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.post('/register', (req, res) => {

//   const user = new User(req.body)

//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err })
//     return res.status(200).json({
//       success: true
//     })
//   })
// })


const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');

const config = require('./config/key')

// 连接数据库  'mongodb://127.0.0.1:27017/echochat'
mongoose.connect(config.mongoURL)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!~~ good');
});




// 设置请求体解析
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { User } = require("./models/User");

// 注册接口
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    // 使用 async/await 保存数据
    await user.save();
    return res.status(200).json({
      success: true
    });
  } catch (err) {
    return res.json({ success: false, err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
