const express = require('express');
// const apiRoutes = require('./routes/apiRoutes.js');
// const htmlRoutes = require('./routes/htmlRoutes.js');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use((req,res,next)=>{
  console.log(req.url, req.method, res.statusCode)
  next()
})

// Use apiRoutes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
