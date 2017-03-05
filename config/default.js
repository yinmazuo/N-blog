module.exports = {
  //port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  //mongodb: 'mongodb://localhost:27017/myblog'
  port: 80,
  mongodb: 'mongodb://myblog:myblog@ds119020.mlab.com:19020/myblog'
};
