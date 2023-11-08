"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageVersion = exports.findPackageJson = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
/**
 * Find package.json with path.
 * @param path
 */
const findPackageJson = (path) => {
    return fs_1.default.readFileSync((0, path_1.join)(path, 'package.json')).toString();
};
exports.findPackageJson = findPackageJson;
/**
 * Get version field within package.json
 * @param path
 */
const getPackageVersion = (path) => {
    const packageJson = (0, exports.findPackageJson)(path);
    return JSON.parse(packageJson).version;
};
exports.getPackageVersion = getPackageVersion;
