if (process.env.NODE_EVN === 'PRODUCTION') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}