"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Exercício
Transforme os seguintes trechos de código utilizando async/await:
Função delay aciona o .then após 1s 
                                  WITHOUT ASYNC
const delay = () => new Promise(resolve => setTimeout(resolve, 10000));
function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
  });
  delay().then(() => {
    console.log("1s");
  });
  delay().then(() => {
    console.log("1s");
  });
}
umPorSegundo();
                          
                                ASYNC AWAIT  
*/
var delay = function delay() {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 5000);
  });
};

function onePerSecond() {
  return _onePerSecond.apply(this, arguments);
}

function _onePerSecond() {
  _onePerSecond = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return delay();

          case 2:
            console.log("1 Second");
            _context2.next = 5;
            return delay();

          case 5:
            console.log("2 Second");
            _context2.next = 8;
            return delay();

          case 8:
            console.log("3 Second");

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _onePerSecond.apply(this, arguments);
}

onePerSecond();
/* ---------------------------------------------------------------------
                            WITHOUT ASYNC
function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
  console.log(response.data);
  })
  .catch(err => {
  console.log('Usuário não existe');
  })
 }
 getUserFromGithub('diego3g');
 getUserFromGithub('diego3g124123');
                                    ASYNC AWAIT
 */

function getUserGit(_x) {
  return _getUserGit.apply(this, arguments);
}

function _getUserGit() {
  _getUserGit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _axios["default"].get("http://api.github.com/users/".concat(user));

          case 3:
            response = _context3.sent;
            console.log(response.data.avatar_url);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            _context3.next = 11;
            return console.warn("Erro na Requisição - User not found");

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getUserGit.apply(this, arguments);
}

getUserGit("radaelilucca");
/* ---------------------------------------------------------------------
                                Without Async
class Github {
  static getRepos(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Repo NÃO existe");
      });
  }
}
                                ASYNC AWAIT */

var Github = /*#__PURE__*/function () {
  function Github() {
    _classCallCheck(this, Github);
  }

  _createClass(Github, null, [{
    key: "getRepos",
    value: function () {
      var _getRepos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(repo) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios["default"].get("https://api.github.com/repos/".concat(repo));

              case 3:
                response = _context.sent;
                console.log(response.data);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.warn("ERRO NA REQUISIÇÃO");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getRepos(_x2) {
        return _getRepos.apply(this, arguments);
      }

      return getRepos;
    }()
  }]);

  return Github;
}();

Github.getRepos("radaelilucca/todosApp"); // ________________________
// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//   console.log(response.data);
//   })
//   .catch(err => {
//   console.log('Usuário não existe');
//   });
//  }
//  buscaUsuario('diego3g');

function buscaUsuario(_x3) {
  return _buscaUsuario.apply(this, arguments);
}

function _buscaUsuario() {
  _buscaUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _axios["default"].get("https://api.github.com/users/".concat(user));

          case 3:
            response = _context4.sent;
            console.log(response.data);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.warn("ERRO NA REQ");

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _buscaUsuario.apply(this, arguments);
}

buscaUsuario("radaelilucca");
buscaUsuario("radaelilucas");
