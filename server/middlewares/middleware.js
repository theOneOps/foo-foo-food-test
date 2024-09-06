// Middleware d'authentification
module.exports = (req, res, next) => {
    console.log('middleware passed successfully !')
    next()
  };