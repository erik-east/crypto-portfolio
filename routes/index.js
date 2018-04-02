module.exports = app => {

  // subroutes
  app.use('/auth',require('./authRoutes'));
  app.use('/api/coin',require('./coinRoutes'));

  // user routes
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};