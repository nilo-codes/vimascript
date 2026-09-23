
const productsArray = [
    {id: 1,title: "چراغ جلو چپ مدرن مدل MD-28663 مناسب برای دنا پلاس", price: 790_000, src: "../../images/file.1736764235.15130.webp", color: ["bg-blue-300", "bg-white"], previous_price: 890_000, discount: 11, star: 4, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 240, sales: 54, slug: "p1"},
    {id: 2,title: "سمپاش کنزاکس مدل KPS-102 حجم 2 لیتر", price: 1_420_000, src: "../../images/file.1736801171.44215.webp", color: ["bg-gray-200", "bg-yellow-400", "bg-gray-600"], previous_price: "", discount: "", star: 4, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 258, sales: 28, slug: "p2"},
    {id: 3,title: "لامپ هدلایت خودرو مدل S2 پایه H1 بسته دو عددی", price: 1_600_000, src: "../../images/file.1736782031.16645.webp", color: ["bg-purple-400", "bg-white"], previous_price: 1_690_000, discount: 5, star: 5, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 202, sales: 71, slug: "p3"},
    {id: 4,title: "کمپرسور هوا کنزاکس مدل KAC-13 مدل چندکاره اتوماتیک", price: 2_550_000, src: "../../images/file.1736801623.63624.webp", color: ["bg-yellow-700", "bg-white"], previous_price: 2_690_000, discount: 5, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 260, sales: 154, slug: "p4"},
    {id: 5,title: "لامپ خودرو سام مدل 144 بسته دو عددی تکمیل شده", price: 100_000, src: "../../images/file.1736783807.85162.webp", color: ["bg-blue-300", "bg-white"], previous_price: 110_000, discount: 9, star: 4, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 210, sales: 98, slug: "p5"},
    {id: 6,title: "روغن موتور خودرو الف مدل EVOLUTION STI700 10W40 SN حجم 5 لیتر",price: 570_000, src: "../../images/file.1736710941.51585.webp", color: ["bg-gray-500", "bg-blue-950"], previous_price: 700_000, discount: 19, star: 5, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 220, sales: 243, slug: "p6"},
    {id: 7,title: "هدلایت لامپ خودرو D9 مدل H4 بسته 2 عددی", price: 1_750_000 , src: "../../images/file.1736781067.44454.webp", color: ["bg-amber-500", "bg-amber-300"], previous_price: 1_800_000, discount: 3, star: 3, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 300, sales: 127, slug: "p7"},
    {id: 8,title: "چراغ عقب چپ جمع ساز مدل JT123B مناسب برای سمند",price: 360_000, src: "../../images/file.1736714148.51039.webp", color: ["bg-red-700", "bg-white"], previous_price: 460_000, discount: 22, star: 3, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 280, sales: 410, slug: "p8"},
    {id: 9,title: "آچار بکس شارژی کنزاکس مدل 8800 مدل همه کاره", price: 3_350_000, src: "../../images/file.1736802129.55888.webp", color: ["bg-amber-500", "bg-white"], previous_price: 3_350_000, discount: 4, star: 4.5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 325, sales: 109, slug: "p9"},
    {id: 10,title: "هدلایت لامپ خودرو اسمارت مدل M10 PRO پایه H7 بسته دو عددی", price: "استعلام موجودی", src: "../images/file.1736783333.49271.webp", color: ["bg-gray-700"], previous_price: "", discount: "", star: 4, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 200, sales: 85, slug: "p10"},
    {id: 11,title: "کمپرسور هوا فندکی کنزاکس مدل 5417", price: 3_250_000, src: "../../images/file.1736704448.36439.webp", color: ["g-yellow-400", "bg-black"], previous_price: "", discount: "", star: 4.6, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 310, sales: 69, slug: "p11"},
    {id: 12,title: "چراغ جلو راست گروه پژوهش صنعت مدرن کد 44 مناسب برای پژو پارس", price: 600_000, src: "../../images/file.1736765649.19155.webp", color: ["bg-blue-900", "bg-white"], previous_price: "", discount: "", star: 5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 350, sales: 291, slug: "p12"},
    {id: 13,title: "پمپ هیدرولیک فرمان دیناپارت کد 103011 مناسب برای پژو 405 و سمند", price: 380_000, src: "../../images/file.1736850732.24344.webp", color: ["bg-black", "bg-white"], previous_price: 450_000, discount: 16, star: 4, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 200, sales: 338, slug: "p13"},
    {id: 14,title: "چراغ عقب چپ فن آوران پرتو الوند مدل salimpl مناسب برای پژو پارس ELX", price: 400_000, src: "../../images/file.1736764562.85996.webp", color: ["bg-gray-600", "bg-red-700"], previous_price: 420_000, discount: 5, star: 5, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 400, sales: 172, slug: "p14"},
    {id: 15,title: "چراغ خطر راست خودرو کروز پلاس کد CR506306 مناسب برای شاهین", price: 900_000, src: "../../images/file.1736763503.21517.webp", color: ["bg-red-300", "bg-gray-300"], previous_price: "", discount: "", star: 4, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 430, sales: 108, slug: "p15"},
    {id: 16,title: "دریل کنزاکس مدل KED-150", price: 6_300_000, src: "../../images/file.1736800627.32736.webp", color: ["bg-amber-500", "bg-amber-300"], previous_price: 6_900_000, discount: 9, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 372, sales: 21, slug: "p16"},
    {id: 17,title: "چراغ جلو چپ اس ان تی کد AM 5964 مناسب برای ساینا", price: 400_000, src: "../../images/file.1736764333.52817.webp", color: ["bg-gray-300"], previous_price: 450_000, discount: 11, star: 4, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 412, sales: 72, slug: "p17"},
    {id: 18,title: "موتور برق کنزاکس مدل KPG-13000", price: "استعلام موجودی", src: "../../images/file.1736800861.20102.webp", color: ["bg-amber-300"], previous_price: "", discount: "", star: 5, type: "mechanical parts", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 470, sales: 289, slug: "p18"},
    {id: 19,title: "بلبرینگ چرخ جلو حامد مدل 198 مناسب برای 405 , Pars", price: 115_000, src: "../../images/file.1736850024.72548.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: 140_000, discount: 18, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 408, sales: 300, slug: "p19"},
    {id: 20,title: "چراغ خطر عقب چپ گروه پژوهش صنعت مدرن کد L1 مناسب برای دنا", price: 700_000, src: "../../images/file.1736763925.55473.webp", color: ["bg-red-500", "bg-black"], previous_price: 760_000, discount: 5, star: 5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 510, sales: 193, slug: "p20"},
    {id: 21,title: "روغن موتور خودرو موتوسل مدل Kangaroo Plus SM 10W40 حجم 5 لیتر", price: 1_000_000, src: "../../images/file.1736711221.80403.webp", color: ["bg-yellow-500", "bg-white"], previous_price: "", discount: "", star: 4, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 604, sales: 95, slug: "p21"},
    {id: 22,title: "روغن موتور مدل پاور پلاس سوپر 10w40 SJ حجم 4 لیتر", price: 1_180_000, src: "../../images/file.1736708594.81208.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: 1_360_000, discount: 13, star: 5, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 386, sales: 359, slug: "p22"},
    {id: 23,title: "روغن موتور لیکمولی مدل 10W40 SN حجم 4 لیتر", price: 1_000_000, src: "../../images/file.1736710364.28748.webp", color: ["bg-blue-500", "bg-white"], previous_price: 1_250_000, discount: 20, star: 4, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 273, sales: 180, slug: "p23"},
    {id: 24,title: "روغن موتور پتروناس مدل 800 SyntiumEU کد 885869 حجم 4 لیتر", price: 950_000, src: "../../images/file.1736713100.43916.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: "", discount: "", star: 5, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 319, sales: 80, slug: "p24"},
    {id: 25,title: "روغن موتور با کیفیت موتوسل مدل 10W40 SM حجم 4 لیتر", price: 750_000, src: "../../images/file.1736710054.23797.webp", color: ["bg-black", "bg-gray-300"], previous_price: 800_000, discount: 6, star: 4, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 327, sales: 94, slug: "p25"},
    {id: 26,title: "لامپ هدلایت خودرو کانپکس مدل M8 H7 بسته 2 عددی", price: 1_100_000, src: "../../images/file.1736781288.52956.webp", color: ["bg-pink-700/50", "bg-white"], previous_price: 1_200_000, discount: 8, star: 4.5, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 286, sales: 510, slug: "p26"},
    {id: 27,title: "روغن موتور موتوسل مدل 10W40 SL حجم 3.5 لیتر", price: "استعلام موجودی", src: "../imgs/img-product/file.1736711454.45904.webp", color: [], previous_price: "", discount: "", star: 5, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 54, sales: 328, slug: "p27"},
    {id: 28,title: "روغن موتور خودرو زادو مدل 20W50-SM-16000 EXTERA POWER حجم 5 لیتر", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736710666.43273.webp", color: [], previous_price: "", discount: "", star: 4, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 91, sales: 244, slug: "p28"},
    {id: 29,title: "هدلایت لامپ خودرو روشا مدل TP1 پایه H3 بسته دو عددی", price: 1_400_000, src: "../../imgs/img-product/file.1736782692.52155.webp", color: ["bg-cyan-600/60", "bg-white"], previous_price: "", discount: "", star: 4, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 180, sales: 43, slug: "p29"},
    {id: 30,title: "چراغ عقب مدل G4133400 مناسب برای خودروهای لیفان", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736765386.82005.webp", color: [], previous_price: "", discount: "", star: 4.5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 573, sales: 205, slug: "p30"},
    {id: 31,title: "کمپرسور هوا گالف مدل 5420 با تنوع ابزار های مورد نیاز", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736800164.56400.webp", color: [], previous_price: "", discount: "", star: 5, type: "mechanical parts", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 247, sales: 80, slug: "p31"},
    {id: 32,title: "لامپ چراغ کوچک خودرو سام اسپرت مدل 24 SMD BELU بسته 2 عددی", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736781554.41936.webp", color: [], previous_price: "", discount: "", star: 5, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 341, sales: 188, slug: "p32"},
]



const $ = document

const menuIcon = $.querySelector(".icon-bar")
const menu = $.querySelector(".items-bar")
const theme = $.querySelector(".theme")
const htmlElem = $.querySelector("html")

const toPersianNumber = number => {
    return String(number).replace(/\d/g, digit =>
        "۰۱۲۳۴۵۶۷۸۹"[digit]
    )
}

// show nav bar in mobile
let openOrCloseMenu = false
const showBar = () => {
    if (openOrCloseMenu){
        menuIcon.classList.add("close-hamburger-menu")
        menuIcon.classList.remove("open-hamburger-menu")
        menu.classList.add("hidden")
        openOrCloseMenu = false
    } else {
        menuIcon.classList.add("open-hamburger-menu")
        menuIcon.classList.remove("close-hamburger-menu")
        menu.classList.remove("hidden")
        openOrCloseMenu = true
    }
}
$.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target) && openOrCloseMenu) {
        menuIcon.classList.remove("open-hamburger-menu")
        menuIcon.classList.add("close-hamburger-menu")
        menu.classList.add("hidden")
    } 
})

// theme
const themeSymbol = $.querySelector(".theme i")

const changeTheme = () => {
    htmlElem.classList.toggle("dark");
    themeSymbol.classList.toggle("ri-moon-line")
    themeSymbol.classList.toggle("ri-sun-line")
    
    const theme = htmlElem.classList.contains("dark") ? "dark" : "light";

    localStorage.setItem("theme", theme);
};


const closedUserPanel = $.querySelector(".closed-user-panel")
const userPanel = $.querySelector(".user-panel")
const ordersContainer = $.querySelector(".orders-container")
const favoriteContainer = $.querySelector(".favorite-container")

closedUserPanel.addEventListener("click", () => {
    userPanel.classList.toggle("opacity-0")
    userPanel.classList.toggle("invisible")
    userPanel.classList.toggle("-translate-y-2")
})




// List of recent orders
let ordersArray = [
    {id: 3,title: "لامپ هدلایت خودرو مدل S2 پایه H1 بسته دو عددی", price: 1_600_000, src: "../../images/file.1736782031.16645.webp", color: ["bg-purple-400", "bg-white"], previous_price: 1_690_000, discount: 5, star: 5, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 202, sales: 71, slug: "p3"},
    {id: 20,title: "چراغ خطر عقب چپ گروه پژوهش صنعت مدرن کد L1 مناسب برای دنا", price: 700_000, src: "../../images/file.1736763925.55473.webp", color: ["bg-red-500", "bg-black"], previous_price: 760_000, discount: 5, star: 5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 510, sales: 193, slug: "p20"},
    {id: 19,title: "بلبرینگ چرخ جلو حامد مدل 198 مناسب برای 405 , Pars", price: 115_000, src: "../../images/file.1736850024.72548.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: 140_000, discount: 18, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 408, sales: 300, slug: "p19"},
    {id: 6,title: "روغن موتور خودرو الف مدل EVOLUTION STI700 10W40 SN حجم 5 لیتر",price: 570_000, src: "../../images/file.1736710941.51585.webp", color: ["bg-gray-500", "bg-blue-950"], previous_price: 700_000, discount: 19, star: 5, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 220, sales: 243, slug: "p6"},
    {id: 9,title: "آچار بکس شارژی کنزاکس مدل 8800 مدل همه کاره", price: 3_350_000, src: "../../images/file.1736802129.55888.webp", color: ["bg-amber-500", "bg-white"], previous_price: 3_350_000, discount: 4, star: 4.5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 325, sales: 109, slug: "p9"},
];
const showOrders = () => {
    if (ordersArray.length === 0) {
        ordersContainer.insertAdjacentHTML("beforeend",
            `<p class="text-[12px] text-gray-400">موردی یافت نشد</p>`
        )
    } else {
        ordersArray.slice(-3).reverse().forEach((item, index) => {
            ordersContainer.insertAdjacentHTML("beforeend", 
                `
                <div data-slug="${item.slug}" class="min-h-[130px] w-full p-3 ${index !== 2 ? "border-b-[1px] border-gray-200 dark:border-[#353542]" : ""}">
                
                    <div class="products-slide relative group/changeColor cursor-pointer w-full flex flex-col justify-between">
                                            
                        <div class="products-slide-top flex items-center gap-1 min-w-0">
                            <img src="${item.src}" alt="" class="size-[70px] shrink-0">
        
                            <h3 class="title text-[13px] w-[60%] leading-6 dark:text-white line-clamp-2 text-start overflow-hidden group-hover/changeColor:text-blue-400 transition-colors duration-300">
                                <a href="#">
                                    ${item.title}
                                </a>
                            </h3>
                        </div>
        
                        <div class="products-slide-bottom display-flex justify-between w-full">
                                                
                            <div class="colors display-flex gap-0.5 w-[65px] h-[15px]">
                                ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
    
                            </div>
                                
                            <div class="price-info display-flex">
                                <div class="star display-flex border-gray pl-1">
                                    <span class="text-[13px] dark:text-white">${toPersianNumber(item.star)}</span>
                                    <i class="ri-star-fill text-amber-400 pb-1 text-[13px]"></i>
                                </div>
                                
                                <div class="price display-flex gap-1 pr-2 dark:text-white">
                                    <p>${toPersianNumber(item.price.toLocaleString())}</p>
                                    <img src="../../images/toman-D-K3lGL1.svg" alt="" class="size-4">
                                </div>
                            </div>
        
                        </div>
                        <button class="remove-order absolute bg-[#d4e1ed] dark:bg-[#353542] left-0 size-6 rounded-full cursor-pointer">
                            <i class="ri-close-line text-[#94a2af]"></i>
                        </button>
                    </div>
                </div>
                `
            )
        })

    }
    
    // removeOrderHandler($.querySelectorAll(".remove-order"))
}

// برای حذف محصول وقتی وارد localstorage شد
// const removeOrderHandler = (e) => {
//     e.forEach(btn => {
//         const product = btn.parentElement.parentElement.dataset.slug
//         btn.addEventListener("click", () => {
//             const findProduct = ordersArray.find(item => {
//                 return item.slug === product
//             })
//             const productIndex = ordersArray.indexOf(findProduct)

//             ordersArray.splice(productIndex, 1)
//         })
//     })
// }



// Recent Favorites
let favoriteProducts = [
    {id: 31,title: "کمپرسور هوا گالف مدل 5420 با تنوع ابزار های مورد نیاز", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736800164.56400.webp", color: [], previous_price: "", discount: "", star: 5, type: "mechanical parts", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 247, sales: 80, slug: "p31"},
    {id: 11,title: "کمپرسور هوا فندکی کنزاکس مدل 5417", price: 3_250_000, src: "../../images/file.1736704448.36439.webp", color: ["g-yellow-400", "bg-black"], previous_price: "", discount: "", star: 4.6, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 310, sales: 69, slug: "p11"},
    {id: 30,title: "چراغ عقب مدل G4133400 مناسب برای خودروهای لیفان", price: "استعلام موجودی", src: "../../imgs/img-product/file.1736765386.82005.webp", color: [], previous_price: "", discount: "", star: 4.5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 573, sales: 205, slug: "p30"},
    {id: 3,title: "لامپ هدلایت خودرو مدل S2 پایه H1 بسته دو عددی", price: 1_600_000, src: "../../images/file.1736782031.16645.webp", color: ["bg-purple-400", "bg-white"], previous_price: 1_690_000, discount: 5, star: 5, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 202, sales: 71, slug: "p3"},
]
const showFavorites = () => {
    favoriteContainer.innerHTML = ""
    if (favoriteProducts.length === 0) {
        favoriteContainer.insertAdjacentHTML("beforeend",
            `<p class="text-[12px] text-gray-400">موردی یافت نشد</p>`
        )
    } else {
        favoriteProducts.slice(-3).reverse().forEach((item, index) => {
            favoriteContainer.insertAdjacentHTML("beforeend", 
                `
                <div class="min-h-[130px] w-full p-3 ${index !== 2 ? "border-b-[1px] border-gray-200 dark:border-[#353542]" : ""}">
            
                    <div class="products-slide relative group/changeColor cursor-pointer w-full flex flex-col justify-between">
                                        
                        <div class="products-slide-top flex items-center gap-1 min-w-0">
                            <img src="${item.src}" alt="" class="size-[70px] shrink-0">
    
                            <h3 class="title text-[13px] w-[60%] leading-6 dark:text-white line-clamp-2 text-start overflow-hidden group-hover/changeColor:text-blue-400 transition-colors duration-300">
                                <a href="#">
                                    ${item.title}
                                </a>
                            </h3>
                        </div>
    
                        <div class="products-slide-bottom display-flex justify-between w-full">
                                            
                            <div class="colors display-flex gap-0.5 w-[65px] h-[15px]">
                                ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
                            </div>
                            
                            <div class="price-info display-flex">
                                <div class="star display-flex border-gray pl-1">
                                    <span class="text-[13px] dark:text-white">${toPersianNumber(item.star)}</span>
                                    <i class="ri-star-fill text-amber-400 pb-1 text-[13px]"></i>
                                </div>
                            
                                <div class="price display-flex pr-2 dark:text-white">
                                    <p class="${typeof item.price === "number" ? "text-[16px]" : "text-[14px]"} font-bold">${toPersianNumber(item.price.toLocaleString())}</p>
                                    <img src="../../images/toman-D-K3lGL1.svg" alt="" class="size-4 ${typeof item.price === "number" ? "" : "hidden"}">
                                </div>
                            </div>
    
                        </div>
                        <button class="absolute bg-[#d4e1ed] dark:bg-[#353542] left-0 size-6 rounded-full cursor-pointer">
                            <i class="ri-close-line text-[#94a2af]"></i>
                        </button>
                    </div>
                </div>
                
                `
            )
        })
    }
}



// shopping cart
const cartHandler = () => {
    const mainCart = $.querySelector(".main-cart")
    const quantityItems = $.querySelector(".quantity-items")
    const priceContainer = $.querySelector(".price-container")
    const numberOfProducts = $.querySelector(".number-of-products")
    const { cartItems } = getDataFromLocalStorage()
    

    let finalPrice = 0
    cartItems.forEach(item => {
        const calculate = item.price * item.quantity
        finalPrice += calculate
    })

    numberOfProducts.innerHTML = ""
    numberOfProducts.innerHTML = toPersianNumber(cartItems.length)

    // تعداد کل محصولات
    quantityItems.innerHTML = ""
    quantityItems.innerHTML = toPersianNumber(cartItems.length)

    // قیمت نهایی
    priceContainer.innerHTML = ""
    priceContainer.innerHTML = toPersianNumber(finalPrice.toLocaleString())

    mainCart.innerHTML = ""
    cartItems.forEach((item) => {
        mainCart.insertAdjacentHTML("beforeend",
            `
            <div class="display-flex gap-2 py-5 border-b-2 border-b-gray-100 dark:border-[#414150]">
                <img src="../${item.src}" alt="" class="w-[50px] bg-gray-100 dark:bg-[#414150] rounded-lg">
                <div class="flex flex-col gap-3">
                    <div class="text-gray-950 display-flex dark:text-white">
                        <span class="block w-[200px] truncate">${item.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" data-slug="${item.slug}" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="remove-product-btn size-3.5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
    
                    </div>
                    <div class="text-gray-900 display-flex justify-between">
                        <div class="text-gray-400">
                            تعداد:
                            <span>${toPersianNumber(item.quantity)}</span>
                        </div>
                        <div class="display-flex gap-1 font-bold">
                            <span class="dark:text-white">${toPersianNumber(item.price.toLocaleString())}</span>
                            <img src="../../images/toman-D-K3lGL1.svg" alt="" class="size-4">
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
    if (cartItems.length > 3) {
    mainCart.classList.add("overflow-y-auto", "max-h-[280px]")
} else {
    mainCart.classList.remove("overflow-y-auto", "max-h-[280px]")
}

    if (cartItems.length === 0) {
        mainCart.insertAdjacentHTML("beforeend",
            `
            <div class="text-gray-900 bg-gray-50 p-5 rounded-xl m-3">
               <span>سبد خرید شما خالی میباشد :(</span>
            </div>
            `
        )
    } else {
        
    }
    removeProduct()

}
const removeProduct = () => {
    const { cartItems } = getDataFromLocalStorage()
    const removeProductBtn = $.querySelectorAll(".remove-product-btn")
    removeProductBtn.forEach(item => {
        item.addEventListener("click", () => {
            const newCartItems = cartItems.filter(pro => {
                return pro.slug !== item.dataset.slug
            })
    
            localStorage.setItem("cartItems", JSON.stringify(newCartItems))
            cartHandler()
        })
    })
    
}



const getDataFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        htmlElem.classList.add("dark");
    } else {
        htmlElem.classList.remove("dark");
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    return {
        theme,
        cartItems
    }
    
};
getDataFromLocalStorage()

menuIcon.addEventListener("click", showBar)
theme.addEventListener("click", changeTheme)
window.addEventListener("load", showOrders)
window.addEventListener("load", showFavorites)
window.addEventListener("load", cartHandler)