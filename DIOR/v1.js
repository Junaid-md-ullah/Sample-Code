let checkoutNoGuest = {
    init: function () {
        checkoutNoGuest.mainCss();
        checkoutNoGuest.mainJs();
        console.log('checkoutNoGuest | v2.0');
    },
    mainJs: function () {
        let interval = setInterval(function () {
            document.querySelector('label[for="checkoutCreateAccount"]').click();
        },500);
        DYO.waitForElement(".shipping-create-account:not(.d-none)",() => {
            clearInterval(interval);
            setTimeout(() => {
                if (document.querySelector(".shipping-create-account.d-none")) {
                    document.querySelector('label[for="checkoutCreateAccount"]').click();
                }
            },600);
        });
    },
};
DYO.waitForElement('label[for="checkoutCreateAccount"]',checkoutNoGuest.init);
DYO.waitForElement("#mandatory-legal-optin",() => {
    let interval = setInterval(() => {
        document.querySelector('#mandatory-legal-optin').click();
    },500);
    DYO.waitForElement("#mandatory-legal-optin-error:not(:empty)",() => {
        clearInterval(interval);
        setTimeout(() => {
            if (document.querySelector("#mandatory-legal-optin.is-valid")) {
                document.querySelector('#mandatory-legal-optin').click();
            }
        },600);
    });
});
