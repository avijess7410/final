// module.exports ={
//   mongoURI:'mongodb://admin:admin@ds149724.mlab.com:49724/codercampsfinal',
//   secretOrKey: 'secret'
// };


if(process.env.NODE_ENV === 'production'){
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
