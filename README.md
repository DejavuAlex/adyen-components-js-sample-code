# Adyen Web sample code

![Adyen Web Sample Code](screenshot.png)

> ⚠️ **This repository is for demo purposes only**

## Requirements

To run this project, **create** a `.env` file on your project's root folder following the example on `.env.default`.

```
MERCHANT_ACCOUNT=MyMerchantAccount
CHECKOUT_APIKEY=MY_CHECKOUT_API_KEY
CLIENT_KEY=MY_CLIENT_KEY
```

These variables can be found in Adyen Customer Area. For more information, visit our [Get started with Adyen guide](https://docs.adyen.com/get-started-with-adyen#page-introduction).

If the forms don't seem to load, please check if you have:

1. Used the correct `clientKey`
2. Configured the `origin` on the Customer Area as an allowed origin

## Installation

### Running the PHP Server

Navigate to the root of the project and run the `start.sh` script:

```
$ cd adyen-components-js-sample-code
$ ./start.sh
```

A PHP server will start on `http://localhost:3000`.

### Running the Node.js Server

If preferred, you can run a Node.js server instead.
To do this, navigate to the root of the project, install the dependencies (only the first time) and run the start script:

```
$ cd adyen-components-js-sample-code
$ npm i
$ npm start
```

A Node.js server will start on `http://localhost:3000`.

### Deploying this example to Heroku

Alternatively, you can install this example by using this shortcut to deploy to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Adyen/adyen-components-js-sample-code)

After deploying, to use Sessions Drop-in, add your ```CLIENT_KEY``` to the config vars.

## Documentation

For the complete integration guide, refer to the [Web Components documentation](https://docs.adyen.com/online-payments/web-components).

## Other sample projects

Find other sample projects in our [example projects repositories](https://github.com/adyen-examples).

## License

This repository is open source and available under the MIT license. For more information, see the LICENSE file.


## Sicheng Out-put
![Sample input](Result1.png)

### Response
```
{
  "additionalData": {
    "fraudResultType": "GREEN",
    "cardHolderName": "Sicheng",
    "cardSummary": "0000",
    "isCardCommercial": "unknown",
    "fraudManualReview": "false",
    "PaymentAccountReference": "OpXN3tK9riZjFpVMvklioj8LQ2Bao",
    "threeds2.threeDS2ResponseData.messageVersion": "2.2.0",
    "threeds2.threeDS2Token": "xxxxx",
    "issuerCountry": "PL",
    "expiryDate": "3/2030",
    "threeds2.threeDSServerTransID": "1d983972-3cac-4d76-8e03-f4fd537d55bf",
    "cardBin": "491761",
    "threeds2.cardEnrolled": "true",
    "paymentMethod": "visa",
    "cardPaymentMethod": "visacredit",
    "paymentMethodVariant": "visacredit",
    "fundingSource": "CREDIT",
    "merchantReference": "Sicheng_adyenrecruitment",
    "issuerBin": "49176100",
    "threeds2.threeDSMethodURL": "https://pal-test.adyen.com/threeds2simulator/acs/startMethod.shtml",
    "cardIssuingCountry": "PL"
  },
  "pspReference": "FTKH7GG5N869FH75",
  "resultCode": "RedirectShopper"
```


## Sicheng Add-on
New File `dropin-custom.css` is for a new flat style version.
You could change the css root in `../scr/dropin/index.html` to the new css file and remove the comments in the it, you can get below sample style.

![New Web SStyleample Code 1](Snipaste_2025-08-01_20-22-27.png)  

![New Web SStyleample Code 2](Snipaste_2025-08-01_20-26-39.png)




