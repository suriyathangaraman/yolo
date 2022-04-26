const jsonwebtoken = require("jsonwebtoken");
const jwt = require("express-jwt");

const generateJWT = (userDetails) => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 30);
  return jsonwebtoken.sign(
    {
      _luid: userDetails._id,
      _role: userDetails.role,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    config.jwtSecret
  );
};

const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization },
  } = req;
  return authorization || null;
};

const auth = jwt({
  secret: process.env.JWT_SECRET_KEY,
  userProperty: "user",
  getToken: getTokenFromHeaders,
  algorithms: ["HS256"],
});

module.exports = {
  generateJWT: generateJWT,
  auth: auth,
};
