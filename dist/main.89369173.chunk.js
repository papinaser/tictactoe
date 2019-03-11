"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  10: function _(e, t, r) {
    "use strict";

    r.r(t);
    var n = r(8),
        a = r(1),
        s = r(2),
        i = r(4),
        u = r(3),
        c = r(5),
        l = r(0),
        o = r.n(l),
        h = r(7),
        m = r.n(h);
    r(16);

    function d(e) {
      return o.a.createElement("button", {
        className: "square",
        onClick: e.onClick
      }, e.value);
    }

    var v = function (e) {
      function t() {
        return Object(a.a)(this, t), Object(i.a)(this, Object(u.a)(t).apply(this, arguments));
      }

      return Object(c.a)(t, e), Object(s.a)(t, [{
        key: "renderSquare",
        value: function value(e) {
          var t = this;
          return o.a.createElement(d, {
            value: this.props.squares[e],
            onClick: function onClick() {
              return t.props.onClick(e);
            }
          });
        }
      }, {
        key: "render",
        value: function value() {
          return o.a.createElement("div", null, o.a.createElement("div", {
            className: "board-row"
          }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), o.a.createElement("div", {
            className: "board-row"
          }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), o.a.createElement("div", {
            className: "board-row"
          }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
        }
      }]), t;
    }(o.a.Component),
        p = function (e) {
      function t(e) {
        var r;
        return Object(a.a)(this, t), (r = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
          history: [{
            squars: Array(9).fill(null)
          }],
          xIsNext: !0,
          stepNumber: 0,
          winner: null
        }, r;
      }

      return Object(c.a)(t, e), Object(s.a)(t, [{
        key: "jumpTo",
        value: function value(e) {
          var t = b(this.state.history[e].squars);
          this.setState({
            stepNumber: e,
            xIsNext: e % 2 === 0,
            winner: t
          });
        }
      }, {
        key: "handleClick",
        value: function value(e) {
          var t = this.state.history.slice(0, this.state.stepNumber + 1),
              r = t[t.length - 1].squars.slice();

          if (!r[e] && !this.state.winner) {
            r[e] = this.state.xIsNext ? "X" : "O";
            var n = b(r);
            this.setState(function (e) {
              return {
                history: t.concat([{
                  squars: r
                }]),
                winner: n,
                stepNumber: t.length,
                xIsNext: !e.xIsNext
              };
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.state.history,
              r = t[this.state.stepNumber].squars,
              n = b(r),
              a = "Next player: " + (this.state.xIsNext ? "X" : "O");
          n && (a = "Winner is : " + this.state.winner);
          var s = t.map(function (t, r) {
            var n = r ? "Jump To Move #" + r : "Jump To Start Game";
            return o.a.createElement("li", {
              key: r
            }, o.a.createElement("button", {
              onClick: function onClick() {
                return e.jumpTo(r);
              }
            }, n));
          });
          return o.a.createElement("div", {
            className: "game"
          }, o.a.createElement("div", {
            className: "game-board"
          }, o.a.createElement(v, {
            squares: r,
            onClick: function onClick(t) {
              return e.handleClick(t);
            }
          })), o.a.createElement("div", {
            className: "game-info"
          }, o.a.createElement("div", null, a), o.a.createElement("ol", null, s)));
        }
      }]), t;
    }(o.a.Component);

    function b(e) {
      for (var t = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]], r = 0; r < t.length; r++) {
        var a = Object(n.a)(t[r], 3),
            s = a[0],
            i = a[1],
            u = a[2];
        if (e[s] && e[s] === e[i] && e[s] === e[u]) return e[s];
      }

      return null;
    }

    m.a.render(o.a.createElement(p, null), document.getElementById("root"));
  },
  16: function _(e, t, r) {},
  9: function _(e, t, r) {
    e.exports = r(10);
  }
}, [[9, 1, 2]]]);
//# sourceMappingURL=main.89369173.chunk.js.map