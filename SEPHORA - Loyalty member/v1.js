function waitForElem(
    waitFor,
    callback,
    minElements = 1,
    isVariable = false,
    timer = 10000,
    frequency = 25
) {
    let elements = isVariable
        ? window[waitFor]
        : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) ||
        (isVariable && typeof window[waitFor] !== "undefined")
        ? callback(elements)
        : setTimeout(
            () =>
                waitForElem(
                    waitFor,
                    callback,
                    minElements,
                    isVariable,
                    timer - frequency
                ),
            frequency
        );
}

const block_loyalty = {
    init() {
        block_loyalty.mainJS();
    },
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    },
    currentPhonePattern: 'fr',
    token: "",
    pushLoyaltyBtn() {
        const loyaltBtn = `<div class="loyaltyWrapper">
        <svg class="loyalty-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 25 25" style="height: 60px;margin-top: -10px;"><g fill="none" fill-rule="evenodd"><g><g transform="translate(0 -.5) rotate(-30 16.188 3.593)"><rect width="16.667" height="12.5" fill="#D7B97C" rx="1"></rect><path fill="#FFF" d="M7.968 6.255c.55 2.647-.008 3.68-.23 4.162.575-.764 1.44-2.479 1.066-4.282-.49-2.362-.243-3.374.125-4.052-1.293 1.773-1.153 3.25-.961 4.172z"></path></g><g transform="translate(0 -.5) rotate(-15 42.958 -12.19)"><rect width="16.667" height="12.5" fill="#000" rx="1"></rect><path fill="#FFF" d="M7.968 6.255c.55 2.647-.008 3.68-.23 4.162.575-.764 1.44-2.479 1.066-4.282-.49-2.362-.243-3.374.125-4.052-1.293 1.773-1.153 3.25-.961 4.172z"></path></g><g transform="translate(0 -.5) translate(8.333 13.095)"><rect width="16.167" height="12" x=".25" y=".25" fill="#FFF" stroke="#CBCBCB" stroke-width=".5" rx="1"></rect><path fill="#000" d="M7.968 6.255c.55 2.647-.008 3.68-.23 4.162.575-.764 1.44-2.479 1.066-4.282-.49-2.362-.243-3.374.125-4.052-1.293 1.773-1.153 3.25-.961 4.172z"></path></g></g></g></svg>
          <div class="textsWrapper">
            <div class="title">Obtenez <span>+${document.querySelector(".loyalty-points-feature .loyalty-points .loyalty-points-color").textContent} pts <br></span> de fidélité avec cet achat</div>
            <div class="subtitle">Découvrez les avantages</div>
          </div>

        </div>`;
        document.querySelector("#product-content>.add-to-cart-container").insertAdjacentHTML("afterend",loyaltBtn);
        document
            .querySelector(".loyaltyWrapper")
            .addEventListener("click",function () {
                document.querySelector(".abPopup").classList.add("active");
            });
    },
    getToken() {
        return new Promise((resolve,reject) => {
            $.ajax({
                method: "GET",
                url: "https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/SephoraCard-JoinLoyaltyPopin?context=MyAccount&format=ajax",
            }).done(function (response) {
                let replacedData = new DOMParser().parseFromString(response,'text/html'),
                    bodyNode = replacedData.body,
                    token = bodyNode.querySelector("input[name=csrf_token]").value;
                block_loyalty.token = token;
                resolve(element);
            });
        })
    },
    formValidationBeforeSubmit() {
        let email = document.querySelector("#dwfrm_loyalty_subscribedbyemail");
        let smsCheckBox = document.querySelector("#dwfrm_loyalty_subscribedbytextmessage");
        let mobileNo = document.querySelector("#dwfrm_loyalty_address_phone");
        let birthdate = document.querySelector("#dwfrm_profile_editcustomer_birthdate");
        let consentProgram = document.querySelector("#dwfrm_loyalty_consentprogram");
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/((?:[0-9]{2})?[0-9]{2})$/;
        function checkMobilePattern() {
            let mobileRegex = new RegExp(JSON.parse(SitePreferences.phoneRegex)[block_loyalty.currentPhonePattern] ? JSON.parse(SitePreferences.phoneRegex)[block_loyalty.currentPhonePattern]['mobile'] : JSON.parse(SitePreferences.phoneRegex)['default']['mobile']);
            if (!mobileRegex.test(mobileNo.value)) {
                document.querySelector(".countryFlag_phone_wrapper").classList.add("field-error");
                if (document.querySelector("#dwfrm_loyalty_address_phone").value != '') {
                    document.querySelector("#dwfrm_loyalty_address_phone-error").innerHTML = "Renseignez un numéro de téléphone mobile commençant par 06/07 et contenant 10 chiffres.";
                }
                return true;
            } else {
                document.querySelector(".countryFlag_phone_wrapper").classList.remove("field-error");
                return false;
            }
        }
        function emailSms() {
            if (email.checked || smsCheckBox.checked) {
                if ((smsCheckBox.checked && mobileNo.value == '') || (smsCheckBox.checked && mobileNo.value != '' && checkMobilePattern())) {
                    if (mobileNo.value == '') {
                        document.querySelector("#dwfrm_loyalty_address_phone-error").innerHTML = "Le champ Numéro de téléphone est vide. Veuillez le renseigner pour continuer.";
                    }
                    return false
                } else {
                    return true;
                }
            }
        }
        function calculateAge() {
            const [day,month,year] = birthdate.value.split('/').map(Number);

            const fullYear = year < 100 ? (year > 50 ? 1900 + year : 2000 + year) : year;

            const birthDate = new Date(fullYear,month - 1,day);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        function age_birthdatePattern() {
            if (!datePattern.test(birthdate.value)) {
                document.querySelector("#dwfrm_profile_editcustomer_birthdate-error").innerHTML = 'Veuillez vérifier votre date de naissance';
            } else if (calculateAge() < 16) {
                document.querySelector("#dwfrm_profile_editcustomer_birthdate-error").innerHTML = "La création d'un compte de fidélité Sephora est réservée aux personnes âgées de 16 ans et plus";
            }
            if (datePattern.test(birthdate.value) && calculateAge() >= 16) {
                return true;
            }
            return false;
        }

        function birthCheck() {
            if (birthdate.value != '' && age_birthdatePattern()) {
                document.querySelector(".loyalty_birthdate").classList.remove("field-error");
                return true;
            } else if (birthdate.value == '') {
                document.querySelector(".loyalty_birthdate").classList.remove("field-error");
                return true;
            }
            document.querySelector(".loyalty_birthdate").classList.add("field-error");
            return false
        }

        [email,smsCheckBox,mobileNo,birthdate,consentProgram].forEach(function (each) {
            each.addEventListener("input",function (e) {
                if (emailSms() && birthCheck() && consentProgram.checked) {
                    document.querySelector(".submitLoyaltyForm").classList.remove("disabled")
                } else {
                    document.querySelector(".submitLoyaltyForm").classList.add("disabled");
                }
            })
        })

    },
    submitLoyaltyForm() {
        let email = document.querySelector("#dwfrm_loyalty_subscribedbyemail").checked ? true : false;
        let mobileNoAvailable = document.querySelector("#dwfrm_loyalty_address_phone").value != '' ? true : false;
        let mobileNo = document.querySelector("#dwfrm_loyalty_address_phone").value;
        let birthdate = document.querySelector("#dwfrm_profile_editcustomer_birthdate").value;
        let data = { dwfrm_profile_editcustomer_birthdate: birthdate,dwfrm_loyalty_subscribedbytextmessage: mobileNoAvailable,dwfrm_loyalty_address_phoneprefixes_phoneprefix: block_loyalty.currentPhonePattern,dwfrm_loyalty_address_phone: mobileNo,dwfrm_loyalty_consentminor: true,dwfrm_loyalty_address_addressid: "",dwfrm_loyalty_address_firstname: "",dwfrm_loyalty_address_lastname: "",dwfrm_loyalty_subscribedbymail: email,dwfrm_loyalty_consentprogram: true,csrf_token: block_loyalty.token,dwfrm_loyalty_confirm: "x" };
        const body = new URLSearchParams(data).toString();
        fetch("https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/SephoraCard-ValidateCardLoyalty?basketOffer=true"
            ,{
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,bn;q=0.6,de;q=0.5",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-dtpc": "18$384184903_885h205vLRDMVLLIRWHRKONJPALRRCUUMAGNMJHH-0e0",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": "https://www.sephora.fr/panier/"
                ,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": body,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
            .then(response => {
                location.reload();
            })
            .catch(error => console.error('Error:',error));
    },
    popUp() {
        const popUpWrapper = `<div tabindex="-1" role="dialog" class="abPopup ui-dialog ui-corner-all ui-widget ui-widget-content ui-front popup-dialog-layer popup-dialog-layershader pdp-colour-guide" aria-describedby="shadeguide-dialog-container" aria-labelledby="ui-id-1" style="display: none">
                  <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"><span id="ui-id-1" class="ui-dialog-title">Tous les avantages du programme de fidélité !</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Κλείσιμο "><svg class="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z" fill="black"></path><path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z" fill="black"></path></svg></button></div>
                  <div class="popupInnerContent">
                  <div class="field-wrapper">
                 <div class="loyalty-program-benefits-container" id="loyalty-benefits-container">
      <div class="center-wrap js-tabs">

          <p>1€ dépensé = 1 point gagné</p>
          <div class="loyalty-program-selector-wrapper">

                  <div class="loyalty-program-selector js-tab-selector active" data-tab-target="white-loyalty-program">
                      <img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dwb9645041/loyaltyprogrambenefits/white-card-icon.svg" alt="White loyalty card">
                      <span class="loyalty-program-selector-title">White</span>
                  </div>

                  <div class="loyalty-program-selector js-tab-selector " data-tab-target="black-loyalty-program">
                      <img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dwd0d66d04/loyaltyprogrambenefits/black-card-icon.svg" alt="Black loyalty card">
                      <span class="loyalty-program-selector-title">Black</span>
                  </div>

                  <div class="loyalty-program-selector js-tab-selector " data-tab-target="gold-loyalty-program">
                      <img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dw4be690af/loyaltyprogrambenefits/gold-card-icon.svg" alt="Gold loyalty card">
                      <span class="loyalty-program-selector-title">Gold</span>
                  </div>

          </div>

              <div class="loyalty-program-content-wrapper js-tab-content " id="white-loyalty-program">
                  <div class="loyalty-program-header">
                      <span><img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dw748db88d/loyaltyprogrambenefits/loyalty-white-card.svg" alt="White loyalty card"></span>
                      <h4>Débutez avec la carte<br>de fidélité Sephora White</h4>
                  </div>
                  <div class="loyalty-program-content">
                      <div class="loyalty-program-benefits">
                 <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3979d02d/loyaltyprogrambenefits/gift-icon.svg" alt="Gift">
                 <span>Un cadeau de bienvenue au prochain achat en ligne ou en magasin.</span>
            </div>
            <div class="loyalty-program-benefits">
                  <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw89be8ff3/loyaltyprogrambenefits/samples-icon.svg" alt="Samples">
                  <span>-10% sur vos produits tous les 150 pts ou 4 passages en caisse.</span>
             </div>
              <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw2aae49e0/loyaltyprogrambenefits/discount-icon.svg" alt="Discount">
                    <span>Des offres promotionnelles tout au long de l’année.</span>
               </div>
                  </div>
              </div>

              <div class="loyalty-program-content-wrapper js-tab-content hide" id="black-loyalty-program">
                  <div class="loyalty-program-header">
                      <span><img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3a89be52/loyaltyprogrambenefits/loyalty-black-card.svg" alt="Black loyalty card"></span>
                      <h4>À partir de 150 points</h4>
                  </div>
                  <div class="loyalty-program-content">
                      <div class="loyalty-program-benefits">
                 <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3979d02d/loyaltyprogrambenefits/gift-icon.svg" alt="Gift">
                 <span>Un cadeau d’anniversaire.</span>
            </div>
            <div class="loyalty-program-benefits">
                  <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw89be8ff3/loyaltyprogrambenefits/samples-icon.svg" alt="Samples">
                  <span>-10% sur vos produits tous les 150 pts ou 4 passages en caisse.</span>
             </div>
              <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw2aae49e0/loyaltyprogrambenefits/discount-icon.svg" alt="Discount">
                    <span>Des offres promotionnelles tout au long de l’année.</span>
               </div>
                  </div>
              </div>

              <div class="loyalty-program-content-wrapper js-tab-content hide" id="gold-loyalty-program">
                  <div class="loyalty-program-header">
                      <span><img src="/on/demandware.static/-/Library-Sites-SephoraV2/default/dwf8df22f8/loyaltyprogrambenefits/loyalty-gold-card.svg" alt="Gold loyalty card"></span>
                      <h4>À partir de 1500 points</h4>
                  </div>
                  <div class="loyalty-program-content">
                      <div class="loyalty-program-benefits">
                 <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3979d02d/loyaltyprogrambenefits/gift-icon.svg" alt="Gift">
                 <span>30 € pour votre anniversaire.</span>
            </div>
            <div class="loyalty-program-benefits">
                  <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw89be8ff3/loyaltyprogrambenefits/samples-icon.svg" alt="Samples">
                  <span>-10% sur vos produits tous les 150 pts ou 4 passages en caisse.</span>
             </div>
              <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw2aae49e0/loyaltyprogrambenefits/discount-icon.svg" alt="Discount">
                    <span>Des offres promotionnelles tout au long de l’année.</span>
               </div>
               <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwfa34fbb1/loyaltyprogrambenefits/truck-icon.svg" alt="Truck">
                    <span>Livraison offerte sans minimum d’ahat.</span>
               </div>
              <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3421e4dd/loyaltyprogrambenefits/calendar-icon.svg" alt="Calendar">
                    <span>-25% lors des journées Gold en ligne et en magasin.</span>
               </div>
               <div class="loyalty-program-benefits">
                    <img src="https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dw3979d02d/loyaltyprogrambenefits/gift-icon.svg" alt="Gift">
                    <span>Un fabuleux cadeau tous les 1000 pts, en ligne ou en magasin.</span>
               </div>
                  </div>
              </div>

      </div>
  </div>
      </div>
                  </div>
                  <div class="popupFooter">${tc_vars['user_loyalty_category'] == 'unactive_non_buyer' && tc_vars['user_logged'] == 'y' ? `<a href="javascript:void(0)" class="button button-revamp joinProgram">Rejoindre le programme</a>` : `<a href="https://www.sephora.fr/connexion/" class="button button-revamp">Se connecter ou s’inscrire </a>`}</div>
                  <div class="loyaltyProgramLayer">
                    <div class="loyaltyTitleBar"><button class="back"></button>Rejoindre le programme</div>
                    <div class="loyaltyForm">
                        <div class="form_title_subtitle">
                            <div class="form_title">Recevez nos offres et actus</div>
                            <div class="form_subtitle">Des astuces et offres promotionnelles dans l'univers de la beauté !</div>
                        </div>
                        <div class="form_contact_section">
                        <div class="contact_instruction">Sélectionnez vos préférences de communications :</div>
                        <div class="loyalty_email_sms_wrapper">
                            <div class="loyalty_email_sms">
                                <div class="loyalty_email">
                                <input class=" input-checkbox" type="checkbox" id="dwfrm_loyalty_subscribedbyemail" name="dwfrm_loyalty_subscribedbyemail" value="true" placeholder="" autocomplete="lemsah" maxlength="2147483647" minlength="0">
                                <label for="dwfrm_loyalty_subscribedbyemail"><span><span>E-mail</span></span></label>
                            </div>
                            <div class="loyalty_sms">
                                <input class=" input-checkbox" type="checkbox" id="dwfrm_loyalty_subscribedbytextmessage" name="dwfrm_loyalty_subscribedbytextmessage" value="true" placeholder="" autocomplete="lemsah" maxlength="2147483647" minlength="0">
                                <label for="dwfrm_loyalty_subscribedbytextmessage"><span><span>SMS</span></span></label>
                            </div>
                            </div>

                            <div class="loyalty_email_sms_rules">
                                En tant qu’adhérent fidélité, vous devez choisir au moins un des moyens de communication.
                            </div>
                            <div class="loyalty_phone_number_wrapper hide">
                                <div class="countryFlag_phone_wrapper">
                                    <div class="country_code_wrapper flags">
                                    <select class="input-select  js-phoneprefix js-shipping-countrycode phoneprefix hide" id="dwfrm_loyalty_address_phoneprefixes_phoneprefix" name="dwfrm_loyalty_address_phoneprefixes_phoneprefix" data-select-type="flags" autocomplete="qqklq" maxlength="2147483647" minlength="0"><option class="select-option" data-option-id="ag" label="+1" data-iso="ATG" value="ag">+1</option><option class="select-option" data-option-id="ai" label="+1" data-iso="AIA" value="ai">+1</option><option class="select-option" data-option-id="as" label="+1" data-iso="ASM" value="as">+1</option><option class="select-option" data-option-id="bb" label="+1" data-iso="BRB" value="bb">+1</option><option class="select-option" data-option-id="bm" label="+1" data-iso="BMU" value="bm">+1</option><option class="select-option" data-option-id="bs" label="+1" data-iso="BHS" value="bs">+1</option><option class="select-option" data-option-id="ca" label="+1" data-iso="CAN" value="ca">+1</option><option class="select-option" data-option-id="dm" label="+1" data-iso="DMA" value="dm">+1</option><option class="select-option" data-option-id="do" label="+1" data-iso="DOM" value="do">+1</option><option class="select-option" data-option-id="gd" label="+1" data-iso="GRD" value="gd">+1</option><option class="select-option" data-option-id="gu" label="+1" data-iso="GUM" value="gu">+1</option><option class="select-option" data-option-id="io" label="+1" data-iso="IOT" value="io">+1</option><option class="select-option" data-option-id="jm" label="+1" data-iso="JAM" value="jm">+1</option><option class="select-option" data-option-id="kn" label="+1" data-iso="KNA" value="kn">+1</option><option class="select-option" data-option-id="ky" label="+1" data-iso="CYM" value="ky">+1</option><option class="select-option" data-option-id="lc" label="+1" data-iso="LCA" value="lc">+1</option><option class="select-option" data-option-id="ms" label="+1" data-iso="MSR" value="ms">+1</option><option class="select-option" data-option-id="pr" label="+1" data-iso="PRI" value="pr">+1</option><option class="select-option" data-option-id="tc" label="+1" data-iso="TCA" value="tc">+1</option><option class="select-option" data-option-id="tt" label="+1" data-iso="TTO" value="tt">+1</option><option class="select-option" data-option-id="us" label="+1" data-iso="USA" value="us">+1</option><option class="select-option" data-option-id="vc" label="+1" data-iso="VCT" value="vc">+1</option><option class="select-option" data-option-id="vi" label="+1" data-iso="VIR" value="vi">+1</option><option class="select-option" data-option-id="kz" label="+7" data-iso="KAZ" value="kz">+7</option><option class="select-option" data-option-id="ru" label="+7" data-iso="RUS" value="ru">+7</option><option class="select-option" data-option-id="eg" label="+20" data-iso="EGY" value="eg">+20</option><option class="select-option" data-option-id="za" label="+27" data-iso="ZAF" value="za">+27</option><option class="select-option" data-option-id="gr" label="+30" data-iso="GRC" value="gr">+30</option><option class="select-option" data-option-id="nl" label="+31" data-iso="NLD" value="nl">+31</option><option class="select-option" data-option-id="be" label="+32" data-iso="BEL" value="be">+32</option><option class="select-option" data-option-id="fr" label="+33" data-iso="FRA" value="fr" selected="selected">+33</option><option class="select-option" data-option-id="es" label="+34" data-iso="ESP" value="es">+34</option><option class="select-option" data-option-id="hu" label="+36" data-iso="HUN" value="hu">+36</option><option class="select-option" data-option-id="it" label="+39" data-iso="ITA" value="it">+39</option><option class="select-option" data-option-id="ro" label="+40" data-iso="ROU" value="ro">+40</option><option class="select-option" data-option-id="ch" label="+41" data-iso="CHE" value="ch">+41</option><option class="select-option" data-option-id="at" label="+43" data-iso="AUT" value="at">+43</option><option class="select-option" data-option-id="gb" label="+44" data-iso="GBR" value="gb">+44</option><option class="select-option" data-option-id="dk" label="+45" data-iso="DNK" value="dk">+45</option><option class="select-option" data-option-id="se" label="+46" data-iso="SWE" value="se">+46</option><option class="select-option" data-option-id="no" label="+47" data-iso="NOR" value="no">+47</option><option class="select-option" data-option-id="pl" label="+48" data-iso="POL" value="pl">+48</option><option class="select-option" data-option-id="de" label="+49" data-iso="DEU" value="de">+49</option><option class="select-option" data-option-id="pe" label="+51" data-iso="PER" value="pe">+51</option><option class="select-option" data-option-id="mx" label="+52" data-iso="MEX" value="mx">+52</option><option class="select-option" data-option-id="cu" label="+53" data-iso="CUB" value="cu">+53</option><option class="select-option" data-option-id="ar" label="+54" data-iso="ARG" value="ar">+54</option><option class="select-option" data-option-id="br" label="+55" data-iso="BRA" value="br">+55</option><option class="select-option" data-option-id="cl" label="+56" data-iso="CHL" value="cl">+56</option><option class="select-option" data-option-id="co" label="+57" data-iso="COL" value="co">+57</option><option class="select-option" data-option-id="ve" label="+58" data-iso="VEN" value="ve">+58</option><option class="select-option" data-option-id="my" label="+60" data-iso="MYS" value="my">+60</option><option class="select-option" data-option-id="au" label="+61" data-iso="AUS" value="au">+61</option><option class="select-option" data-option-id="id" label="+62" data-iso="IDN" value="id">+62</option><option class="select-option" data-option-id="ph" label="+63" data-iso="PHL" value="ph">+63</option><option class="select-option" data-option-id="nz" label="+64" data-iso="NZL" value="nz">+64</option><option class="select-option" data-option-id="sg" label="+65" data-iso="SGP" value="sg">+65</option><option class="select-option" data-option-id="th" label="+66" data-iso="THA" value="th">+66</option><option class="select-option" data-option-id="jp" label="+81" data-iso="JPN" value="jp">+81</option><option class="select-option" data-option-id="kr" label="+82" data-iso="KOR" value="kr">+82</option><option class="select-option" data-option-id="vn" label="+84" data-iso="VNM" value="vn">+84</option><option class="select-option" data-option-id="cn" label="+86" data-iso="CHN" value="cn">+86</option><option class="select-option" data-option-id="tr" label="+90" data-iso="TUR" value="tr">+90</option><option class="select-option" data-option-id="in" label="+91" data-iso="IND" value="in">+91</option><option class="select-option" data-option-id="pk" label="+92" data-iso="PAK" value="pk">+92</option><option class="select-option" data-option-id="af" label="+93" data-iso="AFG" value="af">+93</option><option class="select-option" data-option-id="lk" label="+94" data-iso="LKA" value="lk">+94</option><option class="select-option" data-option-id="mm" label="+95" data-iso="MMR" value="mm">+95</option><option class="select-option" data-option-id="ir" label="+98" data-iso="IRN" value="ir">+98</option><option class="select-option" data-option-id="ma" label="+212" data-iso="MAR" value="ma">+212</option><option class="select-option" data-option-id="dz" label="+213" data-iso="DZA" value="dz">+213</option><option class="select-option" data-option-id="tn" label="+216" data-iso="TUN" value="tn">+216</option><option class="select-option" data-option-id="ly" label="+218" data-iso="LBY" value="ly">+218</option><option class="select-option" data-option-id="gm" label="+220" data-iso="GMB" value="gm">+220</option><option class="select-option" data-option-id="sn" label="+221" data-iso="SEN" value="sn">+221</option><option class="select-option" data-option-id="mr" label="+222" data-iso="MRT" value="mr">+222</option><option class="select-option" data-option-id="ml" label="+223" data-iso="MLI" value="ml">+223</option><option class="select-option" data-option-id="gn" label="+224" data-iso="GIN" value="gn">+224</option><option class="select-option" data-option-id="ci" label="+225" data-iso="CIV" value="ci">+225</option><option class="select-option" data-option-id="bf" label="+226" data-iso="BFA" value="bf">+226</option><option class="select-option" data-option-id="ne" label="+227" data-iso="NER" value="ne">+227</option><option class="select-option" data-option-id="tg" label="+228" data-iso="TGO" value="tg">+228</option><option class="select-option" data-option-id="bj" label="+229" data-iso="BEN" value="bj">+229</option><option class="select-option" data-option-id="mu" label="+230" data-iso="MUS" value="mu">+230</option><option class="select-option" data-option-id="lr" label="+231" data-iso="LBR" value="lr">+231</option><option class="select-option" data-option-id="sl" label="+232" data-iso="SLE" value="sl">+232</option><option class="select-option" data-option-id="gh" label="+233" data-iso="GHA" value="gh">+233</option><option class="select-option" data-option-id="ng" label="+234" data-iso="NGA" value="ng">+234</option><option class="select-option" data-option-id="td" label="+235" data-iso="TCD" value="td">+235</option><option class="select-option" data-option-id="cf" label="+236" data-iso="CAF" value="cf">+236</option><option class="select-option" data-option-id="cm" label="+237" data-iso="CMR" value="cm">+237</option><option class="select-option" data-option-id="cv" label="+238" data-iso="CPV" value="cv">+238</option><option class="select-option" data-option-id="st" label="+239" data-iso="STP" value="st">+239</option><option class="select-option" data-option-id="gq" label="+240" data-iso="GNQ" value="gq">+240</option><option class="select-option" data-option-id="ga" label="+241" data-iso="GAB" value="ga">+241</option><option class="select-option" data-option-id="cg" label="+242" data-iso="COG" value="cg">+242</option><option class="select-option" data-option-id="cd" label="+243" data-iso="COD" value="cd">+243</option><option class="select-option" data-option-id="ao" label="+244" data-iso="AGO" value="ao">+244</option><option class="select-option" data-option-id="gw" label="+245" data-iso="GNB" value="gw">+245</option><option class="select-option" data-option-id="sc" label="+248" data-iso="SYC" value="sc">+248</option><option class="select-option" data-option-id="sd" label="+249" data-iso="SDN" value="sd">+249</option><option class="select-option" data-option-id="rw" label="+250" data-iso="RWA" value="rw">+250</option><option class="select-option" data-option-id="et" label="+251" data-iso="ETH" value="et">+251</option><option class="select-option" data-option-id="so" label="+252" data-iso="SOM" value="so">+252</option><option class="select-option" data-option-id="dj" label="+253" data-iso="DJI" value="dj">+253</option><option class="select-option" data-option-id="ke" label="+254" data-iso="KEN" value="ke">+254</option><option class="select-option" data-option-id="tz" label="+255" data-iso="TZA" value="tz">+255</option><option class="select-option" data-option-id="ug" label="+256" data-iso="UGA" value="ug">+256</option><option class="select-option" data-option-id="bi" label="+257" data-iso="BDI" value="bi">+257</option><option class="select-option" data-option-id="mz" label="+258" data-iso="MOZ" value="mz">+258</option><option class="select-option" data-option-id="zm" label="+260" data-iso="ZMB" value="zm">+260</option><option class="select-option" data-option-id="mg" label="+261" data-iso="MDG" value="mg">+261</option><option class="select-option" data-option-id="re" label="+262" data-iso="REU" value="re">+262</option><option class="select-option" data-option-id="zw" label="+263" data-iso="ZWE" value="zw">+263</option><option class="select-option" data-option-id="na" label="+264" data-iso="NAM" value="na">+264</option><option class="select-option" data-option-id="mw" label="+265" data-iso="MWI" value="mw">+265</option><option class="select-option" data-option-id="ls" label="+266" data-iso="LSO" value="ls">+266</option><option class="select-option" data-option-id="bw" label="+267" data-iso="BWA" value="bw">+267</option><option class="select-option" data-option-id="sz" label="+268" data-iso="SWZ" value="sz">+268</option><option class="select-option" data-option-id="km" label="+269" data-iso="COM" value="km">+269</option><option class="select-option" data-option-id="yt" label="+269" data-iso="MYT" value="yt">+269</option><option class="select-option" data-option-id="sh" label="+290" data-iso="SHN" value="sh">+290</option><option class="select-option" data-option-id="er" label="+291" data-iso="ERI" value="er">+291</option><option class="select-option" data-option-id="aw" label="+297" data-iso="ABW" value="aw">+297</option><option class="select-option" data-option-id="fo" label="+298" data-iso="FRO" value="fo">+298</option><option class="select-option" data-option-id="gl" label="+299" data-iso="GRL" value="gl">+299</option><option class="select-option" data-option-id="gi" label="+350" data-iso="GIB" value="gi">+350</option><option class="select-option" data-option-id="pt" label="+351" data-iso="PRT" value="pt">+351</option><option class="select-option" data-option-id="lu" label="+352" data-iso="LUX" value="lu">+352</option><option class="select-option" data-option-id="ie" label="+353" data-iso="IRL" value="ie">+353</option><option class="select-option" data-option-id="is" label="+354" data-iso="ISL" value="is">+354</option><option class="select-option" data-option-id="al" label="+355" data-iso="ALB" value="al">+355</option><option class="select-option" data-option-id="mt" label="+356" data-iso="MLT" value="mt">+356</option><option class="select-option" data-option-id="cy" label="+357" data-iso="CYP" value="cy">+357</option><option class="select-option" data-option-id="fi" label="+358" data-iso="FIN" value="fi">+358</option><option class="select-option" data-option-id="bg" label="+359" data-iso="BGR" value="bg">+359</option><option class="select-option" data-option-id="lt" label="+370" data-iso="LTU" value="lt">+370</option><option class="select-option" data-option-id="lv" label="+371" data-iso="LVA" value="lv">+371</option><option class="select-option" data-option-id="ee" label="+372" data-iso="EST" value="ee">+372</option><option class="select-option" data-option-id="md" label="+373" data-iso="MDA" value="md">+373</option><option class="select-option" data-option-id="am" label="+374" data-iso="ARM" value="am">+374</option><option class="select-option" data-option-id="by" label="+375" data-iso="BLR" value="by">+375</option><option class="select-option" data-option-id="ad" label="+376" data-iso="ANO" value="ad">+376</option><option class="select-option" data-option-id="mc" label="+377" data-iso="MCO" value="mc">+377</option><option class="select-option" data-option-id="sm" label="+378" data-iso="SMR" value="sm">+378</option><option class="select-option" data-option-id="va" label="+379" data-iso="VAT" value="va">+379</option><option class="select-option" data-option-id="ua" label="+380" data-iso="UKR" value="ua">+380</option><option class="select-option" data-option-id="cs" label="+381" data-iso="CSK" value="cs">+381</option><option class="select-option" data-option-id="me" label="+382" data-iso="MNE" value="me">+382</option><option class="select-option" data-option-id="hr" label="+385" data-iso="HRV" value="hr">+385</option><option class="select-option" data-option-id="si" label="+386" data-iso="SVN" value="si">+386</option><option class="select-option" data-option-id="ba" label="+387" data-iso="BIH" value="ba">+387</option><option class="select-option" data-option-id="mk" label="+389" data-iso="MKD" value="mk">+389</option><option class="select-option" data-option-id="cz" label="+420" data-iso="CZE" value="cz">+420</option><option class="select-option" data-option-id="sk" label="+421" data-iso="SVK" value="sk">+421</option><option class="select-option" data-option-id="li" label="+423" data-iso="LIE" value="li">+423</option><option class="select-option" data-option-id="bz" label="+501" data-iso="BLZ" value="bz">+501</option><option class="select-option" data-option-id="gt" label="+502" data-iso="GTM" value="gt">+502</option><option class="select-option" data-option-id="sv" label="+503" data-iso="SLV" value="sv">+503</option><option class="select-option" data-option-id="hn" label="+504" data-iso="HND" value="hn">+504</option><option class="select-option" data-option-id="ni" label="+505" data-iso="NIC" value="ni">+505</option><option class="select-option" data-option-id="cr" label="+506" data-iso="CRI" value="cr">+506</option><option class="select-option" data-option-id="pa" label="+507" data-iso="PAN" value="pa">+507</option><option class="select-option" data-option-id="pm" label="+508" data-iso="SPM" value="pm">+508</option><option class="select-option" data-option-id="ht" label="+509" data-iso="HTI" value="ht">+509</option><option class="select-option" data-option-id="bl" label="+590" data-iso="BLM" value="bl">+590</option><option class="select-option" data-option-id="gp" label="+590" data-iso="GLP" value="gp">+590</option><option class="select-option" data-option-id="sx" label="+590" data-iso="SXM" value="sx">+590</option><option class="select-option" data-option-id="bo" label="+591" data-iso="BOL" value="bo">+591</option><option class="select-option" data-option-id="gy" label="+592" data-iso="GUY" value="gy">+592</option><option class="select-option" data-option-id="ec" label="+593" data-iso="ECU" value="ec">+593</option><option class="select-option" data-option-id="gf" label="+594" data-iso="GUF" value="gf">+594</option><option class="select-option" data-option-id="py" label="+595" data-iso="PRY" value="py">+595</option><option class="select-option" data-option-id="mq" label="+596" data-iso="MTQ" value="mq">+596</option><option class="select-option" data-option-id="sr" label="+597" data-iso="SUR" value="sr">+597</option><option class="select-option" data-option-id="uy" label="+598" data-iso="URY" value="uy">+598</option><option class="select-option" data-option-id="an" label="+599" data-iso="ANT" value="an">+599</option><option class="select-option" data-option-id="tl" label="+670" data-iso="TLS" value="tl">+670</option><option class="select-option" data-option-id="nf" label="+672" data-iso="NFK" value="nf">+672</option><option class="select-option" data-option-id="bn" label="+673" data-iso="BRN" value="bn">+673</option><option class="select-option" data-option-id="nr" label="+674" data-iso="NRU" value="nr">+674</option><option class="select-option" data-option-id="pg" label="+675" data-iso="PNG" value="pg">+675</option><option class="select-option" data-option-id="to" label="+676" data-iso="TON" value="to">+676</option><option class="select-option" data-option-id="sb" label="+677" data-iso="SLB" value="sb">+677</option><option class="select-option" data-option-id="vu" label="+678" data-iso="VUT" value="vu">+678</option><option class="select-option" data-option-id="fj" label="+679" data-iso="FJI" value="fj">+679</option><option class="select-option" data-option-id="pw" label="+680" data-iso="PLW" value="pw">+680</option><option class="select-option" data-option-id="wf" label="+681" data-iso="WLF" value="wf">+681</option><option class="select-option" data-option-id="ck" label="+682" data-iso="COK" value="ck">+682</option><option class="select-option" data-option-id="nu" label="+683" data-iso="NIU" value="nu">+683</option><option class="select-option" data-option-id="ws" label="+685" data-iso="WSM" value="ws">+685</option><option class="select-option" data-option-id="ki" label="+686" data-iso="KIR" value="ki">+686</option><option class="select-option" data-option-id="nc" label="+687" data-iso="NCL" value="nc">+687</option><option class="select-option" data-option-id="tv" label="+688" data-iso="TUV" value="tv">+688</option><option class="select-option" data-option-id="pf" label="+689" data-iso="PYF" value="pf">+689</option><option class="select-option" data-option-id="tk" label="+690" data-iso="TKL" value="tk">+690</option><option class="select-option" data-option-id="fm" label="+691" data-iso="FSM" value="fm">+691</option><option class="select-option" data-option-id="mh" label="+692" data-iso="MHL" value="mh">+692</option><option class="select-option" data-option-id="kp" label="+850" data-iso="PRK" value="kp">+850</option><option class="select-option" data-option-id="hk" label="+852" data-iso="HKG" value="hk">+852</option><option class="select-option" data-option-id="mo" label="+853" data-iso="MAC" value="mo">+853</option><option class="select-option" data-option-id="kh" label="+855" data-iso="KHM" value="kh">+855</option><option class="select-option" data-option-id="la" label="+856" data-iso="LAO" value="la">+856</option><option class="select-option" data-option-id="bd" label="+880" data-iso="BGD" value="bd">+880</option><option class="select-option" data-option-id="tw" label="+886" data-iso="TWN" value="tw">+886</option><option class="select-option" data-option-id="mv" label="+960" data-iso="MDV" value="mv">+960</option><option class="select-option" data-option-id="lb" label="+961" data-iso="LBN" value="lb">+961</option><option class="select-option" data-option-id="jo" label="+962" data-iso="JOR" value="jo">+962</option><option class="select-option" data-option-id="sy" label="+963" data-iso="SYR" value="sy">+963</option><option class="select-option" data-option-id="iq" label="+964" data-iso="IRQ" value="iq">+964</option><option class="select-option" data-option-id="kw" label="+965" data-iso="KWT" value="kw">+965</option><option class="select-option" data-option-id="sa" label="+966" data-iso="SAU" value="sa">+966</option><option class="select-option" data-option-id="ye" label="+967" data-iso="YEM" value="ye">+967</option><option class="select-option" data-option-id="om" label="+968" data-iso="OMN" value="om">+968</option><option class="select-option" data-option-id="ps" label="+970" data-iso="PSE" value="ps">+970</option><option class="select-option" data-option-id="ae" label="+971" data-iso="ARE" value="ae">+971</option><option class="select-option" data-option-id="il" label="+972" data-iso="ISR" value="il">+972</option><option class="select-option" data-option-id="bh" label="+973" data-iso="BHR" value="bh">+973</option><option class="select-option" data-option-id="qa" label="+974" data-iso="QAT" value="qa">+974</option><option class="select-option" data-option-id="bt" label="+975" data-iso="BTN" value="bt">+975</option><option class="select-option" data-option-id="mn" label="+976" data-iso="MNG" value="mn">+976</option><option class="select-option" data-option-id="np" label="+977" data-iso="NPL" value="np">+977</option><option class="select-option" data-option-id="tj" label="+992" data-iso="TJK" value="tj">+992</option><option class="select-option" data-option-id="tm" label="+993" data-iso="TKM" value="tm">+993</option><option class="select-option" data-option-id="az" label="+994" data-iso="AZE" value="az">+994</option><option class="select-option" data-option-id="ge" label="+995" data-iso="GEO" value="ge">+995</option><option class="select-option" data-option-id="kg" label="+996" data-iso="KGZ" value="kg">+996</option><option class="select-option" data-option-id="uz" label="+998" data-iso="UZB" value="uz">+998</option></select>
                                    <div class="custom-select__selected js-select-selected">
                                        <span class="select-option" data-value="fr" data-label="+33">+33</span>
                                    </div>
                                    <ul class="custom-select__list js-select-list hide"><li class="custom-select__list-item " data-value="ag"><span class="select-option" data-value="ag">+1</span></li><li class="custom-select__list-item " data-value="ai"><span class="select-option" data-value="ai">+1</span></li><li class="custom-select__list-item " data-value="as"><span class="select-option" data-value="as">+1</span></li><li class="custom-select__list-item " data-value="bb"><span class="select-option" data-value="bb">+1</span></li><li class="custom-select__list-item " data-value="bm"><span class="select-option" data-value="bm">+1</span></li><li class="custom-select__list-item " data-value="bs"><span class="select-option" data-value="bs">+1</span></li><li class="custom-select__list-item " data-value="ca"><span class="select-option" data-value="ca">+1</span></li><li class="custom-select__list-item " data-value="dm"><span class="select-option" data-value="dm">+1</span></li><li class="custom-select__list-item " data-value="do"><span class="select-option" data-value="do">+1</span></li><li class="custom-select__list-item " data-value="gd"><span class="select-option" data-value="gd">+1</span></li><li class="custom-select__list-item " data-value="gu"><span class="select-option" data-value="gu">+1</span></li><li class="custom-select__list-item " data-value="io"><span class="select-option" data-value="io">+1</span></li><li class="custom-select__list-item " data-value="jm"><span class="select-option" data-value="jm">+1</span></li><li class="custom-select__list-item " data-value="kn"><span class="select-option" data-value="kn">+1</span></li><li class="custom-select__list-item " data-value="ky"><span class="select-option" data-value="ky">+1</span></li><li class="custom-select__list-item " data-value="lc"><span class="select-option" data-value="lc">+1</span></li><li class="custom-select__list-item " data-value="ms"><span class="select-option" data-value="ms">+1</span></li><li class="custom-select__list-item " data-value="pr"><span class="select-option" data-value="pr">+1</span></li><li class="custom-select__list-item " data-value="tc"><span class="select-option" data-value="tc">+1</span></li><li class="custom-select__list-item " data-value="tt"><span class="select-option" data-value="tt">+1</span></li><li class="custom-select__list-item " data-value="us"><span class="select-option" data-value="us">+1</span></li><li class="custom-select__list-item " data-value="vc"><span class="select-option" data-value="vc">+1</span></li><li class="custom-select__list-item " data-value="vi"><span class="select-option" data-value="vi">+1</span></li><li class="custom-select__list-item " data-value="kz"><span class="select-option" data-value="kz">+7</span></li><li class="custom-select__list-item " data-value="ru"><span class="select-option" data-value="ru">+7</span></li><li class="custom-select__list-item " data-value="eg"><span class="select-option" data-value="eg">+20</span></li><li class="custom-select__list-item " data-value="za"><span class="select-option" data-value="za">+27</span></li><li class="custom-select__list-item " data-value="gr"><span class="select-option" data-value="gr">+30</span></li><li class="custom-select__list-item " data-value="nl"><span class="select-option" data-value="nl">+31</span></li><li class="custom-select__list-item " data-value="be"><span class="select-option" data-value="be">+32</span></li><li class="custom-select__list-item selected" data-value="fr"><span class="select-option" data-value="fr">+33</span></li><li class="custom-select__list-item " data-value="es"><span class="select-option" data-value="es">+34</span></li><li class="custom-select__list-item " data-value="hu"><span class="select-option" data-value="hu">+36</span></li><li class="custom-select__list-item " data-value="it"><span class="select-option" data-value="it">+39</span></li><li class="custom-select__list-item " data-value="ro"><span class="select-option" data-value="ro">+40</span></li><li class="custom-select__list-item " data-value="ch"><span class="select-option" data-value="ch">+41</span></li><li class="custom-select__list-item " data-value="at"><span class="select-option" data-value="at">+43</span></li><li class="custom-select__list-item " data-value="gb"><span class="select-option" data-value="gb">+44</span></li><li class="custom-select__list-item " data-value="dk"><span class="select-option" data-value="dk">+45</span></li><li class="custom-select__list-item " data-value="se"><span class="select-option" data-value="se">+46</span></li><li class="custom-select__list-item " data-value="no"><span class="select-option" data-value="no">+47</span></li><li class="custom-select__list-item " data-value="pl"><span class="select-option" data-value="pl">+48</span></li><li class="custom-select__list-item " data-value="de"><span class="select-option" data-value="de">+49</span></li><li class="custom-select__list-item " data-value="pe"><span class="select-option" data-value="pe">+51</span></li><li class="custom-select__list-item " data-value="mx"><span class="select-option" data-value="mx">+52</span></li><li class="custom-select__list-item " data-value="cu"><span class="select-option" data-value="cu">+53</span></li><li class="custom-select__list-item " data-value="ar"><span class="select-option" data-value="ar">+54</span></li><li class="custom-select__list-item " data-value="br"><span class="select-option" data-value="br">+55</span></li><li class="custom-select__list-item " data-value="cl"><span class="select-option" data-value="cl">+56</span></li><li class="custom-select__list-item " data-value="co"><span class="select-option" data-value="co">+57</span></li><li class="custom-select__list-item " data-value="ve"><span class="select-option" data-value="ve">+58</span></li><li class="custom-select__list-item " data-value="my"><span class="select-option" data-value="my">+60</span></li><li class="custom-select__list-item " data-value="au"><span class="select-option" data-value="au">+61</span></li><li class="custom-select__list-item " data-value="id"><span class="select-option" data-value="id">+62</span></li><li class="custom-select__list-item " data-value="ph"><span class="select-option" data-value="ph">+63</span></li><li class="custom-select__list-item " data-value="nz"><span class="select-option" data-value="nz">+64</span></li><li class="custom-select__list-item " data-value="sg"><span class="select-option" data-value="sg">+65</span></li><li class="custom-select__list-item " data-value="th"><span class="select-option" data-value="th">+66</span></li><li class="custom-select__list-item " data-value="jp"><span class="select-option" data-value="jp">+81</span></li><li class="custom-select__list-item " data-value="kr"><span class="select-option" data-value="kr">+82</span></li><li class="custom-select__list-item " data-value="vn"><span class="select-option" data-value="vn">+84</span></li><li class="custom-select__list-item " data-value="cn"><span class="select-option" data-value="cn">+86</span></li><li class="custom-select__list-item " data-value="tr"><span class="select-option" data-value="tr">+90</span></li><li class="custom-select__list-item " data-value="in"><span class="select-option" data-value="in">+91</span></li><li class="custom-select__list-item " data-value="pk"><span class="select-option" data-value="pk">+92</span></li><li class="custom-select__list-item " data-value="af"><span class="select-option" data-value="af">+93</span></li><li class="custom-select__list-item " data-value="lk"><span class="select-option" data-value="lk">+94</span></li><li class="custom-select__list-item " data-value="mm"><span class="select-option" data-value="mm">+95</span></li><li class="custom-select__list-item " data-value="ir"><span class="select-option" data-value="ir">+98</span></li><li class="custom-select__list-item " data-value="ma"><span class="select-option" data-value="ma">+212</span></li><li class="custom-select__list-item " data-value="dz"><span class="select-option" data-value="dz">+213</span></li><li class="custom-select__list-item " data-value="tn"><span class="select-option" data-value="tn">+216</span></li><li class="custom-select__list-item " data-value="ly"><span class="select-option" data-value="ly">+218</span></li><li class="custom-select__list-item " data-value="gm"><span class="select-option" data-value="gm">+220</span></li><li class="custom-select__list-item " data-value="sn"><span class="select-option" data-value="sn">+221</span></li><li class="custom-select__list-item " data-value="mr"><span class="select-option" data-value="mr">+222</span></li><li class="custom-select__list-item " data-value="ml"><span class="select-option" data-value="ml">+223</span></li><li class="custom-select__list-item " data-value="gn"><span class="select-option" data-value="gn">+224</span></li><li class="custom-select__list-item " data-value="ci"><span class="select-option" data-value="ci">+225</span></li><li class="custom-select__list-item " data-value="bf"><span class="select-option" data-value="bf">+226</span></li><li class="custom-select__list-item " data-value="ne"><span class="select-option" data-value="ne">+227</span></li><li class="custom-select__list-item " data-value="tg"><span class="select-option" data-value="tg">+228</span></li><li class="custom-select__list-item " data-value="bj"><span class="select-option" data-value="bj">+229</span></li><li class="custom-select__list-item " data-value="mu"><span class="select-option" data-value="mu">+230</span></li><li class="custom-select__list-item " data-value="lr"><span class="select-option" data-value="lr">+231</span></li><li class="custom-select__list-item " data-value="sl"><span class="select-option" data-value="sl">+232</span></li><li class="custom-select__list-item " data-value="gh"><span class="select-option" data-value="gh">+233</span></li><li class="custom-select__list-item " data-value="ng"><span class="select-option" data-value="ng">+234</span></li><li class="custom-select__list-item " data-value="td"><span class="select-option" data-value="td">+235</span></li><li class="custom-select__list-item " data-value="cf"><span class="select-option" data-value="cf">+236</span></li><li class="custom-select__list-item " data-value="cm"><span class="select-option" data-value="cm">+237</span></li><li class="custom-select__list-item " data-value="cv"><span class="select-option" data-value="cv">+238</span></li><li class="custom-select__list-item " data-value="st"><span class="select-option" data-value="st">+239</span></li><li class="custom-select__list-item " data-value="gq"><span class="select-option" data-value="gq">+240</span></li><li class="custom-select__list-item " data-value="ga"><span class="select-option" data-value="ga">+241</span></li><li class="custom-select__list-item " data-value="cg"><span class="select-option" data-value="cg">+242</span></li><li class="custom-select__list-item " data-value="cd"><span class="select-option" data-value="cd">+243</span></li><li class="custom-select__list-item " data-value="ao"><span class="select-option" data-value="ao">+244</span></li><li class="custom-select__list-item " data-value="gw"><span class="select-option" data-value="gw">+245</span></li><li class="custom-select__list-item " data-value="sc"><span class="select-option" data-value="sc">+248</span></li><li class="custom-select__list-item " data-value="sd"><span class="select-option" data-value="sd">+249</span></li><li class="custom-select__list-item " data-value="rw"><span class="select-option" data-value="rw">+250</span></li><li class="custom-select__list-item " data-value="et"><span class="select-option" data-value="et">+251</span></li><li class="custom-select__list-item " data-value="so"><span class="select-option" data-value="so">+252</span></li><li class="custom-select__list-item " data-value="dj"><span class="select-option" data-value="dj">+253</span></li><li class="custom-select__list-item " data-value="ke"><span class="select-option" data-value="ke">+254</span></li><li class="custom-select__list-item " data-value="tz"><span class="select-option" data-value="tz">+255</span></li><li class="custom-select__list-item " data-value="ug"><span class="select-option" data-value="ug">+256</span></li><li class="custom-select__list-item " data-value="bi"><span class="select-option" data-value="bi">+257</span></li><li class="custom-select__list-item " data-value="mz"><span class="select-option" data-value="mz">+258</span></li><li class="custom-select__list-item " data-value="zm"><span class="select-option" data-value="zm">+260</span></li><li class="custom-select__list-item " data-value="mg"><span class="select-option" data-value="mg">+261</span></li><li class="custom-select__list-item " data-value="re"><span class="select-option" data-value="re">+262</span></li><li class="custom-select__list-item " data-value="zw"><span class="select-option" data-value="zw">+263</span></li><li class="custom-select__list-item " data-value="na"><span class="select-option" data-value="na">+264</span></li><li class="custom-select__list-item " data-value="mw"><span class="select-option" data-value="mw">+265</span></li><li class="custom-select__list-item " data-value="ls"><span class="select-option" data-value="ls">+266</span></li><li class="custom-select__list-item " data-value="bw"><span class="select-option" data-value="bw">+267</span></li><li class="custom-select__list-item " data-value="sz"><span class="select-option" data-value="sz">+268</span></li><li class="custom-select__list-item " data-value="km"><span class="select-option" data-value="km">+269</span></li><li class="custom-select__list-item " data-value="yt"><span class="select-option" data-value="yt">+269</span></li><li class="custom-select__list-item " data-value="sh"><span class="select-option" data-value="sh">+290</span></li><li class="custom-select__list-item " data-value="er"><span class="select-option" data-value="er">+291</span></li><li class="custom-select__list-item " data-value="aw"><span class="select-option" data-value="aw">+297</span></li><li class="custom-select__list-item " data-value="fo"><span class="select-option" data-value="fo">+298</span></li><li class="custom-select__list-item " data-value="gl"><span class="select-option" data-value="gl">+299</span></li><li class="custom-select__list-item " data-value="gi"><span class="select-option" data-value="gi">+350</span></li><li class="custom-select__list-item " data-value="pt"><span class="select-option" data-value="pt">+351</span></li><li class="custom-select__list-item " data-value="lu"><span class="select-option" data-value="lu">+352</span></li><li class="custom-select__list-item " data-value="ie"><span class="select-option" data-value="ie">+353</span></li><li class="custom-select__list-item " data-value="is"><span class="select-option" data-value="is">+354</span></li><li class="custom-select__list-item " data-value="al"><span class="select-option" data-value="al">+355</span></li><li class="custom-select__list-item " data-value="mt"><span class="select-option" data-value="mt">+356</span></li><li class="custom-select__list-item " data-value="cy"><span class="select-option" data-value="cy">+357</span></li><li class="custom-select__list-item " data-value="fi"><span class="select-option" data-value="fi">+358</span></li><li class="custom-select__list-item " data-value="bg"><span class="select-option" data-value="bg">+359</span></li><li class="custom-select__list-item " data-value="lt"><span class="select-option" data-value="lt">+370</span></li><li class="custom-select__list-item " data-value="lv"><span class="select-option" data-value="lv">+371</span></li><li class="custom-select__list-item " data-value="ee"><span class="select-option" data-value="ee">+372</span></li><li class="custom-select__list-item " data-value="md"><span class="select-option" data-value="md">+373</span></li><li class="custom-select__list-item " data-value="am"><span class="select-option" data-value="am">+374</span></li><li class="custom-select__list-item " data-value="by"><span class="select-option" data-value="by">+375</span></li><li class="custom-select__list-item " data-value="ad"><span class="select-option" data-value="ad">+376</span></li><li class="custom-select__list-item " data-value="mc"><span class="select-option" data-value="mc">+377</span></li><li class="custom-select__list-item " data-value="sm"><span class="select-option" data-value="sm">+378</span></li><li class="custom-select__list-item " data-value="va"><span class="select-option" data-value="va">+379</span></li><li class="custom-select__list-item " data-value="ua"><span class="select-option" data-value="ua">+380</span></li><li class="custom-select__list-item " data-value="cs"><span class="select-option" data-value="cs">+381</span></li><li class="custom-select__list-item " data-value="me"><span class="select-option" data-value="me">+382</span></li><li class="custom-select__list-item " data-value="hr"><span class="select-option" data-value="hr">+385</span></li><li class="custom-select__list-item " data-value="si"><span class="select-option" data-value="si">+386</span></li><li class="custom-select__list-item " data-value="ba"><span class="select-option" data-value="ba">+387</span></li><li class="custom-select__list-item " data-value="mk"><span class="select-option" data-value="mk">+389</span></li><li class="custom-select__list-item " data-value="cz"><span class="select-option" data-value="cz">+420</span></li><li class="custom-select__list-item " data-value="sk"><span class="select-option" data-value="sk">+421</span></li><li class="custom-select__list-item " data-value="li"><span class="select-option" data-value="li">+423</span></li><li class="custom-select__list-item " data-value="bz"><span class="select-option" data-value="bz">+501</span></li><li class="custom-select__list-item " data-value="gt"><span class="select-option" data-value="gt">+502</span></li><li class="custom-select__list-item " data-value="sv"><span class="select-option" data-value="sv">+503</span></li><li class="custom-select__list-item " data-value="hn"><span class="select-option" data-value="hn">+504</span></li><li class="custom-select__list-item " data-value="ni"><span class="select-option" data-value="ni">+505</span></li><li class="custom-select__list-item " data-value="cr"><span class="select-option" data-value="cr">+506</span></li><li class="custom-select__list-item " data-value="pa"><span class="select-option" data-value="pa">+507</span></li><li class="custom-select__list-item " data-value="pm"><span class="select-option" data-value="pm">+508</span></li><li class="custom-select__list-item " data-value="ht"><span class="select-option" data-value="ht">+509</span></li><li class="custom-select__list-item " data-value="bl"><span class="select-option" data-value="bl">+590</span></li><li class="custom-select__list-item " data-value="gp"><span class="select-option" data-value="gp">+590</span></li><li class="custom-select__list-item " data-value="sx"><span class="select-option" data-value="sx">+590</span></li><li class="custom-select__list-item " data-value="bo"><span class="select-option" data-value="bo">+591</span></li><li class="custom-select__list-item " data-value="gy"><span class="select-option" data-value="gy">+592</span></li><li class="custom-select__list-item " data-value="ec"><span class="select-option" data-value="ec">+593</span></li><li class="custom-select__list-item " data-value="gf"><span class="select-option" data-value="gf">+594</span></li><li class="custom-select__list-item " data-value="py"><span class="select-option" data-value="py">+595</span></li><li class="custom-select__list-item " data-value="mq"><span class="select-option" data-value="mq">+596</span></li><li class="custom-select__list-item " data-value="sr"><span class="select-option" data-value="sr">+597</span></li><li class="custom-select__list-item " data-value="uy"><span class="select-option" data-value="uy">+598</span></li><li class="custom-select__list-item " data-value="an"><span class="select-option" data-value="an">+599</span></li><li class="custom-select__list-item " data-value="tl"><span class="select-option" data-value="tl">+670</span></li><li class="custom-select__list-item " data-value="nf"><span class="select-option" data-value="nf">+672</span></li><li class="custom-select__list-item " data-value="bn"><span class="select-option" data-value="bn">+673</span></li><li class="custom-select__list-item " data-value="nr"><span class="select-option" data-value="nr">+674</span></li><li class="custom-select__list-item " data-value="pg"><span class="select-option" data-value="pg">+675</span></li><li class="custom-select__list-item " data-value="to"><span class="select-option" data-value="to">+676</span></li><li class="custom-select__list-item " data-value="sb"><span class="select-option" data-value="sb">+677</span></li><li class="custom-select__list-item " data-value="vu"><span class="select-option" data-value="vu">+678</span></li><li class="custom-select__list-item " data-value="fj"><span class="select-option" data-value="fj">+679</span></li><li class="custom-select__list-item " data-value="pw"><span class="select-option" data-value="pw">+680</span></li><li class="custom-select__list-item " data-value="wf"><span class="select-option" data-value="wf">+681</span></li><li class="custom-select__list-item " data-value="ck"><span class="select-option" data-value="ck">+682</span></li><li class="custom-select__list-item " data-value="nu"><span class="select-option" data-value="nu">+683</span></li><li class="custom-select__list-item " data-value="ws"><span class="select-option" data-value="ws">+685</span></li><li class="custom-select__list-item " data-value="ki"><span class="select-option" data-value="ki">+686</span></li><li class="custom-select__list-item " data-value="nc"><span class="select-option" data-value="nc">+687</span></li><li class="custom-select__list-item " data-value="tv"><span class="select-option" data-value="tv">+688</span></li><li class="custom-select__list-item " data-value="pf"><span class="select-option" data-value="pf">+689</span></li><li class="custom-select__list-item " data-value="tk"><span class="select-option" data-value="tk">+690</span></li><li class="custom-select__list-item " data-value="fm"><span class="select-option" data-value="fm">+691</span></li><li class="custom-select__list-item " data-value="mh"><span class="select-option" data-value="mh">+692</span></li><li class="custom-select__list-item " data-value="kp"><span class="select-option" data-value="kp">+850</span></li><li class="custom-select__list-item " data-value="hk"><span class="select-option" data-value="hk">+852</span></li><li class="custom-select__list-item " data-value="mo"><span class="select-option" data-value="mo">+853</span></li><li class="custom-select__list-item " data-value="kh"><span class="select-option" data-value="kh">+855</span></li><li class="custom-select__list-item " data-value="la"><span class="select-option" data-value="la">+856</span></li><li class="custom-select__list-item " data-value="bd"><span class="select-option" data-value="bd">+880</span></li><li class="custom-select__list-item " data-value="tw"><span class="select-option" data-value="tw">+886</span></li><li class="custom-select__list-item " data-value="mv"><span class="select-option" data-value="mv">+960</span></li><li class="custom-select__list-item " data-value="lb"><span class="select-option" data-value="lb">+961</span></li><li class="custom-select__list-item " data-value="jo"><span class="select-option" data-value="jo">+962</span></li><li class="custom-select__list-item " data-value="sy"><span class="select-option" data-value="sy">+963</span></li><li class="custom-select__list-item " data-value="iq"><span class="select-option" data-value="iq">+964</span></li><li class="custom-select__list-item " data-value="kw"><span class="select-option" data-value="kw">+965</span></li><li class="custom-select__list-item " data-value="sa"><span class="select-option" data-value="sa">+966</span></li><li class="custom-select__list-item " data-value="ye"><span class="select-option" data-value="ye">+967</span></li><li class="custom-select__list-item " data-value="om"><span class="select-option" data-value="om">+968</span></li><li class="custom-select__list-item " data-value="ps"><span class="select-option" data-value="ps">+970</span></li><li class="custom-select__list-item " data-value="ae"><span class="select-option" data-value="ae">+971</span></li><li class="custom-select__list-item " data-value="il"><span class="select-option" data-value="il">+972</span></li><li class="custom-select__list-item " data-value="bh"><span class="select-option" data-value="bh">+973</span></li><li class="custom-select__list-item " data-value="qa"><span class="select-option" data-value="qa">+974</span></li><li class="custom-select__list-item " data-value="bt"><span class="select-option" data-value="bt">+975</span></li><li class="custom-select__list-item " data-value="mn"><span class="select-option" data-value="mn">+976</span></li><li class="custom-select__list-item " data-value="np"><span class="select-option" data-value="np">+977</span></li><li class="custom-select__list-item " data-value="tj"><span class="select-option" data-value="tj">+992</span></li><li class="custom-select__list-item " data-value="tm"><span class="select-option" data-value="tm">+993</span></li><li class="custom-select__list-item " data-value="az"><span class="select-option" data-value="az">+994</span></li><li class="custom-select__list-item " data-value="ge"><span class="select-option" data-value="ge">+995</span></li><li class="custom-select__list-item " data-value="kg"><span class="select-option" data-value="kg">+996</span></li><li class="custom-select__list-item " data-value="uz"><span class="select-option" data-value="uz">+998</span></li></ul>
                                    </div>
                                    <div class="prefield-input-field">
                                        <input class="phone required phone input-text" type="tel" id="dwfrm_loyalty_address_phone" name="dwfrm_loyalty_address_phone" value="" placeholder="" data-prefix-country="fr" data-prefix-code="+33" data-msg-required="Le champ <span>Numéro de téléphone</span> est vide. Veuillez le renseigner pour continuer." autocomplete="8sa8r" maxlength="21" minlength="0" data-iso="FRA" aria-describedby="dwfrm_loyalty_address_phone-error" aria-invalid="true" data-excluded-phone="" data-gtm-form-interact-field-id="1">
                                    </div>
                                </div>
                                <div id="dwfrm_loyalty_address_phone-error" class="error">Le champ <span>Numéro de téléphone</span> est vide. Veuillez le renseigner pour continuer.</div>

                            </div>
                        </div>
                        <div class="loyalty_birthdate">
                            <div class="birthdate_title">Date de naissance (facultatif)</div>
                            <input data-cs-mask="" class=" js-change-track birthdate birthdate-account-joinLoyalty input-text" type="tel" id="dwfrm_profile_editcustomer_birthdate" name="dwfrm_profile_editcustomer_birthdate" value="" placeholder="" maxlength="10" autocomplete="prfjz" minlength="0" aria-invalid="false">
                            <div id="dwfrm_profile_editcustomer_birthdate-error" class="error">Veuillez vérifier votre date de naissance.</div>
                            <div class="birthdate_format">Doit être au format JJ / MM / AAAA.</div>
                        </div>
                    </div>
                    </div>

                    <div class="popupFooter">
                        <div class="field-wrapper requiredCheckbox">
                            <input class=" required input-checkbox" type="checkbox" id="dwfrm_loyalty_consentprogram"
                            name="dwfrm_loyalty_consentprogram" value="true" placeholder="" maxlength="10"
                            autocomplete="f15osv" minlength="0" data-gtm-form-interact-field-id="0">
                            <label for="dwfrm_loyalty_consentprogram">

                                <span>
                                    J’accepte
                                    <a style="text-decoration: underline;" href="https://www.sephora.fr/code-assets-account/account-general-conditions.html">
                                    les conditions générales du programme de fidélité Sephora
                                    </a>
                                </span>

                            </label>
                            </div>
                        <a href="javascript:void(0)" class="button button-revamp submitLoyaltyForm disabled">Valider</a>
                    </div>
                  </div>
              </div>
              <div class="ui-widget-overlay ui-front" style="display: none"></div>`;

        document
            .querySelector("body")
            .insertAdjacentHTML("beforeend",popUpWrapper);
        if (document.querySelector(".abPopup").style.display == "none") {
            setTimeout(() => {
                document.querySelector(".abPopup").style.display = "block";
                document.querySelector(".abPopup~.ui-widget-overlay").style.display =
                    "block";
            },300);
        }

        document
            .querySelectorAll(
                ".loyalty-program-content-wrapper.js-tab-content .loyalty-program-header"
            )
            .forEach(function (each) {
                each.insertAdjacentElement(
                    "afterend",
                    document
                        .querySelector(".center-wrap > .loyalty-program-selector-wrapper")
                        .cloneNode(true)
                );
            });
        document
            .querySelectorAll(
                ".loyalty-program-content-wrapper.js-tab-content .loyalty-program-selector-wrapper>.loyalty-program-selector.active"
            )
            .forEach(function (each) {
                each.classList.remove("active");
            });
        document
            .querySelectorAll(
                ".loyalty-program-content-wrapper.js-tab-content .loyalty-program-selector:is([data-tab-target])"
            )
            .forEach(function (each) {
                each.addEventListener("click",function (e) {
                    document.querySelectorAll(".loyalty-program-content-wrapper").forEach(function (ea) {
                        ea.classList.add("hide");
                    })
                    document.querySelector(`.loyalty-program-content-wrapper#${e.target.closest(".loyalty-program-selector").dataset.tabTarget} `).classList.remove("hide");
                });
            });
        if (tc_vars['user_loyalty_category'] == 'unactive_non_buyer' && tc_vars['user_logged'] == 'y') {

            document
                .querySelector(".joinProgram")
                .addEventListener("click",function () {
                    document.querySelector(".loyaltyProgramLayer").classList.add("active");
                });
            document.querySelectorAll("#dwfrm_loyalty_subscribedbytextmessage+label, #dwfrm_loyalty_subscribedbyemail+label").forEach(function (each) {
                each.addEventListener("click",function () {
                    setTimeout(() => {
                        if (document.querySelector("#dwfrm_loyalty_subscribedbytextmessage").checked || document.querySelector("#dwfrm_loyalty_subscribedbyemail").checked) {
                            document.querySelector(".loyalty_email_sms_rules").classList.add("hide");
                        }
                        else if (!document.querySelector("#dwfrm_loyalty_subscribedbytextmessage").checked && !document.querySelector("#dwfrm_loyalty_subscribedbyemail").checked) {
                            document.querySelector(".loyalty_email_sms_rules").classList.remove("hide");
                        }

                        if (document.querySelector("#dwfrm_loyalty_subscribedbytextmessage").checked) {
                            document.querySelector(".loyalty_phone_number_wrapper").classList.remove("hide");
                        }
                        else if (!document.querySelector("#dwfrm_loyalty_subscribedbytextmessage").checked) {
                            document.querySelector(".loyalty_phone_number_wrapper").classList.add("hide");
                        }

                    },25)

                })

            })

            document.querySelector(".country_code_wrapper>.js-select-selected").addEventListener("click",function () {
                document.querySelector(".country_code_wrapper>.js-select-list").classList.toggle("hide");
            })

            document.querySelectorAll(".country_code_wrapper>.js-select-list li").forEach(function (each) {
                each.addEventListener("click",function (e) {
                    document.querySelector(".country_code_wrapper>.js-select-list").classList.toggle("hide");
                    document.querySelectorAll(".country_code_wrapper>.js-select-list li").forEach(function (each) {
                        each.classList.remove("selected");
                    })
                    e.target.closest(".custom-select__list-item").classList.add("selected");
                    let countryCode = e.target.dataset.value;
                    let countryPrefix = e.target.textContent;
                    let countryISO = document.querySelector("#dwfrm_loyalty_address_phoneprefixes_phoneprefix option[data-option-id=" + countryCode + "]").dataset.iso;
                    document.querySelector(".country_code_wrapper>.js-select-selected .select-option").dataset.value = countryCode;
                    document.querySelector(".country_code_wrapper>.js-select-selected .select-option").dataset.label = countryPrefix;
                    document.querySelector(".country_code_wrapper>.js-select-selected .select-option").textContent = countryPrefix;
                    document.querySelector("#dwfrm_loyalty_address_phoneprefixes_phoneprefix").value = countryPrefix;
                    document.querySelector("#dwfrm_loyalty_address_phoneprefixes_phoneprefix option[data-option-id=" + countryCode + "]").click();
                    document.querySelector("#dwfrm_loyalty_address_phoneprefixes_phoneprefix option[data-option-id=" + countryCode + "]").selected = "selected";
                    $('#dwfrm_loyalty_address_phoneprefixes_phoneprefix').change();
                    document.querySelector("#dwfrm_loyalty_address_phone").dataset.iso = countryISO;
                    document.querySelector("#dwfrm_loyalty_address_phone").dataset.prefixCode = countryPrefix;
                    document.querySelector("#dwfrm_loyalty_address_phone").dataset.prefixCountry = countryCode;
                    block_loyalty.currentPhonePattern = countryCode;
                })
            })

            document.querySelector("#dwfrm_loyalty_address_phone").addEventListener('input',(event) => {
                document.querySelector("#dwfrm_loyalty_address_phone").value = document.querySelector("#dwfrm_loyalty_address_phone").value.replace(/[^0-9]/g,'');
            });

            $("input.birthdate").each(function () {
                var a = $(this)
                    ,e = "__/__/____"
                    ,t = a.parent().addClass("with-dynamic-placeholder")

                SitePreferences.IS_RTL ? a.mask("0000/00/00") : a.mask("00/00/0000"),
                    a.on("input",function () {
                        var t;

                        10 == a.val().length && a.valid() && (t = i.find("input")).each(function (e) {
                            if ($(this).is(a) && e != t.length)
                                return $(t[e + 1]).eq(0).focus(),
                                    !1
                        })
                    })
            })

            block_loyalty.formValidationBeforeSubmit();
            block_loyalty.getToken();

            document.querySelector(".submitLoyaltyForm").addEventListener("click",function () {
                document.querySelector(".submitLoyaltyForm").classList.add("clickedToSubmit");
                block_loyalty.submitLoyaltyForm()

            })
        }

        document.querySelector(".loyaltyTitleBar button.back").addEventListener("click",function () {
            document.querySelector(".loyaltyProgramLayer").classList.remove("active");
        })

        document
            .querySelectorAll(
                ".abPopup .ui-dialog-titlebar-close, .ui-widget-overlay"
            )
            .forEach(function (each) {
                each.addEventListener("click",function () {
                    document.querySelector(".abPopup").classList.remove("active");
                });
            });

    },
    popUpForLoyalty() {

        const popUpWrapper = `<div tabindex="-1" role="dialog" class="abPopup ui-dialog ui-corner-all ui-widget ui-widget-content ui-front popup-dialog-layer popup-dialog-layershader pdp-colour-guide"
            aria - describedby="shadeguide-dialog-container" aria - labelledby="ui-id-1"
        style = "display: none" >
        <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
          <span id="ui-id-1" class="ui-dialog-title">
            Votre programme fidélité
          </span>
          <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close"
          title="Κλείσιμο ">
            <svg class="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32"
            fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z"
              fill="black">
              </path>
              <path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z"
              fill="black">
              </path>
            </svg>
          </button>
        </div>
        <div class="popupInnerContent">
          <div class="field-wrapper">
            <div class="loyalty-program-benefits-container" id="loyalty-benefits-container">
              <div class="center-wrap js-tabs">
                <h2 class="loyalty-program-benefits-title">
                   ${block_loyalty.getCookie('fname')}, ce produit vous rapporte
                </h2>
                <div class="pdpPoint"><div class="points">+${document.querySelector(".loyalty-points-feature .loyalty-points .loyalty-points-color").textContent} pts</div> ajoutés à votre solde après achat</div>
              </div>
            </div>
            <div class="pointsTitleSubtitle">
              <div class="title">Récapitulatif de vos points</div>
              <div class="subtitle">1€ dépensé = 1 point gagné</div>
            </div>
            <div class="pointsDetails">
              <div class="pointsCalculation">
                <div class="pointsHave">Vos points actuels : {{myPoints}}/150</div>
                <div class="pointsAfter">Vos points après achat : {{totalPoints}}/150</div>
              </div>
              <div class="pointProgress">
                <div class="progressBarBonus">
                  <div class="progressBarRange">
                    0
                    <div class="progress-bar">
                      <div class="progress-exact"></div>
                      <div class="progress-expected"></div>
                    </div>
                    150
                  </div>

                  <div class="bonus">-10% <img src="https://i.ibb.co/phnfymd/gift.png" alt="gift"/></div>
                </div>
                <div class="pointsMessage">
                    Plus que <span>{{pointesNeeded}} points après validation de cet achat</span> pour obtenir votre réduction de 10% sur une prochaine commande.
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="popupFooter">
          <a href="https://www.sephora.fr/connexion/" class="button button-revamp joinProgram">
            Fermer
          </a>

        </div>
      </div>
    <div class="ui-widget-overlay ui-front" style="display: none">
    </div>`;

        document
            .querySelector("body")
            .insertAdjacentHTML("afterbegin",popUpWrapper);
        if (document.querySelector(".abPopup").style.display == "none") {
            setTimeout(() => {
                document.querySelector(".abPopup").style.display = "block";
                document.querySelector(".abPopup~.ui-widget-overlay").style.display =
                    "block";
            },300);
        }

        waitForElem(['.loyalty-points-feature .loyalty-points .loyalty-points-color'],() => {

            let userPoint = block_loyalty.getCookie('loyaltyPoints') ? block_loyalty.getCookie('loyaltyPoints') : 0;
            document.querySelector(".pointsHave").innerHTML = document.querySelector(".pointsHave").textContent.replace("{{myPoints}}",`<span> ${userPoint}</span> `);
            let totalPoints = (+userPoint) + (+document.querySelector(".loyalty-points-feature .loyalty-points .loyalty-points-color").textContent);
            document.querySelector(".pointsAfter").innerHTML = document.querySelector(".pointsAfter").textContent.replace("{{totalPoints}}",`<span> ${totalPoints}</span> `);
            document.querySelector(".pointsMessage").innerHTML = document.querySelector(".pointsMessage").innerHTML.replace("{{pointesNeeded}}",150 - totalPoints);
            document.querySelector(".progress-exact").style.width = (userPoint * 100) / 150 + "%";
            document.querySelector(".progress-expected").style.width = (totalPoints * 100) / 150 + "%";
        },1);
        document
            .querySelectorAll(
                ".abPopup .ui-dialog-titlebar-close, .ui-widget-overlay"
            )
            .forEach(function (each) {
                each.addEventListener("click",function () {
                    document.querySelector(".abPopup").classList.remove("active");
                });
            });
    },
    mainJS() {

        block_loyalty.pushLoyaltyBtn();
        if (tc_vars['user_loyalty_category'] == "unactive_non_buyer" && !document.querySelector(".loyalty")) {
            block_loyalty.popUp();
        }
        if (tc_vars['user_loyalty_category'] == "black" || tc_vars['user_loyalty_category'] == "gold" || tc_vars['user_loyalty_category'] == "white" || (document.querySelector(".loyalty"))) {
            block_loyalty.popUpForLoyalty();
        }
        const config = { attributes: true,childList: true,subtree: true };
        const targetNode = document.querySelector("#product-content");
        const callback = (mutationList,observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    if (!document.querySelector(".loyaltyWrapper")) {
                        redirectToApp.block_loyalty.pushLoyaltyBtn();
                    }
                    if (!document.querySelector(".abPopup")) {
                        if (tc_vars['user_loyalty_category'] == "unactive_non_buyer" && !document.querySelector(".loyalty")) {
                            block_loyalty.popUp();
                        }
                        if (tc_vars['user_loyalty_category'] == "black" || tc_vars['user_loyalty_category'] == "gold" || tc_vars['user_loyalty_category'] == "white" || (document.querySelector(".loyalty"))) {
                            block_loyalty.popUpForLoyalty();
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode,config);
    },
};

waitForElem('.loyalty-points-feature',block_loyalty.init);

console.log("Test");