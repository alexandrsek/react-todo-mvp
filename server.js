const express = require("express");
const compression = require("compression");
const ms = require("ms");

const app = express();

app.use(compression());
app.use("/", express.static(`${__dirname}/build/`, { maxAge: ms("7d") }));

const runApp = async () => {
	app.listen(process.env.PORT || 8081);
	console.log("React app running on 8081");
};

runApp();
