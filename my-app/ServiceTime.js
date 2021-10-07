const path = require("path");

// variabale
let currentHours = new Date().getHours();
console.log(currentHours);

let currentDay = new Date().getDay();
console.log(currentDay);

const ServiceTime = async (req, res, next) => {
    if (
        currentHours >= 9 &&
        currentHours < 17 &&
        currentDay > 0 &&
        currentDay < 6
    ) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "/close", "index.html"));
    }
};

module.exports = ServiceTime;