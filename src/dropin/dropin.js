/**
 * IMPORTANT - Set a boolean indicating whether index.html is loading a version of adyen.js (& adyen.css) >= 5.0.0
 */
const head = document.head.innerHTML;
const version = head.substring(head.indexOf('sdk/') + 4, head.indexOf('/adyen'));
const majorVn = Number(version.substring(0, version.indexOf('.')));
const IS_VERSION_5 = majorVn >= 5;

//Add button
// const toggleBtn = document.getElementById('theme-toggle-btn');
// const htmlEl = document.documentElement;

const DEFAULT_COUNTRY = 'US';

// 0. Get clientKey
getClientKey().then(clientKey => {
    const urlParams = getSearchParameters(window.location.search);

    // Can add request params to this object
    const pmReqConfig = {countryCode: urlParams.countryCode || DEFAULT_COUNTRY};
    getPaymentMethods(pmReqConfig).then(async paymentMethodsResponse => {

        paymentMethodsResponse.paymentMethods.reverse();

        let allowedPMS = urlParams.allowedpms;// e.g. &allowedpms=[scheme,ideal]
        if(allowedPMS === '[]' || typeof allowedPMS === 'undefined') allowedPMS = [];// if empty, all PMs will show

        const configObj = {
            environment: 'test',
            clientKey: clientKey, // Mandatory. clientKey from Customer Area
            paymentMethodsResponse,
            // removePaymentMethods: ['paysafecard', 'c_cash'],
            allowPaymentMethods: allowedPMS,
            paymentMethodsConfiguration: {
                card: {
                    hasHolderName: true,
                    holderNameRequired: true,
                    billingAddressRequired: true
                }
            },
            onChange: state => {
                updateStateContainer(state); // Demo purposes only
            },
            onSubmit: (state, dropin) => {
                //Add billing address and card holder name to the request
                const paymentData = {
                    ...state.data,
                    //billingAddress: state.data.billingAddress || {}, // Ensure billing address is included
                    //holderName: state.data.holderName || '' // Ensure card holder name is included
                };
            //     const paymentData = {
            //     ...state.data,
            //     billingAddress: {
            //         street: '123 Main St',
            //         city: 'Amsterdam',
            //         postalCode: '1000AA',
            //         country: 'NL'
            //     },
            //     holderName: state.data?.paymentMethod?.holderName || 'Sicheng Zhao'
            // };
                makePayment(paymentData);
            }
        };

// 1. Create an instance of AdyenCheckout
if (!IS_VERSION_5) {
    window.checkout = new AdyenCheckout(configObj);
    } else {
        window.checkout = await AdyenCheckout(configObj);
}

// 2. Create and mount the Component
window.dropin = checkout
    .create('dropin', {
        showStoredPaymentMethods: false,
        onSelect: activeComponent => {
            if (activeComponent.state && activeComponent.state.data)
                updateStateContainer(activeComponent.data);
        }
    })
    .mount('#dropin-container');
    
    });

});

// toggleBtn.addEventListener('click', () => {
//     if (htmlEl.getAttribute('data-theme') === 'dark') {
//       htmlEl.setAttribute('data-theme', 'light');
//       toggleBtn.textContent = 'Dark Mode';
//     } else {
//       htmlEl.setAttribute('data-theme', 'dark');
//       toggleBtn.textContent = 'Light Mode';
//     }
//   });
  
//   // 页面加载时根据系统偏好自动初始化（可选）
//   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     htmlEl.setAttribute('data-theme', 'dark');
//     toggleBtn.textContent = 'Dark Mode';
//   } else {
//     htmlEl.setAttribute('data-theme', 'light');
//     toggleBtn.textContent = 'Light Mode';
//   }