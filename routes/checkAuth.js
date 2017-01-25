var checkAuth = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
      res.sendStatus(401);
  }
};

module.exports = checkAuth;

//if req.isAuthenticated() on the get then x otherwise send 401, on client side if req.authenticated(send back 200)
