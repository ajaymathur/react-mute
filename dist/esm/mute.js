var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment } from "react";
import Filter from 'bad-words';

var Mute = function (_React$Component) {
  _inherits(Mute, _React$Component);

  function Mute(props) {
    _classCallCheck(this, Mute);

    var _this = _possibleConstructorReturn(this, (Mute.__proto__ || Object.getPrototypeOf(Mute)).call(this, props));

    _this.filter = new Filter({
      placeHolder: props.safeText,
      list: props.addWords
    });

    if (props.removeWords && props.removeWords.length > 0) {
      props.removeWords.forEach(function (removeWord) {
        _this.filter.removeWords(removeWord);
      });
    }
    return _this;
  }

  _createClass(Mute, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return React.createElement(
        Fragment,
        null,
        this.filter.clean(children)
      );
    }
  }]);

  return Mute;
}(React.Component);

Mute.defaultProps = {
  removeWords: [],
  safeText: '*'
};
export default Mute;