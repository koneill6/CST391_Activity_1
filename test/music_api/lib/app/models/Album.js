"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Album = /*#__PURE__*/function () {
  function Album(id, title, artist, description, year, image, tracks) {
    (0, _classCallCheck2.default)(this, Album);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "artist", "");
    (0, _defineProperty2.default)(this, "description", "");
    (0, _defineProperty2.default)(this, "year", 0);
    (0, _defineProperty2.default)(this, "image", "");
    (0, _defineProperty2.default)(this, "tracks", []);
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.year = year;
    this.tracks = tracks;
    this.image = image;
  }
  (0, _createClass2.default)(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
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
    key: "Artist",
    get: function get() {
      return this.artist;
    },
    set: function set(artist) {
      this.artist = artist;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "Image",
    get: function get() {
      return this.image;
    },
    set: function set(image) {
      this.image = image;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(tracks) {
      this.tracks = tracks;
    }
  }]);
  return Album;
}();
exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJpbWFnZSIsInRyYWNrcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvQWxidW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiLi9UcmFja1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFsYnVtXHJcbntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgYXJ0aXN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgeWVhcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaW1hZ2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgdGl0bGU6c3RyaW5nLCBhcnRpc3Q6c3RyaW5nLCBkZXNjcmlwdGlvbjpzdHJpbmcsIHllYXI6bnVtYmVyLCBpbWFnZTogc3RyaW5nLCB0cmFja3M6VHJhY2tbXSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IElkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgVGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEFydGlzdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFydGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEFydGlzdChhcnRpc3Q6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFllYXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55ZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgWWVhcih5ZWFyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgSW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEltYWdlKGltYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBUcmFja3MoKTogVHJhY2tbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0IFRyYWNrcyh0cmFja3M6IFRyYWNrW10pIHtcclxuICAgICAgICB0aGlzLnRyYWNrcyA9IHRyYWNrcztcclxuICAgIH1cclxuXHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFYUEsS0FBSztFQVVkLGVBQVlDLEVBQVMsRUFBRUMsS0FBWSxFQUFFQyxNQUFhLEVBQUVDLFdBQWtCLEVBQUVDLElBQVcsRUFBRUMsS0FBYSxFQUFFQyxNQUFjLEVBQ2xIO0lBQUE7SUFBQSwwQ0FUcUIsQ0FBQyxDQUFDO0lBQUEsNkNBQ0MsRUFBRTtJQUFBLDhDQUNELEVBQUU7SUFBQSxtREFDRyxFQUFFO0lBQUEsNENBQ1QsQ0FBQztJQUFBLDZDQUNBLEVBQUU7SUFBQSw4Q0FDQSxFQUFFO0lBSXhCLElBQUksQ0FBQ04sRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDRSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUF3QjtNQUNwQixPQUFPLElBQUksQ0FBQ0wsRUFBRTtJQUNsQixDQUFDO0lBQUEsS0FDRCxhQUFjQSxFQUFVLEVBQUU7TUFDdEIsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDaEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUEyQjtNQUN2QixPQUFPLElBQUksQ0FBQ0MsS0FBSztJQUNyQixDQUFDO0lBQUEsS0FFRCxhQUFpQkEsS0FBYSxFQUFFO01BQzVCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBNEI7TUFDeEIsT0FBTyxJQUFJLENBQUNDLE1BQU07SUFDdEIsQ0FBQztJQUFBLEtBRUQsYUFBa0JBLE1BQWMsRUFBRTtNQUM5QixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQWlDO01BQzdCLE9BQU8sSUFBSSxDQUFDQyxXQUFXO0lBQzNCLENBQUM7SUFBQSxLQUNELGFBQXVCQSxXQUFtQixFQUFFO01BQ3hDLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQ2xDO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBMEI7TUFDdEIsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEIsQ0FBQztJQUFBLEtBRUQsYUFBZ0JBLElBQVksRUFBRTtNQUMxQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQTJCO01BQ3ZCLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQWlCQSxLQUFhLEVBQUU7TUFDNUIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUE2QjtNQUN6QixPQUFPLElBQUksQ0FBQ0MsTUFBTTtJQUN0QixDQUFDO0lBQUEsS0FFRCxhQUFrQkEsTUFBZSxFQUFFO01BQy9CLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7RUFBQTtBQUFBO0FBQUEifQ==