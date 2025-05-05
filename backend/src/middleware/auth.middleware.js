const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Divide o header no formato "Bearer <token>"
  const [type, token] = authHeader.split(" ");

  // Valida se o tipo é Bearer e o token está presente
  if (type !== "Bearer" || !token) {
    return res.status(401).json({ message: "Formato de token inválido" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token não fornecido" });
  }
};

module.exports = verifyToken;
