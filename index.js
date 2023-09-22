const express = require('express');
const bodyParser = require('body-parser');

const loggerMiddleware = require('./middleware/loggerMiddleware');
const scheduleController = require('./controller/scheduleController');
const blogController = require('./controller/blogController');

const port = process.env.PORT || 5100;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(loggerMiddleware);
app.use('/schedule', scheduleController);
app.use('/blog', blogController);

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
