// 404 handler
function notFoundHandler(req, res, next) {
  const err = new Error(`No route found for ${req.originalUrl}`);
  err.statusCode = 404;
  next(err);
}

// Generic error handler
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);

  // Normalize status code
  const statusCodeRaw = err && (err.statusCode ?? err.status);
  const statusCode = Number.isFinite(Number(statusCodeRaw))
    ? Number(statusCodeRaw)
    : 500;

  const title = statusCode === 404 ? 'Page Not Found' : 'Error';
  const message = (err && err.message) || 'Unknown error';

  const wantsJSON =
    req.accepts('html') === false ||
    req.xhr ||
    (req.headers['content-type'] || '').includes('application/json');

  const payload = {
    title,
    message,
    // for clients that need programmatic error classification
    status: statusCode,
  };

  if (process.env.NODE_ENV !== 'production') {
    payload.stack = err && err.stack;
  }

  if (wantsJSON) {
    return res.status(statusCode).json(payload);
  }

  return res.status(statusCode).render('error', {
    title: payload.title,
    message: payload.message,
    stack: payload.stack,
  });
}



module.exports = { notFoundHandler, errorHandler };





