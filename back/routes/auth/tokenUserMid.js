const jwt = require("jsonwebtoken");

const checkUserJWT = (req, res, next) => {
  
 const authHeader = req.headers.authorization;
 const token = authHeader && authHeader.split(" ")[1];
  
  console.log('------------------');
  console.log('TOKENNNN ',token);
  if (token === null) return res.sendStatus(401);
  jwt.verify(token, "BALANCEKEY", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

 module.exports = checkUserJWT    