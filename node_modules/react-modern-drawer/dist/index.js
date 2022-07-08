var React = require('react');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var getDirectionStyle = function getDirectionStyle(dir, size) {
  switch (dir) {
    case 'left':
      return {
        top: 0,
        left: 0,
        transform: 'translate3d(-100%, 0, 0)',
        width: size,
        height: '100vh'
      };

    case 'right':
      return {
        top: 0,
        right: 0,
        transform: 'translate3d(100%, 0, 0)',
        width: size,
        height: '100vh'
      };

    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'translate3d(0, 100%, 0)',
        width: '100%',
        height: size
      };

    case 'top':
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: 'translate3d(0, -100%, 0)',
        width: '100%',
        height: size
      };

    default:
      return {};
  }
};

var EZDrawer = function EZDrawer(_ref) {
  var open = _ref.open,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      children = _ref.children,
      style = _ref.style,
      _ref$enableOverlay = _ref.enableOverlay,
      enableOverlay = _ref$enableOverlay === void 0 ? true : _ref$enableOverlay,
      _ref$overlayColor = _ref.overlayColor,
      overlayColor = _ref$overlayColor === void 0 ? '#000' : _ref$overlayColor,
      _ref$overlayOpacity = _ref.overlayOpacity,
      overlayOpacity = _ref$overlayOpacity === void 0 ? 0.4 : _ref$overlayOpacity,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 100 : _ref$zIndex,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 500 : _ref$duration,
      direction = _ref.direction,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 250 : _ref$size,
      className = _ref.className;
  var idSuffix = (Math.random() + 1).toString(36).substring(7);
  var overlayStyles = {
    backgroundColor: "" + overlayColor,
    opacity: "" + overlayOpacity,
    zIndex: zIndex
  };

  var drawerStyles = _extends({
    zIndex: zIndex + 1,
    transitionDuration: duration + "ms"
  }, getDirectionStyle(direction, size), style);

  return React.createElement("div", {
    id: 'EZDrawer' + idSuffix,
    className: 'EZDrawer'
  }, React.createElement("input", {
    type: 'checkbox',
    id: 'EZDrawer__checkbox' + idSuffix,
    className: 'EZDrawer__checkbox',
    onChange: onClose,
    checked: open
  }), React.createElement("nav", {
    role: 'navigation',
    id: 'EZDrawer__container' + idSuffix,
    style: drawerStyles,
    className: 'EZDrawer__container ' + className
  }, children), enableOverlay && React.createElement("label", {
    htmlFor: 'EZDrawer__checkbox' + idSuffix,
    id: 'EZDrawer__overlay' + idSuffix,
    className: 'EZDrawer__overlay',
    style: overlayStyles
  }));
};

module.exports = EZDrawer;
//# sourceMappingURL=index.js.map
