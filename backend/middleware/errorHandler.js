function notFound(req, res, next) {
  const error = new Error(`Not found - ${req.originalUrl}`);
  console.log("err", error);
  res.status(404);
  next(error);
}

function errorHandler(err, req, res, next) {
  // if (res.headersSent) {
  //   return next(err); // Delegate to the default Express error handler
  // }
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}

export { notFound, errorHandler };
