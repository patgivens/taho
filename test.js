const handler = require('./api/index.js');

// Mock Request and Response
const req = {};
const res = {
    status: (code) => {
        console.log(`[TEST] Status Code: ${code}`);
        return res;
    },
    send: (body) => {
        console.log(`[TEST] Response Body: ${body}`);
        return res;
    }
};

console.log("Running test...");
handler(req, res).then(() => {
    console.log("Handler execution finished (async).");
}).catch(err => {
    console.error("Handler error:", err);
});
