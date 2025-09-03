
// 404 (place before errorHandler)
export function notFound(req, res, next) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}


// Global error handler (last middleware)
export function errorHandler(err, req, res, next) {
  console.error("❌ Error:", err);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
}