const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
   

    if (!token) {
      return res.status(401).json({ message: 'Access denied' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      // console.log(err)
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
