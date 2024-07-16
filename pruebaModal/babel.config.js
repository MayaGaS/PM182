module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["react-native-reanimated/plugin"]] // permite crear animaciones complejas y de alto rendimiento  
  };
};
