const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const data = req;

    data.user = decoded.user;
    next();

    return req.user;
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};
