const express = require('express');
const app = express();

// ---------------- GLOBAL MIDDLEWARE ----------------

// Middleware 1: Log request details
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[GLOBAL 1] ${req.method} ${req.url} - ${timestamp}`);
    next(); // pass control
});

// Middleware 2: Another global middleware
app.use((req, res, next) => {
    console.log("[GLOBAL 2] Request received");
    next();
});

// ---------------- ROUTE-LEVEL MIDDLEWARE ----------------

// Custom middleware for specific route
const routeMiddleware = (req, res, next) => {
    console.log("[ROUTE] Route-level middleware executed");
    next();
};

// ---------------- ROUTES ----------------

// Home route
app.get('/', (req, res) => {
    console.log("[HANDLER] Home route");
    res.send("Welcome to Home Page");
});

// Route with middleware chaining
app.get('/about', routeMiddleware, (req, res) => {
    console.log("[HANDLER] About route");
    res.send("About Page");
});

// Multiple middleware chaining
app.get('/multi',
    (req, res, next) => {
        console.log("[CHAIN 1] First middleware");
        next();
    },
    (req, res, next) => {
        console.log("[CHAIN 2] Second middleware");
        next();
    },
    (req, res) => {
        console.log("[HANDLER] Final handler");
        res.send("Multiple Middleware Executed");
    }
);

// ---------------- START SERVER ----------------

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});