const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [], // Empty array or add specific dependencies if needed
  configureWebpack: {
    devtool: "source-map", // Keep source-map configuration if required for debugging
    plugins: [], // Add plugins if needed
  }
})