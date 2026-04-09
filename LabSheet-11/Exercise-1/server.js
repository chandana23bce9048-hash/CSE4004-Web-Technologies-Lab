// Import required module
const http = require('http');

// Define port number
const PORT = 3000;

// Create server using createServer()
const server = http.createServer((req, res) => {
    
    // Log incoming request
    console.log(`Request received: ${req.method} ${req.url}`);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    
    // Handle different routes
    if (req.url === '/') {
        res.write('Welcome to Node.js Web Server!');
    } else if (req.url === '/about') {
        res.write('This is About Page');
    } else {
        res.write('404 - Page Not Found');
    }
    
    // End response
    res.end();
});

// Run server on specific port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});