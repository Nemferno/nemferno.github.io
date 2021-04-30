(function() {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 2985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ mongodb; }
});

;// CONCATENATED MODULE: external "mongodb"
var external_mongodb_namespaceObject = require("mongodb");;
// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__(9303);
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);
;// CONCATENATED MODULE: ./middleware/mongodb.ts


const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

const client = new external_mongodb_namespaceObject.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, _, next) {
  if (!client.isConnected()) {
    await client.connect();
  }

  req.mongoClient = client;
  req.mongoDb = client.db(dbName);
  return next();
}

const middleware = external_next_connect_default()();
middleware.use(database);
/* harmony default export */ var mongodb = (middleware);

/***/ }),

/***/ 6983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2985);


const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().use(_middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z).get(async (req, res) => {
  const cursor = await req.mongoDb.collection("books").aggregate([{
    $group: {
      _id: "$genre",
      books: {
        $push: "$$ROOT"
      }
    }
  }]);
  return res.status(200).json(await cursor.toArray());
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9303:
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6983));
module.exports = __webpack_exports__;

})();