const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateJWT(req, res, next) {
    const authHeader = req.header('Authorization');

    // Check if Authorization header is present
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    // Extract the token properly
    const token = authHeader.replace('Bearer ', '').trim();

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' }); // Use 403 instead of 402
        }

        req.user = decoded;
        next();
    });
}

module.exports = { validateJWT };
