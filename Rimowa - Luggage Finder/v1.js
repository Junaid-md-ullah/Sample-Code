const Modal__Begin__Title = "Realise your diagnosis and find the suitcase suited to your needs. Realise your diagnosis and find the suitcase suited to your needs.";
const Modal__Begin__Title__Mobile = "Realize the diagnosis to find your ideal suitcase.";
const Modal__Begin__Cta = "start nowabcdfg jdbdb";

const Finder__Modal__Title = "Find your ideal luggage";

const Question__01 = "Which size are you looking for?";
const Answer__01__01 = "Small";
const Answer__01__01__Note = "Trips up to 4 days";
const Answer__01__01__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__01__02 = "Medium";
const Answer__01__02__Note = "Trips up to a week";
const Answer__01__02__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__01__03 = "Large";
const Answer__01__03__Note = " I always bring extras, just in case";
const Answer__01__03__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";

const Question__02 = "The greatest quality of travel companion must be: ";
const Answer__02__01 = "Its robustness";
const Answer__02__01__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__02__02 = "Its lightness";
const Answer__02__02__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__02__03 = "Its design";
const Answer__02__03__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";

const Question__03 = "How do you prefer to pack?";
const Answer__03__01 = "I only bring the minimun";
const Answer__03__01__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__03__02 = "One outfit a day";
const Answer__03__02__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";
const Answer__03__03 = "I always bring extra";
const Answer__03__03__Image = "/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw9b587abe/images/mozaic_vertical/W52_2023_EXPLORE_PLP_BEST_SELLERS.jpg";

const Strategy__ID = 211404;

const Result__Title = "Our recommendations";
const Reassurance__Item__01 = "Lifetime Guarantee";
const Reassurance__Item__02 = "Worldwide Repairs";
const Reassurance__Item__03 = "Free delivery <br/> and return";
const Reassurance__Item__04 = "Design in germany";
const Start__Over = "Start over";
const Product__Label = "Limited Edition";
/* DO NOT IMPORT ANYTHING */

const $steps = [{
    title: `${Question__01}`,answers: [{
        id: "1",
        value: `${Answer__01__01}`,
        image: `${Answer__01__01__Image}`,
        note: `${Answer__01__01__Note}`
    },{
        id: "2",
        value: `${Answer__01__02}`,
        image: `${Answer__01__02__Image}`,
        note: `${Answer__01__02__Note}`
    },{
        id: "4",
        value: `${Answer__01__03}`,
        image: `${Answer__01__03__Image}`,
        note: `${Answer__01__03__Note}`
    }]
},{
    title: `${Question__02}`,answers: [{
        id: "1",
        value: `${Answer__02__01}`,
        image: `${Answer__02__01__Image}`
    },{
        id: "2",
        value: `${Answer__02__02}`,
        image: `${Answer__02__02__Image}`
    },{
        id: "4",
        value: `${Answer__02__03}`,
        image: `${Answer__02__03__Image}`
    }]
},{
    title: `${Question__03}`,answers: [{
        id: "1",
        value: `${Answer__03__01}`,
        image: `${Answer__03__01__Image}`
    },{
        id: "2",
        value: `${Answer__03__02}`,
        image: `${Answer__03__02__Image}`
    },{
        id: "4",
        value: `${Answer__03__03}`,
        image: `${Answer__03__03__Image}`
    }]
}];
const $reassurances = [{
    title: `${Reassurance__Item__01}`,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_3262_253)"><mask id="mask0_3262_253" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><path d="M32 0H0V32H32V0Z" fill="white"/></mask><g mask="url(#mask0_3262_253)"><path d="M30.1495 11.5321C32.6162 13.999 32.6162 18.0022 30.1495 20.4692L20.4696 30.1504C18.003 32.6174 14.0003 32.6174 11.5336 30.1504L1.85098 20.4718C-0.61569 18.0049 -0.61569 14.0017 1.85098 11.5347L11.531 1.85084C13.9976 -0.616132 18.0003 -0.616132 20.467 1.85084L30.1469 11.5321H30.1495ZM29.7335 11.8921L20.1096 2.26689C17.875 0.034616 14.2776 -5.50785e-05 12.0003 2.16021L11.891 2.26689L2.26698 11.8921C0.0349762 14.127 0.000309753 17.7248 2.16031 20.0024L2.26698 20.1118L11.891 29.737C14.123 31.9693 17.723 32.0066 20.0003 29.8437L20.1096 29.737L29.7335 20.1118C31.9655 17.8795 32.0029 14.2791 29.8402 12.0014L29.7335 11.8921Z" fill="#0D0900"/><path d="M21.2855 11.3467C19.7229 11.3467 18.4589 12.0293 17.3042 13.4933C17.2109 13.6133 17.2322 13.784 17.3495 13.8773C17.4002 13.9173 17.4589 13.936 17.5202 13.936C17.6002 13.936 17.6802 13.9013 17.7362 13.832C18.7922 12.4907 19.8882 11.8933 21.2882 11.8933C23.5522 11.8933 25.3949 13.736 25.3949 16C25.3949 18.264 23.5522 20.1067 21.2882 20.1067C18.7415 20.1067 17.5255 18.0453 16.2402 15.8613C14.9335 13.64 13.5789 11.344 10.7149 11.344C8.14952 11.344 6.06152 13.432 6.06152 15.9973C6.06152 18.5627 8.14952 20.6507 10.7149 20.6507C12.2722 20.6507 13.5335 19.9733 14.6855 18.52C14.7789 18.4 14.7602 18.2293 14.6402 18.136C14.5229 18.0427 14.3495 18.0613 14.2562 18.1813C13.2029 19.512 12.1095 20.104 10.7149 20.104C8.45086 20.104 6.60819 18.2613 6.60819 15.9973C6.60819 13.7333 8.45086 11.8907 10.7149 11.8907C10.8882 11.8907 11.0589 11.9013 11.2242 11.9227C13.4322 12.1813 14.5709 14.1067 15.7682 16.1387C17.0749 18.3573 18.4269 20.6533 21.2882 20.6533C23.8535 20.6533 25.9415 18.5653 25.9415 16C25.9415 13.4347 23.8535 11.3467 21.2882 11.3467H21.2855Z" fill="#0D0900"/></g></g><defs><clipPath id="clip0_3262_253"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
},{
    title: `${Reassurance__Item__02}`,
    icon: '<svg style="opacity:0.75" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M30.8772 12.2949L20.208 1.625C19.708 1.10416 19.1195 0.703126 18.4424 0.421875C17.7653 0.140624 17.0622 0 16.333 0C15.6038 0 14.9007 0.140624 14.2236 0.421875C13.6218 0.671876 13.0899 1.01652 12.628 1.45582L1.95801 12.125C1.43717 12.625 1.03613 13.2135 0.754883 13.8906C0.473631 14.5677 0.333008 15.2708 0.333008 16C0.333008 16.7292 0.473631 17.4323 0.754883 18.1094C1.00488 18.7112 1.34953 19.2431 1.78883 19.7051L12.458 30.375C12.958 30.8958 13.5465 31.2969 14.2236 31.5781C14.9007 31.8594 15.6038 32 16.333 32C17.0622 32 17.7653 31.8594 18.4424 31.5781C19.0442 31.3281 19.5761 30.9835 20.0381 30.5442L30.708 19.875C31.2288 19.375 31.6299 18.7865 31.9111 18.1094C32.1924 17.4323 32.333 16.7292 32.333 16C32.333 15.2708 32.1924 14.5677 31.9111 13.8906C31.6611 13.2888 31.3165 12.7569 30.8772 12.2949ZM30.3643 19.5312L19.8643 30.0312C18.8851 31.0104 17.708 31.5 16.333 31.5C14.958 31.5 13.7809 31.0104 12.8018 30.0312L2.30176 19.5312C1.32259 18.5521 0.833008 17.375 0.833008 16C0.833008 14.625 1.32259 13.4479 2.30176 12.4688L12.8018 1.96875C13.7809 0.989578 14.958 0.5 16.333 0.5C17.708 0.5 18.8851 0.989578 19.8643 1.96875L30.3643 12.4688C31.3434 13.4479 31.833 14.625 31.833 16C31.833 17.375 31.3434 18.5521 30.3643 19.5312Z" fill="#0D0900"/><path d="M16 14.9397V24.5461M14.5 5.55785C14.5 5.50709 14.5027 5.45696 14.5079 5.40761C12.4753 6.04939 11 7.96781 11 10.2347C11 12.2086 12.1187 13.9184 13.75 14.751V26.6667H18.25V14.751C19.8813 13.9184 21 12.2086 21 10.2347C21 7.87227 19.3977 5.88831 17.2322 5.33333C17.2439 5.40642 17.25 5.48142 17.25 5.55785V9.60266C17.25 10.3706 16.6344 10.9931 15.875 10.9931C15.1156 10.9931 14.5 10.3706 14.5 9.60266V5.55785Z" stroke="#0D0900" stroke-width="0.7" stroke-linecap="round"/><path d="M30.8772 12.2949L20.208 1.625C19.708 1.10416 19.1195 0.703126 18.4424 0.421875C17.7653 0.140624 17.0622 0 16.333 0C15.6038 0 14.9007 0.140624 14.2236 0.421875C13.6218 0.671876 13.0899 1.01652 12.628 1.45582L1.95801 12.125C1.43717 12.625 1.03613 13.2135 0.754883 13.8906C0.473631 14.5677 0.333008 15.2708 0.333008 16C0.333008 16.7292 0.473631 17.4323 0.754883 18.1094C1.00488 18.7112 1.34953 19.2431 1.78883 19.7051L12.458 30.375C12.958 30.8958 13.5465 31.2969 14.2236 31.5781C14.9007 31.8594 15.6038 32 16.333 32C17.0622 32 17.7653 31.8594 18.4424 31.5781C19.0442 31.3281 19.5761 30.9835 20.0381 30.5442L30.708 19.875C31.2288 19.375 31.6299 18.7865 31.9111 18.1094C32.1924 17.4323 32.333 16.7292 32.333 16C32.333 15.2708 32.1924 14.5677 31.9111 13.8906C31.6611 13.2888 31.3165 12.7569 30.8772 12.2949ZM30.3643 19.5312L19.8643 30.0312C18.8851 31.0104 17.708 31.5 16.333 31.5C14.958 31.5 13.7809 31.0104 12.8018 30.0312L2.30176 19.5312C1.32259 18.5521 0.833008 17.375 0.833008 16C0.833008 14.625 1.32259 13.4479 2.30176 12.4688L12.8018 1.96875C13.7809 0.989578 14.958 0.5 16.333 0.5C17.708 0.5 18.8851 0.989578 19.8643 1.96875L30.3643 12.4688C31.3434 13.4479 31.833 14.625 31.833 16C31.833 17.375 31.3434 18.5521 30.3643 19.5312Z" fill="#0D0900"/><path d="M16 14.9397V24.5461M14.5 5.55785C14.5 5.50709 14.5027 5.45696 14.5079 5.40761C12.4753 6.04939 11 7.96781 11 10.2347C11 12.2086 12.1187 13.9184 13.75 14.751V26.6667H18.25V14.751C19.8813 13.9184 21 12.2086 21 10.2347C21 7.87227 19.3977 5.88831 17.2322 5.33333C17.2439 5.40642 17.25 5.48142 17.25 5.55785V9.60266C17.25 10.3706 16.6344 10.9931 15.875 10.9931C15.1156 10.9931 14.5 10.3706 14.5 9.60266V5.55785Z" stroke="#0D0900" stroke-width="0.7" stroke-linecap="round"/></svg>',
},{
    title: `${Reassurance__Item__03}`,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1492 20.4682C32.6169 18.0005 32.6169 13.9995 30.1492 11.5318L20.4682 1.85078C18.0005 -0.616926 13.9995 -0.616926 11.5318 1.85078L1.85078 11.5318C-0.616927 13.9995 -0.616926 18.0005 1.85078 20.4682L11.5318 30.1492C13.9995 32.6169 18.0005 32.6169 20.4682 30.1492L30.1492 20.4682ZM20.1331 2.18589L29.8141 11.8669L29.9211 11.9767C32.0962 14.2667 32.0605 17.8867 29.8141 20.1331L20.1331 29.8141L20.0233 29.9211C17.7333 32.0962 14.1133 32.0605 11.8669 29.8141L2.18589 20.1331L2.07892 20.0233C-0.0961597 17.7333 -0.0605018 14.1133 2.18589 11.8669L11.8669 2.18589L11.9767 2.07892C14.2667 -0.0961602 17.8867 -0.060503 20.1331 2.18589Z" fill="#0D0900"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6287 11.366L18.7099 11.3661L18.8141 11.3695C19.2631 11.3983 19.6808 11.6123 19.9634 11.961L20.028 12.0464L21.9107 14.7065L21.9186 14.7103L22.4708 15.53L22.5327 15.6297C22.6489 15.833 22.7184 16.0595 22.7358 16.293L22.7403 16.4139L22.74 19.2794L20.6717 19.28L20.6544 19.3641L20.633 19.4548C20.4489 20.1416 19.816 20.6339 19.0805 20.6339C18.313 20.6339 17.6572 20.0979 17.5065 19.3641L17.4892 19.28H14.5107L14.4935 19.3641L14.472 19.4548C14.288 20.1416 13.655 20.6339 12.9195 20.6339C12.152 20.6339 11.4962 20.0979 11.3455 19.3641L11.3283 19.28L10.6287 19.2794V18.8134L11.3283 18.813L11.3456 18.7289L11.367 18.6383C11.5512 17.9516 12.1841 17.4594 12.9195 17.4594C13.6869 17.4594 14.3426 17.9953 14.4934 18.7289L14.5107 18.813H17.4893L17.5066 18.7289L17.528 18.6383C17.7122 17.9516 18.3451 17.4594 19.0805 17.4594C19.8479 17.4594 20.5036 17.9953 20.6544 18.7289L20.6717 18.813L22.2663 18.8135V16.41L22.2623 16.3156C22.2489 16.159 22.2024 16.0067 22.1255 15.8686L22.0783 15.7916L21.7228 15.2641L21.6355 15.2177H18.3959L18.3163 15.2143C17.8703 15.1765 17.512 14.8241 17.4772 14.3786L17.4743 14.3034L17.4744 11.8325L10.6287 11.8325V11.366ZM19.1688 17.9292L19.0845 17.9259L18.9997 17.9286C18.4123 17.9696 17.9483 18.4543 17.9483 19.0467C17.9483 19.666 18.4555 20.1675 19.0805 20.1675L19.1681 20.1642C19.6893 20.1245 20.1188 19.7338 20.1992 19.2195L20.1845 19.1872L20.1885 19.1827L20.2099 19.1228L20.2126 19.0505L20.2095 18.9669C20.1688 18.4147 19.7278 17.9719 19.1688 17.9292ZM12.9195 17.9258C13.5445 17.9258 14.0516 18.4274 14.0516 19.0467C14.0516 19.666 13.5445 20.1675 12.9195 20.1675C12.2945 20.1675 11.7874 19.666 11.7874 19.0467C11.7874 18.4274 12.2945 17.9258 12.9195 17.9258ZM9.2596 15.428H13.1563V15.8945H9.2596V15.428ZM17.9483 11.8321L18.7145 11.8326L18.8099 11.8369C19.1119 11.8634 19.3898 12.0087 19.5821 12.2387L19.6371 12.3102L21.3645 14.751L18.3883 14.751L18.3301 14.7465C18.1302 14.7172 17.976 14.5584 17.9517 14.3619L17.9483 14.3075V11.8321ZM9.94415 13.397H13.8408V13.8635H9.94415V13.397Z" fill="#0D0900"/></svg>',
},{
    title: `${Reassurance__Item__04}`,
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C17.4517 32 18.7041 31.5159 19.7572 30.5478L19.9063 30.4063L30.4063 19.9063C31.4688 18.8229 32 17.5208 32 16C32 14.5483 31.5159 13.2959 30.5478 12.2428L30.4063 12.0938L19.9063 1.59375C19.3854 1.09375 18.7865 0.703125 18.1094 0.421875C17.4323 0.140625 16.7292 0 16 0C15.2708 0 14.5677 0.140625 13.8906 0.421875C13.2135 0.703125 12.6146 1.09375 12.0938 1.59375L1.59375 12.0938C0.53125 13.1771 0 14.4792 0 16C0 17.4517 0.484052 18.7041 1.45216 19.7572L1.59375 19.9063L12.0938 30.4063C13.1771 31.4688 14.4792 32 16 32ZM16.0312 31.4688C14.6563 31.4688 13.4792 30.9792 12.5 30L2 19.5C1 18.5417 0.5 17.3698 0.5 15.9844C0.5 14.599 0.979167 13.4167 1.9375 12.4375L12.4375 1.9375C12.9167 1.47917 13.4635 1.125 14.0781 0.875C14.6927 0.625 15.3333 0.5 16 0.5C16.6667 0.5 17.3073 0.625 17.9219 0.875C18.5365 1.125 19.0833 1.47917 19.5625 1.9375L30.0625 12.4375C31.0208 13.4167 31.5 14.5938 31.5 15.9688C31.5 17.3438 31.0208 18.5208 30.0625 19.5L19.5625 30C18.5833 30.9792 17.4062 31.4688 16.0312 31.4688ZM20.2188 26.1406C20.1979 26.1927 20.1563 26.2292 20.0938 26.25H20C19.9861 26.25 19.9676 26.2454 19.9444 26.2361L19.9063 26.2188C19.8646 26.1979 19.8333 26.1875 19.8125 26.1875L16 22.3438L12.1875 26.1563C12.1667 26.1771 12.1302 26.1979 12.0781 26.2188C12.026 26.2396 11.9792 26.2292 11.9375 26.1875C11.8958 26.1667 11.8646 26.1354 11.8438 26.0938C11.8229 26.0521 11.8125 26 11.8125 25.9375V21C11.8125 20.9167 11.8333 20.8542 11.875 20.8125C11.9167 20.7708 11.9792 20.75 12.0625 20.75C12.125 20.75 12.1823 20.7708 12.2344 20.8125C12.2865 20.8542 12.3125 20.9167 12.3125 21V25.4063L15.8438 21.8438C15.9063 21.8021 15.9688 21.7813 16.0312 21.7813C16.0938 21.7813 16.1458 21.8021 16.1875 21.8438L19.75 25.4063L19.7495 17.0037L19.6919 17.0469C19.3056 17.3281 18.8875 17.5625 18.4375 17.75C17.6667 18.0833 16.8542 18.25 16 18.25C15.1458 18.25 14.3333 18.0833 13.5625 17.75C12.8125 17.4375 12.151 16.9948 11.5781 16.4219C11.0052 15.849 10.5625 15.1875 10.25 14.4375C9.91667 13.6667 9.75 12.8542 9.75 12C9.75 11.1458 9.91667 10.3333 10.25 9.5625C10.5625 8.8125 11.0052 8.15104 11.5781 7.57813C12.151 7.00521 12.8125 6.5625 13.5625 6.25C14.3333 5.91667 15.1458 5.75 16 5.75C16.8542 5.75 17.6667 5.91667 18.4375 6.25C19.1875 6.5625 19.849 7.00521 20.4219 7.57813C20.9948 8.15104 21.4375 8.8125 21.75 9.5625C22.0833 10.3333 22.25 11.1458 22.25 12C22.25 12.8542 22.0833 13.6667 21.75 14.4375L21.6523 14.6598C21.3477 15.3189 20.9375 15.9063 20.4219 16.4219L20.2498 16.5871L20.25 26C20.25 26.0417 20.2396 26.0885 20.2188 26.1406ZM16 17.75C14.4167 17.75 13.0625 17.1875 11.9375 16.0625C10.8125 14.9375 10.25 13.5833 10.25 12C10.25 10.4167 10.8125 9.0625 11.9375 7.9375C13.0625 6.8125 14.4167 6.25 16 6.25C17.5833 6.25 18.9375 6.8125 20.0625 7.9375C21.1875 9.0625 21.75 10.4167 21.75 12C21.75 13.5833 21.1875 14.9375 20.0625 16.0625L19.9231 16.1969L19.91 16.2C19.8833 16.2083 19.86 16.2208 19.84 16.2375L19.8125 16.2656C19.8021 16.2786 19.793 16.292 19.7852 16.3057L19.7705 16.3372L19.7638 16.3432C18.7509 17.2364 17.5647 17.7043 16.2052 17.7468L16 17.75ZM15.0938 14.1875C15.1146 14.2292 15.1094 14.25 15.0781 14.25H14.9063C14.8646 14.25 14.8333 14.2292 14.8125 14.1875L12.8125 12.1875C12.75 12.1458 12.7188 12.0938 12.7188 12.0313C12.7188 11.9688 12.75 11.9063 12.8125 11.8438C12.8542 11.8021 12.9063 11.7813 12.9688 11.7813C13.0313 11.7813 13.0938 11.8021 13.1563 11.8438L14.9375 13.6563L18.75 9.84375C18.7917 9.80208 18.849 9.78125 18.9219 9.78125C18.9948 9.78125 19.0521 9.80208 19.0938 9.84375C19.1563 9.90625 19.1875 9.96875 19.1875 10.0313C19.1875 10.0938 19.1563 10.1458 19.0938 10.1875L15.0938 14.1875Z" fill="#0D0900"/></svg>',
}];
const SKUS = {
    111: "92540004, 92540014, 92551004, 92551014, 92552004, 92552044, 97352004",
    112: "92553004, 92553044, 92553014, 92553964, 92590042, 92590060, 92590040, 97353004, 97353014, 88353631, 88353661, 88353791",
    114: "92553004, 92553044, 92553014, 92553964, 92590042, 92590060, 92590040, 97353004, 97353014, 88353631, 88353661, 88353791, 92556004, 92556044, 92556014",
    121: "83252661, 83252681, 83252631, 82352621, 82352684, 82350621, 82350704, 84252631, 84240631, 84240831",
    122: "83253741, 83253661, 83253621, 83253831, 83253681, 83253721, 83253631, 83253691, 82353704, 82353684, 82353621, 84253631, 84253831",
    124: "83253741, 83253661, 83253621, 83253831, 83253681, 83253721, 83253631, 83253691, 82353704, 82353684, 82353621, 84253631, 84253831, 84256631",
    141: "92540004, 92540014, 92551004, 92551014, 92552004, 92552044, 97352004",
    142: "92553004, 92553014, 92553044, 92553964, 92590042, 92590060, 92590040, 97353004, 97353014, 80153484, 80153474",
    144: "92553004, 92553014, 92553044, 92553964, 92590042, 92590060, 92590040, 97353004, 97353014, 92556004, 92556044, 92556014, 80153484, 80153474",
    211: "92563004, 92563044, 92563014, 97363004, 88363631, 88363661",
    212: "92563004, 92563044, 92563014, 97363004, 88363631, 88363661, 92565004",
    214: "92565004, 92575004, 92575014, 97375014, 97375004",
    221: "83263661, 83263831, 83263681, 83263631",
    222: "83263661, 83263831, 83263681, 83263631, 83275631, 83275681",
    224: "83263661, 83263831, 83263681, 83263631, 83275631, 83275681",
    241: "92563004, 92563044, 92563014, 97363004",
    242: "92563004, 92563044, 92563014, 97363004, 92565004",
    244: "92575004, 92575014, 97375014, 97375004",
    411: "92573014, 92573004, 92573044, 92573964, 97373014, 97373004, 88373631, 88373661, 88373791",
    412: "92573014, 92573004, 92573044, 92573964, 97373014, 97373004, 88373631, 88373661, 88373791",
    414: "92580004, 92580044, 92580014, 92585004",
    421: "83273631, 83273691, 83273741, 83273621, 83273831, 83273681, 83273721, 82373621, 82373684, 82373704",
    422: "83273631, 83273691, 83273741, 83273621, 83273831, 83273681, 83273721, 82373621, 82373684, 82373704",
    424: "83280741, 83280661, 83280621, 83280831, 83280681, 83280721, 83280631, 83280691",
    441: "92573014, 92573004, 92573044, 92573964, 97373014, 97373004, 88373631, 88373661, 88373791",
    442: "92573014, 92573004, 92573044, 92573964, 97373014, 97373004, 88373631, 88373661, 88373791",
    444: "92580004, 92580044, 92580014, 92585004"
}
Object.keys(SKUS).forEach((key) => {
    SKUS[key] = SKUS[key].split(', ');
});
const luggageFinder = {
    init: function () {
        if (document.querySelector(".lf-notif-modal, .lf-modal")) return false;
        luggageFinder.mainCss();
        luggageFinder.mainJs();
        console.log('luggageFinder | v8.0');
    },
    mainCss: function () {
        var styles = document.createElement("style");
        styles.setAttribute("type","text/css");
        document.head.appendChild(styles).textContent =
            "" +
            /* CSS will be imported here */
            "";
    },
    mainJs: function () {
        const notificationModal = document.createElement('div');
        notificationModal.classList.add('lf-notif-modal');
        notificationModal.innerHTML =
            `<p class="lf-notif-modal--content">${Modal__Begin__Title}</p>
            <p class="lf-notif-modal--content">${Modal__Begin__Title__Mobile}</p>
            <button class="lf-notif-modal--cta">${Modal__Begin__Cta}</button>
            <button class="lf-notif-modal--close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 16L16 8M16 16L8 8" stroke="#0D0900" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
        notificationModal.querySelector('.lf-notif-modal--cta').addEventListener('click',luggageFinder.initFinder.bind(null,notificationModal));
        notificationModal.querySelector('.lf-notif-modal--close').addEventListener('click',() => {
            notificationModal.remove();
        });
        document.body.appendChild(notificationModal);
    },
    initFinder: function (notificationModal) {
        notificationModal.remove();
        const finderModal = document.createElement('div');
        finderModal.classList.add('lf-modal');
        finderModal.innerHTML =
            `<div class="lf-modal-container" data-active="1">` +
            $steps.map((step) => {
                return `<div class="lf-modal-content">
                            <h3 class="lf-modal-content__question">`+ step.title + `</h3>
                            <div class="lf-modal-content__answers">`+
                    step.answers.map((answer) => {
                        return `<button class="lf-modal-content__answer" data-id="` + answer.id + `">
                                    <img src="`+ answer.image + `" alt="` + answer.value + `">
                                    <p>`+ answer.value + `</p>
                                    <p>`+ (answer.note || '&nbsp;') + `</p>
                                </button>`
                    }).join("") + `
                            </div>
                        </div>`
            }).join('') + `</div>` +
            `<div class="lf-modal-header">
                <h2 class="lf-modal-header__title">${Finder__Modal__Title}</h2>
                <button class="lf-modal-header__close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M8 16.5L16 8.5M16 16.5L8 8.5" stroke="#0D0900" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button class="lf-modal-header__back"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.38016 3.95337L2.3335 8.00004L6.38016 12.0467M13.6668 8.00004H2.44683" stroke="#0D0900" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button class="lf-modal-header__next"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><path d="M10.12 12.0467L14.1666 8.00004L10.12 3.95337M2.83329 8.00004L14.0533 8.00004" stroke="#0D0900" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <div class="lf-modal-header__stepper">
                    <div class="lf-modal-header__stepper--item"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03606 4.87868C7.52135 4.3934 7.52135 3.6066 7.03606 3.12132L5.2787 1.36396C4.79342 0.87868 4.00663 0.87868 3.52134 1.36396L1.76399 3.12132C1.2787 3.6066 1.2787 4.3934 1.76399 4.87868L3.52134 6.63604C4.00663 7.12132 4.79342 7.12132 5.2787 6.63604L7.03606 4.87868Z" stroke="#6f6f6f"/></svg></div>
                    <div class="lf-modal-header__stepper--item"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03606 4.87868C7.52135 4.3934 7.52135 3.6066 7.03606 3.12132L5.2787 1.36396C4.79342 0.87868 4.00663 0.87868 3.52134 1.36396L1.76399 3.12132C1.2787 3.6066 1.2787 4.3934 1.76399 4.87868L3.52134 6.63604C4.00663 7.12132 4.79342 7.12132 5.2787 6.63604L7.03606 4.87868Z" stroke="#6f6f6f"/></svg></div>
                    <div class="lf-modal-header__stepper--item"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03606 4.87868C7.52135 4.3934 7.52135 3.6066 7.03606 3.12132L5.2787 1.36396C4.79342 0.87868 4.00663 0.87868 3.52134 1.36396L1.76399 3.12132C1.2787 3.6066 1.2787 4.3934 1.76399 4.87868L3.52134 6.63604C4.00663 7.12132 4.79342 7.12132 5.2787 6.63604L7.03606 4.87868Z" stroke="#6f6f6f"/></svg></div>
                    <div class="lf-modal-header__stepper--item"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.03606 4.87868C7.52135 4.3934 7.52135 3.6066 7.03606 3.12132L5.2787 1.36396C4.79342 0.87868 4.00663 0.87868 3.52134 1.36396L1.76399 3.12132C1.2787 3.6066 1.2787 4.3934 1.76399 4.87868L3.52134 6.63604C4.00663 7.12132 4.79342 7.12132 5.2787 6.63604L7.03606 4.87868Z" stroke="#6f6f6f"/></svg></div>  
                </div>
            </div>`;
        finderModal.querySelectorAll(".lf-modal-content__answer").forEach((answer) => {
            answer.addEventListener("click",async ({ currentTarget }) => {
                currentTarget.classList.add("lf-active");
                const container = finderModal.querySelector(".lf-modal-container");
                const currentStep = parseInt(container.getAttribute("data-active"));
                const currentStepElm = container.children[currentStep - 1];
                const otherAnswers = currentStepElm.querySelectorAll(".lf-modal-content__answer:not(.lf-active)");
                otherAnswers.forEach((answer) => answer.classList.add("lf-disabled"));
                container.setAttribute("data-step-" + currentStep,currentTarget.getAttribute("data-id"));
                let result = false;
                if (currentStep === $steps.length) result = await luggageFinder.renderResult(finderModal);
                if (currentStep === $steps.length && !result) return false;
                setTimeout(() => {
                    container.setAttribute("data-active",currentStep + 1);
                    setTimeout(() => {
                        container.querySelectorAll(".lf-modal-content__answer")
                            .forEach(el => el.classList.remove("lf-active","lf-disabled"));
                    });
                },500);
            });
        });
        finderModal.querySelector(".lf-modal-header__back").addEventListener("click",() => {
            const container = finderModal.querySelector(".lf-modal-container");
            const currentStep = parseInt(container.getAttribute("data-active"));
            if (currentStep === 1) return false;
            container.setAttribute("data-active",currentStep - 1);
        });
        finderModal.querySelector(".lf-modal-header__next").addEventListener("click",() => {
            const container = finderModal.querySelector(".lf-modal-container");
            const currentStep = parseInt(container.getAttribute("data-active"));
            if (currentStep > $steps.length) return false;
            container.setAttribute("data-active",currentStep + 1);
        });
        finderModal.querySelector(".lf-modal-header__close").addEventListener("click",() => {
            finderModal.classList.remove('lf-modal--active');
            setTimeout(() => finderModal.remove(),500);
        });
        document.querySelector('body').appendChild(finderModal);
        setTimeout(() => finderModal.classList.add('lf-modal--active'),0);
    },
    getResults: function (finderModal) {
        return new Promise((resolve) => {
            const container = finderModal.querySelector(".lf-modal-container");
            const result = "".concat(container.dataset["step-1"],container.dataset["step-2"],container.dataset["step-3"]);
            const skus = SKUS[result];
            const url = window.Urls.cartCheckout.replace(/Cart-CheckoutCart/i,"Product-GetRecoProductSkusDY") +
                "?context=detail&skus=" + window.encodeURIComponent(JSON.stringify(skus));
            const xhr = new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.onload = function () {
                if (xhr.status !== 200) return resolve([]);
                const productsDom = (new DOMParser()).parseFromString(xhr.response,'text/html');
                const products = [...productsDom.querySelectorAll(".product-tile[data-itemid]")].map(tile => {
                    const url = tile.querySelector("a").getAttribute("href");
                    const sku = tile.getAttribute("data-itemid");
                    const image_url = tile.querySelector("img.thumb-link__img").getAttribute("src");
                    const name = tile.querySelector(".product-name").textContent.trim();
                    const display_price = tile.querySelector(".price .sales").textContent.trim();
                    const colors = tile.querySelector(".swatch-list") && tile.querySelector(".swatch-list");
                    return { url,sku,image_url,name,display_price,colors };
                });
                return resolve(products);
            }
            xhr.onerror = resolve.bind(null,[]);
            xhr.send();
        });
    },
    renderResult: function (finderModal) {
        return new Promise(resolve => {
            luggageFinder.getResults(finderModal).then((products) => {
                if (!products.length) {
                    resolve(false);
                    return alert("No products found");
                }
                finderModal.querySelectorAll(".lf-result").forEach(elm => elm.remove());
                products = products.sort(() => Math.random() - 0.5);
                products = products.slice(0,3);
                const resultElm = document.createElement('div');
                resultElm.classList.add("lf-result");
                resultElm.classList.add("lf-modal-content");
                resultElm.innerHTML =
                    `<h1 class="lf-result__title">${Result__Title}</h1>
                    <div class="lf-result__products">`+
                    products.map(p => {
                        return `<a href="` + p.url + `" class="lf-result__products--item" data-pid="` + p.sku + `">
                                    <img class="lf-result__products--item__image" src="`+ p.image_url + `" alt="` + p.name + `" />
                                    <div class="lf-result__products--item__name">`+ (p.collection + " " + p.name) + `</div>
                                    <div class="lf-result__products--item__price">`+ p.display_price + `</div>
                                    <div class="lf-result__products--item__colors"></div>
                                    <div class="lf-result__products--item__label">${Product__Label}</div>
                                </a>`
                    }).join("") +
                    `</div>
                    <div class="lf-result__reassurances">`+
                    $reassurances.map(r => {
                        return `<div class="lf-result__reassurances--item">
                                    <div class="lf-result__reassurances--item__icon">`+ r.icon + `</div>
                                    <div class="lf-result__reassurances--item__text">`+ r.title + `</div>
                                </div>`
                    }).join("") +
                    `</div>
                    <div class="lf-result__action">
                        <button class="lf-result__action--start-over">${Start__Over}</button>
                    </div>`;
                // Color swatch fix
                products.forEach(p => {
                    if (!p.colors) return;
                    resultElm.querySelector('[data-pid="' + p.sku + '"] .lf-result__products--item__colors').appendChild(p.colors);
                });
                resultElm.querySelector('.lf-result__action--start-over').addEventListener('click',() => {
                    const container = finderModal.querySelector(".lf-modal-container");
                    container.style.setProperty("--transition-time","0.15s");
                    setTimeout(() => container.setAttribute("data-active",3),0);
                    setTimeout(() => container.setAttribute("data-active",2),150);
                    setTimeout(() => container.setAttribute("data-active",1),300);
                    container.removeAttribute("data-step-1");
                    container.removeAttribute("data-step-2");
                    container.removeAttribute("data-step-3");
                    setTimeout(() => {
                        resultElm.remove();
                        container.style.removeProperty("--transition-time");
                    },600);
                });
                finderModal.querySelector(".lf-modal-container").appendChild(resultElm);
                setTimeout(() => {
                    [...resultElm.querySelectorAll(".lf-result__products--item__name")].some(el => el.offsetHeight > 40) &&
                        resultElm.closest(".lf-modal-container").style.setProperty("--result-height",'616px');
                },1000);
                return resolve(true);
            },resolve.bind(null,false));
        });
    },
};
DYO.waitForElement('body',luggageFinder.init);
window.luggageFinder = luggageFinder;
