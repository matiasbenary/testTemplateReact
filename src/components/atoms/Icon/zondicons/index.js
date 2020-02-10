const req = require.context('.', false, /\.svg$/);

const allSvgFilepaths = req.keys().map( path => ({ path, file: req ( path ) }) );


console.log(allSvgFilepaths);
export default allSvgFilepaths;
