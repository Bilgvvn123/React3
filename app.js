const fs = require("fs");

fs.writeFileSync(__dirname + "/text.txt", "Hello", () => {
	try {
	} catch (err) {}
});
