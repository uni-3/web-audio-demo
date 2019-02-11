module.exports= {
  devServer: {
    disableHostCheck: true
  },
  //set for github pages
  publicPath: process.env.NODE_ENV === 'production'
  ? '/web-audio-demo/'
  : '/'
}