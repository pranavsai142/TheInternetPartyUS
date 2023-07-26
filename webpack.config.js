const path = require("path");

module.exports = {
    experiments: {
        topLevelAwait: true
    },
    mode: "development",
    devtool: "eval-source-map",
    entry: ["./src/index.js", "./src/ui.js"],
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js"
    },
} 