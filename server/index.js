const express = require('express');
const app = express();
const PORT = 4000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('public'));

// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// })

app.use('/json_placeholder', createProxyMiddleware({
  target: "https://jsonplaceholder.typicode.com",
  pathRewrite: {
    [`^/json_placeholder`]: '',
  },
}));

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})

app.get('/info', (req, res, next) => {
  res.send('this is my proxy service');
})


// app.get('/api/shoes/:shoeId/reviews', (req, res) => {
//   let item = req.params.shoeId;
//   controllers.getReviewData(item, (err, data) => {
//     if (err) {
//       console.log('GET error', err);
//       res.status(400).send(err).end();
//     } else {
//       console.log('GET success');
//       res.status(200).send(data).end();
//     }
//   })
// })