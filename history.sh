#? Command history
# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
npm i react react-dom

# Install Babel packages for transpiling ES6/JSX to browser-compatible code
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

# Bundler
npm i -D webpack webpack-cli webpack-dev-server
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader style-loader
npm i -D css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin

# Hosting
npm i -D gh-pages cname-webpack-plugin

# Extra commands
npm i -D typescript ts-loader @types/react @types/react-dom
npm i -D lodash
npm i -D @types/lodash
npm i -D luxon
npm i -D @types/luxon
npm i -D tailwindcss postcss-loader autoprefixer