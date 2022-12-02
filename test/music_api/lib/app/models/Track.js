"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Track = /*#__PURE__*/function () {
  function Track(id, number, title, lyrics, video) {
    (0, _classCallCheck2.default)(this, Track);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "number", 0);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "lyrics", "");
    (0, _defineProperty2.default)(this, "video", "");
    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
    this.video = video;
  }
  (0, _createClass2.default)(Track, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(number) {
      this.number = number;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(title) {
      this.title = title;
    }
  }, {
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(lyrics) {
      this.lyrics = lyrics;
    }
  }, {
    key: "Video",
    get: function get() {
      return this.video;
    },
    set: function set(video) {
      this.video = video;
    }
  }]);
  return Track;
}();
exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFjayIsImlkIiwibnVtYmVyIiwidGl0bGUiLCJseXJpY3MiLCJ2aWRlbyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVHJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyYWNrXHJcbntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBudW1iZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBseXJpY3M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHZpZGVvOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbnVtYmVyOm51bWJlciwgdGl0bGU6c3RyaW5nLCBseXJpY3M6c3RyaW5nLCB2aWRlbzpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmx5cmljcyA9IGx5cmljcztcclxuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgSWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE51bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IE51bWJlcihudW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBMeXJpY3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5seXJpY3M7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXQgTHlyaWNzKGx5cmljczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBWaWRlbygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgVmlkZW8odmlkZW86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlbztcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxLQUFLO0VBUWQsZUFBWUMsRUFBUyxFQUFFQyxNQUFhLEVBQUVDLEtBQVksRUFBRUMsTUFBYSxFQUFFQyxLQUFZLEVBQy9FO0lBQUE7SUFBQSwwQ0FQcUIsQ0FBQyxDQUFDO0lBQUEsOENBQ0UsQ0FBQztJQUFBLDZDQUNGLEVBQUU7SUFBQSw4Q0FDRCxFQUFFO0lBQUEsNkNBQ0gsRUFBRTtJQUl0QixJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBd0I7TUFDcEIsT0FBTyxJQUFJLENBQUNKLEVBQUU7SUFDbEIsQ0FBQztJQUFBLEtBRUQsYUFBY0EsRUFBVSxFQUFFO01BQ3RCLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ2hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBNEI7TUFDeEIsT0FBTyxJQUFJLENBQUNDLE1BQU07SUFDdEIsQ0FBQztJQUFBLEtBRUQsYUFBa0JBLE1BQWMsRUFBRTtNQUM5QixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQTJCO01BQ3ZCLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQWlCQSxLQUFhLEVBQUU7TUFDNUIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUE0QjtNQUN4QixPQUFPLElBQUksQ0FBQ0MsTUFBTTtJQUN0QixDQUFDO0lBQUEsS0FFRCxhQUFrQkEsTUFBYyxFQUFFO01BQzlCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBMkI7TUFDdkIsT0FBTyxJQUFJLENBQUNDLEtBQUs7SUFDckIsQ0FBQztJQUFBLEtBRUQsYUFBaUJBLEtBQWEsRUFBRTtNQUM1QixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUN0QjtFQUFDO0VBQUE7QUFBQTtBQUFBIn0=