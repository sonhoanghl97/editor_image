const { join, resolve } = require('path');

const PATH_SRC = join(__dirname, '../../src');
const PATH_BUILD = join(__dirname, '../../build');
const PATH_DIST= join(__dirname, '../../dist');
const PATH_PUBLIC = join(__dirname, '../../public');
const PATH_SRC_INDEX = join(PATH_SRC, './index.jsx');
const PATH_NODE_MODULES = join(__dirname, '../../node_modules');

exports.PATH_SRC = PATH_SRC;
exports.PATH_DIST = PATH_DIST;
exports.PATH_BUILD = PATH_BUILD;
exports.PATH_PUBLIC = PATH_PUBLIC;
exports.PATH_SRC_INDEX = PATH_SRC_INDEX;
exports.PATH_NODE_MODULES = PATH_NODE_MODULES;