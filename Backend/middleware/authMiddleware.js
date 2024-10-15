const jwt =require('jsonwebtoken');
const user = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.header.authorization.split(' ')[1];//Bearer token
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id);
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({ message: 'Authorization denied' });
    }
};
module.exports = authMiddleware;