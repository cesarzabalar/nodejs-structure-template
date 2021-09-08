if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    APP_NAME: process.env.APP_NAME
}
