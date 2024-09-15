let freshSerumFinder = {
    init: function () {
        freshSerumFinder.mainJS();
    },
    serumMultiProducts: {
        nonPremium: {
            name: "Black Tea Firming Peptides Serum",
            details: "A peptide-powered serum that firms for a lifted look of facial contours and sculpted appearance with clinically tested results instantly and over time.",
            size: "50ml/1.6floz",
            price: "$138.00",
            img: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-3.png",
            mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-1.png",
            link: "https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums/black-tea-firming-peptides-serum-H00005875.html",
            pid: "H00005875",
        },
        premium: {
            name: "Crème Ancienne Supreme Face Serum",
            details: "An anti-aging serum handcrafted with exotic root and botanical extracts that minimizes the look of lines while improving skin's elasticity and luminosity.",
            size: "30ml/1floz",
            price: "$378.00",
            img: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-2.png",
            mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740.png",
            link: "https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums/cr%C3%A8me-ancienne-supreme-face-serum-H00005900.html",
            pid: "H00005900",
        },
    },

    serumSingleProducts: {
        brightening: {
            name: "Tea Elixir Skin Resilience Activating Serum",
            details: "An advanced face serum that boosts skin’s visible resilience to resist external aggressors for smoother texture, visible glow, and restored bounce.",
            size: "0ml",
            price: "$37.00",
            // img: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-1-1.png",
            img: "https://sandbox.echologyx.com/wp-content/uploads/2022/07/Rectangle-731.png",
            // mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-1-1.png",
            mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/07/Rectangle-731.png",
            link: "https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums/vitamin-nectar-antioxidant-face-serum-H00004853.html",
            pid: "H00004853",
            outOfStock: true,
        },
        dullness: {
            name: "Tea Elixir Skin Resilience Activating Serum",
            details: "An advanced face serum that boosts skin’s visible resilience to resist external aggressors for smoother texture, visible glow, and restored bounce.",
            size: "0ml",
            price: "$37.00",
            // img: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-1-1.png",
            img: "https://sandbox.echologyx.com/wp-content/uploads/2022/07/Rectangle-731.png",
            // mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-1-1.png",
            mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/07/Rectangle-731.png",
            link: "https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums/vitamin-nectar-antioxidant-face-serum-H00004853.html",
            pid: "H00004853",
            outOfStock: true,
        },
        "dehydration&dryness": {
            name: "Rose Deep Hydration Oil-Infused Serum",
            details: "Fresh’s first-ever oil-infused liquid serum created to deliver 24-hour deep hydration for dewy skin that’s plumped with moisture.",
            size: "100ml/3.3floz",
            price: "$78.00",
            img: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-4.png",
            mblImg: "https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-2.png",
            link: "https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums/rose-deep-hydration-oil-infused-serum-H00005424.html",
            pid: "H00005424",
        },
    },
    injectSerumFinderHomeBanner: function () {
        let isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
        let serumFinderHomePage = '<div class="homePageWrapper">' +
            '<img class="homePageWrapperBg" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-739-1.png"/>' +
            '<img class="homePageWrapperBgMbl" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Q1_2021_Social_1080x1350_14-1.png"/>' +
            '<div class="homePageCtaWrapper">' +
            '<div class="ctaTitle">Serum finder</div>' +
            '<div class="ctaSubtitle">Take our quiz to find your next go-to serum</div>' +
            '<button class="homepageCta btn btn-outline-primary">Find Your Serum</button>' +
            "</div>" +
            "</div>";
        document.querySelector(".page>.container").insertAdjacentHTML("beforebegin",serumFinderHomePage);
        document.querySelector(".homepageCta").addEventListener("click",function () {
            document.querySelector(".homePageWrapper").style.display = "none";
            window.dataLayer && window.dataLayer.push({
                event: "trackEvent",
                eventCategory: "ABtest",
                eventAction: "2022Q2",
                eventLabel: "clicks_Find_your_serum",
            });
            if (isTouch) {
                freshSerumFinder.injectSurveyMobile();
            } else {
                freshSerumFinder.injectSurvey();
            }
        });
        document.querySelector(".homepageCta").click();
    },
    injectSurvey: function () {
        const surveyWrapper = '<div class="surveyWrapper">' +
            '    <div class="surveyPages form-step-active">' +
            '        <div class="sideBannerWrapper">' +
            '            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731.png" />' +
            "        </div>" +
            '        <div class="questionsWrapper">' +
            '            <div class="progressbar">' +
            '                <div class="progress" id="progress"></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            "            </div>" +
            '            <div class="question_answer_wrapper">' +
            '                <div class="question">What best describes your skin type?</div>' +
            '                <div class="answers skinQuality">' +
            '                    <button class="btn btn-outline-primary" data-skin="normal">Normal</button>' +
            '                    <button class="btn btn-outline-primary" data-skin="Combination">Combination</button>' +
            '                    <button class="btn btn-outline-primary" data-skin="dry">Dry</button>' +
            '                    <button class="btn btn-outline-primary" data-skin="oily">Oily</button>' +
            '                    <button class="btn btn-outline-primary" data-skin="oily">Sensitive</button>' +
            "                </div>" +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            '    <div class="surveyPages">' +
            '        <div class="sideBannerWrapper">' +
            '            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-731-1.png" />' +
            "        </div>" +
            '        <div class="questionsWrapper">' +
            '            <div class="progressbar">' +
            '                <div class="progress" id="progress"></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            "            </div>" +
            '            <div class="question_answer_wrapper">' +
            '                <div class="question">What is your skincare concern?</div>' +
            '                <div class="answers skinType">' +
            '                    <button class="btn btn-outline-primary" data-product="brightening">' +
            "                        <div>Brightening</div>" +
            '                        <img class="btnImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/brightening.png" />' +
            '                        <img class="btnHoverImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/brightening-enabled.png" />' +
            "                    </button>" +
            '                    <button class="btn btn-outline-primary" data-product="dullness">' +
            "                        <div>Dullness</div>" +
            '                        <img class="btnImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/dullness.png" />' +
            '                        <img class="btnHoverImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/dullness-enabled.png" />' +
            "                    </button>" +
            '                    <button class="btn btn-outline-primary" data-product="lifting&firming">' +
            "                        <div>Lifting & Firming</div>" +
            '                        <img class="btnImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/lifting-firming.png" />' +
            '                        <img class="btnHoverImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/lifting-firming-enabled.png" />' +
            "                    </button>" +
            '                    <button class="btn btn-outline-primary" data-product="finelines&wrinkles">' +
            "                        <div>Fine lines & Wrinkles</div>" +
            '                        <img class="btnImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/fine-lines-wrinkles.png" />' +
            '                        <img class="btnHoverImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/fine-lines-wrinkles-enabled.png" />' +
            "                    </button>" +
            '                    <button class="btn btn-outline-primary" data-product="dehydration&dryness">' +
            "                        <div>Dehydration & Dryness</div>" +
            '                        <img class="btnImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/dehydration-dryness.png" />' +
            '                        <img class="btnHoverImg"' +
            '                            src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/dehydration-dryness-enabled.png" />' +
            "                    </button>" +
            "                </div>" +
            "            </div>" +
            '            <div class="prevBtn">Back</div>' +
            "        </div>" +
            "    </div>" +
            '    <div class="surveyPages">' +
            '        <div class="sideBannerWrapper">' +
            '            <img src="https://i.ibb.co/LYkHZmn/Age-Range.jpg" />' +
            "        </div>" +
            '        <div class="questionsWrapper">' +
            '            <div class="progressbar">' +
            '                <div class="progress" id="progress"></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step progress-step-active" data-title=""></div>' +
            '                <div class="progress-step" data-title=""></div>' +
            "            </div>" +
            '            <div class="question_answer_wrapper">' +
            '                <div class="question">What is your age range?</div>' +
            '                <div class="answers age">' +
            '                    <button class="btn btn-outline-primary" data-age="20-29">20 - 29</button>' +
            '                    <button class="btn btn-outline-primary" data-age="30 - 39">30 - 39</button>' +
            '                    <button class="btn btn-outline-primary" data-age="40 - 49">40 - 49</button>' +
            '                    <button class="btn btn-outline-primary" data-age="50+">50+</button>' +
            '                    <button class="btn btn-outline-primary" data-age="Prefer not to say">Prefer not to say</button>' +
            "                </div>" +
            "            </div>" +
            '            <div class="prevBtn">Back</div>' +
            "        </div>" +
            "    </div>" +
            "</div>";
        document.querySelector(".homePageWrapper").insertAdjacentHTML("beforebegin",surveyWrapper);
        freshSerumFinder.injectLoadingScreen();
        let formSteps = document.querySelectorAll(".surveyPages");
        let prevBtns = document.querySelectorAll(".prevBtn");
        let nextBtns = document.querySelectorAll(".answers>button");
        let formStepsNum = 0;
        let selectedSkinType;
        nextBtns.forEach((btn) => {
            btn.addEventListener("click",(e) => {
                formStepsNum++;
                updateFormSteps();
            });
        });
        prevBtns.forEach((btn) => {
            btn.addEventListener("click",() => {
                formStepsNum--;
                updateFormSteps();
            });
        });

        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");
            });
            if (formSteps[formStepsNum]) {
                formSteps[formStepsNum].classList.add("form-step-active");
            } else {
                if (selectedSkinType == "lifting&firming" || selectedSkinType == "finelines&wrinkles") {
                    freshSerumFinder.injectMultiResultPage();
                    document.querySelector(".loading-results") && document.querySelector(".loading-results").removeAttribute("style");
                } else {
                    freshSerumFinder.injectSingleResultPage(selectedSkinType);
                    document.querySelector(".loading-results") && document.querySelector(".loading-results").removeAttribute("style");
                }
            }
        }

        document.querySelectorAll(".skinType>button").forEach(function (each) {
            each.addEventListener("click",function (e) {
                selectedSkinType = e.target.closest("button").getAttribute("data-product");
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clicksstep2" + selectedSkinType + "",
                });
                console.log("selectedSkinType " + selectedSkinType);
            });
        });
        freshSerumFinder.answersTracking();
    },
    injectSurveyMobile: function () {
        let surveyWrapper = '<div class="surveyWrapper">' +
            '    <div class="progressbar">' +
            '        <div class="progress" id="progress"></div>' +
            '        <div class="progress-step progress-step-active" data-title=""></div>' +
            '        <div class="progress-step" data-title=""></div>' +
            '        <div class="progress-step" data-title=""></div>' +
            '        <div class="progress-step" data-title=""></div>' +
            "    </div>" +
            '    <div class="swiper1 swiper-no-swiping">' +
            '        <div class="swiper-wrapper">' +
            '            <div class="swiper-slide swiper-no-swiping">' +
            '                <div class="surveyPages">' +
            '                    <div class="questionsWrapper">' +
            '                        <div class="question_answer_wrapper">' +
            '                            <div class="question">What best describes your skin type?</div>' +
            '                            <div class="answers skinQuality">' +
            '                                <button class="btn btn-outline-primary" data-skin="normal">Normal</button>' +
            '                                <button class="btn btn-outline-primary" data-skin="Combination">Combination</button>' +
            '                                <button class="btn btn-outline-primary" data-skin="Dry">Dry</button>' +
            '                                <button class="btn btn-outline-primary" data-skin="Oily">Oily</button>' +
            '                                <button class="btn btn-outline-primary" data-skin="Sensitive">Sensitive</button>' +
            "                            </div>" +
            "                        </div>" +
            "                    </div>" +
            "                </div>" +
            "            </div>" +
            '            <div class="swiper-slide swiper-no-swiping">' +
            '                <div class="surveyPages">' +
            '                    <div class="questionsWrapper">' +
            '                        <div class="question_answer_wrapper">' +
            '                            <div class="question">What is your skincare concern?</div>' +
            '                            <div class="answers skinType">' +
            '                                <button class="btn btn-outline-primary" data-product="brightening">' +
            "                                    <div>Brightening</div>" +
            '                                    <img class="btnImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/brightening.png" />' +
            '                                    <img class="btnHoverImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/brightening-enabled.png" />' +
            "                                </button>" +
            '                                <button class="btn btn-outline-primary" data-product="dullness">' +
            "                                    <div>Dullness</div>" +
            '                                    <img class="btnImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/dullness.png" />' +
            '                                    <img class="btnHoverImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/dullness-enabled.png" />' +
            "                                </button>" +
            '                                <button class="btn btn-outline-primary" data-product="lifting&firming">' +
            "                                    <div>Lifting & Firming</div>" +
            '                                    <img class="btnImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/lifting-firming.png" />' +
            '                                    <img class="btnHoverImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/lifting-firming-enabled.png" />' +
            "                                </button>" +
            '                                <button class="btn btn-outline-primary" data-product="finelines&wrinkles">' +
            "                                    <div>Fine lines & Wrinkles</div>" +
            '                                    <img class="btnImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/fine-lines-wrinkles.png" />' +
            '                                    <img class="btnHoverImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/fine-lines-wrinkles-enabled.png" />' +
            "                                </button>" +
            '                                <button class="btn btn-outline-primary" data-product="dehydration&dryness">' +
            "                                    <div>Dehydration & Dryness</div>" +
            '                                    <img class="btnImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/03/dehydration-dryness.png" />' +
            '                                    <img class="btnHoverImg"' +
            '                                        src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/dehydration-dryness-enabled.png" />' +
            "                                </button>" +
            "                            </div>" +
            "                        </div>" +
            "                    </div>" +
            "                </div>" +
            "            </div>" +
            '            <div class="swiper-slide swiper-no-swiping">' +
            '                <div class="surveyPages">' +
            '                    <div class="questionsWrapper">' +
            '                        <div class="question_answer_wrapper">' +
            '                            <div class="question">What is your age range?</div>' +
            '                            <div class="answers age">' +
            '                                <button class="btn btn-outline-primary" data-age="20 - 29">20 - 29</button>' +
            '                                <button class="btn btn-outline-primary" data-age="30 - 39">30 - 39</button>' +
            '                                <button class="btn btn-outline-primary" data-age="40 - 49">40 - 49</button>' +
            '                                <button class="btn btn-outline-primary" data-age="50+">50+</button>' +
            '                                <button class="btn btn-outline-primary" data-age="Prefer not to say">Prefer not to' +
            "                                    say</button>" +
            "                            </div>" +
            "                        </div>" +
            "                    </div>" +
            "                </div>" +
            "            </div>" +
            "        </div>" +
            '        <div class="prevBtn" style="display: none">Back</div>' +
            '        <div class="swiper-button-prev" style="display: none"></div>' +
            '        <div class="swiper-button-next" style="display: none"></div>' +
            "    </div>" +
            "</div>";
        document.querySelector(".homePageWrapper").insertAdjacentHTML("beforebegin",surveyWrapper);
        let injectScript = (src) =>
            new Promise((resolve,reject) => {
                let script = document.createElement("script");
                script.src = src;
                script.addEventListener("load",resolve);
                script.addEventListener("error",(e) => reject(e));
                document.head.appendChild(script);
            });
        let cssFile1 = document.createElement("link");
        cssFile1.rel = "stylesheet";
        cssFile1.href = "https://unpkg.com/swiper/swiper-bundle.min.css"; // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile1);
        injectScript("https://unpkg.com/swiper@8/swiper-bundle.min.js")
            .then(() => {
                let swiperX = new Swiper(".swiper1",{
                    simulateTouch: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
                document.querySelectorAll(".prevBtn").forEach(function (eac) {
                    eac.addEventListener("click",function () {
                        document.querySelectorAll(".surveyWrapper .swiper-button-prev")[0].click();
                    });
                });
                document.querySelectorAll(".answers button").forEach(function (each) {
                    each.addEventListener("click",function () {
                        if (document.querySelectorAll(".surveyWrapper .swiper-button-next")[0]) {
                            document.querySelectorAll(".surveyWrapper .swiper-button-next")[0].click();
                        }
                    });
                });
            })
            .catch((error) => {
                console.error(error);
            });

        let formSteps = document.querySelectorAll(".surveyPages");
        let prevBtns = document.querySelectorAll(".prevBtn");
        let nextBtns = document.querySelectorAll(".answers>button");
        const progress = document.getElementById("progress");
        const progressSteps = document.querySelectorAll(".progress-step");
        let formStepsNum = 0;
        freshSerumFinder.injectLoadingScreen();
        let selectedSkinType;
        nextBtns.forEach((btn) => {
            btn.addEventListener("click",(e) => {
                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
            });
        });
        prevBtns.forEach((btn) => {
            btn.addEventListener("click",() => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
            });
        });

        function updateFormSteps() {
            //formSteps.forEach((formStep) => {
            //  formStep.classList.contains("form-step-active") &&
            //    formStep.classList.remove("form-step-active");
            //});
            //if(formSteps[formStepsNum]){
            //	formSteps[formStepsNum].classList.add("form-step-active");
            //}
            if (formStepsNum > 0) {
                document.querySelector(".prevBtn").style.display = "block";
            } else {
                document.querySelector(".prevBtn").style.display = "none";
            }
            if (!formSteps[formStepsNum]) {
                console.log("selected Skin Type: ",selectedSkinType);
                if (selectedSkinType == "lifting&firming" || selectedSkinType == "finelines&wrinkles") {
                    freshSerumFinder.injectMultiResultPage();
                    document.querySelector(".surveyWrapper").remove();
                    document.querySelector(".loading-results") && document.querySelector(".loading-results").removeAttribute("style");
                } else {
                    freshSerumFinder.injectSingleResultPage(selectedSkinType);
                    document.querySelector(".surveyWrapper").remove();
                    document.querySelector(".loading-results") && document.querySelector(".loading-results").removeAttribute("style");
                }
            }
        }

        function updateProgressbar() {
            progressSteps.forEach((progressStep,idx) => {
                if (idx < formStepsNum + 1) {
                    progressStep.classList.add("progress-step-active");
                } else {
                    progressStep.classList.remove("progress-step-active");
                }
            });
        }

        document.querySelectorAll(".skinType>button").forEach(function (each) {
            each.addEventListener("click",function (e) {
                selectedSkinType = e.target.closest("button").getAttribute("data-product");
                console.log("selectedSkinType " + selectedSkinType);
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clicksstep2" + selectedSkinType +
                        "",
                });
            });
        });
        freshSerumFinder.answersTracking();
    },
    injectLoadingScreen: function () {
        console.log("Loading screen injection");
        let loadingElem = document.createElement("div");
        loadingElem.classList.add("loading-results");
        loadingElem.setAttribute("style","max-height: 0;");
        loadingElem.innerHTML = "<video autoplay muted loop playsinline>" +
            '        <source src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Serum_Finder_Desktop.mp4" type="video/mp4">' +
            "        Your browser does not support the video tag." +
            "</video>" +
            "<video mobile autoplay muted loop playsinline>" +
            '        <source src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Serum_Finder_Mobile.mp4" type="video/mp4">' +
            "        Your browser does not support the video tag." +
            "</video>" +
            '<span class="loading-content-text">Your results</span>';
        document.querySelector(".homePageWrapper").before(loadingElem);
    },
    injectMultiResultPage: function () {
        let resultPageWrapper = '<div class="resultPageWrapper">' +
            '<div class="resultPageProduct active-pdp"> ' +
            '<div class="pdpImgWrapper">' +
            '<img src="' + freshSerumFinder.serumMultiProducts["nonPremium"].img +
            '"/>' +
            "</div>" +
            '<div class="resultWrapper">' +
            '<div class="progressbar">' +
            '<div class="progress" id="progress"></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            "</div>" +
            '<div class="multiPdpButton">' +
            '<button class="activePdpBtn">Your serum</button>' +
            '<button class="premiumSerum">Your premium serum</button>' +
            "</div>" +
            '<div class="pdpDetailsWrapper">' +
            '<div class="matchText"><strong>Your serum</strong> match is</div>' +
            '<div class="pdName">' + freshSerumFinder.serumMultiProducts["nonPremium"].name +
            "</div>" +
            '<div class="pdpMblImgWrapper">' +
            '<img src="' + freshSerumFinder.serumMultiProducts["nonPremium"].mblImg +
            '">' +
            "</div>" +
            '<div class="pdDetails">' + freshSerumFinder.serumMultiProducts["nonPremium"].details +
            "</div>" +
            '<div class="pdSizeWrapper">Size: <span>' + freshSerumFinder.serumMultiProducts["nonPremium"].size +
            "</span></div>" +
            '<div class="pdPrice">' + freshSerumFinder.serumMultiProducts["nonPremium"].price +
            "</div>" +
            '<div class="pdBtns">' +
            '<button class="btn btn-outline-primary" data-pid="' + freshSerumFinder.serumMultiProducts["nonPremium"].pid +
            '" ' +
            "data-out-of-stock=" + (freshSerumFinder.serumMultiProducts["nonPremium"].outOfStock == true) +
            '>' + (freshSerumFinder.serumMultiProducts["nonPremium"].outOfStock ? 'Add to waitlist' : 'Add To Bag') + '</button>' +
            '<a class="btn btn-outline-primary" href="' + freshSerumFinder.serumMultiProducts["nonPremium"].link +
            '" class="learnMore" data-lPid = "' + freshSerumFinder.serumMultiProducts["nonPremium"].pid +
            '">Learn More</a>' +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div id="pdp-benefits" class="pdpBenefits"></div>' +
            '<div class="resultPageProduct"> ' +
            '<div class="pdpImgWrapper">' +
            '<img src="' + freshSerumFinder.serumMultiProducts["premium"].img +
            '"/>' +
            "</div>" +
            '<div class="resultWrapper">' +
            '<div class="progressbar">' +
            '<div class="progress" id="progress"></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            "</div>" +
            '<div class="multiPdpButton">' +
            "<button>Your serum</button>" +
            '<button class="premiumSerum activePdpBtn">Your premium serum</button>' +
            "</div>" +
            '<div class="pdpDetailsWrapper">' +
            '<div class="matchText"><strong>Your premium serum</strong> match is</div>' +
            '<div class="pdName">' + freshSerumFinder.serumMultiProducts["premium"].name +
            "</div>" +
            '<div class="pdpMblImgWrapper">' +
            '<img src="' + freshSerumFinder.serumMultiProducts["premium"].mblImg +
            '">' +
            "</div>" +
            '<div class="pdDetails">' + freshSerumFinder.serumMultiProducts["premium"].details +
            "</div>" +
            '<div class="pdSizeWrapper">Size: <span>' + freshSerumFinder.serumMultiProducts["premium"].size +
            "</span></div>" +
            '<div class="pdPrice">' + freshSerumFinder.serumMultiProducts["premium"].price +
            "</div>" +
            '<div class="pdBtns">' +
            '<button class="btn btn-outline-primary" data-pid="' + freshSerumFinder.serumMultiProducts["premium"].pid +
            '" ' +
            "data-out-of-stock=" + (freshSerumFinder.serumMultiProducts["premium"].outOfStock == true) +
            '>' + (freshSerumFinder.serumMultiProducts["premium"].outOfStock ? 'Add to waitlist' : 'Add To Bag') + '</button>' +
            '<a class="btn btn-outline-primary" href="' + freshSerumFinder.serumMultiProducts["premium"].link +
            '" class="learnMore" data-lPid = "' + freshSerumFinder.serumMultiProducts["premium"].pid +
            '">Learn More</a>' +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div id="pdp-benefits" class="pdpBenefits"></div>' +
            '<div class="restartSurveyWrapper">' +
            '<div class="backgroundImg">' +
            '<img class="desktop" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-739-1.png">' +
            '<img class="mobile" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Q1_2021_Social_1080x1350_14-1.png"> ' +
            "</div>" +
            '<div class="restartCtaWrapper">' +
            '<div class="restartTitle">Not the serum you were looking for?</div>' +
            '<button class="ShopAllSerum btn btn-outline-primary" onclick={window.location.href="https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums"}>Shop All Serums</button>' +
            '<button class="restartFinderButton">Retake Serum Finder Quiz</button>' +
            "</div>" +
            "</div>" +
            '<div class="module-container multiModuleContainer"></div>' +
            '<div class="module-container module-container2 multiModuleContainer"></div>' +
            '<div class="homePageWrapper footerLearnMore">' +
            '<img class="homePageWrapperBg" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-3.png"/>' +
            '<img class="homePageWrapperBgMbl" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-496.png"/>' +
            '<div class="homePageCtaWrapper">' +
            '<div class="ctaTitle">Learn more about our serums</div>' +
            '<button class="homepageCta btn btn-outline-primary" onclick={window.location.href="https://staging.fresh.com/ca/en_CA/stories-expert-advice/article-how-to-choose-the-right-face-serum.html"} >Learn More</button>' +
            "</div>" +
            "</div>";
        document.querySelector(".homePageWrapper").insertAdjacentHTML("beforebegin",resultPageWrapper);
        let resultPagePrds = document.querySelectorAll(".resultPageProduct");
        let normalSerumBtn = document.querySelectorAll(".multiPdpButton button:first-child");
        let premiumSerumBtn = document.querySelectorAll(".multiPdpButton button:last-child");
        let pdpIndex = 0;
        normalSerumBtn.forEach((btn) => {
            btn.addEventListener("click",() => {
                pdpIndex = 0;
                updatePdpSteps();
            });
        });

        premiumSerumBtn.forEach((btn) => {
            btn.addEventListener("click",() => {
                pdpIndex = 1;
                updatePdpSteps();
            });
        });

        function updatePdpSteps() {
            resultPagePrds.forEach((each) => {
                each.classList.contains("active-pdp") && each.classList.remove("active-pdp");
            });
            resultPagePrds[pdpIndex].classList.add("active-pdp");
        }

        document.querySelectorAll(".pdBtns button").forEach(function (each) {
            each.addEventListener("click",function (e) {
                let pid = e.target.closest("button").dataset.pid;
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clicksadd_to_bag" + pid +
                        "",
                    nonInteraction: false,
                });
                console.log(e.target.closest("button").dataset.outOfStock == "true");
                if (e.target.closest("button").dataset.outOfStock == "true") {
                    e.target.closest("button").nextElementSibling.click();
                    return;
                }
                $.ajax({
                    url: "https://www.fresh.com/eu/en/addproduct",
                    method: "POST",
                    data: {
                        pid: pid,
                        quantity: 1,
                        options: [],
                    },
                    success: function (e) {
                        $("body")
                            .spinner()
                            .stop();
                        $(".minicart").trigger("count:update",e);
                        document.dispatchEvent(
                            new CustomEvent("update-cart",{
                                detail: e,
                            })
                        );
                    },
                    error: function (e) {
                        $("body")
                            .spinner()
                            .stop();
                    },
                });
            });
        });

        freshSerumFinder.benefitsSectionInsert(freshSerumFinder.serumMultiProducts["nonPremium"].link,document.querySelectorAll("#pdp-benefits")[0]);
        freshSerumFinder.benefitsSectionInsert(freshSerumFinder.serumMultiProducts["premium"].link,document.querySelectorAll("#pdp-benefits")[1]);
        let isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
        document.querySelectorAll(".restartFinderButton").forEach(function (each) {
            each.addEventListener("click",function () {
                // window.location.reload();
                if (isTouch) {
                    document.querySelector(".resultPageWrapper").remove();
                    freshSerumFinder.injectSurveyMobile();
                } else {
                    document.querySelector(".resultPageWrapper").remove();
                    document.querySelector(".surveyWrapper").remove();
                    freshSerumFinder.injectSurvey();
                }
                document.body.style.position = 'fixed';
                setTimeout(function () {
                    document.body.removeAttribute('style');
                },1000);
            });
        });
        freshSerumFinder.completeYourRoutineInject(freshSerumFinder.serumMultiProducts["nonPremium"].link,document.querySelector(".module-container"));
        freshSerumFinder.completeYourRoutineInject(freshSerumFinder.serumMultiProducts["premium"].link,document.querySelector(".module-container2"));

        document.querySelectorAll(".learnMore").forEach(function (each) {
            each.addEventListener("click",function (e) {
                let id = e.target.closest("a").getAttribute("data-lpid");
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clickslearn_more" + id +
                        "",
                });
            });
        });

        setTimeout(function () {
            document.querySelector(".loading-results") && document.querySelector(".loading-results").remove();
            document.querySelector(".resultPageWrapper").classList.add("show");
        },3000);
    },
    injectSingleResultPage: function (selectedSkinType) {
        console.log("selectedSkinType " + selectedSkinType);
        let resultPageWrapper = '<div class="resultPageWrapper">' +
            '<div class="resultPageProduct active-pdp"> ' +
            '<div class="pdpImgWrapper">' +
            '<img src="' + freshSerumFinder.serumSingleProducts[selectedSkinType].img +
            '"/>' +
            "</div>" +
            '<div class="resultWrapper">' +
            '<div class="progressbar">' +
            '<div class="progress" id="progress"></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            '<div class="progress-step progress-step-active" data-title=""></div>' +
            "</div>" +
            '<div class="pdpDetailsWrapper">' +
            '<div class="matchText"><strong>Your serum</strong> match is</div>' +
            '<div class="pdName">' + freshSerumFinder.serumSingleProducts[selectedSkinType].name +
            "</div>" +
            '<div class="pdpMblImgWrapper">' +
            '<img src="' + freshSerumFinder.serumSingleProducts[selectedSkinType].mblImg +
            '">' +
            "</div>" +
            '<div class="pdDetails">' + freshSerumFinder.serumSingleProducts[selectedSkinType].details +
            "</div>" +
            '<div class="pdSizeWrapper">Size: <span>' + freshSerumFinder.serumSingleProducts[selectedSkinType].size +
            "</span></div>" +
            '<div class="pdPrice">' + freshSerumFinder.serumSingleProducts[selectedSkinType].price +
            "</div>" +
            '<div class="pdBtns">' +
            '<button data-pid="' + freshSerumFinder.serumSingleProducts[selectedSkinType].pid +
            '" ' +
            "data-out-of-stock=" + (freshSerumFinder.serumSingleProducts[selectedSkinType].outOfStock == true) +
            '>' + (freshSerumFinder.serumSingleProducts[selectedSkinType].outOfStock ? 'Add to waitlist' : 'Add To Bag') + '</button>' +
            '<a href="' + freshSerumFinder.serumSingleProducts[selectedSkinType].link +
            '" class="learnMore" data-lPid = "' + freshSerumFinder.serumSingleProducts[selectedSkinType].pid +
            '">Learn More</a>' +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<div id="pdp-benefits" class="pdpBenefits"></div>' +
            '<div class="restartSurveyWrapper">' +
            '<div class="backgroundImg">' +
            '<img class="desktop" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-739-1.png">' +
            '<img class="mobile" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Q1_2021_Social_1080x1350_14-1.png"> ' +
            "</div>" +
            '<div class="restartCtaWrapper">' +
            '<div class="restartTitle">Not the serum you were looking for?</div>' +
            '<button class="ShopAllSerum btn btn-outline-primary" onclick={window.location.href="https://staging.fresh.com/ca/en_CA/skincare/categories/essences-serums"}>Shop All Serums</button>' +
            '<button class="restartFinderButton">Retake Serum Finder Quiz</button>' +
            "</div>" +
            "</div>" +
            '<div class="module-container"></div>' +
            '<div class="homePageWrapper footerLearnMore">' +
            '<img class="homePageWrapperBg" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-740-3.png"/>' +
            '<img class="homePageWrapperBgMbl" src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Rectangle-496.png"/>' +
            '<div class="homePageCtaWrapper">' +
            '<div class="ctaTitle">Learn more about our serums</div>' +
            '<button class="homepageCta btn btn-outline-primary" onclick={window.location.href="https://staging.fresh.com/ca/en_CA/stories-expert-advice/article-how-to-choose-the-right-face-serum.html"} >Learn More</button>' +
            "</div>" +
            "</div>";
        ("</div>");
        document.querySelector(".homePageWrapper").insertAdjacentHTML("beforebegin",resultPageWrapper);
        document.querySelector(".pdBtns button").addEventListener("click",function (e) {
            let pid = e.target.closest("button").dataset.pid;
            window.dataLayer && window.dataLayer.push({
                event: "trackEvent",
                eventCategory: "ABtest",
                eventAction: "2022Q2",
                eventLabel: "clicksadd_to_bag" + pid +
                    "",
                nonInteraction: false,
            });
            console.log(e.target.closest("button").dataset.outOfStock == "true");
            if (e.target.closest("button").dataset.outOfStock == "true") {
                e.target.closest("button").nextElementSibling.click();
                return;
            }
            $.ajax({
                url: "https://www.fresh.com/eu/en/addproduct",
                method: "POST",
                data: {
                    pid: pid,
                    quantity: 1,
                    options: [],
                },
                success: function (e) {
                    $("body")
                        .spinner()
                        .stop();
                    $(".minicart").trigger("count:update",e);
                    document.dispatchEvent(
                        new CustomEvent("update-cart",{
                            detail: e,
                        })
                    );
                },
                error: function (e) {
                    $("body").spinner().stop();
                },
            });
        });
        freshSerumFinder.benefitsSectionInsert(freshSerumFinder.serumSingleProducts[selectedSkinType].link,document.querySelector("#pdp-benefits"));
        let isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
        document.querySelectorAll(".restartFinderButton").forEach(function (each) {
            each.addEventListener("click",function () {
                // window.location.reload();
                if (isTouch) {
                    document.querySelector(".resultPageWrapper").remove();
                    freshSerumFinder.injectSurveyMobile();
                } else {
                    document.querySelector(".resultPageWrapper").remove();
                    document.querySelector(".surveyWrapper").remove();
                    freshSerumFinder.injectSurvey();
                }
                document.body.style.position = 'fixed';
                setTimeout(function () {
                    document.body.removeAttribute('style');
                },1000);
            });
        });

        freshSerumFinder.completeYourRoutineInject(freshSerumFinder.serumSingleProducts[selectedSkinType].link,document.querySelector(".module-container"));
        document.querySelectorAll(".learnMore").forEach(function (each) {
            each.addEventListener("click",function (e) {
                let id = e.target.closest("a").getAttribute("data-lpid");
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clickslearn_more" + id +
                        "",
                });
            });
        });

        setTimeout(function () {
            document.querySelector(".loading-results") && document.querySelector(".loading-results").remove();
            document.querySelector(".resultPageWrapper").classList.add("show");
        },3000);
    },
    benefitsSectionInsert: function (link,element) {
        console.log("benefitsSectionInsert ",link);
        let parser = new DOMParser();
        $.ajax({
            url: link,
            type: "GET",
            success: function (res) {
                element.innerHTML = parser.parseFromString(res,"text/html").querySelector("#pdp-benefits").innerHTML;
            },
        });
    },
    completeYourRoutineInject: function (link,element) {
        console.log("completeYourRoutineInject ",link);
        let parser = new DOMParser();
        $.ajax({
            url: link,
            type: "GET",
            success: function (res) {
                element.innerHTML =
                    parser.parseFromString(res,"text/html").querySelector("[data-target='#complete-routine-body']") &&
                    parser
                        .parseFromString(res,"text/html")
                        .querySelector("[data-target='#complete-routine-body']")
                        .closest(".module-container").innerHTML;
                let swiperRoutine = new Swiper(".module-container .peek-carousel",{
                    cssMode: true,
                });
                let pidObjs = [];
                if (parser.parseFromString(res,"text/html").querySelector("[data-target='#complete-routine-body']")) {
                    document.querySelectorAll(".resultPageWrapper .module-container .cart-and-ipay:not(.d-none) .add-to-cart-on-tile").forEach(function (each) {
                        pidObjs.push({
                            pid: each.dataset.pid,
                            qty: 1,
                        });
                    });
                    document.querySelector("#complete-routine").addEventListener("click",function () {
                        $.ajax({
                            url: "https://www.fresh.com/eu/en/addproduct",
                            method: "POST",
                            data: {
                                pid: document.querySelectorAll(".resultPageWrapper .module-container .cart-and-ipay:not(.d-none) .add-to-cart-on-tile")[0].dataset.pid,
                                pidsObj: JSON.stringify(pidObjs),
                                quantity: 1,
                                options: [],
                            },
                            success: function (e) {
                                $("body")
                                    .spinner()
                                    .stop();
                                $(".minicart").trigger("count:update",e);
                                document.dispatchEvent(
                                    new CustomEvent("update-cart",{
                                        detail: e,
                                    })
                                );
                            },
                            error: function (e) {
                                $("body")
                                    .spinner()
                                    .stop();
                            },
                        });
                    });
                }
            },
        });
    },
    mainJS: function () {
        freshSerumFinder.injectSerumFinderHomeBanner();
        let injectScript = (src) =>
            new Promise((resolve,reject) => {
                let script = document.createElement("script");
                script.src = src;
                script.addEventListener("load",resolve);
                script.addEventListener("error",(e) => reject(e));
                document.head.appendChild(script);
            });
        let cssFile1 = document.createElement("link");
        cssFile1.rel = "stylesheet";
        cssFile1.href = "https://unpkg.com/swiper/swiper-bundle.min.css"; // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile1);
        injectScript("https://unpkg.com/swiper@8/swiper-bundle.min.js");
    },
    answersTracking: function () {
        document.querySelectorAll(".skinQuality>button").forEach(function (each) {
            each.addEventListener("click",function (e) {
                let selectedColorType = e.target.closest("button").getAttribute("data-skin");
                console.log("selectedColorType " + selectedColorType);
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clicksstep1" + selectedColorType +
                        "",
                });
            });
        });
        document.querySelectorAll(".age>button").forEach(function (each) {
            each.addEventListener("click",function (e) {
                let selectedAge = e.target.closest("button").getAttribute("data-age");
                console.log("selectedAge " + selectedAge);
                window.dataLayer && window.dataLayer.push({
                    event: "trackEvent",
                    eventCategory: "ABtest",
                    eventAction: "2022Q2",
                    eventLabel: "clicksstep1" + selectedAge +
                        "",
                });
            });
        });
    },
};
(function pollFor() {
    if (document.querySelector(".page>.container")) {
        freshSerumFinder.init();
    } else {
        setTimeout(pollFor,25);
    }
})();