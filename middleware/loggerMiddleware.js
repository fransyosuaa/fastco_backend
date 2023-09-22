const logger = (req, res, next) => {
  console.log(
    `${req.method} request with url ${req.originalUrl}, body ${JSON.stringify(
      req.body
    )}`
  );
  console.log(`Timestamp: ${Date.now()}`);
  next();
};

module.exports = logger;
