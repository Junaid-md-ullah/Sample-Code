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

const sephora_delivery_enhance = {
    init() {
        sephora_delivery_enhance.mainJS();
    },
    addNewBtn() {
        document.querySelector("#opc-country-summary .opc-country-summary-value.opc-country-modify").insertAdjacentHTML("beforeend",`<div></div>`);
        document.querySelector("#opc-country-summary .opc-country-summary-value.opc-country-modify div").addEventListener("click",function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelector(".abPopup").classList.add("active");
        })
        document.querySelector("#opc-country-summary .opc-country-summary-value.opc-country-modify").setAttribute("data-current-country",document.querySelector(".country.js-opc-countryselector").value);
    },
    popUp() {
        const popUpWrapper = `<div tabindex="-1" role="dialog" class="abPopup ui-dialog ui-corner-all ui-widget ui-widget-content ui-front popup-dialog-layer popup-dialog-layershader pdp-colour-guide" aria-describedby="shadeguide-dialog-container" aria-labelledby="ui-id-1" style="display: none">
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"><span id="ui-id-1" class="ui-dialog-title">Changer de pays</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Κλείσιμο "><svg class="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z" fill="black"></path><path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z" fill="black"></path></svg></button></div>
      <div class="popupInnerContent">
      <div class="field-wrapper">
        <div class="countriesWrapper">
        ${[...document.querySelectorAll(".country.js-opc-countryselector option")].map((option) => {
            return `<button class="country" data-option-id="${option.dataset.optionId}">${option.textContent}</button>`
        }).join("")}
          
        </div>
      </div>
      </div>
      <div class="popupFooter"><button class="button button-revamp confirmCountry">Confirmer le pays</button></div>
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
        document.querySelectorAll(".countriesWrapper .country").forEach(function (ea) {
            ea.addEventListener("click",function (e) {
                document.querySelectorAll(".countriesWrapper .country").forEach(function (each) {
                    each.classList.remove("active");
                })
                e.target.closest(".country").classList.add("active");
            })
        })
        document.querySelector(".confirmCountry").addEventListener("click",function () {
            for (let i = 0; i < 2; i++) {
                let selectedCountryValue = document.querySelector(".countriesWrapper .country.active").dataset.optionId
                document.querySelector(".country.js-opc-countryselector").value = selectedCountryValue;
                document.querySelector(".country.js-opc-countryselector option[data-option-id=" + selectedCountryValue + "]").click();
                $('.country.js-opc-countryselector').change();
            }
        })
        document.querySelector(".countriesWrapper .country[data-option-id=" + document.querySelector(".country.js-opc-countryselector option[selected]").dataset.optionId + "]").classList.add("active");
    },
    mainJS() {
        sephora_delivery_enhance.addNewBtn();
        sephora_delivery_enhance.popUp();
        document.querySelectorAll(".abPopup .ui-dialog-titlebar-close, .ui-widget-overlay").forEach(function (each) {
            each.addEventListener("click",function () {
                document.querySelector(".abPopup").classList.remove("active");
            })
        })
        let send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function () {
            function trigger(e) {
                if (this.responseURL.includes("https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/COShipping-GetApplicableShippingMethodsJSON") && this.readyState == 4) {
                    document.querySelector(".abPopup").classList.remove("active");
                    if (!document.querySelector("#opc-country-summary .opc-country-summary-value.opc-country-modify div")) {
                        sephora_delivery_enhance.addNewBtn();
                    }
                }
            }
            this.addEventListener("load",trigger);
            return send.apply(this,arguments);
        };
    },
};


waitForElem("#opc-country-summary .opc-country-summary-value.opc-country-modify",sephora_delivery_enhance.init);