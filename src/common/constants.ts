const dbConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'rosimar',
  database: 'rosimar',
  user: 'postgres',
};

export const jwtConstants = {
  secret: '2d5m(1(7ete1$_^ooyxcs=&70fi*yircwb-d()irmfjv!n)v$a',
  tokenExpiration: '1w',
  refreshTokenSecret: '94qviakpmhve(c(ri2a8a+mc9#d&4f0%iq!ees^fw@i6r^ofpu-',
  refreshTokenSecretExpiration: '1w',
};

module.exports = { dbConfig, jwtConstants };
