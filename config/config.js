const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8282,
  jwtSecret: process.env.JWT_SECRET || '471b6255886fa6d121a64102112861b6',
  mongoUri:
    process.env.MONGO_URI || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017'),
};

export default config;
