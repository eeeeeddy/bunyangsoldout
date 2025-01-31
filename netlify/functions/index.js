// Netlify Functions 로컬 테스트 - http://localhost:9000/.netlify/functions/index로 접속
exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Hello World"
    });
};