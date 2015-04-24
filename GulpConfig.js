/**
 * The destination folder you want yours built resources have been
 * @type {string}
 */
var dist = "../build/";

/**
 * The project sources folders
 * @type {string}
 */
var project = "../";

/**
 * The application name (in min case)
 * @type {string}
 */
var appName = "skirnir";

/**
 * The default port where the application is launched
 * @type {number}
 */
var defaultPort = 8080;

module.exports = {
    dist: dist,
    project: project,
    appName: appName,
    defaultPort: defaultPort
};
