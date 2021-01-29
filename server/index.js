const express = require('express');
const app = express();
const PORT = 2000;
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('public'));

// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// })

// app.use('api/shoes/38/reviews', createProxyMiddleware({
//   target: "http://localhost:3000//api/shoes/18/reviews",
//   pathRewrite: {
//     [`^/shoe`]: '',
//   },
// }));

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})

//curl localhost:4000/shoe

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