const path = require('path');
// jest.config.js
module.exports = {
    moduleNameMapper: {
      '\\.css$': require.resolve('./__mocks__/styleMock.js'),
    },
  };
  