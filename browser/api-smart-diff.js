/*! api-smart-diff@0.2.1 */
var ApiSmartDiff =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.breakingIfAfterTrue = exports.breakingIf = exports.allAnnotation = exports.allUnclassified = exports.addNonBreaking = exports.onlyAddBreaking = exports.allBreaking = exports.allNonBreaking = exports.unclassified = exports.annotation = exports.nonBreaking = exports.breaking = void 0;
exports.breaking = "breaking";
exports.nonBreaking = "non-breaking";
exports.annotation = "annotation";
exports.unclassified = "unclassified";
// predefined classifiers
exports.allNonBreaking = [exports.nonBreaking, exports.nonBreaking, exports.nonBreaking];
exports.allBreaking = [exports.breaking, exports.breaking, exports.breaking];
exports.onlyAddBreaking = [exports.breaking, exports.nonBreaking, exports.nonBreaking];
exports.addNonBreaking = [exports.nonBreaking, exports.breaking, exports.breaking];
exports.allUnclassified = [exports.unclassified, exports.unclassified, exports.unclassified];
exports.allAnnotation = [exports.annotation, exports.annotation, exports.annotation];
// helpers
const breakingIf = (v) => (v ? exports.breaking : exports.nonBreaking);
exports.breakingIf = breakingIf;
const breakingIfAfterTrue = (_, a) => (0, exports.breakingIf)(a);
exports.breakingIfAfterTrue = breakingIfAfterTrue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcnVsZXMvaGVscGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLFFBQVEsR0FBRyxVQUFVLENBQUE7QUFDckIsUUFBQSxXQUFXLEdBQUcsY0FBYyxDQUFBO0FBQzVCLFFBQUEsVUFBVSxHQUFHLFlBQVksQ0FBQTtBQUN6QixRQUFBLFlBQVksR0FBRyxjQUFjLENBQUE7QUFFMUMseUJBQXlCO0FBQ1osUUFBQSxjQUFjLEdBQWUsQ0FBQyxtQkFBVyxFQUFFLG1CQUFXLEVBQUUsbUJBQVcsQ0FBQyxDQUFBO0FBQ3BFLFFBQUEsV0FBVyxHQUFlLENBQUMsZ0JBQVEsRUFBRSxnQkFBUSxFQUFFLGdCQUFRLENBQUMsQ0FBQTtBQUN4RCxRQUFBLGVBQWUsR0FBZSxDQUFDLGdCQUFRLEVBQUUsbUJBQVcsRUFBRSxtQkFBVyxDQUFDLENBQUE7QUFDbEUsUUFBQSxjQUFjLEdBQWUsQ0FBQyxtQkFBVyxFQUFFLGdCQUFRLEVBQUUsZ0JBQVEsQ0FBQyxDQUFBO0FBQzlELFFBQUEsZUFBZSxHQUFlLENBQUMsb0JBQVksRUFBRSxvQkFBWSxFQUFFLG9CQUFZLENBQUMsQ0FBQTtBQUN4RSxRQUFBLGFBQWEsR0FBZSxDQUFDLGtCQUFVLEVBQUUsa0JBQVUsRUFBRSxrQkFBVSxDQUFDLENBQUE7QUFFN0UsVUFBVTtBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBVSxFQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQVcsQ0FBQyxDQUFBO0FBQW5FLFFBQUEsVUFBVSxjQUF5RDtBQUN6RSxNQUFNLG1CQUFtQixHQUFHLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBWSxFQUFFLENBQUMsSUFBQSxrQkFBVSxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQWpFLFFBQUEsbUJBQW1CLHVCQUE4QyJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.findExternalRefs = exports.buildPath = exports.parsePath = exports.typeOf = void 0;
const typeOf = (value) => {
    if (Array.isArray(value)) {
        return "array";
    }
    return typeof value == null ? "null" : typeof value;
};
exports.typeOf = typeOf;
const parsePath = (path) => {
    const [_, ...pathArr] = path.split("/").map((i) => i.replace(new RegExp("~1", "g"), "/"));
    return pathArr;
};
exports.parsePath = parsePath;
const buildPath = (path) => {
    return "/" + path.map((i) => String(i).replace(new RegExp("/", "g"), "~1")).join("/");
};
exports.buildPath = buildPath;
const findExternalRefs = (source) => {
    if (typeof source !== "object") {
        return [];
    }
    let refs = new Set();
    if ((0, exports.typeOf)(source) === "array") {
        for (const item of source) {
            if (typeof item === "object") {
                refs = new Set([...refs, ...(0, exports.findExternalRefs)(item)]);
            }
        }
    }
    else {
        for (const key of Object.keys(source)) {
            if (key === "$ref") {
                const [external] = source[key].split("#");
                refs.add(external);
            }
            else {
                if (typeof source[key] === "object") {
                    refs = new Set([...refs, ...(0, exports.findExternalRefs)(source[key])]);
                }
            }
        }
    }
    return [...refs];
};
exports.findExternalRefs = findExternalRefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUNuQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxPQUFPLENBQUE7S0FDZjtJQUNELE9BQU8sT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFBO0FBQ3JELENBQUMsQ0FBQTtBQUxZLFFBQUEsTUFBTSxVQUtsQjtBQUVNLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBWSxFQUFZLEVBQUU7SUFDbEQsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pGLE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQUhZLFFBQUEsU0FBUyxhQUdyQjtBQUVNLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBYyxFQUFVLEVBQUU7SUFDbEQsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkYsQ0FBQyxDQUFBO0FBRlksUUFBQSxTQUFTLGFBRXJCO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQW1CLEVBQVksRUFBRTtJQUNoRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLEVBQUUsQ0FBQTtLQUNWO0lBQ0QsSUFBSSxJQUFJLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUE7SUFDakMsSUFBSSxJQUFBLGNBQU0sRUFBQyxNQUFNLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDOUIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDckQ7U0FDRjtLQUNGO1NBQU07UUFDTCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDbkMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFBLHdCQUFnQixFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDNUQ7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUF4QlksUUFBQSxnQkFBZ0Isb0JBd0I1QiJ9

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemaRules = void 0;
const helpers_1 = __webpack_require__(0);
const maxClassifier = [
    helpers_1.breaking,
    helpers_1.nonBreaking,
    (b, a) => (0, helpers_1.breakingIf)(b > a)
];
const minClassifier = [
    helpers_1.breaking,
    helpers_1.nonBreaking,
    (b, a) => (0, helpers_1.breakingIf)(b < a)
];
const exclusiveClassifier = [
    helpers_1.breakingIfAfterTrue,
    helpers_1.nonBreaking,
    helpers_1.breakingIfAfterTrue
];
const booleanClassifier = [
    helpers_1.breakingIfAfterTrue,
    helpers_1.nonBreaking,
    helpers_1.breakingIfAfterTrue
];
const multipleOfClassifier = [
    helpers_1.breaking,
    helpers_1.nonBreaking,
    (b, a) => (0, helpers_1.breakingIf)(!!(b % a))
];
const jsonSchemaRules = (rootRule = helpers_1.allUnclassified) => ({
    "/": rootRule,
    "/title": helpers_1.allAnnotation,
    "/multipleOf": multipleOfClassifier,
    "/maximum": maxClassifier,
    "/exclusiveMaximum": exclusiveClassifier,
    "/minimum": minClassifier,
    "/exclusiveMinimum": exclusiveClassifier,
    "/maxLength": maxClassifier,
    "/minLength": minClassifier,
    "/pattern": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
    "/maxItems": maxClassifier,
    "/minItems": minClassifier,
    "/uniqueItems": booleanClassifier,
    "/maxProperties": maxClassifier,
    "/minProperties": minClassifier,
    "/required": {
        "/": helpers_1.onlyAddBreaking,
        "/*": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
    },
    "/enum": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    },
    "/type": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
    "/not": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": () => (0, exports.jsonSchemaRules)(helpers_1.allBreaking),
    },
    "/allOf": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": () => (0, exports.jsonSchemaRules)(helpers_1.allBreaking),
    },
    "/oneOf": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": () => (0, exports.jsonSchemaRules)(helpers_1.addNonBreaking),
    },
    "/anyOf": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": () => (0, exports.jsonSchemaRules)(helpers_1.addNonBreaking),
    },
    "/items": () => (0, exports.jsonSchemaRules)(helpers_1.addNonBreaking),
    "/properties": {
        "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
        "/*": () => (0, exports.jsonSchemaRules)(helpers_1.addNonBreaking),
    },
    "/additionalProperties": () => (0, exports.jsonSchemaRules)([helpers_1.breaking, helpers_1.breaking, helpers_1.breakingIfAfterTrue]),
    "/description": helpers_1.allAnnotation,
    "/format": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
    "/default": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/nullable": booleanClassifier,
    "/discriminator": {
        // TODO
        "/": helpers_1.allUnclassified,
        "/propertyName": helpers_1.allUnclassified,
        "/mapping": helpers_1.allUnclassified,
    },
    "/readOnly": booleanClassifier,
    "/writeOnly": booleanClassifier,
    "/example": helpers_1.allAnnotation,
    "/externalDocs": helpers_1.allAnnotation,
    "/deprecated": booleanClassifier,
    "/xml": {
        // TODO
        "/": helpers_1.allUnclassified,
        "/name": helpers_1.allUnclassified,
        "/namespace": helpers_1.allUnclassified,
        "/prefix": helpers_1.allUnclassified,
        "/attribute": helpers_1.allUnclassified,
        "/wrapped": helpers_1.allUnclassified,
    },
});
exports.jsonSchemaRules = jsonSchemaRules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9qc29uc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUlrQjtBQUVsQixNQUFNLGFBQWEsR0FBZTtJQUNoQyxrQkFBUTtJQUNSLHFCQUFXO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLG9CQUFVLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM1QixDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQWU7SUFDaEMsa0JBQVE7SUFDUixxQkFBVztJQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxvQkFBVSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDNUIsQ0FBQTtBQUVELE1BQU0sbUJBQW1CLEdBQWU7SUFDdEMsNkJBQW1CO0lBQ25CLHFCQUFXO0lBQ1gsNkJBQW1CO0NBQ3BCLENBQUE7QUFFRCxNQUFNLGlCQUFpQixHQUFlO0lBQ3BDLDZCQUFtQjtJQUNuQixxQkFBVztJQUNYLDZCQUFtQjtDQUNwQixDQUFBO0FBRUQsTUFBTSxvQkFBb0IsR0FBZTtJQUN2QyxrQkFBUTtJQUNSLHFCQUFXO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLG9CQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2hDLENBQUE7QUFFTSxNQUFNLGVBQWUsR0FBRyxDQUFDLFdBQXVCLHlCQUFlLEVBQVMsRUFBRSxDQUFDLENBQUM7SUFDakYsR0FBRyxFQUFFLFFBQVE7SUFDYixRQUFRLEVBQUUsdUJBQWE7SUFDdkIsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxVQUFVLEVBQUUsYUFBYTtJQUN6QixtQkFBbUIsRUFBRSxtQkFBbUI7SUFDeEMsVUFBVSxFQUFFLGFBQWE7SUFDekIsbUJBQW1CLEVBQUUsbUJBQW1C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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["add"] = "add";
    ActionType["remove"] = "remove";
    ActionType["replace"] = "replace";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLHlCQUFXLENBQUE7SUFDWCwrQkFBaUIsQ0FBQTtJQUNqQixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckIifQ==

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(0), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVsZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUEyQjtBQUMzQiw2Q0FBMEI7QUFDMUIsK0NBQTRCO0FBQzVCLDRDQUF5QiJ9

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExternalRefs = void 0;
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(3), exports);
var utils_1 = __webpack_require__(1);
Object.defineProperty(exports, "findExternalRefs", { enumerable: true, get: function () { return utils_1.findExternalRefs; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0I7QUFDdEIsMENBQXVCO0FBQ3ZCLDBDQUF1QjtBQUN2QixpQ0FBMEM7QUFBakMseUdBQUEsZ0JBQWdCLE9BQUEifQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDiff = void 0;
const types_1 = __webpack_require__(3);
const dereference_1 = __webpack_require__(7);
const classifier_1 = __webpack_require__(8);
const context_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(1);
const apiDiff = (before, after, options) => {
    return findDiff(before, after, new context_1.DiffContext(before, after, options));
};
exports.apiDiff = apiDiff;
const findDiff = (before, after, ctx, path = []) => {
    if ((0, utils_1.typeOf)(before) !== (0, utils_1.typeOf)(after)) {
        return [(0, classifier_1.classifyDiff)({ path: path, before, after, action: types_1.ActionType.replace }, ctx.rules)];
    }
    switch ((0, utils_1.typeOf)(before)) {
        case "string":
            return stringsDiff(before, after, ctx, path);
        case "object":
            return objectsDiff(before, after, ctx, path);
        case "array":
            return arrayDiff(before, after, ctx, path);
        default:
            return before !== after ? [(0, classifier_1.classifyDiff)({ path, before, after, action: types_1.ActionType.replace }, ctx.rules)] : [];
    }
};
const normalizeString = (value, ctx) => {
    value = ctx.trimStrings ? value.trim() : value;
    value = ctx.caseSensitive ? value : value.toLowerCase();
    return value;
};
const stringsDiff = (before, after, ctx, path) => {
    before = normalizeString(before, ctx);
    after = normalizeString(after, ctx);
    return before !== after
        ? [(0, classifier_1.classifyDiff)({ path, before, after, action: types_1.ActionType.replace }, ctx.rules)]
        : [];
};
const objectsDiff = (before, after, ctx, path) => {
    const diffs = [];
    const _before = (0, dereference_1.dereference)(before, ctx.before, ctx.beforeRefs, ctx.cache);
    const _after = (0, dereference_1.dereference)(after, ctx.after, ctx.afterRefs, ctx.cache);
    const keys = new Set([...Object.keys(_before), ...Object.keys(_after)]);
    for (const key of keys) {
        // skip symbol key
        if (typeof key === "symbol") {
            continue;
        }
        if (!_before.hasOwnProperty(key)) {
            // added key
            diffs.push((0, classifier_1.classifyDiff)({
                path: [...path, key],
                after: _after[key],
                action: types_1.ActionType.add,
            }, ctx.rules));
        }
        else if (!_after.hasOwnProperty(key)) {
            // deleted key
            diffs.push((0, classifier_1.classifyDiff)({
                path: [...path, key],
                before: _before[key],
                action: types_1.ActionType.remove,
            }, ctx.rules));
        }
        else {
            // updated value
            diffs.push(...findDiff(_before[key], _after[key], ctx, [...path, key]));
        }
        if (ctx.findFirstDiff && diffs.length) {
            break;
        }
    }
    // remove refs
    before.$ref && ctx.beforeRefs.delete(before.$ref);
    after.$ref && ctx.afterRefs.delete(after.$ref);
    return diffs;
};
const findEqualItemIndex = (item, array, ctx) => {
    for (let j = 0; j < array.length; j++) {
        ctx.findFirstDiff = true;
        const diff = findDiff(item, array[j], ctx);
        ctx.findFirstDiff = false;
        if (!diff.length) {
            return j;
        }
    }
    return -1;
};
const arrayDiff = (before, after, ctx, path) => {
    const diffs = [];
    const _after = [...after];
    for (let i = 0; i < before.length; i++) {
        if (ctx.strictArrays) {
            if (i >= after.length) {
                diffs.push((0, classifier_1.classifyDiff)({
                    path: [...path, i],
                    before: before[i],
                    action: types_1.ActionType.remove,
                }, ctx.rules));
            }
            else {
                diffs.push(...findDiff(before[i], after[i], ctx, [...path, i]));
            }
        }
        else {
            const index = findEqualItemIndex(before[i], _after, ctx);
            if (index >= 0) {
                _after.splice(index, 1);
            }
            else {
                diffs.push((0, classifier_1.classifyDiff)({
                    path: [...path, i],
                    before: before[i],
                    action: types_1.ActionType.remove,
                }, ctx.rules));
            }
        }
        if (ctx.findFirstDiff && diffs.length) {
            break;
        }
    }
    if (ctx.strictArrays) {
        _after.splice(0, before.length);
    }
    for (let i = 0; i < _after.length; i++) {
        diffs.push((0, classifier_1.classifyDiff)({
            path: [...path, before.length + i],
            after: _after[i],
            action: types_1.ActionType.add,
        }, ctx.rules));
    }
    return diffs;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFpRTtBQUNqRSwrQ0FBMkM7QUFDM0MsNkNBQTJDO0FBQzNDLHVDQUF1QztBQUN2QyxtQ0FBZ0M7QUFFekIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFXLEVBQUUsS0FBVSxFQUFFLE9BQW9CLEVBQVUsRUFBRTtJQUMvRSxPQUFPLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUkscUJBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDekUsQ0FBQyxDQUFBO0FBRlksUUFBQSxPQUFPLFdBRW5CO0FBRUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFXLEVBQUUsS0FBVSxFQUFFLEdBQWdCLEVBQUUsT0FBaUIsRUFBRSxFQUFVLEVBQUU7SUFDMUYsSUFBSSxJQUFBLGNBQU0sRUFBQyxNQUFNLENBQUMsS0FBSyxJQUFBLGNBQU0sRUFBQyxLQUFLLENBQUMsRUFBRTtRQUNwQyxPQUFPLENBQUMsSUFBQSx5QkFBWSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxrQkFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBQzVGO0lBRUQsUUFBUSxJQUFBLGNBQU0sRUFBQyxNQUFNLENBQUMsRUFBRTtRQUN0QixLQUFLLFFBQVE7WUFDWCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM5QyxLQUFLLFFBQVE7WUFDWCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM5QyxLQUFLLE9BQU87WUFDVixPQUFPLFNBQVMsQ0FBQyxNQUFN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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dereference = exports.resolveObjValue = void 0;
const utils_1 = __webpack_require__(1);
const resolveObjValue = (obj, path, cache = {}) => {
    let value = obj;
    cache = new Map(Object.entries(cache));
    for (const key of (0, utils_1.parsePath)(path)) {
        value = (0, utils_1.typeOf)(value) === "array" ? value[+key] : value[key];
        if (value === undefined) {
            break;
        }
        value = (0, exports.dereference)(value, obj, new Set(), cache);
    }
    return value;
};
exports.resolveObjValue = resolveObjValue;
const dereference = (value, source, refs, cache) => {
    if (value.hasOwnProperty("$ref")) {
        const { $ref } = value, rest = __rest(value, ["$ref"]);
        if (refs.has($ref)) {
            // TODO: handle circular ref
            value = { $circularRef: $ref };
        }
        const [external, path] = $ref.split("#");
        // resolve external obj 
        if (external) {
            if (!cache.has(external)) {
                return value;
            }
            source = cache.get(external);
        }
        value = Object.assign(Object.assign({}, rest), (0, exports.resolveObjValue)(source, path));
        refs.add($ref);
    }
    return value;
};
exports.dereference = dereference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVyZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVyZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBMkM7QUFFcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLFFBQWEsRUFBRSxFQUFFLEVBQUU7SUFDekUsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFBO0lBQ2YsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN0QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUEsaUJBQVMsRUFBQyxJQUFJLENBQUMsRUFBRTtRQUNqQyxLQUFLLEdBQUcsSUFBQSxjQUFNLEVBQUMsS0FBSyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixNQUFLO1NBQ047UUFDRCxLQUFLLEdBQUcsSUFBQSxtQkFBVyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsRDtJQUNELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBWFksUUFBQSxlQUFlLG1CQVczQjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLEtBQXVCLEVBQU8sRUFBRTtJQUN0RyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDaEMsTUFBTSxFQUFFLElBQUksS0FBYyxLQUFLLEVBQWQsSUFBSSxVQUFLLEtBQUssRUFBekIsUUFBaUIsQ0FBUSxDQUFBO1FBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQiw0QkFBNEI7WUFDNUIsS0FBSyxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFBO1NBQy9CO1FBQ0QsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXhDLHdCQUF3QjtRQUN4QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEtBQUssQ0FBQTthQUNiO1lBQ0QsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDN0I7UUFFRCxLQUFLLG1DQUFRLElBQUksR0FBSyxJQUFBLHVCQUFlLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFFLENBQUE7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUE7QUFyQlksUUFBQSxXQUFXLGVBcUJ2QiJ9

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyDiff = exports.findClassifier = void 0;
const helpers_1 = __webpack_require__(0);
const findClassifier = (rules, path) => {
    let _rules = rules;
    for (let key of [...path, ""]) {
        // check if rules dont have key of key is array index
        if (!_rules.hasOwnProperty(`/${key}`) || typeof key === "number") {
            key = "*";
        }
        // check if rules have key
        if (_rules.hasOwnProperty(`/${key}`)) {
            const rule = _rules[`/${key}`];
            if (Array.isArray(rule)) {
                return rule;
            }
            _rules = typeof rule === "function" ? rule() : rule;
        }
        else {
            return helpers_1.allUnclassified;
        }
    }
    return helpers_1.allUnclassified;
};
exports.findClassifier = findClassifier;
const classifyDiff = (diff, rules = {}) => {
    const _diff = diff;
    const classifier = (0, exports.findClassifier)(rules, diff.path);
    const index = ["add", "remove", "replace"].indexOf(diff.action);
    const changeType = classifier[index];
    _diff.type = typeof changeType === "function"
        ? changeType(diff.before, diff.after)
        : changeType;
    return _diff;
};
exports.classifyDiff = classifyDiff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2lmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZDQUFpRDtBQUUxQyxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQVksRUFBRSxJQUFjLEVBQWMsRUFBRTtJQUN6RSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDbEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ2hFLEdBQUcsR0FBRyxHQUFHLENBQUE7U0FDVjtRQUVELDBCQUEwQjtRQUMxQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUE7WUFDOUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQTthQUNaO1lBQ0QsTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUNwRDthQUFNO1lBQ0wsT0FBTyx5QkFBZSxDQUFBO1NBQ3ZCO0tBQ0Y7SUFDRCxPQUFPLHlCQUFlLENBQUE7QUFDeEIsQ0FBQyxDQUFBO0FBcEJZLFFBQUEsY0FBYyxrQkFvQjFCO0FBRU0sTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFzQixFQUFFLFFBQWUsRUFBRSxFQUFRLEVBQUU7SUFDOUUsTUFBTSxLQUFLLEdBQUcsSUFBWSxDQUFBO0lBRTFCLE1BQU0sVUFBVSxHQUFHLElBQUEsc0JBQWMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRW5ELE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9ELE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVwQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sVUFBVSxLQUFLLFVBQVU7UUFDM0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQyxDQUFDLFVBQVUsQ0FBQTtJQUVkLE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBYlksUUFBQSxZQUFZLGdCQWF4QiJ9

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffContext = void 0;
const rules_1 = __webpack_require__(4);
class DiffContext {
    constructor(before, after, options) {
        this.before = before;
        this.after = after;
        this.beforeRefs = new Set();
        this.afterRefs = new Set();
        this.cache = new Map();
        this.findFirstDiff = false;
        this.rules = typeof options.rules === "string" ? this.getBaseRules(options.rules) : options.rules;
        this.trimStrings = options.trimStrings;
        this.caseSensitive = options.caseSensitive;
        this.strictArrays = options.strictArrays;
        const externalRefs = options.externalRefs || {};
        for (const ref of Object.keys(externalRefs)) {
            this.cache.set(ref, externalRefs[ref]);
        }
    }
    getBaseRules(name) {
        switch (name) {
            case "OpenApi3":
                return rules_1.openapi3Rules;
            case "AsyncApi2":
                return rules_1.asyncApi2Rules;
            case "JsonSchema":
                return (0, rules_1.jsonSchemaRules)();
        }
    }
}
exports.DiffContext = DiffContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUF3RTtBQUd4RSxNQUFhLFdBQVc7SUFZdEIsWUFBbUIsTUFBVyxFQUFTLEtBQVUsRUFBRSxPQUFvQjtRQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQVQxQyxlQUFVLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUE7UUFDbkMsY0FBUyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2xDLFVBQUssR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNuQyxrQkFBYSxHQUFHLEtBQUssQ0FBQTtRQU8xQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQ2pHLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQTtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFBO1FBRXhDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFBO1FBQy9DLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDdkM7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFFLElBQW1CO1FBQ3ZDLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxVQUFVO2dCQUNiLE9BQU8scUJBQWEsQ0FBQTtZQUN0QixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxzQkFBYyxDQUFBO1lBQ3ZCLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUEsdUJBQWUsR0FBRSxDQUFBO1NBQzNCO0lBQ0gsQ0FBQztDQUNGO0FBbENELGtDQWtDQyJ9

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncApi2Rules = exports.messageRules = exports.messageTraitsRules = void 0;
const jsonschema_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(0);
const correlationIdRules = {
    "/": helpers_1.addNonBreaking,
    "/location": helpers_1.addNonBreaking,
    "/description": helpers_1.allAnnotation,
};
const commonRules = {
    "/summary": helpers_1.allAnnotation,
    "/tags": helpers_1.allAnnotation,
    "/externalDocs": helpers_1.allAnnotation,
    "/bindings": helpers_1.allUnclassified,
};
const pubsubTraitsRules = Object.assign({ "/": helpers_1.addNonBreaking, "/*": helpers_1.addNonBreaking, "/operationId": helpers_1.addNonBreaking, "/description": helpers_1.allAnnotation }, commonRules);
exports.messageTraitsRules = Object.assign({ "/": helpers_1.addNonBreaking, "/*": helpers_1.addNonBreaking, "/headers": helpers_1.allUnclassified, "/correlationId": correlationIdRules, "/schemaFormat": helpers_1.allBreaking, "/contentType": helpers_1.addNonBreaking, "/name": helpers_1.allNonBreaking, "/title": helpers_1.allNonBreaking, "/examples": helpers_1.allAnnotation }, commonRules);
exports.messageRules = Object.assign({ "/": helpers_1.allBreaking, "/headers": helpers_1.allUnclassified, "/correlationId": correlationIdRules, "/schemaFormat": helpers_1.allBreaking, "/contentType": helpers_1.addNonBreaking, "/name": helpers_1.allNonBreaking, "/title": helpers_1.allNonBreaking, "/description": helpers_1.allNonBreaking, "/examples": helpers_1.allAnnotation, "/traits": exports.messageTraitsRules, "/payload": (0, jsonschema_1.jsonSchemaRules)(helpers_1.allBreaking) }, commonRules);
const pubsubRules = Object.assign({ "/": helpers_1.addNonBreaking, "/operationId": helpers_1.addNonBreaking, "/description": helpers_1.allAnnotation, "/traits": pubsubTraitsRules, "/message": exports.messageRules }, commonRules);
const infoRules = {
    "/": helpers_1.addNonBreaking,
    "/version": helpers_1.addNonBreaking,
    "/termsOfService": helpers_1.addNonBreaking,
    "/license": {
        "/": helpers_1.addNonBreaking,
        "/name": helpers_1.allBreaking,
        "/url": helpers_1.onlyAddBreaking,
    },
    "/title": helpers_1.allAnnotation,
    "/description": helpers_1.allAnnotation,
    "/contact": {
        "/": helpers_1.allAnnotation,
        "/name": helpers_1.allAnnotation,
        "/url": helpers_1.allAnnotation,
        "/email": helpers_1.allAnnotation,
    },
};
const serversRules = {
    "/": helpers_1.addNonBreaking,
    "/*": {
        "/": helpers_1.addNonBreaking,
        "/url": helpers_1.addNonBreaking,
        "/description": helpers_1.allAnnotation,
        "/protocol": helpers_1.allBreaking,
        "/protocolVersion": helpers_1.allBreaking,
        "/variables": {
            "/": helpers_1.addNonBreaking,
            "/*": {
                "/": helpers_1.addNonBreaking,
                "/enum": {
                    "/": helpers_1.addNonBreaking,
                    "/*": helpers_1.addNonBreaking,
                },
                "/default": helpers_1.allBreaking,
                "/description": helpers_1.allAnnotation,
                "/examples": helpers_1.allAnnotation,
            },
        },
        "/security": {
            "/": helpers_1.allBreaking,
            "/*": helpers_1.allBreaking,
        },
        "/bindings": helpers_1.allUnclassified,
    },
};
const channelRules = {
    "/": helpers_1.addNonBreaking,
    "/description": helpers_1.allNonBreaking,
    "/bindings": helpers_1.allUnclassified,
    "/subscribe": pubsubRules,
    "/publish": pubsubRules,
    "/parameters": {
        "/": helpers_1.allBreaking,
        "/*": {
            "/": helpers_1.addNonBreaking,
            "/description": helpers_1.allNonBreaking,
            "/schema": (0, jsonschema_1.jsonSchemaRules)(helpers_1.allBreaking),
            "/location": helpers_1.allBreaking,
        },
    },
};
exports.asyncApi2Rules = {
    "/asyncapi": helpers_1.addNonBreaking,
    "/id": helpers_1.allAnnotation,
    "/defaultContentType": helpers_1.allBreaking,
    "/info": infoRules,
    "/servers": serversRules,
    "/channels": {
        "/": helpers_1.addNonBreaking,
        "/*": channelRules,
    },
    "/components": helpers_1.allNonBreaking,
    "/tags": helpers_1.allAnnotation,
    "/externalDocs": helpers_1.allAnnotation,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNhcGkyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3J1bGVzL2FzeW5jYXBpMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBOEM7QUFFOUMsdUNBR2tCO0FBRWxCLE1BQU0sa0JBQWtCLEdBQVU7SUFDaEMsR0FBRyxFQUFFLHdCQUFjO0lBQ25CLFdBQVcsRUFBRSx3QkFBYztJQUMzQixjQUFjLEVBQUUsdUJBQWE7Q0FDOUIsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUFVO0lBQ3pCLFVBQVUsRUFBRSx1QkFBYTtJQUN6QixPQUFPLEVBQUUsdUJBQWE7SUFDdEIsZUFBZSxFQUFFLHVCQUFhO0lBQzlCLFdBQVcsRUFBRSx5QkFBZTtDQUM3QixDQUFBO0FBRUQsTUFBTSxpQkFBaUIsbUJBQ3JCLEdBQUcsRUFBRSx3QkFBYyxFQUNuQixJQUFJLEVBQUUsd0JBQWMsRUFDcEIsY0FBYyxFQUFFLHdCQUFjLEVBQzlCLGNBQWMsRUFBRSx1QkFBYSxJQUMxQixXQUFXLENBQ2YsQ0FBQTtBQUVZLFFBQUEsa0JBQWtCLG1CQUM3QixHQUFHLEVBQUUsd0JBQWMsRUFDbkIsSUFBSSxFQUFFLHdCQUFjLEVBQ3BCLFVBQVUsRUFBRSx5QkFBZSxFQUMzQixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFDcEMsZUFBZSxFQUFFLHFCQUFXLEVBQzVCLGNBQWMsRUFBRSx3QkFBYyxFQUM5QixPQUFPLEVBQUUsd0JBQWMsRUFDdkIsUUFBUSxFQUFFLHdCQUFjLEVBQ3hCLFdBQVcsRUFBRSx1QkFBYSxJQUN2QixXQUFXLEVBQ2Y7QUFFWSxRQUFBLFlBQVksbUJBQ3ZCLEdBQUcsRUFBRSxxQkFBVyxFQUNoQixVQUFVLEVBQUUseUJBQWUsRUFDM0IsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQ3BDLGVBQWUsRUFBRSxxQkFBVyxFQUM1QixjQUFjLEVBQUUsd0JBQWMsRUFDOUIsT0FBTyxFQUFFLHdCQUFjLEVBQ3ZCLFFBQVEsRUFBRSx3QkFBYyxF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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openapi3Rules = void 0;
const jsonschema_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(0);
const serversRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/url": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/description": helpers_1.allAnnotation,
        "/variables": {
            "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
            "/*": {
                "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
                "/enum": {
                    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
                    "/*": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
                },
                "/default": [helpers_1.breaking, helpers_1.breaking, helpers_1.breaking],
                "/description": helpers_1.allAnnotation,
            },
        },
    },
};
const parametersRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/name": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/in": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/description": helpers_1.allAnnotation,
        "/required": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breakingIfAfterTrue],
        "/deprecated": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breakingIfAfterTrue],
    },
};
const headersRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/description": helpers_1.allAnnotation,
        "/required": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breakingIfAfterTrue],
        "/deprecated": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breakingIfAfterTrue],
    },
};
const encodingRules = {
    "/": [helpers_1.nonBreaking, helpers_1.nonBreaking, helpers_1.nonBreaking],
    "/*": {
        "/contentType": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/headers": headersRules,
        "/style": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/explode": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/allowReserved": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    },
};
const contentRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/schema": (0, jsonschema_1.jsonSchemaRules)(helpers_1.allBreaking),
        "/example": helpers_1.allAnnotation,
        "/examples": helpers_1.allAnnotation,
        "/encoding": encodingRules,
    },
};
const requestBodiesRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/description": helpers_1.allAnnotation,
        "/content": contentRules,
        "/required": [helpers_1.breaking, helpers_1.nonBreaking, (_, a) => (a ? helpers_1.breaking : helpers_1.nonBreaking)],
    },
};
const responsesRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/*": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/description": helpers_1.allAnnotation,
        "/headers": headersRules,
        "/content": contentRules,
    },
};
const securityRules = {
    "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.unclassified],
    "/*": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.unclassified],
};
const operationRules = {
    "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/tags": helpers_1.allAnnotation,
    "/summary": helpers_1.allAnnotation,
    "/description": helpers_1.allAnnotation,
    "/externalDocs": helpers_1.allAnnotation,
    "/operationId": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/parameters": parametersRules,
    "/requestBody": requestBodiesRules,
    "/responses": responsesRules,
    "/deprecated": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breakingIfAfterTrue],
    "/security": securityRules,
    "/servers": serversRules,
};
exports.openapi3Rules = {
    "/openapi": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
    "/info": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/title": helpers_1.allAnnotation,
        "/description": helpers_1.allAnnotation,
        "/termsOfService": helpers_1.allAnnotation,
        "/contact": helpers_1.allAnnotation,
        "/licence": {
            "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
            "/name": [helpers_1.breaking, helpers_1.breaking, helpers_1.breaking],
            "/url": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.nonBreaking],
        },
        "/version": helpers_1.allAnnotation,
    },
    "/servers": serversRules,
    "/paths": {
        "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
        "/*": {
            "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
            "/summary": helpers_1.allAnnotation,
            "/description": helpers_1.allAnnotation,
            "/*": operationRules,
            "/servers": serversRules,
            "/parameters": parametersRules,
        },
    },
    "/components": {
        "/": [helpers_1.nonBreaking, helpers_1.nonBreaking, helpers_1.nonBreaking],
        "/schemas": {
            "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
            "/*": (0, jsonschema_1.jsonSchemaRules)(helpers_1.addNonBreaking),
        },
        "/responses": responsesRules,
        "/parameters": parametersRules,
        "/examples": helpers_1.allAnnotation,
        "/requestBodies": {
            "/": [helpers_1.nonBreaking, helpers_1.breaking, helpers_1.breaking],
            "/*": requestBodiesRules,
        },
        "/headers": headersRules,
        "/securitySchemes": {
            "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
            "/*": {
                "/": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/type": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/description": helpers_1.allAnnotation,
                "/name": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/in": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/scheme": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/bearerFormat": helpers_1.allAnnotation,
                "/flows": [helpers_1.breaking, helpers_1.nonBreaking, helpers_1.breaking],
                "/openIdConnectUrl": helpers_1.allAnnotation,
            },
        },
    },
    "/security": securityRules,
    "/tags": helpers_1.allAnnotation,
    "/externalDocs": helpers_1.allAnnotation,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmFwaTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVsZXMvb3BlbmFwaTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQThDO0FBRTlDLHVDQUlrQjtBQUVsQixNQUFNLFlBQVksR0FBVTtJQUMxQixHQUFHLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztJQUN0QyxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztRQUN0QyxNQUFNLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztRQUN6QyxjQUFjLEVBQUUsdUJBQWE7UUFDN0IsWUFBWSxFQUFFO1lBQ1osR0FBRyxFQUFFLENBQUMscUJBQVcsRUFBRSxrQkFBUSxFQUFFLGtCQUFRLENBQUM7WUFDdEMsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxDQUFDLHFCQUFXLEVBQUUsa0JBQVEsRUFBRSxrQkFBUSxDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLENBQUMscUJBQVcsRUFBRSxrQkFBUSxFQUFFLGtCQUFRLENBQUM7b0JBQ3RDLElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUsa0JBQVEsRUFBRSxrQkFBUSxDQUFDO2lCQUN4QztnQkFDRCxVQUFVLEVBQUUsQ0FBQyxrQkFBUSxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztnQkFDMUMsY0FBYyxFQUFFLHVCQUFhO2FBQzlCO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBVTtJQUM3QixHQUFHLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztJQUN0QyxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLGtCQUFRLEVBQUUsa0JBQVEsQ0FBQztRQUN0QyxPQUFPLEVBQUUsQ0FB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

/***/ })
/******/ ]);