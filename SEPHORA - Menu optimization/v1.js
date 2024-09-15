
function waitForElem(waitFor,callback,minElements = 1,isVariable = false,timer = 10000,frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor,callback,minElements,isVariable,timer - frequency),frequency);
}

const accountManage = {
    init: function () {
        document.querySelector("html").classList.add("abTesting");
        if (!window.alreadyExist) {
            accountManage.mainJS();
            window.alreadyExist = true;
        }

    },
    loyalty_categories_pictos: {
        "black": {
            "desktop": `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="35" viewBox="0 0 39 35" fill="none">
                <line x1="1" y1="-1" x2="3" y2="-1" transform="matrix(0.205556 -0.978645 0.987936 0.154859 29.9199 5.43652)" stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="1" y1="-1" x2="3" y2="-1" transform="matrix(0.615146 -0.788413 0.821326 0.570459 33.5669 7.4502)" stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="1" y1="-1" x2="3" y2="-1" transform="matrix(0.947119 -0.320882 0.319335 0.947642 35.1177 10.499)" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path d="M29.2006 10H2.8C1.80589 10 1 10.8596 1 11.92L1 32.08C1 33.1404 1.80589 34 2.8 34H29.2006C30.1947 34 31.0006 33.1404 31.0006 32.08V11.92C31.0006 10.8596 30.1947 10 29.2006 10Z" fill="#D7B97C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3422 22.0093C16.3322 27.0915 15.3278 29.0749 14.9282 30.0003C15.9632 28.5334 17.5202 25.2406 16.847 21.7789C15.965 17.2438 16.4096 15.3008 17.072 13.999C14.7446 17.4032 14.9966 20.239 15.3422 22.0093Z" fill="black" />
            </svg>`,
        }
    },
    logged_user_name_section: function () {
        let name = document.querySelector("#customerAuthenticated[data-authenticated=true] .header-link-text").innerText;
        let points = document.querySelector(".norewards-description") ? document.querySelector(".norewards-description").innerText : "Vous avez " + document.querySelector(".loyalty .description strong").textContent;
        let loyalty_category = window.tc_crm_customersegment != 'unactive_non_buyer' ? window.tc_crm_customersegment : false;
        let user_new_section = `<div class="user_new_section">
                <div class="loyalty_picto ${loyalty_category ? loyalty_category : ""}">
    
                </div>
                <div class="user_name_points">
                    <div class="user_name">${name} !</div>
                    <div class="points">${points}</div>
                </div>
            </div>`;
        document.querySelector("#secondary .account-left-text").innerHTML = user_new_section;
        if (document.querySelector(".service-link[href='https://www.sephora.fr/profil/']") && document.querySelector(".service-link[href='https://www.sephora.fr/profil/?is_password_link=1']")) {
            document.querySelector(".service-link[href='https://www.sephora.fr/profil/']").closest(".submenu").insertAdjacentHTML("beforeend",`<li role="treeitem" class="is-submenu-item is-accordion-submenu-item"><a href="https://www.sephora.fr/profil/?is_password_link=1" class="service-link account-nav-sublink " title="Modifier mon mot de passe">Modifier mon mot de passe</a></li>`);
        }
    },
    unlogged_username_section: function () {
        let unlog_user = `<div class="unlogg_wrapper">
            <div class="unlogg_details">
                Connectez-vous ou créer un compte pour bénéficier de tous les avantages du beauty Compte Sephora
            </div>
            <a href="https://www.sephora.fr/connexion/" class="button" title="Me connecter / M’inscrire">
                Me connecter / M’inscrire<span>
                </span></a>
        </div>`;
        if (!document.querySelector(".unlogg_wrapper")) {
            document.querySelector(".account-nav-wrapper .account-left-text").insertAdjacentHTML("beforeend",unlog_user);
        }
        if (window.innerWidth < 768) {
            document.querySelector("#primary .account-overview > .account-left-text").insertAdjacentHTML("beforeend",unlog_user);
        }
    },
    mobile_logged_user_name_section: function () {
        let loyalty_category = window.tc_crm_customersegment != 'unactive_non_buyer' ? window.tc_crm_customersegment : false;
        let mobile_card = `<div class="mobile_card_wrapper">
            <div class="card_img ${loyalty_category ? loyalty_category : ""}"></div>
            <div class="card_text">Voir ma carte</div>
        </div>`;
        document.querySelector("#primary .cards-images").innerHTML = mobile_card;
        if (document.querySelector(".accountoverview-title[href='https://www.sephora.fr/profil/?is_password_link=1']") && document.querySelector(".dashboard-content-links .dashboard-links-list")) {
            let passChange = `<li>
            <a href="https://www.sephora.fr/profil/?is_password_link=1" class="accountoverview-link" title="Modifier mon mot de passe">
            Modifier mon mot de passe
            </a>
            </li>`;
            document.querySelector(".dashboard-content-links .dashboard-links-list").insertAdjacentHTML("beforeend",passChange);
        }
    },


    identify_options: function () {
        document.querySelector(".account-nav-link .nav-icon .offers-icon").closest(".nav-level-1").classList.add("purchase_option");
        if (document.querySelector(".service-link[href='https://www.sephora.fr/profil/']") && document.querySelector(".service-link[href='https://www.sephora.fr/profil/']").closest(".nav-level-1")) {
            document.querySelector(".service-link[href='https://www.sephora.fr/profil/']").closest(".nav-level-1").classList.add("my_account_set");
        }

    },
    mainJS: function () {
        accountManage.identify_options();
        if (document.querySelector("#customerAuthenticated[data-authenticated=true]")) {
            accountManage.logged_user_name_section();
            if (window.innerWidth < 768) {
                accountManage.mobile_logged_user_name_section();
            }

        } else if (document.querySelector("#customerAuthenticated[data-authenticated=false]")) {
            accountManage.unlogged_username_section();
            document.querySelector("body").classList.add("sign_up");
        }

        if (window.innerWidth > 768) {
            let pages = ["https://www.sephora.fr/mes-offres/","https://www.sephora.fr/mes-achats/","https://www.sephora.fr/wishlist/","https://www.sephora.fr/profil/#subscribing-form","https://www.sephora.fr/carnet-adresse/","https://www.sephora.fr/profil/","https://www.sephora.fr/moyen-paiement/","https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/Account-FavoriteStore"];
            if (pages.includes(window.location.href)) {
                document.querySelector("body").classList.add("not_first_page");
            }
            if (window.location.href.includes("/wishlist/") || window.location.href.includes("/mes-achats/")) {
                document.querySelector("body").classList.add("exclude_height")
            }
        }
    }
}

waitForElem(['#secondary','#customerAuthenticated[data-authenticated]'],accountManage.init,2);