const express = require('express');
const app = express();
const port = 3000;
const resep = require('./resep.json');
app.get('/', (req, res) => {
  res.send('Welcome to Resep Api');
});
app.get('/api/resep', (req, res) => {
  res.json(resep);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const express = require('express');
// const app = express();
// const port = 3000;
// const places = require('./places.json');
// const pulau = require('./pulau.json');
// app.get('/', (req, res) => {
//   res.send('Welcome to Wisata API!');
// });
// app.get('/api/pulau', (req, res) => {
//   res.json(pulau);
// });
// app.get('/api/places', (req, res) => {
//     const nama = req.query.nama;

//   if (nama) {
//     const filteredPlace = places.find(place => place.nama === nama);

//     if (filteredPlace) {
//       res.json(filteredPlace);
//     } else {
//       res.status(404).json({ error: 'Place not found' });
//     }
//   } else {
//     res.json(places);
//   }
// });
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });