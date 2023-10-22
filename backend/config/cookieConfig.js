const isProduction = process.env.NODE_ENV === 'production';

const commonCookieConfig = {
  sameSite: 'None',
};

const localCookieConfig = {
  ...commonCookieConfig,
  secure: false,
};

const productionCookieConfig = {
  ...commonCookieConfig,
  secure: true,
};

const accessTokenCookieConfig = {
  ...commonCookieConfig,
  httpOnly: true,
};

const refreshTokenCookieConfig = {
  ...commonCookieConfig,
};

module.exports = {
  accessTokenCookieConfig: isProduction ? productionCookieConfig : localCookieConfig,
  refreshTokenCookieConfig: isProduction ? productionCookieConfig : localCookieConfig,
};
