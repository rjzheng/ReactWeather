module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/components/About.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Weather: 'app/components/Weather.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherMessage: 'app/components/WeatherMessage.js',
      openWeatherMap: 'app/api/openWeatherMap'
    },
    extensions: ['', '.js', '.jsx', 'json']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
