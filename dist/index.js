"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Square(props) {
  return _react.default.createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
}

var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this = this;

      return _react.default.createElement(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_react.default.Component);

var Game =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Game, _React$Component2);

  function Game(props) {
    var _this2;

    _classCallCheck(this, Game);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, props));
    _this2.state = {
      history: [{
        squars: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
      winner: null
    };
    return _this2;
  }

  _createClass(Game, [{
    key: "jumpTo",
    value: function jumpTo(step) {
      var current = this.state.history[step].squars;
      var winner = calculateGameWinner(current);
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        winner: winner
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(index) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1].squars;
      var squars = current.slice();

      if (squars[index] || this.state.winner) {
        return;
      }

      squars[index] = this.state.xIsNext ? "X" : "O";
      var winner = calculateGameWinner(squars);
      this.setState(function (pervState) {
        return {
          history: history.concat([{
            squars: squars
          }]),
          winner: winner,
          stepNumber: history.length,
          xIsNext: !pervState.xIsNext
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber].squars;
      var winner = calculateGameWinner(current);
      var status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");

      if (winner) {
        status = "Winner is : " + this.state.winner;
      }

      var moves = history.map(function (step, move) {
        var desc = move ? "Jump To Move #" + move : "Jump To Start Game";
        return _react.default.createElement("li", {
          key: move
        }, _react.default.createElement("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          }
        }, desc));
      });
      return _react.default.createElement("div", {
        className: "game"
      }, _react.default.createElement("div", {
        className: "game-board"
      }, _react.default.createElement(Board, {
        squares: current,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        }
      })), _react.default.createElement("div", {
        className: "game-info"
      }, _react.default.createElement("div", null, status), _react.default.createElement("ol", null, moves)));
    }
  }]);

  return Game;
}(_react.default.Component);

function calculateGameWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
} // ========================================


_reactDom.default.render(_react.default.createElement(Game, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map