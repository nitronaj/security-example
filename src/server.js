const fs = require("fs");
const https = require("https");
const path = require("path");
const open = require("open");

const app = require("./app");
const { start } = require("repl");

const PORT = process.env.PORT || 3000;

const serverOptions = {
	key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
	cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
};

const server = https.createServer(serverOptions, app);

function startServer() {
	server.listen(PORT, async () => {
		console.log(`Listening on PORT ${PORT}...`);
		console.log(`Local:            https://localhost:${PORT}/`);
		// await open(`https://localhost:${PORT}/`);
	});
}

startServer();
