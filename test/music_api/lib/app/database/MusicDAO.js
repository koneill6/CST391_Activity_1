"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicDAO = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Artist = require("../models/Artist");
var _Album = require("../models/Album");
var _Track = require("../models/Track");
var mysql = _interopRequireWildcard(require("mysql"));
var util = _interopRequireWildcard(require("util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var MusicDAO = /*#__PURE__*/function () {
  /**
   * Non-default constructor.
   * 
   * @param host Database Hostname
   * @param username Database Username
   * @param password Database Password
   */
  function MusicDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, MusicDAO);
    (0, _defineProperty2.default)(this, "host", "");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "schema", "MUSIC");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    // Set all class properties
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }

  /**
    * CRUD method to return all Artists.
    * 
    * @param callback Callback function with an Array of type Artist.
    */
  (0, _createClass2.default)(MusicDAO, [{
    key: "findArtists",
    value: function findArtists(callback) {
      // List of Artist to return
      var artists = [];

      // Get a pooled connection to the database, run the query to get all the distinct Artists, and return the List of Artists
      this.pool.getConnection(function (err, connection) {
        // Throw error if an error
        if (err) throw err;

        // Run query    
        connection.query('SELECT distinct ARTIST FROM ALBUM', function (err, rows, fields) {
          // Release connection in the pool
          connection.release();

          // Throw error if an error
          if (err) throw err;

          // Loop over result set and save the Artist Name in the List of Artists
          for (var x = 0; x < rows.length; ++x) {
            artists.push(new _Artist.Artist(x, rows[x].ARTIST));
          }

          // Do a callback to return the results
          callback(artists);
        });
      });
    }

    /**
    * CRUD method to return all Albums for an artist.
    * 
    * @param artist Name of the Artist to retrieve Albums for.
    * @param callback Callback function with an Array of type Album.
    */
  }, {
    key: "findAlbums",
    value: function findAlbums(artist, callback) {
      // List of Albums to return
      var albums = [];

      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Albums for specific Artist
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ARTIST=? ORDER BY YEAR, TITLE', [artist]);
                case 6:
                  result1 = _context.sent;
                  x = 0;
                case 8:
                  if (!(x < result1.length)) {
                    _context.next = 19;
                    break;
                  }
                  // Use Promisfy Util to make an async function and run query to get all Tracks for this Album
                  albumId = result1[x].ID;
                  tracks = [];
                  _context.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 13:
                  result2 = _context.sent;
                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS, result2[y].VIDEO_URL));
                  }

                  // Add Album and its Tracks to the list
                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
                case 16:
                  ++x;
                  _context.next = 8;
                  break;
                case 19:
                  // Do a callback to return the results
                  callback(albums);
                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     * CRUD method to return all Albums.
     * 
     * @param callback Callback function with an Array of type Album.
     */
  }, {
    key: "findAllAlbums",
    value: function findAllAlbums(callback) {
      // List of Albums to return
      var albums = [];

      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context2.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Albums
                  connection.query = util.promisify(connection.query);
                  _context2.next = 6;
                  return connection.query('SELECT * FROM ALBUM ORDER BY YEAR, TITLE');
                case 6:
                  result1 = _context2.sent;
                  x = 0;
                case 8:
                  if (!(x < result1.length)) {
                    _context2.next = 19;
                    break;
                  }
                  // Use Promisfy Util to make an async function and run query to get all Tracks for this Album
                  albumId = result1[x].ID;
                  tracks = [];
                  _context2.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 13:
                  result2 = _context2.sent;
                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS, result2[y].VIDEO_URL));
                  }

                  // Add Album and its Tracks to the list
                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
                case 16:
                  ++x;
                  _context2.next = 8;
                  break;
                case 19:
                  // Do a callback to return the results
                  callback(albums);
                case 20:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     * CRUD method to searches for all Albums by a wildard search in Artist.
     * 
     * @param search wildcard Artist to search Albums for.
     * @param callback Callback function with an Array of type Album.
     */
  }, {
    key: "findAlbumsByArtist",
    value: function findAlbumsByArtist(search, callback) {
      // List of Albums to return
      var albums = [];

      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context3.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Albums for search partial Artist
                  connection.query = util.promisify(connection.query);
                  _context3.next = 6;
                  return connection.query("SELECT * FROM ALBUM WHERE ARTIST LIKE ? ORDER BY YEAR, TITLE", ['%' + search + '%']);
                case 6:
                  result1 = _context3.sent;
                  x = 0;
                case 8:
                  if (!(x < result1.length)) {
                    _context3.next = 19;
                    break;
                  }
                  // Use Promisfy Util to make an async function and run query to get all Tracks for this Album
                  albumId = result1[x].ID;
                  tracks = [];
                  _context3.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 13:
                  result2 = _context3.sent;
                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS, result2[y].VIDEO_URL));
                  }

                  // Add Album and its Tracks to the list
                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
                case 16:
                  ++x;
                  _context3.next = 8;
                  break;
                case 19:
                  // Do a callback to return the results
                  callback(albums);
                case 20:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
    * CRUD method to searches for all Albums by a wildcard serach in Description.
    * 
    * @param search wildcard Description to search Albums for.
    * @param callback Callback function with an Array of type Album.
    */
  }, {
    key: "findAlbumsByDescription",
    value: function findAlbumsByDescription(search, callback) {
      // List of Albums to return
      var albums = [];

      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context4.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Albums for search partial Artist
                  connection.query = util.promisify(connection.query);
                  _context4.next = 6;
                  return connection.query("SELECT * FROM ALBUM WHERE DESCRIPTION LIKE ? ORDER BY YEAR, TITLE", ['%' + search + '%']);
                case 6:
                  result1 = _context4.sent;
                  x = 0;
                case 8:
                  if (!(x < result1.length)) {
                    _context4.next = 19;
                    break;
                  }
                  // Use Promisfy Util to make an async function and run query to get all Tracks for this Album
                  albumId = result1[x].ID;
                  tracks = [];
                  _context4.next = 13;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 13:
                  result2 = _context4.sent;
                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS, result2[y].VIDEO_URL));
                  }

                  // Add Album and its Tracks to the list
                  albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
                case 16:
                  ++x;
                  _context4.next = 8;
                  break;
                case 19:
                  // Do a callback to return the results
                  callback(albums);
                case 20:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /**
     * CRUD method to return an Album.
     * 
     * @param albumId Album ID to retrieve Album for.
     * @param callback Callback function with an Array of type Album.
     */
  }, {
    key: "findAlbum",
    value: function findAlbum(albumId, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var result1, tracks, result2, y, album;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context5.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Albums for specific Artist
                  connection.query = util.promisify(connection.query);
                  _context5.next = 6;
                  return connection.query('SELECT * FROM ALBUM WHERE ID=?', [albumId]);
                case 6:
                  result1 = _context5.sent;
                  if (result1.length != 1) callback(null);

                  // Use Promisfy Util to make an async function and run query to get all Tracks for this Album
                  tracks = [];
                  _context5.next = 11;
                  return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 11:
                  result2 = _context5.sent;
                  for (y = 0; y < result2.length; ++y) {
                    tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS, result2[y].VIDEO_URL));
                  }

                  // Create an Album and its Tracks for return
                  album = new _Album.Album(result1[0].ID, result1[0].TITLE, result1[0].ARTIST, result1[0].DESCRIPTION, result1[0].YEAR, result1[0].IMAGE_NAME, tracks); // Do a callback to return the results
                  callback(album);
                case 15:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     * CRUD method to create an Album.
     * 
     * @param album Album to insert.
     * @param callback Callback function with -1 if an error else Album ID created.  
     */
  }, {
    key: "create",
    value: function create(album, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, connection) {
          var result1, albumId, y, result2;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context6.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and insert Album
                  connection.query = util.promisify(connection.query);
                  _context6.next = 6;
                  return connection.query('INSERT INTO ALBUM (TITLE, ARTIST, DESCRIPTION, YEAR, IMAGE_NAME) VALUES(?,?,?,?,?)', [album.Title, album.Artist, album.Description, album.Year, album.Image]);
                case 6:
                  result1 = _context6.sent;
                  if (result1.affectedRows != 1) callback(-1);

                  // Use Promisfy Util to make an async function and run query to insert all Tracks for this Album
                  albumId = result1.insertId;
                  y = 0;
                case 10:
                  if (!(y < album.Tracks.length)) {
                    _context6.next = 17;
                    break;
                  }
                  _context6.next = 13;
                  return connection.query('INSERT INTO TRACK (ALBUM_ID, TITLE, NUMBER, VIDEO_URL) VALUES(?,?,?,?)', [albumId, album.Tracks[y].Title, album.Tracks[y].Number, album.Tracks[y].Video]);
                case 13:
                  result2 = _context6.sent;
                case 14:
                  ++y;
                  _context6.next = 10;
                  break;
                case 17:
                  // Do a callback to return the results
                  callback(albumId);
                case 18:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    /**
     * CRUD method to update an Album.
     * 
     * @param album Album to update.
     * @param callback Callback function with number of rows updated.  
     */
  }, {
    key: "update",
    value: function update(album, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(err, connection) {
          var changes, result1, y, result2;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context7.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and update Album
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context7.next = 7;
                  return connection.query('UPDATE ALBUM SET TITLE=?, ARTIST=?, DESCRIPTION=?, YEAR=?, IMAGE_NAME=? WHERE ID=?', [album.Title, album.Artist, album.Description, album.Year, album.Image, album.Id]);
                case 7:
                  result1 = _context7.sent;
                  if (result1.changedRows != 0) ++changes;

                  // Use Promisfy Util to make an async function and run query to update all Tracks for this Album
                  y = 0;
                case 10:
                  if (!(y < album.Tracks.length)) {
                    _context7.next = 18;
                    break;
                  }
                  _context7.next = 13;
                  return connection.query('UPDATE TRACK SET TITLE=?, NUMBER=?, VIDEO_URL=? WHERE ID=? AND ALBUM_ID=?', [album.Tracks[y].Title, album.Tracks[y].Number, album.Tracks[y].Video, album.Tracks[y].Id, album.Id]);
                case 13:
                  result2 = _context7.sent;
                  if (result2.changedRows != 0) ++changes;
                case 15:
                  ++y;
                  _context7.next = 10;
                  break;
                case 18:
                  // Do a callback to return the results
                  callback(changes);
                case 19:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
    * CRUD method to delete an Album.
    * 
    * @param album Album ID to delete.
    * @param callback Callback function with number of rows deleted.  
    * */
  }, {
    key: "delete",
    value: function _delete(albumId, callback) {
      // Get pooled database connection and run queries   
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(err, connection) {
          var changes, result1, result2;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  // Release connection in the pool
                  connection.release();

                  // Throw error if an error
                  if (!err) {
                    _context8.next = 3;
                    break;
                  }
                  throw err;
                case 3:
                  // Use Promisfy Util to make an async function and run query to delete the tracks for an Album
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context8.next = 7;
                  return connection.query('DELETE FROM TRACK WHERE ALBUM_ID=?', [albumId]);
                case 7:
                  result1 = _context8.sent;
                  changes = changes + result1.affectedRows;

                  // Use Promisfy Util to make an async function and run query to delete the Album
                  _context8.next = 11;
                  return connection.query('DELETE FROM ALBUM WHERE ID=?', [albumId]);
                case 11:
                  result2 = _context8.sent;
                  changes = changes + result2.affectedRows;

                  // Do a callback to return the results
                  callback(changes);
                case 14:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return function (_x15, _x16) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    //* **************** Private Helper Methods **************** */

    /**
     * Private helper method to initialie a Database Connection
     */
  }, {
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }]);
  return MusicDAO;
}();
exports.MusicDAO = MusicDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNdXNpY0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImluaXREYkNvbm5lY3Rpb24iLCJwb29sIiwiY2FsbGJhY2siLCJhcnRpc3RzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsInB1c2giLCJBcnRpc3QiLCJBUlRJU1QiLCJhcnRpc3QiLCJhbGJ1bXMiLCJ1dGlsIiwicHJvbWlzaWZ5IiwicmVzdWx0MSIsImFsYnVtSWQiLCJJRCIsInRyYWNrcyIsInJlc3VsdDIiLCJ5IiwiVHJhY2siLCJOVU1CRVIiLCJUSVRMRSIsIkxZUklDUyIsIlZJREVPX1VSTCIsIkFsYnVtIiwiREVTQ1JJUFRJT04iLCJZRUFSIiwiSU1BR0VfTkFNRSIsInNlYXJjaCIsImFsYnVtIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlllYXIiLCJJbWFnZSIsImFmZmVjdGVkUm93cyIsImluc2VydElkIiwiVHJhY2tzIiwiTnVtYmVyIiwiVmlkZW8iLCJjaGFuZ2VzIiwiSWQiLCJjaGFuZ2VkUm93cyIsIm15c3FsIiwiY3JlYXRlUG9vbCIsInVzZXIiLCJkYXRhYmFzZSIsInNjaGVtYSIsImNvbm5lY3Rpb25MaW1pdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9NdXNpY0RBTy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnRpc3QgfSBmcm9tIFwiLi4vbW9kZWxzL0FydGlzdFwiO1xuaW1wb3J0IHsgQWxidW0gfSBmcm9tIFwiLi4vbW9kZWxzL0FsYnVtXCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuLi9tb2RlbHMvVHJhY2tcIjtcbmltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgTXVzaWNEQU9cbntcbiAgICBwcml2YXRlIGhvc3Q6c3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHBvcnQ6bnVtYmVyID0gMzMwNjtcbiAgICBwcml2YXRlIHVzZXJuYW1lOnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgc2NoZW1hOnN0cmluZyA9IFwiTVVTSUNcIjtcbiAgICBwcml2YXRlIHBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBOb24tZGVmYXVsdCBjb25zdHJ1Y3Rvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gaG9zdCBEYXRhYmFzZSBIb3N0bmFtZVxuICAgICAqIEBwYXJhbSB1c2VybmFtZSBEYXRhYmFzZSBVc2VybmFtZVxuICAgICAqIEBwYXJhbSBwYXNzd29yZCBEYXRhYmFzZSBQYXNzd29yZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6c3RyaW5nLCBwb3J0Om51bWJlciwgdXNlcm5hbWU6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpXG4gICAge1xuICAgICAgICAvLyBTZXQgYWxsIGNsYXNzIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgIHRoaXMucG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xuICAgIH1cblxuICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gcmV0dXJuIGFsbCBBcnRpc3RzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIEFycmF5IG9mIHR5cGUgQXJ0aXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kQXJ0aXN0cyhjYWxsYmFjazogYW55KVxuICAgIHtcbiAgICAgICAgLy8gTGlzdCBvZiBBcnRpc3QgdG8gcmV0dXJuXG4gICAgICAgIGxldCBhcnRpc3RzOkFydGlzdFtdID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgYSBwb29sZWQgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UsIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0aGUgZGlzdGluY3QgQXJ0aXN0cywgYW5kIHJldHVybiB0aGUgTGlzdCBvZiBBcnRpc3RzXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAgICAgICAgIC8vIFJ1biBxdWVyeSAgICBcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCBkaXN0aW5jdCBBUlRJU1QgRlJPTSBBTEJVTScsIGZ1bmN0aW9uIChlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVyclxuICAgIFxuICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciByZXN1bHQgc2V0IGFuZCBzYXZlIHRoZSBBcnRpc3QgTmFtZSBpbiB0aGUgTGlzdCBvZiBBcnRpc3RzXG4gICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7eCA8IHJvd3MubGVuZ3RoOysreClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHMucHVzaChuZXcgQXJ0aXN0KHgsIHJvd3NbeF0uQVJUSVNUKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJ0aXN0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byByZXR1cm4gYWxsIEFsYnVtcyBmb3IgYW4gYXJ0aXN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhcnRpc3QgTmFtZSBvZiB0aGUgQXJ0aXN0IHRvIHJldHJpZXZlIEFsYnVtcyBmb3IuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYW4gQXJyYXkgb2YgdHlwZSBBbGJ1bS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZEFsYnVtcyhhcnRpc3Q6c3RyaW5nLCBjYWxsYmFjazogYW55KVxuICAgIHtcbiAgICAgICAgIC8vIExpc3Qgb2YgQWxidW1zIHRvIHJldHVyblxuICAgICAgICAgbGV0IGFsYnVtczpBbGJ1bVtdID0gW107XG5cbiAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHF1ZXJ5IHRvIGdldCBhbGwgQWxidW1zIGZvciBzcGVjaWZpYyBBcnRpc3RcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBBUlRJU1Q9PyBPUkRFUiBCWSBZRUFSLCBUSVRMRScsIFthcnRpc3RdKTtcbiAgICAgICAgICAgIGZvcihsZXQgeD0wO3ggPCByZXN1bHQxLmxlbmd0aDsrK3gpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIFRyYWNrcyBmb3IgdGhpcyBBbGJ1bVxuICAgICAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MVt4XS5JRDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhY2tzOlRyYWNrW10gPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gVFJBQ0sgV0hFUkUgQUxCVU1fSUQ9PycsIFthbGJ1bUlkXSk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB5PTA7eSA8IHJlc3VsdDIubGVuZ3RoOysreSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKG5ldyBUcmFjayhyZXN1bHQyW3ldLklELCByZXN1bHQyW3ldLk5VTUJFUiwgcmVzdWx0Mlt5XS5USVRMRSwgcmVzdWx0Mlt5XS5MWVJJQ1MsIHJlc3VsdDJbeV0uVklERU9fVVJMKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIEFsYnVtIGFuZCBpdHMgVHJhY2tzIHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSwgdHJhY2tzKSk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgY2FsbGJhY2soYWxidW1zKTtcbiAgICAgICAgIH0pO1xuICAgIH0gICAgICAgICAgICBcblxuICAgIC8qKlxuICAgICAqIENSVUQgbWV0aG9kIHRvIHJldHVybiBhbGwgQWxidW1zLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIEFycmF5IG9mIHR5cGUgQWxidW0uXG4gICAgICovXG4gICAgcHVibGljIGZpbmRBbGxBbGJ1bXMoY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgICAvLyBMaXN0IG9mIEFsYnVtcyB0byByZXR1cm5cbiAgICAgICAgIGxldCBhbGJ1bXM6QWxidW1bXSA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIEFsYnVtc1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNIE9SREVSIEJZIFlFQVIsIFRJVExFJyk7XG4gICAgICAgICAgICBmb3IobGV0IHg9MDt4IDwgcmVzdWx0MS5sZW5ndGg7Kyt4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCBUcmFja3MgZm9yIHRoaXMgQWxidW1cbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdDFbeF0uSUQ7XG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczpUcmFja1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeT0wO3kgPCByZXN1bHQyLmxlbmd0aDsrK3kpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socmVzdWx0Mlt5XS5JRCwgcmVzdWx0Mlt5XS5OVU1CRVIsIHJlc3VsdDJbeV0uVElUTEUsIHJlc3VsdDJbeV0uTFlSSUNTLCByZXN1bHQyW3ldLlZJREVPX1VSTCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCBBbGJ1bSBhbmQgaXRzIFRyYWNrcyB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHQxW3hdLklELCByZXN1bHQxW3hdLlRJVExFLCByZXN1bHQxW3hdLkFSVElTVCwgcmVzdWx0MVt4XS5ERVNDUklQVElPTiwgcmVzdWx0MVt4XS5ZRUFSLCByZXN1bHQxW3hdLklNQUdFX05BTUUsIHRyYWNrcykpOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XG4gICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byBzZWFyY2hlcyBmb3IgYWxsIEFsYnVtcyBieSBhIHdpbGRhcmQgc2VhcmNoIGluIEFydGlzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc2VhcmNoIHdpbGRjYXJkIEFydGlzdCB0byBzZWFyY2ggQWxidW1zIGZvci5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhbiBBcnJheSBvZiB0eXBlIEFsYnVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kQWxidW1zQnlBcnRpc3Qoc2VhcmNoOnN0cmluZywgY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgICAvLyBMaXN0IG9mIEFsYnVtcyB0byByZXR1cm5cbiAgICAgICAgIGxldCBhbGJ1bXM6QWxidW1bXSA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIEFsYnVtcyBmb3Igc2VhcmNoIHBhcnRpYWwgQXJ0aXN0XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIEFMQlVNIFdIRVJFIEFSVElTVCBMSUtFID8gT1JERVIgQlkgWUVBUiwgVElUTEVcIiwgWyclJyArIHNlYXJjaCArICclJ10pO1xuICAgICAgICAgICAgZm9yKGxldCB4PTA7eCA8IHJlc3VsdDEubGVuZ3RoOysreClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHF1ZXJ5IHRvIGdldCBhbGwgVHJhY2tzIGZvciB0aGlzIEFsYnVtXG4gICAgICAgICAgICAgICAgbGV0IGFsYnVtSWQgPSByZXN1bHQxW3hdLklEO1xuICAgICAgICAgICAgICAgIGxldCB0cmFja3M6VHJhY2tbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBUUkFDSyBXSEVSRSBBTEJVTV9JRD0/JywgW2FsYnVtSWRdKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHk9MDt5IDwgcmVzdWx0Mi5sZW5ndGg7Kyt5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUywgcmVzdWx0Mlt5XS5WSURFT19VUkwpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgQWxidW0gYW5kIGl0cyBUcmFja3MgdG8gdGhlIGxpc3RcbiAgICAgICAgICAgICAgICBhbGJ1bXMucHVzaChuZXcgQWxidW0ocmVzdWx0MVt4XS5JRCwgcmVzdWx0MVt4XS5USVRMRSwgcmVzdWx0MVt4XS5BUlRJU1QsIHJlc3VsdDFbeF0uREVTQ1JJUFRJT04sIHJlc3VsdDFbeF0uWUVBUiwgcmVzdWx0MVt4XS5JTUFHRV9OQU1FLCB0cmFja3MpKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBjYWxsYmFjayhhbGJ1bXMpO1xuICAgICAgICAgfSk7XG4gICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgIC8qKlxuICAgICAqIENSVUQgbWV0aG9kIHRvIHNlYXJjaGVzIGZvciBhbGwgQWxidW1zIGJ5IGEgd2lsZGNhcmQgc2VyYWNoIGluIERlc2NyaXB0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBzZWFyY2ggd2lsZGNhcmQgRGVzY3JpcHRpb24gdG8gc2VhcmNoIEFsYnVtcyBmb3IuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYW4gQXJyYXkgb2YgdHlwZSBBbGJ1bS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZEFsYnVtc0J5RGVzY3JpcHRpb24oc2VhcmNoOnN0cmluZywgY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgICAvLyBMaXN0IG9mIEFsYnVtcyB0byByZXR1cm5cbiAgICAgICAgIGxldCBhbGJ1bXM6QWxidW1bXSA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIEFsYnVtcyBmb3Igc2VhcmNoIHBhcnRpYWwgQXJ0aXN0XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIEFMQlVNIFdIRVJFIERFU0NSSVBUSU9OIExJS0UgPyBPUkRFUiBCWSBZRUFSLCBUSVRMRVwiLCBbJyUnICsgc2VhcmNoICsgJyUnXSk7XG4gICAgICAgICAgICBmb3IobGV0IHg9MDt4IDwgcmVzdWx0MS5sZW5ndGg7Kyt4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCBUcmFja3MgZm9yIHRoaXMgQWxidW1cbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdDFbeF0uSUQ7XG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczpUcmFja1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeT0wO3kgPCByZXN1bHQyLmxlbmd0aDsrK3kpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socmVzdWx0Mlt5XS5JRCwgcmVzdWx0Mlt5XS5OVU1CRVIsIHJlc3VsdDJbeV0uVElUTEUsIHJlc3VsdDJbeV0uTFlSSUNTLCByZXN1bHQyW3ldLlZJREVPX1VSTCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCBBbGJ1bSBhbmQgaXRzIFRyYWNrcyB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHQxW3hdLklELCByZXN1bHQxW3hdLlRJVExFLCByZXN1bHQxW3hdLkFSVElTVCwgcmVzdWx0MVt4XS5ERVNDUklQVElPTiwgcmVzdWx0MVt4XS5ZRUFSLCByZXN1bHQxW3hdLklNQUdFX05BTUUsIHRyYWNrcykpOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XG4gICAgICAgICB9KTtcbiAgICB9ICAgICAgICAgICAgXG5cbiAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byByZXR1cm4gYW4gQWxidW0uXG4gICAgICogXG4gICAgICogQHBhcmFtIGFsYnVtSWQgQWxidW0gSUQgdG8gcmV0cmlldmUgQWxidW0gZm9yLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIEFycmF5IG9mIHR5cGUgQWxidW0uXG4gICAgICovXG4gICAgcHVibGljIGZpbmRBbGJ1bShhbGJ1bUlkOm51bWJlciwgY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIEFsYnVtcyBmb3Igc3BlY2lmaWMgQXJ0aXN0XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gQUxCVU0gV0hFUkUgSUQ9PycsIFthbGJ1bUlkXSk7XG4gICAgICAgICAgICBpZihyZXN1bHQxLmxlbmd0aCAhPSAxKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuXG4gICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCBUcmFja3MgZm9yIHRoaXMgQWxidW1cbiAgICAgICAgICAgIGxldCB0cmFja3M6VHJhY2tbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xuICAgICAgICAgICAgZm9yKGxldCB5PTA7eSA8IHJlc3VsdDIubGVuZ3RoOysreSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socmVzdWx0Mlt5XS5JRCwgcmVzdWx0Mlt5XS5OVU1CRVIsIHJlc3VsdDJbeV0uVElUTEUsIHJlc3VsdDJbeV0uTFlSSUNTLCByZXN1bHQyW3ldLlZJREVPX1VSTCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gQWxidW0gYW5kIGl0cyBUcmFja3MgZm9yIHJldHVyblxuICAgICAgICAgICAgbGV0IGFsYnVtID0gbmV3IEFsYnVtKHJlc3VsdDFbMF0uSUQsIHJlc3VsdDFbMF0uVElUTEUsIHJlc3VsdDFbMF0uQVJUSVNULCByZXN1bHQxWzBdLkRFU0NSSVBUSU9OLCByZXN1bHQxWzBdLllFQVIsIHJlc3VsdDFbMF0uSU1BR0VfTkFNRSwgdHJhY2tzKTsgXG5cbiAgICAgICAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBjYWxsYmFjayhhbGJ1bSk7XG4gICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byBjcmVhdGUgYW4gQWxidW0uXG4gICAgICogXG4gICAgICogQHBhcmFtIGFsYnVtIEFsYnVtIHRvIGluc2VydC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCAtMSBpZiBhbiBlcnJvciBlbHNlIEFsYnVtIElEIGNyZWF0ZWQuICBcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlKGFsYnVtOkFsYnVtLCBjYWxsYmFjazogYW55KVxuICAgIHtcbiAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgaW5zZXJ0IEFsYnVtXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIEFMQlVNIChUSVRMRSwgQVJUSVNULCBERVNDUklQVElPTiwgWUVBUiwgSU1BR0VfTkFNRSkgVkFMVUVTKD8sPyw/LD8sPyknLCBbYWxidW0uVGl0bGUsIGFsYnVtLkFydGlzdCwgYWxidW0uRGVzY3JpcHRpb24sIGFsYnVtLlllYXIsIGFsYnVtLkltYWdlXSk7XG4gICAgICAgICAgICBpZihyZXN1bHQxLmFmZmVjdGVkUm93cyAhPSAxKVxuICAgICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xuXG4gICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gaW5zZXJ0IGFsbCBUcmFja3MgZm9yIHRoaXMgQWxidW1cbiAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MS5pbnNlcnRJZDtcbiAgICAgICAgICAgIGZvcihsZXQgeT0wO3kgPCBhbGJ1bS5UcmFja3MubGVuZ3RoOysreSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIFRSQUNLIChBTEJVTV9JRCwgVElUTEUsIE5VTUJFUiwgVklERU9fVVJMKSBWQUxVRVMoPyw/LD8sPyknLCBbYWxidW1JZCwgYWxidW0uVHJhY2tzW3ldLlRpdGxlLCBhbGJ1bS5UcmFja3NbeV0uTnVtYmVyLCBhbGJ1bS5UcmFja3NbeV0uVmlkZW9dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byB1cGRhdGUgYW4gQWxidW0uXG4gICAgICogXG4gICAgICogQHBhcmFtIGFsYnVtIEFsYnVtIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBudW1iZXIgb2Ygcm93cyB1cGRhdGVkLiAgXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZShhbGJ1bTpBbGJ1bSwgY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgICAvLyBHZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzICAgXG4gICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiBcbiAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuIFxuICAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHVwZGF0ZSBBbGJ1bVxuICAgICAgICAgICAgIGxldCBjaGFuZ2VzID0gMDtcbiAgICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1VQREFURSBBTEJVTSBTRVQgVElUTEU9PywgQVJUSVNUPT8sIERFU0NSSVBUSU9OPT8sIFlFQVI9PywgSU1BR0VfTkFNRT0/IFdIRVJFIElEPT8nLCBbYWxidW0uVGl0bGUsIGFsYnVtLkFydGlzdCwgYWxidW0uRGVzY3JpcHRpb24sIGFsYnVtLlllYXIsIGFsYnVtLkltYWdlLCBhbGJ1bS5JZF0pO1xuICAgICAgICAgICAgaWYocmVzdWx0MS5jaGFuZ2VkUm93cyAhPSAwKVxuICAgICAgICAgICAgICAgICsrY2hhbmdlcztcblxuICAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byB1cGRhdGUgYWxsIFRyYWNrcyBmb3IgdGhpcyBBbGJ1bVxuICAgICAgICAgICAgIGZvcihsZXQgeT0wO3kgPCBhbGJ1bS5UcmFja3MubGVuZ3RoOysreSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgVFJBQ0sgU0VUIFRJVExFPT8sIE5VTUJFUj0/LCBWSURFT19VUkw9PyBXSEVSRSBJRD0/IEFORCBBTEJVTV9JRD0/JywgW2FsYnVtLlRyYWNrc1t5XS5UaXRsZSwgYWxidW0uVHJhY2tzW3ldLk51bWJlciwgYWxidW0uVHJhY2tzW3ldLlZpZGVvLCBhbGJ1bS5UcmFja3NbeV0uSWQsIGFsYnVtLklkXSk7XG4gICAgICAgICAgICAgICAgIGlmKHJlc3VsdDIuY2hhbmdlZFJvd3MgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgKytjaGFuZ2VzO1xuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKGNoYW5nZXMpO1xuICAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byBkZWxldGUgYW4gQWxidW0uXG4gICAgICogXG4gICAgICogQHBhcmFtIGFsYnVtIEFsYnVtIElEIHRvIGRlbGV0ZS5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBudW1iZXIgb2Ygcm93cyBkZWxldGVkLiAgXG4gICAgICogKi9cbiAgICBwdWJsaWMgZGVsZXRlKGFsYnVtSWQ6bnVtYmVyLCBjYWxsYmFjazogYW55KVxuICAgIHtcbiAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZGVsZXRlIHRoZSB0cmFja3MgZm9yIGFuIEFsYnVtXG4gICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xuICAgICAgICAgICAgY2hhbmdlcyA9IGNoYW5nZXMgKyByZXN1bHQxLmFmZmVjdGVkUm93cztcblxuICAgICAgICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHF1ZXJ5IHRvIGRlbGV0ZSB0aGUgQWxidW1cbiAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnREVMRVRFIEZST00gQUxCVU0gV0hFUkUgSUQ9PycsIFthbGJ1bUlkXSk7XG4gICAgICAgICAgICBjaGFuZ2VzID0gY2hhbmdlcyArIHJlc3VsdDIuYWZmZWN0ZWRSb3dzO1xuXG4gICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vKiAqKioqKioqKioqKioqKioqIFByaXZhdGUgSGVscGVyIE1ldGhvZHMgKioqKioqKioqKioqKioqKiAqL1xuXG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBoZWxwZXIgbWV0aG9kIHRvIGluaXRpYWxpZSBhIERhdGFiYXNlIENvbm5lY3Rpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXREYkNvbm5lY3Rpb24oKTphbnlcbiAgICB7XG4gICAgICAgIHJldHVybiBteXNxbC5jcmVhdGVQb29sKHtob3N0OiB0aGlzLmhvc3QsIHBvcnQ6IHRoaXMucG9ydCwgdXNlcjogdGhpcy51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsIGRhdGFiYXNlOiB0aGlzLnNjaGVtYSwgY29ubmVjdGlvbkxpbWl0OiAxMH0pO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUE2QjtBQUFBO0FBQUEsK0NBSDdCO0FBQUEsSUFLYUEsUUFBUTtF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