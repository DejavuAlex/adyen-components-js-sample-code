const { CHECKOUT_APIKEY, CHECKOUT_URL, MERCHANT_ACCOUNT } = require('./config');

module.exports = (endpoint, request) => {
    const body = JSON.stringify({
        merchantAccount: MERCHANT_ACCOUNT,
        billingAddress: body.billingAddress,
        holderName: body.holderName, 
        ...request // 将传入的请求数据合并到请求体中
    });

    console.log('### getPostParameters::exports:: CHECKOUT_URL=', `${CHECKOUT_URL}/${endpoint}`);

    return {
        body,
        url: `${CHECKOUT_URL}/${endpoint}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body, 'utf8'),
            'X-Api-Key': CHECKOUT_APIKEY
        }
    };
};
