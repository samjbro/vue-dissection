var base = require('./karma.base.config')

module.exports = function (config) {
  config.set(Object.assign(base, {
    browsers: ['Chrome'],
    plugins: base.plugins.concat([
      'karma-chrome-launcher'
    ])
  }))
}