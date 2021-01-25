const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
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