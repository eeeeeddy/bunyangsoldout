const fetch = require("node-fetch");
const crypto = require("crypto");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const serviceId = process.env.REACT_APP_NCP_SERVICE_ID;
    const accessKey = process.env.REACT_APP_NCP_ACCESS_KEY;
    const secretKey = process.env.REACT_APP_NCP_SECRET_KEY;
    const timestamp = Date.now().toString();

    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;

    const signature = generateSignature(serviceId, timestamp, accessKey, secretKey);

    const requestBody = JSON.parse(event.body);
    
    const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-ncp-apigw-timestamp": timestamp,
        "x-ncp-iam-access-key": accessKey,
        "x-ncp-apigw-signature-v2": signature,
    },
    body: JSON.stringify(requestBody),
});

    const responseData = await response.json();

    return {
        statusCode: response.status,
        body: JSON.stringify(responseData),
    };
};

function generateSignature(serviceId, timestamp, accessKey, secretKey) {
    const space = " ";
    const newLine = "\n";
    const method = "POST";
    const url = `/sms/v2/services/${serviceId}/messages`;

    const hmac = crypto.createHmac("sha256", secretKey);
    hmac.update(method + space + url + newLine + timestamp + newLine + accessKey);

    return hmac.digest("base64");
}
