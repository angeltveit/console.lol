define(["exports", "./src/lolify.js", "./src/console.lol.js"], function (_exports, _lolify, _consoleLol) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "lolify", {
    enumerable: true,
    get: function () {
      return _lolify.default;
    }
  });
  _exports.default = void 0;
  _lolify = _interopRequireDefault(_lolify);
  _consoleLol = _interopRequireDefault(_consoleLol);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _consoleLol.default;
  _exports.default = _default;
});
