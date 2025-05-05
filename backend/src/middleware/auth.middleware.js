const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
 
  const [type, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
  
};

module.exports = verifyToken;
