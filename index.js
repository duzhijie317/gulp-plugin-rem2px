'use strict';
const util = require("gulp-util");
const PluginError = util.PluginError;
const through = require("through2");
const rework = require("rework");
const replaceRem = require("./lib");

const PLUGIN_NAME = "gulp-plugin-rem2px";

function rem2px(size) {
  if (typeof size == 'undefined') {
    size = 100
  }
  return through.obj(function (file, enc, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return callback();
    }

    try {
      const { contents } = file;
      file.contents = new Buffer(rework(contents.toString(), {}).use(replaceRem(size)).toString());
    } catch (err) {
      this.emit('error', new PluginError(PLUGIN_NAME, err));
    }

    this.push(file);
    callback();
  });
}

module.exports = rem2px;
