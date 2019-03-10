module.exports = {
  devServer: {
    disableHostCheck: true
  },
  outputDir: "./dist",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
};
