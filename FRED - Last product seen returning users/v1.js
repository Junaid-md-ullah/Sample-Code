var LastSeenProductV1 = {
    init: function () {
        this.mainJS();
    },
    fredGetLang: document.querySelector("html").getAttribute("lang"),
    fredViewMoreAvailLang: {
        "en_US": "SHOP NOW",
        "en_FR": "SHOP NOW",
        "ja_JP": "ショッピングバッグに入れ",
        "fr_FR": "Ajouter au panier",
        "zh_CN": "探索",
        "ko_KR": "살펴보기",
        "it_FR": "Aggiungi alla shopping bag"
    },
    fredViewMoreLang: function () {
        return LastSeenProductV1.fredViewMoreAvailLang.hasOwnProperty(LastSeenProductV1.fredGetLang) ? LastSeenProductV1.fredViewMoreAvailLang[LastSeenProductV1.fredGetLang] : "";
    },
    fredAddRecentlyViewdProducts: [

    ],
    fredAddRecentlyViewdProductsInsertion: function () {
        if (localStorage.getItem("recentProducts")) {
            var recentProductsAfterParse = JSON.parse(localStorage.getItem("recentProducts"));
            if (recentProductsAfterParse.length > 5) {
                recentProductsAfterParse.pop();
            }
            var existingProduct = recentProductsAfterParse.find((element) => element.productLink == window.location.href);
            if (existingProduct) {
                recentProductsAfterParse.splice(recentProductsAfterParse.indexOf(existingProduct),1);
                recentProductsAfterParse.unshift({
                    name: document.querySelector(".product-name .product-title") && document.querySelector(".product-name .product-title").innerText,
                    description: document.querySelector(".product-name .product-subtitle").innerText,
                    productLink: window.location.href,
                    productImage: document.querySelector("picture img").src,
                    productPrice: document.querySelector(".price span") ? document.querySelector(".price span").innerText : document.querySelector(".price").innerText
                })
                localStorage.setItem('recentProducts',JSON.stringify(recentProductsAfterParse))
            } else {
                recentProductsAfterParse.unshift({
                    name: document.querySelector(".product-name .product-title") && document.querySelector(".product-name .product-title").innerText,
                    description: document.querySelector(".product-name .product-subtitle") && document.querySelector(".product-name .product-subtitle").innerText,
                    productLink: window.location.href,
                    productImage: document.querySelector("picture img").src,
                    productPrice: document.querySelector(".price span") ? document.querySelector(".price span").innerText : document.querySelector(".price") ? document.querySelector(".price").innerText : ""
                })
                localStorage.setItem('recentProducts',JSON.stringify(recentProductsAfterParse))
            }

        } else {
            LastSeenProductV1.fredAddRecentlyViewdProducts.unshift({
                name: document.querySelector(".product-name .product-title").innerText,
                description: document.querySelector(".product-name .product-subtitle").innerText,
                productLink: window.location.href,
                productImage: document.querySelector("picture img").src,
                productPrice: document.querySelector(".price span") ? document.querySelector(".price span").innerText : document.querySelector(".price") ? document.querySelector(".price").innerText : ""
            });
            localStorage.setItem('recentProducts',JSON.stringify(LastSeenProductV1.fredAddRecentlyViewdProducts))
        }
    },
    fredAddRecentlyViewedDesktopProd: function () {
        var products = JSON.parse(localStorage.getItem("recentProducts"));
        if (products && products.length > 0) {
            var recentlyViewedSectionWrapper = document.createElement("DIV");
            recentlyViewedSectionWrapper.classList.add("lastProductSeenWrapper");
            var recentlyViewdProductsWrapper = document.createElement("DIV");
            recentlyViewdProductsWrapper.classList.add("lastViewdProductWrapper");
            recentlyViewedSectionWrapper.appendChild(recentlyViewdProductsWrapper);

            if (document.querySelector(".homepage--top .category-gallery__container")) {
                document.querySelector(".homepage--top .category-gallery__container").prepend(recentlyViewedSectionWrapper);
            }
            else {
                (function pollTheBlock() {
                    if (document.querySelector(".animated-assets.container.tpl-1.null.aaplax-container")) {
                        document.querySelector(".animated-assets.container.tpl-1.null.aaplax-container").after(recentlyViewedSectionWrapper)
                    }
                    else {
                        setTimeout(pollTheBlock,25)
                    }
                })()
            }



            var productsWrapper = "";
            productsWrapper = products.slice(0,1).map((element) =>
                `
                    <div class="productImageWrapper">
                        <img src="${element.productImage}">
                    </div>
                    <div class="productDetails">
                        <div class="productName">${element.name}</div>
                        <div class="productDesc">${element.description}</div>
                        <div class="productImageWrapperMobile">
                            <img src="${element.productImage}">
                        </div>
                        <div class="productPrice">${element.productPrice}</div>
                        <div class="productLinkWrapper"><a href="${element.productLink}" class="productLink">${LastSeenProductV1.fredViewMoreLang()}</a></div>
                    </div>
                
            `
            ).join("");
            recentlyViewdProductsWrapper.innerHTML = productsWrapper;
        }

    },
    isInViewport: function (elem) {
        var bounding = elem.getBoundingClientRect();
        if (bounding) {
            return (
                bounding.top >= 0 &&
                bounding.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - 80)
            );
        }
    },
    mainJS: function () {
        //For JS
        if (document.querySelector(".product-detail.product-wrapper")) {
            LastSeenProductV1.fredAddRecentlyViewdProductsInsertion();
        }
        LastSeenProductV1.fredAddRecentlyViewedDesktopProd();
        var gaEventTriggered = false;
        window.addEventListener("scroll",function () {

            if (document.querySelector(".recentlyViewedSectionWrapper") && fredAddRecentlyViewed.isInViewport(document.querySelector(".recentlyViewedSectionWrapper")) && !gaEventTriggered) {
                ga('create','UA-48001756-12','auto');
                ga('send','event','AB Tasty','LastProductSeen','Scrolled');
                gaEventTriggered = true;
            }
            // else if (document.querySelector(".recentlyViewedProductsMoblieWrapper") && fredAddRecentlyViewed.isInViewport(document.querySelector(".recentlyViewedProductsMoblieWrapper")) && !gaEventTriggered) {
            //     ga('send', 'event', 'Abtasty', 'ProductsRecentlyViewed', 'Scrolled');
            //     gaEventTriggered = true;
            //     console.log("fired mobile")
            // }
        })
        document.querySelectorAll(".productLink").forEach(function (item) {
            item.addEventListener("click",function () {
                ga('create','UA-48001756-12','auto');
                ga('send','event','AB Tasty','LastProductSeen','clicked');
            })
        })
    },
};

(function pollForLastSeenProductV1() {
    if (window.jQuery !== undefined) {
        try {
            LastSeenProductV1.init();
            console.log("Last Seen Product v1");
        }
        catch (e) {
            console.log(e);
        }
    } else {
        setTimeout(pollForLastSeenProductV1,25);
    }
})();