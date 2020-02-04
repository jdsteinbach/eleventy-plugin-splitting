const applySplitting = require('./src/applySplitting')

module.exports = (eleventyConfig, pluginNamespace) => {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addFilter('splitting', content => applySplitting(content))
  })
}
