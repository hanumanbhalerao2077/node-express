const path = require('node:path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const { notFoundHandler, errorHandler } = require('./middleware/errorHandlers');
const routes = require('./routes');

dotenv.config();

const app = express();

// --- Security headers ---
app.use(helmet());

// --- Performance ---
app.use(compression());

// --- Cross-Origin ---
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: false,
  })
);

// --- Logging ---
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')
);

// --- View engine (EJS) ---
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

// --- Body parsing ---

app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: '1mb' }));


// --- Static assets ---
app.use(
  '/css',
  express.static(path.join(__dirname, 'public', 'css'), { maxAge: '1d' })
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'public', 'js'), { maxAge: '1d' })
);
app.use(
  '/resume',
  express.static(path.join(__dirname, 'public', 'resume'), { maxAge: '30d' })
);
// serve other static assets (kept disabled to avoid ambiguous paths)
// app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));


// --- Routes ---
app.use(routes);


// --- 404 + errors ---
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;

