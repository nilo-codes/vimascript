// story array
const circleMainStories = [
    [
        {id: 1, src: "./../images/file.1736941738.29238.webp", title: "چراغ دنا عقب حالت اسپورت"},
        {id: 1, src: "../images/file.1736941738.29238.webp", title: "چراغ دنا عقب حالت اسپورت", date: "2 سال پیش", infoTitle: "چراغ خطر عقب چپ گروه پژوهش صنعت مدرن کد L1",imgInfo: "../images/file.1736763925.55473.webp",like: 14, link: "چراغ خطر عقب دنا", price: 700_00, discount: 8, star: 5, color: ["bg-red-400", "bg-black"]}
    ],
    [
        {id: 2, src: "./../images/file.1736941657.66176.webp", title: "پژو 207 اسپورت"},
        {id: 2, src: "../images/file.1736941657.66176.webp", title: "پژو 207 اسپورت", date: "2 سال پیش", infoTitle: "روغن موتور خودرو زادو مدل EXTERAPOWER 16000-000",imgInfo: "../images/file.1736710666.43273.webp",like: 14, link: "روغن مناسب پژو 207", price: "استعلام موجودی", discount: "", star: 4, color: []}
    ],
    [
        {id: 3, src: "./../images/file.1736941338.11988.webp", title: "استارت خودرو ها"},
        {id: 3, src: "../videos/vimashop.mp4", title: "استارت خودرو ها", date: "2 سال پیش", infoTitle: "پمپ هیدرولیک فرمان دیناپارت کد 103011 مناسب ماشین",imgInfo: "../images/file.1736850732.24344.webp",like: 20, link: "", price: 380_000, discount: 16, star: 5, color: ["bg-white", "bg-black"]}
    ],
    [
        {id: 4, src: "./../images/file.1736941143.61678.webp", title: "لوازم یدکی ماشین ها"},
        {id: 4, src: "../images/file.1736941143.61678.webp", title: "لوازم یدکی ماشین ها", date: "2 سال پیش", infoTitle: "",imgInfo: "", like: 8, link: "لوازم یدکی ماشین های خارجی", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 5, src: "./../images/file.1736941036.72496.webp", title: "رولز رویس مظهر زیبایی"},
        {id: 5, src: "../videos/vimashap2.mp4", title: "رولز رویس مظهر زیبایی", date: "2 سال پیش", infoTitle: "",imgInfo: "", like: 13, link: "", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 6, src: "./../images/file.1736939356.69287.webp", title: "انبار ایساکو به زودی..."},
        {id: 6, src: "../images/file.1736939356.69287.webp", title: "انبار ایساکو به زودی...", date: "2 سال پیش", infoTitle: "",imgInfo: "", like: 7, link: "مشاهده محصولات برند ایساکو", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 7, src: "./../images/file.1736939152.92573.webp", title: "پژو اسپورت و قطعات کانپکس"},
        {id: 7, src: "../images/file.1736939152.92573.webp", title: "پژو اسپورت و قطعات کانپکس", date: "2 سال پیش", infoTitle: "لامپ هدلایت خودرو کانپکس مدل M8 H7 بسته 2 عدد",imgInfo: "../images/file.1736781288.52956.webp", like: 8, link: "خرید هدلایت پژو slx", price: 1_100_000, discount: "8", star: "4.5", color: ["bg-white", "bg-red-300"]}
        
    ],
    [
        {id: 8, src: "./../images/file.1736938959.57257.webp", title: "هیوندا فراتر از رویا"},
        {id: 8, src: "../videos/vimashop3.mp4", title: "هیوندا فراتر از رویا", date: "2 سال پیش", infoTitle: "",imgInfo: "", like: 11, link: "مقاله معرفی هیوندای", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 9, src: "./../images/file.1736938724.58426.webp", title: "آینه بغل های اسپورت"},
        {id: 9, src: "../images/file.1736938724.58426.webp", title: "آینه بغل های اسپورت", date: "2 سال پیش", infoTitle: "",imgInfo: "", like: 6, link: "", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 10, src: "./../images/file.1736938602.99187.webp", title: "معرفی سدان جدید بازار"},
        {id: 10, src: "../videos/vimashop4.mp4", title: "معرفی سدان جدید بازار", date: "2 سال پیش", infoTitle: "",imgInfo: "",like: 3, link: "بیشتر بخوانید", price: "", discount: "", star: "", color: []}
    ],
    [
        {id: 11, src: "./../images/file.1736938081.36617.webp", title: "چراغ دنا حالت اسپورت"},
        {id: 11, src: "../images/file.1736938081.36617.webp", title: "چراغ دنا حالت اسپورت", date: "2 سال پیش", infoTitle: "چراغ جلو چپ مدرن مدلMD-28669 مناسب برای دنا پلاس",imgInfo: "../images/file.1736764235.15130.webp", like: 4, link: "", price: 790_000, discount: "11", star: "4", color: ["bg-white", "bg-blue-600/50"]}
    ],
    [
        {id: 12, src: "./../images/file.1736937840.33755.webp", title: "رینک و لاستیک"},
        {id: 12, src: "../images/file.1736937959.56077.webp", title: "رینک و لاستیک", date: "2 سال پیش", infoTitle: "بلبرینگ چرخ جلو مدل 198 مناسب برای 405, Pars",imgInfo: "../images/file.1736850024.72548.webp", like: 1, link: "", price: 115_000, discount: "18", star: "5", color: ["bg-black/25", "bg-black/15"]}
    ],
    [
        {id: 13, src: "./../images/file.1736937526.66943.webp", title: "روغن موتور سپیدی"},
        {id: 13, src: "../images/file.1736937526.66943.webp", title: "روغن موتور سپیدی", date: "2 سال پیش", infoTitle: "روغن موتور مدل پاول 10w40SJ حجم 4لیتر",imgInfo: "../images/file.1736708594.81208.webp", like: 2, link: "روغن موتور های اسپیدی", price: 590_000, discount: "13", star: "5", color: ["bg-cyan-700", "bg-black/10"]}
    ],
    [
        {id: 14, src: "./../images/file.1736710054.23797.webp", title: "روغن موتور خودرو ها"},
        {id: 14, src: "../images/file.1736710054.23797.webp", title: "روغن موتور خودرو ها", date: "2 سال پیش", infoTitle: "روغن موتور با کیفیت موتوسل مدل 10W40SM حجم 12",imgInfo: "../images/file.1736710054.23797.webp", like: 4, link: "روغن موتور", price: 590_000, discount: "6", star: "4", color: ["bg-black", "bg-black/10"]}
    ],
]

// products array
const productsArray = [
    {id: 1,title: "چراغ جلو چپ مدرن مدل MD-28663 مناسب برای دنا پلاس", price: 790_000, src: "../images/file.1736764235.15130.webp", color: ["bg-blue-300", "bg-white"], previous_price: 890_000, discount: 11, star: 4, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 240, sales: 54, slug: "p1"},
    {id: 2,title: "سمپاش کنزاکس مدل KPS-102 حجم 2 لیتر", price: 1_420_000, src: "../images/file.1736801171.44215.webp", color: ["bg-gray-200", "bg-yellow-400", "bg-gray-600"], previous_price: "", discount: "", star: 4, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 258, sales: 28, slug: "p2"},
    {id: 3,title: "لامپ هدلایت خودرو مدل S2 پایه H1 بسته دو عددی", price: 1_600_000, src: "../images/file.1736782031.16645.webp", color: ["bg-purple-400", "bg-white"], previous_price: 1_690_000, discount: 5, star: 5, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 202, sales: 71, slug: "p3"},
    {id: 4,title: "کمپرسور هوا کنزاکس مدل KAC-13 مدل چندکاره اتوماتیک", price: 2_550_000, src: "../images/file.1736801623.63624.webp", color: ["bg-yellow-700", "bg-white"], previous_price: 2_690_000, discount: 5, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 260, sales: 154, slug: "p4"},
    {id: 5,title: "لامپ خودرو سام مدل 144 بسته دو عددی تکمیل شده", price: 100_000, src: "../images/file.1736783807.85162.webp", color: ["bg-blue-300", "bg-white"], previous_price: 110_000, discount: 9, star: 4, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 210, sales: 98, slug: "p5"},
    {id: 6,title: "روغن موتور خودرو الف مدل EVOLUTION STI700 10W40 SN حجم 5 لیتر",price: 570_000, src: "../images/file.1736710941.51585.webp", color: ["bg-gray-500", "bg-blue-950"], previous_price: 700_000, discount: 19, star: 5, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 220, sales: 243, slug: "p6"},
    {id: 7,title: "هدلایت لامپ خودرو D9 مدل H4 بسته 2 عددی", price: 1_750_000 , src: "../images/file.1736781067.44454.webp", color: ["bg-amber-500", "bg-amber-300"], previous_price: 1_800_000, discount: 3, star: 3, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 300, sales: 127, slug: "p7"},
    {id: 8,title: "چراغ عقب چپ جمع ساز مدل JT123B مناسب برای سمند",price: 360_000, src: "../images/file.1736714148.51039.webp", color: ["bg-red-700", "bg-white"], previous_price: 460_000, discount: 22, star: 3, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 280, sales: 410, slug: "p8"},
    {id: 9,title: "آچار بکس شارژی کنزاکس مدل 8800 مدل همه کاره", price: 3_350_000, src: "../images/file.1736802129.55888.webp", color: ["bg-amber-500", "bg-white"], previous_price: 3_350_000, discount: 4, star: 4.5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 325, sales: 109, slug: "p9"},
    {id: 10,title: "هدلایت لامپ خودرو اسمارت مدل M10 PRO پایه H7 بسته دو عددی", price: "استعلام موجودی", src: "../images/file.1736783333.49271.webp", color: ["bg-gray-700"], previous_price: "", discount: "", star: 4, type: "headlight", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 200, sales: 85, slug: "p10"},
    {id: 11,title: "کمپرسور هوا فندکی کنزاکس مدل 5417", price: 3_250_000, src: "../images/file.1736704448.36439.webp", color: ["g-yellow-400", "bg-black"], previous_price: "", discount: "", star: 4.6, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 310, sales: 69, slug: "p11"},
    {id: 12,title: "چراغ جلو راست گروه پژوهش صنعت مدرن کد 44 مناسب برای پژو پارس", price: 600_000, src: "../images/file.1736765649.19155.webp", color: ["bg-blue-900", "bg-white"], previous_price: "", discount: "", star: 5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 350, sales: 291, slug: "p12"},
    {id: 13,title: "پمپ هیدرولیک فرمان دیناپارت کد 103011 مناسب برای پژو 405 و سمند", price: 380_000, src: "../images/file.1736850732.24344.webp", color: ["bg-black", "bg-white"], previous_price: 450_000, discount: 16, star: 4, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 200, sales: 338, slug: "p13"},
    {id: 14,title: "چراغ عقب چپ فن آوران پرتو الوند مدل salimpl مناسب برای پژو پارس ELX", price: 400_000, src: "../images/file.1736764562.85996.webp", color: ["bg-gray-600", "bg-red-700"], previous_price: 420_000, discount: 5, star: 5, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 400, sales: 172, slug: "p14"},
    {id: 15,title: "چراغ خطر راست خودرو کروز پلاس کد CR506306 مناسب برای شاهین", price: 900_000, src: "../images/file.1736763503.21517.webp", color: ["bg-red-300", "bg-gray-300"], previous_price: "", discount: "", star: 4, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 430, sales: 108, slug: "p15"},
    {id: 16,title: "دریل کنزاکس مدل KED-150", price: 6_300_000, src: "../images/file.1736800627.32736.webp", color: ["bg-amber-500", "bg-amber-300"], previous_price: 6_900_000, discount: 9, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 372, sales: 21, slug: "p16"},
    {id: 17,title: "چراغ جلو چپ اس ان تی کد AM 5964 مناسب برای ساینا", price: 400_000, src: "../images/file.1736764333.52817.webp", color: ["bg-gray-300"], previous_price: 450_000, discount: 11, star: 4, type: "vehicle light", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 412, sales: 72, slug: "p17"},
    {id: 18,title: "موتور برق کنزاکس مدل KPG-13000", price: "استعلام موجودی", src: "../images/file.1736800861.20102.webp", color: ["bg-amber-300"], previous_price: "", discount: "", star: 5, type: "mechanical parts", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 470, sales: 289, slug: "p18"},
    {id: 19,title: "بلبرینگ چرخ جلو حامد مدل 198 مناسب برای 405 , Pars", price: 115_000, src: "../images/file.1736850024.72548.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: 140_000, discount: 18, star: 5, type: "mechanical parts", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 408, sales: 300, slug: "p19"},
    {id: 20,title: "چراغ خطر عقب چپ گروه پژوهش صنعت مدرن کد L1 مناسب برای دنا", price: 700_000, src: "../images/file.1736763925.55473.webp", color: ["bg-red-500", "bg-black"], previous_price: 760_000, discount: 5, star: 5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 510, sales: 193, slug: "p20"},
    {id: 21,title: "روغن موتور خودرو موتوسل مدل Kangaroo Plus SM 10W40 حجم 5 لیتر", price: 1_000_000, src: "../images/file.1736711221.80403.webp", color: ["bg-yellow-500", "bg-white"], previous_price: "", discount: "", star: 4, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: true, viewed: 604, sales: 95, slug: "p21"},
    {id: 22,title: "روغن موتور مدل پاور پلاس سوپر 10w40 SJ حجم 4 لیتر", price: 1_180_000, src: "../images/file.1736708594.81208.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: 1_360_000, discount: 13, star: 5, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 386, sales: 359, slug: "p22"},
    {id: 23,title: "روغن موتور لیکمولی مدل 10W40 SN حجم 4 لیتر", price: 1_000_000, src: "../images/file.1736710364.28748.webp", color: ["bg-blue-500", "bg-white"], previous_price: 1_250_000, discount: 20, star: 4, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 273, sales: 180, slug: "p23"},
    {id: 24,title: "روغن موتور پتروناس مدل 800 SyntiumEU کد 885869 حجم 4 لیتر", price: 950_000, src: "../images/file.1736713100.43916.webp", color: ["bg-gray-300", "bg-gray-600"], previous_price: "", discount: "", star: 5, type: "engine oil", discount_start_date: "2026-08-22T00:00:00", discount_end_date: "2099-12-31T23:59:59", isFeatured: false, viewed: 319, sales: 80, slug: "p24"},
    {id: 25,title: "روغن موتور با کیفیت موتوسل مدل 10W40 SM حجم 4 لیتر", price: 750_000, src: "../images/file.1736710054.23797.webp", color: ["bg-black", "bg-gray-300"], previous_price: 800_000, discount: 6, star: 4, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 327, sales: 94, slug: "p25"},
    {id: 26,title: "لامپ هدلایت خودرو کانپکس مدل M8 H7 بسته 2 عددی", price: 1_100_000, src: "../images/file.1736781288.52956.webp", color: ["bg-pink-700/50", "bg-white"], previous_price: 1_200_000, discount: 8, star: 4.5, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 286, sales: 510, slug: "p26"},
    {id: 27,title: "روغن موتور موتوسل مدل 10W40 SL حجم 3.5 لیتر", price: "استعلام موجودی", src: "../imgs/img-product/file.1736711454.45904.webp", color: [], previous_price: "", discount: "", star: 5, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 54, sales: 328, slug: "p27"},
    {id: 28,title: "روغن موتور خودرو زادو مدل 20W50-SM-16000 EXTERA POWER حجم 5 لیتر", price: "استعلام موجودی", src: "../imgs/img-product/file.1736710666.43273.webp", color: [], previous_price: "", discount: "", star: 4, type: "engine oil", discount_start_date: null, discount_end_date: null, isFeatured: false, viewed: 91, sales: 244, slug: "p28"},
    {id: 29,title: "هدلایت لامپ خودرو روشا مدل TP1 پایه H3 بسته دو عددی", price: 1_400_000, src: "../imgs/img-product/file.1736782692.52155.webp", color: ["bg-cyan-600/60", "bg-white"], previous_price: "", discount: "", star: 4, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 180, sales: 43, slug: "p29"},
    {id: 30,title: "چراغ عقب مدل G4133400 مناسب برای خودروهای لیفان", price: "استعلام موجودی", src: "../imgs/img-product/file.1736765386.82005.webp", color: [], previous_price: "", discount: "", star: 4.5, type: "vehicle light", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 573, sales: 205, slug: "p30"},
    {id: 31,title: "کمپرسور هوا گالف مدل 5420 با تنوع ابزار های مورد نیاز", price: "استعلام موجودی", src: "../imgs/img-product/file.1736800164.56400.webp", color: [], previous_price: "", discount: "", star: 5, type: "mechanical parts", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 247, sales: 80, slug: "p31"},
    {id: 32,title: "لامپ چراغ کوچک خودرو سام اسپرت مدل 24 SMD BELU بسته 2 عددی", price: "استعلام موجودی", src: "../imgs/img-product/file.1736781554.41936.webp", color: [], previous_price: "", discount: "", star: 5, type: "headlight", discount_start_date: null, discount_end_date: null, isFeatured: true, viewed: 341, sales: 188, slug: "p32"},
]

// brands
const brandsArray = [
    {id: 1, title: "ایساکو", src: "../imgs/img-brands/file.1736767619.39314.webp"},
    {id: 2, title: "پارس لنت", src: "../imgs/img-brands/file.1736779878.54799.webp"},
    {id: 3, title: "وی پارت", src: "../imgs/img-brands/file.1736780368.27117.webp"},
    {id: 4, title: "امیرنیا", src: "../imgs/img-brands/file.1736780009.79829.webp"},
    {id: 5, title: "سایپا", src: "../imgs/img-brands/file.1736777722.39255.webp"},
    {id: 6, title: "والئو", src: "../imgs/img-brands/file.1736778216.39126.webp"},
    {id: 7, title: "مادپارت", src: "../imgs/img-brands/file.1736779747.21865.webp"},
    {id: 8, title: "ساپکو", src: "../imgs/img-brands/file.1736780758.20040.webp"},
    {id: 9, title: "کنزاکس", src: "../imgs/img-brands/file.1736769677.14146.webp"},
    {id: 10, title: "بتاسرامد", src: "../imgs/img-brands/file.1736780189.48830.webp"},
    {id: 11, title: "اسپیدی", src: "../imgs/img-brands/file.1736778668.43658.webp"},
    {id: 12, title: "ایده پارت", src: "../imgs/img-brands/file.1736780507.74102.webp"},
]

// random articles
const articlesArray = [
    {id: 1, title: "بهترین هدلایت برای پژو پارس و پژو 405 چیست؟", src: "../imgs/img-articles/file.1736867341.98478.webp", author: "مهرآفرین", profile_src: "../imgs/img-articles/article-profile/store-logo.png", date: "25 دی 1403", type: "لوازم اسپورت"},
    {id: 2, title: "تاریخچه سیستم صوتی در خودروسازی", src: "../imgs/img-articles/file.1736868491.56388.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "5 مرداد 1405", type: "سیستم صوتی"},
    {id: 3, title: "بررسی عوارض استارت زدن ماشین روشن", src: "../imgs/img-articles/file.1736865549.83950.webp", author: "محسن جباری", profile_src: "../imgs/img-articles/article-profile/file.1736681841.91977.jpg", date: "2 خرداد 1404", type: "تعمیرات"},
    {id: 4, title: "معرفی خودرو اشکودا اکتاویا؛ سدان اروپایی جذاب و تازه‌وارد بازار", src: "../imgs/img-articles/file.1736870066.83672.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "14 تیر 1405", type: "تعمیرات"},
    {id: 5, title: "بررسی تخصصی علت زنگ زدن شمع ماشین", src: "../imgs/img-articles/file.1736864633.97003.webp", author: "قطعه پلاس", profile_src: "../imgs/img-articles/article-profile/store-logo.png", date: "12 اسفند 1405", type: "جلوبندی"},
    {id: 6, title: "در صورت پاره شدن تسمه دینام چکار کنیم + خطرات پاره شدن تسمه دینام", src: "../imgs/img-articles/file.1736864339.41312.webp", author: "محسن جباری", profile_src: "../imgs/img-articles/article-profile/file.1736681841.91977.jpg", date: "25 شهریور 1402", type: "تعمیرات"},
    {id: 7, title: "در صورت پاره شدن تسمه دینام چکار کنیم + خطرات پاره شدن تسمه دینام", src: "../imgs/img-articles/file.1736866063.65293.webp", author: "قطعه پلاس", profile_src: "../imgs/img-articles/article-profile/store-logo.png", date: "5 مهر 1405", type: "عیب یابی"},
    {id: 8, title: "واتر پمپ چیست؟ (هرآنچه باید درباره آن بدانید)", src: "../imgs/img-articles/file.1736863837.46593.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "19 آذر 1405", type: "فنی"},
    {id: 9, title: "علائم خرابی کمک فنر + زمان مناسب برای تعویض آنها", src: "../imgs/img-articles/file.1736862535.82765.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "10 بهمن 1404", type: "اخبار خودرو"},
    {id: 10, title: "همه چیز درباره کاتاف زدن ماشین", src: "../imgs/img-articles/file.1736865080.36408.webp", author: "مهرآفرین", profile_src: "../imgs/img-articles/article-profile/store-logo.png", date: "11 ابان 1405", type: "تیونینگ"},
    {id: 11, title: "همه چیز درباره تاب داشتن سرسیلندر، از علائم تا خطرات", src: "../imgs/img-articles/file.1736865665.34094.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "1 اردیبهشت 1405", type: "تعمیرات"},
    {id: 12, title: "بهترین برندهای لنت ترمز پژو پارس کدام است؟", src: "../imgs/img-articles/file.1736863569.35553.webp", author: "توحید زمانی", profile_src: "../imgs/img-articles/article-profile/file.1736631787.69467.webp", date: "13 مرداد 1405", type: "دانستنی ها"},
]


const toPersianNumber = number => {
    return String(number).replace(/\d/g, digit =>
        "۰۱۲۳۴۵۶۷۸۹"[digit]
    )
}
const circleStories = [...circleMainStories]

const $ = document

const menuIcon = $.querySelector(".icon-bar")
const menu = $.querySelector(".items-bar")
const theme = $.querySelector(".theme")
const html = $.querySelector("html")
const prevBtn = $.querySelector(".prev-btn")
const nextBtn = $.querySelector(".next-btn")
const containerStoriesCircle = $.querySelector(".section-stories")
const likeStory = $.querySelector(".like")
const countLikes = $.querySelector(".count")
const stories = $.querySelectorAll(".story")
const containerStoriesOpened = $.querySelector(".open-stories")
const nextStory = $.querySelector(".next-story")


// add story circle to DOM
circleStories.forEach((story, index) => {
    story = story[0]

    
    containerStoriesCircle.insertAdjacentHTML("beforeend", 
        `
        <div class="story stories-box" onclick='openStory(${story.id}, ${index})'>
            <img src="${story.src}" alt="" class="stories-style">
            <p class="stories-text">${(story.title.length) > 14 ? story.title.slice("").split("").slice(0, 12).join("") + " ..." : story.title}</p>
        </div>
        `
    )
})


// Drag-to-Scroll Carousel
let startXCircle = 0
let lastXCircle = 0
let isPointerDownCircle = false
let isDraggingCircle = false

containerStoriesCircle.addEventListener("pointerdown", (e) => {
    startXCircle = e.clientX
    lastXCircle = e.clientX
    isPointerDownCircle = true
    isDraggingCircle = false

    containerStoriesCircle.style.scrollBehavior = "auto"
})

containerStoriesCircle.addEventListener("pointermove", (e) => {
    if (!isPointerDownCircle) return

    const currentX = e.clientX
    const distance = currentX - lastXCircle

    if (Math.abs(currentX - startXCircle) > 5) {
        isDraggingCircle = true
    }

    if (isDraggingCircle) {
        containerStoriesCircle.scrollLeft -= distance
    }

    lastXCircle = currentX
})

containerStoriesCircle.addEventListener("pointerup", (e) => {
    if (!isPointerDownCircle) return

    isPointerDownCircle = false

    const distance = e.clientX - startXCircle

    containerStoriesCircle.style.scrollBehavior = "smooth"

    if (Math.abs(distance) < 70) return

    if (distance < 0) {
        containerStoriesCircle.scrollBy({
            left: 200,
            behavior: "smooth"
        })
    } else {
        containerStoriesCircle.scrollBy({
            left: -200,
            behavior: "smooth"
        })
    }
})

containerStoriesCircle.addEventListener("pointercancel", () => {
    isPointerDownCircle = false
    containerStoriesCircle.style.scrollBehavior = "smooth"
})



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
    html.classList.toggle("dark");
    themeSymbol.classList.toggle("ri-moon-line")
    themeSymbol.classList.toggle("ri-sun-line")
    
    const theme = html.classList.contains("dark") ? "dark" : "light";

    localStorage.setItem("theme", theme);
};

const userSymbol = $.querySelector(".user-symbol")
userSymbol.addEventListener("click",()=>{
    const userId=localStorage.getItem("userId")

    if(!userId){
        window.location.href="../login/index.html"
        return
    }

    const clickedButton=localStorage.getItem(`clickedButton_${userId}`)

    if(!clickedButton){
        localStorage.setItem(`clickedButton_${userId}`,"userSymbol")
    }

    window.location.href="../user/dashboard/index.html"
})



// scroll stories
const prevCircleStory = () => {
    containerStoriesCircle.scrollBy({
        left: 200,
        behavior: "smooth"
    })
}
const nextCircleStory = () => {
    containerStoriesCircle.scrollBy({
        left: -200,
        behavior: "smooth"
    })
}




// animation scroll stories
const checkScroll = () => {
    // end
    const isEnd =
        Math.abs(
            containerStoriesCircle.scrollWidth -
            containerStoriesCircle.clientWidth -
            Math.abs(containerStoriesCircle.scrollLeft)
        ) <= 1;

    // first
    const isStart = Math.abs(containerStoriesCircle.scrollLeft) <= 1;

     
    if (isEnd) {
        nextBtn.disabled = true;
        nextBtn.classList.add("opacity-50");
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove("opacity-50");
    }

    if (isStart) {
        prevBtn.disabled = true;
        prevBtn.classList.add("opacity-50");
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove("opacity-50");
    }
};

const smoothScroll = (element, distance, duration) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animate = (currentTime) => {
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const ease = 1 - Math.pow(1 - progress, 3);

        element.scrollLeft = start + distance * ease;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};




// next & prev circle story
nextBtn.addEventListener("click", () => {
    smoothScroll(containerStoriesCircle, -200, 1000);
});

prevBtn.addEventListener("click", () => {
    smoothScroll(containerStoriesCircle, 200, 1000);
});

containerStoriesCircle.addEventListener("scroll", checkScroll);
checkScroll();




//* stories
const storyImg = $.querySelector(".img-story");
const headStoryImg = $.querySelector(".head-story img");
const headStoryTitle = $.querySelector(".head-story p");
const storyDate = $.querySelector(".story-name span");
const storyDetails = $.querySelector(".story_details");
const linkStory = $.querySelector(".link");
const linkContainer = $.querySelector(".link-container");
const imgInfoBox = $.querySelector(".img-info");
const discount = $.querySelector(".discount");
const star = $.querySelector(".star");
const price = $.querySelector(".price");
const storyDetailsTitle = $.querySelector(".story_details-head-a");
const discountContainer = $.querySelector(".discount-container");
const priceUnitImg = $.querySelector(".price-container img");
const colorsContainer = $.querySelector(".colors-container");
const storyProgressBarContainer = $.querySelector(".story-progress-bar-container");

const prevBtnStory = $.querySelector(".prev-btn-story");
const nextBtnStory = $.querySelector(".next-btn-story");

const playBtnStory = $.querySelector(".play");
const pauseBtnStory = $.querySelector(".pause");
const closeBtnStory = $.querySelector(".close");


// open & close story
let isOpen = false
const openStory = (e, storyIndex = 0) => {
    empty()
    

    circleStories.forEach((story) => {
        storyProgressBarContainer.insertAdjacentHTML("beforeend",
            `<div class="progress progress-bar-style"></div>`
        )
        
    })
    
    
    let userSelectedStory = circleStories.find((story) => {
        return story[0].id === e;
    })

    
    // img & video
    if (userSelectedStory[1].src.includes("mp4")) {
        storyImg.insertAdjacentHTML("beforeend",
            `
            <video autoplay muted playsinline src="${userSelectedStory[1].src}" alt="" class="video-story pointer-events-none select-none w-full h-full rounded-xl object-cover">
            `
        )
    } else {
        storyImg.insertAdjacentHTML("beforeend",
            `
            <img src="${userSelectedStory[1].src}" alt="" class="img-story pointer-events-none select-none w-full h-full rounded-xl object-cover bg-black">
            `
        )
    }
    

    headStoryTitle.innerHTML = userSelectedStory[1].title
    headStoryImg.src = userSelectedStory[0].src
    storyDate.innerHTML = userSelectedStory[1].date
    countLikes.innerHTML = userSelectedStory[1].like

    // link
    if (userSelectedStory[1].link) {
        linkContainer.classList.remove("hidden")
        linkStory.innerHTML = userSelectedStory[1].link
        
    } else {
        linkContainer.classList.add("hidden")
    }

    
    
    
    // next & prev story slide
    if (storyIndex >= circleStories.length - 1) {
        nextBtnStory.classList.add("opacity-50", "pointer-events-none");
    } else {
        nextBtnStory.classList.remove("opacity-50", "pointer-events-none");
    }
    
    if (storyIndex <= 0) {
        prevBtnStory.classList.add("opacity-50", "pointer-events-none");
    } else {
        prevBtnStory.classList.remove("opacity-50", "pointer-events-none");
    }
    
    
    
    //* bottom of story
    if (userSelectedStory[1].infoTitle) {
        storyDetails.classList.remove("hidden")

        imgInfoBox.src = userSelectedStory[1].imgInfo
        star.innerHTML = userSelectedStory[1].star

        
        // info title
        if (userSelectedStory[1].infoTitle.length >= 46) {
            storyDetailsTitle.innerHTML = userSelectedStory[1].infoTitle.slice("").split("").slice(0, 42).join("") + " ...";
        } else {
            storyDetailsTitle.innerHTML = userSelectedStory[1].infoTitle
        }

        // discount
        if (userSelectedStory[1].discount){
            discountContainer.classList.remove("hidden")
            discount.innerHTML = userSelectedStory[1].discount

        } else {
            discountContainer.classList.add("hidden")
        }

        
        // price
        if (typeof userSelectedStory[1].price == "number") {
            priceUnitImg.classList.remove("hidden")
            price.innerHTML = userSelectedStory[1].price.toLocaleString()
            
        } else {
            price.innerHTML = userSelectedStory[1].price
            priceUnitImg.classList.add("hidden")
        }

        // colors
        if (userSelectedStory[1].color.length) {
            colorsContainer.classList.remove("hidden")
            userSelectedStory[1].color.forEach((color) => {

                colorsContainer.insertAdjacentHTML("beforeend",
                    `<div class="color-circle ${color} border-1 border-gray-300 size-2 rounded-full"></div>`
                )
            })
            
        } else {
            colorsContainer.classList.add("hidden")
        }

    } else {
        storyDetails.classList.add("hidden")
    }


    startStoryTimer(storyIndex)
    containerStoriesOpened.classList.remove("opacity-0" ,"pointer-events-none")
    containerStoriesOpened.classList.add("opacity-100")
    isOpen = true
}



// close story
const closeStory = () => {
    stopStoryTimer()
    containerStoriesOpened.classList.add("opacity-0" ,"pointer-events-none")
    containerStoriesOpened.classList.remove("opacity-100")
}
containerStoriesOpened.addEventListener("click", (e) => {
    if (
        e.target === containerStoriesOpened ||
        e.target.classList.contains("overly")
    ) {
        closeStory();
    }
});




// progress bar story
let progressFrame = null;
let whichStory = 0
let timerOfProgress = 0
let indexOfStoryInStop = null

const stopStoryTimer = () => {
    if (progressFrame !== null) {
        cancelAnimationFrame(progressFrame);
        progressFrame = null;
    }
};

const startStoryTimer = (storyIndex) => {
    if (typeof storyIndex == "number") {
        indexOfStoryInStop = storyIndex
    }

    stopStoryTimer();
    whichStory = indexOfStoryInStop
    
    
    
    const progressBars = $.querySelectorAll(".progress");
    const story = circleStories[indexOfStoryInStop][1];

    countLikes.innerHTML = story.like

    if (likedStories.has(story.id)) {
        likeStory.classList.remove("ri-heart-line")
        likeStory.classList.add("ri-heart-fill", "text-red-400")
    } else {
        likeStory.classList.remove("ri-heart-fill", "text-red-400")
        likeStory.classList.add("ri-heart-line")
    }
    
    let duration = 5000;

    // If the data is a video, provide the duration of the video itself.
    if (story.src.includes("mp4")) {
        const video = $.querySelector("video");

        if (video) {
            duration = video.duration * 1000;

            // Waiting for the browser to receive the video data
            if (!video.duration) {
                video.addEventListener("loadedmetadata", () => {
                    startStoryTimer(indexOfStoryInStop);
                }, { once: true });

                return;
            }
        }
    }

    const startTime = Date.now();

    
    progressBars.forEach((bar, index) => {

        bar.style.background =
            index < indexOfStoryInStop
                ? "white"
                : "rgba(255,255,255,.4)";
    });

    function progress() {

        const elapsed = Date.now() - startTime;

        const percent = Math.min(
            (elapsed / duration) * 100,
            100
        );

        progressBars[indexOfStoryInStop].style.background =
            `
            linear-gradient(
                to left,
                white ${percent}%,
                rgba(255,255,255,.4) ${percent}%
            )
            `
        ;

        if (percent < 100) {
            
            timerOfProgress = percent
            progressFrame = requestAnimationFrame(progress);
            

        } else {

            progressBars[indexOfStoryInStop].style.background = "white";
            
            const nextIndex = indexOfStoryInStop + 1;
            
            
            if (nextIndex < circleStories.length) {
                playStory()                
                
                openStory(
                    circleStories[nextIndex][0].id,
                    nextIndex
                );
            } else {
                progressBars[indexOfStoryInStop].style.background = "white";
                openStory(
                    circleStories[0][0].id,
                    0
                )
            }
        }
    }

    progress();
};





const video = $.querySelector("video")
// play & pause story
const pauseStory = () => {
    const video = storyImg.querySelector("video")

    video?.pause()
    playBtnStory.classList.remove("hidden")
    pauseBtnStory.classList.add("hidden")
    startStoryTimer()
    stopStoryTimer()
}
const playStory = () => {
    const video = storyImg.querySelector("video")

    video?.play()
    playBtnStory.classList.add("hidden")
    pauseBtnStory.classList.remove("hidden")
    startStoryTimer()
}




// like
const savedLikes = JSON.parse(localStorage.getItem("likedStories")) || []
const likedStories = new Set(savedLikes)
const likeStoryHandler = () => {
    const story = circleStories[whichStory][1]

    if (likedStories.has(story.id)) {
        story.like--
        likedStories.delete(story.id)

        localStorage.setItem("likedStories", JSON.stringify([...likedStories]))
        
        likeStory.classList.remove("ri-heart-fill", "text-red-400")
        likeStory.classList.add("ri-heart-line")

    } else {
        story.like++
        likedStories.add(story.id)

        localStorage.setItem("likedStories", JSON.stringify([...likedStories]))

        likeStory.classList.remove("ri-heart-line")
        likeStory.classList.add("ri-heart-fill", "text-red-400")
    }

    countLikes.innerHTML = story.like
}
likeStory.addEventListener("click", likeStoryHandler)




// next & prev story slide
const nextSlideStory = () => {
    const nextIndex = whichStory + 1;
    if (nextIndex >= circleStories.length) return;

    openStory(circleStories[nextIndex][0].id, nextIndex);
    playStory();
};

const prevSlideStory = () => {
    const prevIndex = whichStory - 1;

    if (prevIndex < 0) return;

    openStory(circleStories[prevIndex][0].id, prevIndex);
    playStory();
};

nextBtnStory.addEventListener("click", nextSlideStory);
prevBtnStory.addEventListener("click", prevSlideStory);






// Horizontal Swipe Navigation
let startX = 0
isPointerDown = false

storyImg.addEventListener("pointerdown", (e) => {
    startX = e.clientX
    isPointerDown = true
})

storyImg.addEventListener("pointerup", (e) => {
    if (!isPointerDown) return

    isPointerDown = false

    const distance = e.clientX - startX

    if (Math.abs(distance) < 70) return

    if (distance < 0) {

        const nextIndex = whichStory - 1

        if (nextIndex >= circleStories.length) {
            return
        }

        const nextStory = circleStories[nextIndex]

        if (!nextStory) return

        openStory(nextStory[0].id, nextIndex)

    } else {

        const prevIndex = whichStory + 1

        if (prevIndex < 0) {
            return
        }

        const prevStory = circleStories[prevIndex]

        if (!prevStory) return

        openStory(prevStory[0].id, prevIndex)
    }
})

storyImg.addEventListener("pointercancel", () => {
    isPointerDown = false
})





// Image gif
const gifsContainer = $.querySelector(".gifs")
const swiperPagination = $.querySelector(".pagination")

const gifItems = [
    "../imgs/img-banner/file.1736860214.21292.webp",
    "../imgs/img-banner/file.1736700859.41955.webp",
    "../imgs/img-banner/file.1736700912.41917.webp",
]
let currentIndex = 0

// تغییر عکس و pagination
const changeGif = () => {

    // حذف عکس قبلی
    gifsContainer.querySelectorAll("img").forEach(img => {
        img.remove()
    })


    // اضافه کردن عکس جدید
    gifsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <img 
            src="${gifItems[currentIndex]}" 
            alt="" 
            class="img-gif absolute inset-0 w-full h-full rounded-3xl object-cover gif-fade"
        >
        `
    )


    // تغییر وضعیت pagination
    const swiperPaginationBullet =
        $.querySelectorAll(".swiper-pagination-bullet")

    swiperPaginationBullet.forEach((bullet, index) => {

        if (index === currentIndex) {

            bullet.classList.add("active-pagination")
            bullet.classList.remove("not-active-pagination")

        } else {

            bullet.classList.remove("active-pagination")
            bullet.classList.add("not-active-pagination")

        }

    })
}

// نمایش GIFها
const showGifs = () => {

    // جلوگیری از ساخته‌شدن pagination تکراری
    swiperPagination.innerHTML = ""


    // ساخت pagination
    gifItems.forEach((item, index) => {

        if (index === currentIndex) {

            swiperPagination.insertAdjacentHTML(
                "beforeend",
                `
                <div class="swiper-pagination-bullet rounded-full active-pagination"></div>
                `
            )

        } else {

            swiperPagination.insertAdjacentHTML(
                "beforeend",
                `
                <div class="swiper-pagination-bullet rounded-full not-active-pagination"></div>
                `
            )

        }

    })


    // گرفتن bulletها
    const swiperPaginationBullet =
        $.querySelectorAll(".swiper-pagination-bullet")


    // کلیک روی pagination
    swiperPaginationBullet.forEach((bullet, index) => {

        bullet.addEventListener("click", () => {

            // تغییر index
            currentIndex = index

            // تغییر عکس و pagination
            changeGif()

        })

    })


    // نمایش عکس اول
    changeGif()


    // تغییر خودکار عکس هر 7 ثانیه
    setInterval(() => {

        if (currentIndex >= gifItems.length - 1) {

            currentIndex = 0

        } else {

            currentIndex++

        }

        // تغییر عکس و pagination
        changeGif()

    }, 7000)
}



// Real Time Offers
const realTimeMain = $.querySelector(".real-time-main")
const realTimeFooter = $.querySelector(".real-time-footer")

const showRealTimeImg = () => {
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }

    const shuffledItems = shuffle(productsArray);
    const instantOffers = shuffledItems.slice(0, 5);
    instantOffers.forEach((item, index) => {
        if (index === 0) {
            realTimeMain.insertAdjacentHTML("beforeend",
                `
                <div data-slug="${item.slug}" class="relative flex items-center bg-gray-100 dark:bg-[#414150] rounded-3xl mt-6 p-4 cursor-pointer">
                    <div class="main-img shrink-0 bg-white dark:bg-[#353542] shadow-xl shadow-gray-200 dark:shadow-none flex items-center justify-center size-[70px]">
                        <img src="${item.src}" alt="" class="size-[45px]"></div>

                    <div class="main-text flex flex-col text-start gap-1.5 min-w-0 ml-4 ms-4">
                        <p class="whitespace-nowrap text-[14px] truncate dark:text-white">${item.title}</p>

                        <div class="main-price flex items-center">
                            <span class="text-blue-600 font-bold ${typeof item.price == "number" ? "" : "text-[13px]"}">${toPersianNumber(item.price.toLocaleString())}</span>
                            <img src="../images/toman-D-K3lGL1.svg" alt="" class="w-5 pr-1 ${typeof item.price == "number" ? "" : "hidden"}">
                        </div>
                    </div>
                </div>
                `
            )
        } else {
            realTimeFooter.insertAdjacentHTML("beforeend",
                `
                <div  data-slug="${item.slug}" class="footer-mini-box display-flex gap-2 flex-col w-[80px] min-w-0">
                    <div class="mini-box bg-gray-100 dark:bg-[#414150] display-flex size-[70px] rounded-xl cursor-pointer">
                        <img src="${item.src}" alt="" class="mini-box-img size-[45px]">
                    </div>

                    <p class="w-full min-w-0 overflow-hidden whitespace-nowrap text-ellipsis dark:text-white">
                        ${item.title}
                    </p>
                </div>
                `
            )
        }
        
    })

}



// Carousel discounted products
const desktopSwiperWrapper = $.querySelector(".discount-swiper .swiper-wrapper")
const mobileSwiperWrapper = $.querySelector(".mobile-swiper .swiper-wrapper")

const createColors = (colors) => {
    return colors.map(color =>
        `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`
    ).join("")
}

const isDiscounted = item =>
    item.discount &&
    typeof item.price === "number" &&
    item.previous_price

const getDiscountedProducts = () => {
    return productsArray.filter(item => isDiscounted(item))
}

const createProductsList = (products, minCount) => {
    if (!products.length) return []

    const result = []

    for (let i = 0; i < minCount; i++) {
        result.push(products[i % products.length])
    }

    return result
}

const desktopDiscountedProducts = () => {
    desktopSwiperWrapper.innerHTML = ""

    const products = getDiscountedProducts()
    const productsList = createProductsList(products, 12)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createColors(item.color)

        desktopSwiperWrapper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 cursor-pointer group/changeColor"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img display-flex w-full max-w-[100%] mt-[20px]">
                    <img src="${item.src}" alt="" class="mx-auto size-[130px]">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] leading-6 dark:text-white leading-5 h-11 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div class="discount-container p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                        <p class="flex justify-between display-flex gap-0.5">
                            <i class="ri-percent-fill text-[11px] font-bold"></i>
                            <span class="discount-box text-white text-[13px] pt-1">${toPersianNumber(item.discount.toLocaleString())}</span>
                       </p>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white">
                        <p>${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1">
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileDiscountedProducts = () => {
    mobileSwiperWrapper.innerHTML = ""

    const products = getDiscountedProducts()
    const productsList = createProductsList(products, 6)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createColors(item.color)

        mobileSwiperWrapper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 group/changeColor cursor-pointer"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img flex w-full items-center justify-center">
                    <img src="${item.src}" alt="" class="size-[150px] object-contain">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] dark:text-white leading-5 h-10 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div class="discount-container px-5 bg-amber-500 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm w-8 h-[20px] pt-1 display-flex">
                        <p class="flex justify-between gap-0.5 p-0.5">
                            <i class="ri-percent-fill text-[12px] font-bold"></i>
                            <span class="discount-box text-white">${toPersianNumber(item.discount.toLocaleString())}</span>
                        </p>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white">
                        <p>${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1">
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileMediaQuery = window.matchMedia("(max-width: 825px)")


// بعد از تعریف mobileMediaQuery
// timer product
let resizeTimeout

const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
        initDiscountSection()
    }, 250)
}

window.addEventListener('resize', handleResize)


let desktopDiscountSwiper = null
let mobileDiscountSwiper = null
let timerInterval = null


const initDiscountSwiper = () => {
    if (desktopDiscountSwiper && typeof desktopDiscountSwiper.destroy === "function") {
        desktopDiscountSwiper.destroy(true, true)
        desktopDiscountSwiper = null
    }

    if (mobileDiscountSwiper && typeof mobileDiscountSwiper.destroy === "function") {
        mobileDiscountSwiper.destroy(true, true)
        mobileDiscountSwiper = null
    }

    if (mobileMediaQuery.matches) {
        mobileDiscountedProducts()

        mobileDiscountSwiper = new Swiper(".mobile-swiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".discount-next-mobile",
                prevEl: ".discount-prev-mobile",
            },
            breakpoints: {
                360: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                390: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                530: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                840: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        })
    } else {
        desktopDiscountedProducts()

        desktopDiscountSwiper = new Swiper(".discount-swiper", {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".discount-next",
                prevEl: ".discount-prev",
            },
            breakpoints: {
                750: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                980: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                1270: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            },
        })
    }
}



const productDiscountedTimer = () => {

    if (timerInterval) {
        clearInterval(timerInterval)
    }

    const updateTimers = () => {

        const now = new Date()

        productsArray.forEach((item, index) => {

            const slides = $.querySelectorAll(
                `.swiper-slide[data-product-index="${index}"]`
            )

            if (!slides.length) return

            // پیدا کردن المنت time در تمام اسلایدهای این محصول
            const timeElements = [...slides].map(slide =>
                slide.querySelector(".time")
            ).filter(Boolean)

            // اگر تاریخ یا تخفیف معتبر نیست → مخفی کردن time
            if (
                !item.discount_start_date ||
                !item.discount_end_date ||
                !isDiscounted(item)
            ) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            const start = new Date(item.discount_start_date)
            const end = new Date(item.discount_end_date)

            // هنوز زمان تخفیف نرسیده
            if (now < start) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // زمان تخفیف تمام شده
            if (now >= end) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // تخفیف فعال است → نمایش تایمر
            timeElements.forEach(time => {
                time.classList.remove("hidden")
            })

            const remainingTime = end - now

            const days = Math.floor(
                remainingTime / (1000 * 60 * 60 * 24)
            )

            const hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            )

            const minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) /
                (1000 * 60)
            )

            const seconds = Math.floor(
                (remainingTime % (1000 * 60)) /
                1000
            )

            slides.forEach(slide => {

                const timerDays = slide.querySelector(".timer-days")

                const timerHours = slide.querySelector(".timer-hours")

                const timerMinutes = slide.querySelector(".timer-minutes")

                const timerSeconds = slide.querySelector(".timer-seconds")

                if (
                    !timerDays ||
                    !timerHours ||
                    !timerMinutes ||
                    !timerSeconds
                ) {
                    return
                }

                timerDays.textContent = toPersianNumber(String(days).padStart(2, "0"))

                timerHours.textContent = toPersianNumber(String(hours).padStart(2, "0"))

                timerMinutes.textContent = toPersianNumber(String(minutes).padStart(2, "0"))

                timerSeconds.textContent = toPersianNumber(String(seconds).padStart(2, "0"))
            })
        })
    }

    updateTimers()

    timerInterval = setInterval(updateTimers, 1000)
}

const initDiscountSection = () => {
    setTimeout(() => {
        initDiscountSwiper()

        // آپدیت بعد از بارگذاری کامل تصاویر
        // setTimeout(() => {
        //     if (desktopDiscountSwiper) {
        //         // desktopDiscountSwiper.update()
        //     }
        //     if (mobileDiscountSwiper) {
        //         mobileDiscountSwiper.update()
        //     }
        //     productDiscountedTimer()
        // }, 300)
    }, 100)
}

initDiscountSection()

mobileMediaQuery.addEventListener("change", () => {
    initDiscountSection()
})



// main categories slide
const mainTitleDefault = document.querySelector(".main-title-default")
const mainTitlePagination = document.querySelector(".main-title-pagination")

const changeTitle = (swiper) => {
    if (swiper.params.slidesPerView >= 9) {
        mainTitleDefault.classList.remove("hidden")
        mainTitlePagination.classList.add("hidden")
    } else {
        mainTitleDefault.classList.add("hidden")
        mainTitlePagination.classList.remove("hidden")
    }
}

const updatePagination = (swiper) => {
    const bullets = Array.from(swiper.pagination.bullets)

    if (!bullets.length) return

    const total = bullets.length
    const activeIndex = swiper.snapIndex

    bullets.forEach((bullet) => {
        bullet.style.display = "none"

        bullet.classList.remove(
            "active-pagination-product",
            "not-active-pagination-product",
            "small-pagination-product"
        )

        bullet.classList.add(
            "not-active-pagination-product"
        )
    })

    // اگر ۴ تا یا کمتر داریم
    if (total <= 4) {
        bullets.forEach((bullet, index) => {
            bullet.style.display = "block"

            if (index === activeIndex) {
                bullet.classList.remove(
                    "not-active-pagination-product",
                    "small-pagination-product"
                )

                bullet.classList.add(
                    "active-pagination-product"
                )
            }
        })

        return
    }

    let start

    if (activeIndex === 0) {
        start = 0
    } else if (activeIndex >= total - 1) {
        start = total - 4
    } else {
        start = activeIndex - 1
    }

    // نمایش فقط ۴ دایره
    for (let i = start; i < start + 4; i++) {
        const bullet = bullets[i]

        if (!bullet) continue

        bullet.style.display = "block"

        // دایره فعال
        if (i === activeIndex) {
            bullet.classList.remove(
                "not-active-pagination-product",
                "small-pagination-product"
            )

            bullet.classList.add(
                "active-pagination-product"
            )
        }

        // دایره اول و چهارم
        else if (
            i === start ||
            i === start + 3
        ) {
            bullet.classList.remove(
                "not-active-pagination-product"
            )

            bullet.classList.add(
                "small-pagination-product"
            )
        }

        // دایره‌های وسط
        else {
            bullet.classList.remove(
                "small-pagination-product"
            )

            bullet.classList.add(
                "not-active-pagination-product"
            )
        }
    }
}

const mainCategoriesSwiper = new Swiper(".main-container", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 20,

    loop: false,
    grabCursor: true,

    pagination: {
        el: ".main-categories-pagination",
        clickable: true,

        renderBullet: function (index, className) {
            return `<span class="${className} not-active-pagination-product"></span>`
        }
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        420: {
            slidesPerView: 3,
        },

        540: {
            slidesPerView: 4,
        },

        765: {
            slidesPerView: 5,
        },

        990: {
            slidesPerView: 7,
        },

        1200: {
            slidesPerView: 9,
        },

        1250: {
            slidesPerView: 10,
        },
    },

    on: {
        init: function () {
            changeTitle(this)
            updatePagination(this)
        },

        paginationRender: function () {
            updatePagination(this)
        },

        breakpoint: function () {
            changeTitle(this)

            requestAnimationFrame(() => {
                updatePagination(this)
            })
        },

        slideChange: function () {
            updatePagination(this)
        }
    }
})




// engine oil products
const OIL_PAGINATION_COUNT = productsArray.filter(
    item => item.type === "engine oil"
).length
const oilSwiper = $.querySelector(".oil-swiper")
const oilPagination = $.querySelector(".oil-categories-pagination")

const createOilProductColors = (colors) => {
    return colors.map(color =>
        `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`
    ).join("")
}

const createOilSlideHTML = (item) => {
    const colors = createOilProductColors(item.color)
    

    return `
        <div data-slug="${item.slug}" class="swiper-slide cursor-pointer bg-white dark:bg-[#414150] p-4 group/changeColor">
            <div class="engine-oil flex h-[20px] justify-between">
                <div class="color flex flex-col gap-0.5">
                    ${colors}
                </div>
                <div class="discount-oil ${!item.discount ? "hidden" : ""} discount-container p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                    <p class="flex justify-between display-flex gap-0.5">
                        <i class="ri-percent-fill text-[11px] font-bold"></i>
                        <span class="text-white text-[13px] pt-1">
                            ${toPersianNumber(item.discount.toLocaleString())}
                        </span>
                    </p>
                </div>
            </div>
            <div class="box-img display-flex w-full mt-[20px]">
                <img
                    src="${item.src}"
                    alt=""
                    class="mx-auto size-[110px] object-contain"
                >
            </div>
            <div class="box-info my-2 mb-4">
                <div class="title text-[13px] min-h-[40px] group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300 dark:text-white text-base/loose line-clamp-2">
                    <p>
                        ${item.title}
                    </p>
                </div>
            </div>
            <div class="strikethrough-price h-[20px] text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end">
                <p>
                    ${toPersianNumber(item.previous_price.toLocaleString())}
                </p>
            </div>
            <div class="price-container flex justify-between">
                <div class="star">
                    <span class="oil-star-text text-[15px] dark:text-white">
                        ${toPersianNumber(item.star.toLocaleString())}
                    </span>
                    <i class="ri-star-fill oil-star text-amber-400 pb-1.5"></i>
                </div>
                <div class="box-price text-[14px] max-[450px]:!text-[13px] ${typeof item.price == "number" ? "" : "font-bold"} display-flex gap-1 dark:text-white">
                    <p>
                        ${toPersianNumber(item.price.toLocaleString())}
                    </p>
                    <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price == "number" ? "" : "hidden"}">
                </div>
            </div>
        </div>
    `
}

const addOilProducts = () => {
    const oilProducts = productsArray.filter(item => item.type === "engine oil")

    if (!oilProducts.length) return

    const slides = []

    for (let i = 0; i < OIL_PAGINATION_COUNT; i++) {
        slides.push(oilProducts[i % oilProducts.length])
    }

    // Duplicate so loop has enough slides at 6-per-view
    oilSwiper.innerHTML = [...slides, ...slides].map(createOilSlideHTML).join("")
}

const renderOilPagination = () => {
    oilPagination.innerHTML = ""

    for (let i = 0; i < OIL_PAGINATION_COUNT; i++) {
        oilPagination.insertAdjacentHTML(
            "beforeend",
            `
            <span
                data-index="${i}"
                class="not-active-pagination-product cursor-pointer">
            </span>
            `
        )
    }
}

const updateOilPagination = (swiper) => {
    const bullets = oilPagination.querySelectorAll("span")
    const activeIndex = swiper.realIndex % OIL_PAGINATION_COUNT

    bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active-pagination-product", index === activeIndex)
        bullet.classList.toggle("not-active-pagination-product", index !== activeIndex)
    })
}

addOilProducts()
renderOilPagination()

const oilSwiperInstance = new Swiper(".oil-container", {
    rtl: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 3,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: false,
    loop: true,
    loopAdditionalSlides: OIL_PAGINATION_COUNT,
    speed: 800,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        360: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 3
        },
        770: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 6
        }
    },
    on: {
        init(swiper) {
            swiper.slideToLoop(0, 0)
            updateOilPagination(swiper)
        },
        slideChange(swiper) {
            updateOilPagination(swiper)
        }
    }
})

oilPagination.addEventListener("click", (event) => {
    const bullet = event.target.closest("span")

    if (!bullet) return

    const target = Number(bullet.dataset.index)

    oilSwiperInstance.slideToLoop(target, 800)
})





// Product Category Section
const categoriesSwiper = $.querySelector(".categories-swiper")

const createProductHTML = (item, index) => {
    return `
    <div data-slug="${item.slug}" class="product-of-categories p-[15px] border-gray-200 dark:border-gray-700 ${index === 0 ? "border-l border-b" : index === 1 ? "border-b" : index === 2 ? "border-l" : ""}">
        <div class="top-product flex justify-between h-[20px]">

            <div class="color flex flex-col gap-0.5 h-[30px]">
                ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
            </div>
            <div class="discount-container p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex ${item.discount ? "" : "hidden"}">
                <p class="flex justify-between display-flex gap-0.5">
                    <i class="ri-percent-fill text-[11px] font-bold"></i>
                    <span class="text-white text-[13px] pt-1">
                        ${toPersianNumber(item.discount)}
                    </span>
                </p>
           </div>
        </div>
        <div class="box-img display-flex w-full mt-[20px]">
            <img src="${item.src}" alt="" class="mx-auto size-[90px] object-contain">
        </div>
        <div class="box-info my-2">
            <div class="title min-w-0 max-w-full">
                <p class="text-[13px] truncate dark:text-white">
                    ${item.title}
                </p>
            </div>
        </div>
        <div class="price-container flex justify-between">
            <div class="star">
                <span class="oil-star-text dark:text-white text-[14px]">${toPersianNumber(item.star.toLocaleString())}</span>
                <i class="ri-star-fill oil-star text-amber-400 pb-1.5 text-[13px]"></i>
            </div>
            <div class="box-price text-[14px] max-[450px]:!text-[13px] ${typeof item.price == "number" ? "" : "text[12px] font-bold"} display-flex gap-1 dark:text-white">
                <p>${toPersianNumber(item.price.toLocaleString())}</p>
                <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price == "number" ? "" : "hidden"}">
            </div>
        </div>
    </div>
    `
}

const addCategoryProduct = () => {
    const vehicleLight = productsArray.filter(
        item => item.type === "vehicle light"
    )

    const mechanicalParts = productsArray.filter(
        item => item.type === "mechanical parts"
    )

    const headlight = productsArray.filter(
        item => item.type === "headlight"
    )

    const engineOil = productsArray.filter(
        item => item.type === "engine oil"
    )

    const categories = [ 
        { type: "vehicle light", title: "چراغ خودرو", products: vehicleLight },
        { type: "mechanical parts", title: "قطعات مکانیکی", products: mechanicalParts },
        { type: "headlight", title: "هدلایت", products: headlight }, 
        { type: "engine oil", title: "روغن موتور", products: engineOil } 
    ]

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))

            ;[array[i], array[j]] = [array[j], array[i]]
        }

        return array
    }

    const slides = categoriesSwiper.querySelectorAll(".swiper-wrapper > .swiper-slide")

    slides.forEach(slide => {
        slide.querySelector(".main-categories").innerHTML = ""
    })

    categories.forEach((category, index) => {

        const products = shuffle([...category.products]).slice(0, 4)

        const slide = slides[index]

        if (!slide) return

        const title = slide.querySelector(".title-top-categories h3")

        const productsContainer = slide.querySelector(".main-categories")

        title.textContent = category.title

        products.forEach((item, productIndex) => {

            productsContainer.insertAdjacentHTML(
                "beforeend",
                createProductHTML(item, productIndex)
            )

        })
    })
}

const discountSwiper = new Swiper(".product-categories-container", {
    slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },


    speed: 800,


    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        995: {
            slidesPerView: 3,
        },
    },
});




// Most popular products
const createPopularProduct = (item) => {
    const popularProductsContainer = $.querySelector(".popular-products-container")
    popularProductsContainer.insertAdjacentHTML("beforeend",
        `
        <div data-slug="${item.slug}" class="products-slide  p-[15px] border-[1.5px] border-l border-b border-gray-100 dark:border-[#262631] group/changeColor cursor-pointer">
            <div class="products-slide-top display-flex justify-start gap-1">
                <img src="${item.src}" alt="" class="size-[70px]">
                <h3 class="title group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300 text-[13px] leading-6 [word-spacing:2px] dark:text-white h-11 line-clamp-2 text-start overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                    <a href="#">
                        ${item.title}
                    </a>
                </h3>
            </div>
            <div class="products-slide-bottom display-flex justify-between pt-[10px]">
                <div class="colors flex flex-row gap-0.5 display-flex w-[68px] h-[15px]">
                    ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
                </div>
                <div class="price-info display-flex">
                    <div class="star display-flex border-gray pl-1">
                        <span class="text-[13px] dark:text-white">${toPersianNumber(item.star)}</span>
                        <i class="ri-star-fill text-amber-400 pb-1 text-[13px]"></i>
                    </div>
                    <div class="price display-flex pr-2 ${typeof item.price === "number" ? "" : "text-[13px] font-bold"} dark:text-white">
                        <p>${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price === "number" ? "" : "hidden"}">
                    </div>
                </div>
            </div>
        </div>
        `
    )
    
}
const addPopularProduct = () => {
    const beloved = productsArray.filter((item) => item.star >= 4.5)

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }

    const shuffledItems = shuffle(beloved);
    const instantOffers = shuffledItems.slice(0, 12);

    instantOffers.forEach((item) => {

        createPopularProduct(item);
        
    })
    
}



// Featured Products
const featuredDesktopSwiper = $.querySelector(".featured-desktop-swiper .swiper-wrapper")
const featuredMobileSwiper = $.querySelector(".featured-mobile-swiper .swiper-wrapper")

const createFeaturedColors = (colors) => {
    return colors.map(color =>
        `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`
    ).join("")
}


const getFeaturedProducts = () => {
    return productsArray.filter(item => item.isFeatured === true)
}


const createFeaturedProductsList = (products, minCount) => {
    if (!products.length) return []

    const result = []

    for (let i = 0; i < minCount; i++) {
        result.push(products[i % products.length])
    }

    return result
}

const desktopFeaturedProducts = () => {
    featuredDesktopSwiper.innerHTML = ""

    const products = getFeaturedProducts()
    const productsList = createFeaturedProductsList(products, 12)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createFeaturedColors(item.color)

        featuredDesktopSwiper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 cursor-pointer group/changeColor"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between h-[30px]">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img display-flex w-full max-w-[100%] mt-[20px]">
                    <img src="${item.src}" alt="" class="mx-auto size-[130px]">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] leading-6 dark:text-white leading-5 h-11 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end h-[20px]">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div>
                    <div class="discount-container ${item.discount ? "" : "hidden"} p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                        <p class="flex justify-between display-flex gap-0.5">
                            <i class="ri-percent-fill text-[11px] font-bold"></i>
                            <span class="discount-box text-white text-[13px] pt-1">${toPersianNumber(item.discount.toLocaleString())}</span>
                       </p>
                    </div>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white h-[20px]">
                        <p class="${typeof item.price === "number" ? "" : "text-[14px] font-bold"}">${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1" ${typeof item.price === "number" ? "" : "hidden"}>
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileFeaturedProducts = () => {
    featuredMobileSwiper.innerHTML = ""

    const products = getFeaturedProducts()
    const productsList = createFeaturedProductsList(products, 6)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createFeaturedColors(item.color)

        featuredMobileSwiper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 group/changeColor cursor-pointer"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between h-[30px]">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img flex w-full items-center justify-center">
                    <img src="${item.src}" alt="" class="size-[120px] object-contain">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] leading-6 dark:text-white h-11 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end h-[20px]">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div>
                    <div class="discount-container ${item.discount ? "" : "hidden"} px-5 bg-amber-500 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm w-8 h-[20px] pt-1 display-flex">
                        <p class="flex justify-between gap-0.5 p-0.5">
                            <i class="ri-percent-fill text-[12px] font-bold"></i>
                            <span class="discount-box text-white">${toPersianNumber(item.discount.toLocaleString())}</span>
                        </p>
                    </div>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white h-[20px]">
                        <p class="${typeof item.price === "number" ? "" : "text-[14px] font-bold"}">${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price === "number" ? "" : "hidden"}">
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileFeaturedMediaQuery = window.matchMedia("(max-width: 825px)")


// بعد از تعریف mobileMediaQuery
// timer product
let resizeTimeoutFeatured

const handleResizeFeatured = () => {
    clearTimeout(resizeTimeoutFeatured)
    resizeTimeoutFeatured = setTimeout(() => {
        initFeaturedSwiper()
    }, 250)
}

window.addEventListener('resize', handleResizeFeatured)


let desktopFeaturedSwiper = null
let mobileFeaturedSwiper = null
let timerIntervalFeatured = null


const initFeaturedSwiper = () => {
    if (desktopFeaturedSwiper && typeof desktopFeaturedSwiper.destroy === "function") {
        desktopFeaturedSwiper.destroy(true, true)
        desktopFeaturedSwiper = null
    }

    if (mobileFeaturedSwiper && typeof mobileFeaturedSwiper.destroy === "function") {
        mobileFeaturedSwiper.destroy(true, true)
        mobileFeaturedSwiper = null
    }

    if (mobileFeaturedMediaQuery.matches) {
        mobileFeaturedProducts()

        mobileFeaturedSwiper = new Swiper(".featured-mobile-swiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".featured-next-mobile",
                prevEl: ".featured-prev-mobile",
            },
            breakpoints: {
                360: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                390: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                530: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                840: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        })
    } else {
        desktopFeaturedProducts()

        desktopFeaturedSwiper = new Swiper(".featured-desktop-swiper", {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".featured-next",
                prevEl: ".featured-prev",
            },
            breakpoints: {
                750: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                980: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                1270: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            },
        })
    }
}

const productFeaturedTimer = () => {

    if (timerInterval) {
        clearInterval(timerInterval)
    }

    const updateTimers = () => {

        const now = new Date()

        productsArray.forEach((item, index) => {

            const slides = $.querySelectorAll(
                `.swiper-slide[data-product-index="${index}"]`
            )

            if (!slides.length) return

            // پیدا کردن المنت time در تمام اسلایدهای این محصول
            const timeElements = [...slides].map(slide =>
                slide.querySelector(".time")
            ).filter(Boolean)

            // اگر تاریخ یا تخفیف معتبر نیست → مخفی کردن time
            if (
                !item.discount_start_date ||
                !item.discount_end_date ||
                !isDiscounted(item)
            ) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            const start = new Date(item.discount_start_date)
            const end = new Date(item.discount_end_date)

            // هنوز زمان تخفیف نرسیده
            if (now < start) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // زمان تخفیف تمام شده
            if (now >= end) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // تخفیف فعال است → نمایش تایمر
            timeElements.forEach(time => {
                time.classList.remove("hidden")
            })

            const remainingTime = end - now

            const days = Math.floor(
                remainingTime / (1000 * 60 * 60 * 24)
            )

            const hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            )

            const minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) /
                (1000 * 60)
            )

            const seconds = Math.floor(
                (remainingTime % (1000 * 60)) /
                1000
            )

            slides.forEach(slide => {

                const timerDays = slide.querySelector(".timer-days")

                const timerHours = slide.querySelector(".timer-hours")

                const timerMinutes = slide.querySelector(".timer-minutes")

                const timerSeconds = slide.querySelector(".timer-seconds")

                if (
                    !timerDays ||
                    !timerHours ||
                    !timerMinutes ||
                    !timerSeconds
                ) {
                    return
                }

                timerDays.textContent = toPersianNumber(String(days).padStart(2, "0"))

                timerHours.textContent = toPersianNumber(String(hours).padStart(2, "0"))

                timerMinutes.textContent = toPersianNumber(String(minutes).padStart(2, "0"))

                timerSeconds.textContent = toPersianNumber(String(seconds).padStart(2, "0"))
            })
        })
    }

    updateTimers()

    timerInterval = setInterval(updateTimers, 1000)
}

const initFeaturedSection = () => {
    setTimeout(() => {
        initFeaturedSwiper()

        // آپدیت بعد از بارگذاری کامل تصاویر
        setTimeout(() => {
            if (desktopFeaturedSwiper) {
                desktopFeaturedSwiper.update()
            }
            if (mobileFeaturedSwiper) {
                mobileFeaturedSwiper.update()
            }
            productFeaturedTimer()
        }, 300)
    }, 100)
}

initFeaturedSection()

mobileMediaQuery.addEventListener("change", () => {
    initFeaturedSection()
})







// Mechanical parts products

const createMechanicalPartsHTML = (item) => {
    return`
        <div data-slug="${item.slug}" class="swiper-slide !overflow-visible">
            <div class="relative bg-white dark:bg-[#414150] rounded-3xl p-[20px] mt-[10px]">

                <div class="special-product absolute left-1/2 ${item.isFeatured ? "" : "hidden"} whitespace-nowrap -translate-x-1/2 -top-[10px] z-10 bg-gray-300 dark:bg-[#4a4a5c] text-gray-500 dark:text-white rounded-b-xl rounded-tr-xl text-[13px] py-0.5 px-3">
                    <p>محصول ویژه</p>
                </div>
                <div class="colors absolute top-[20px] right-[20px] flex flex-col gap-0.5">
                    ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
                </div>
                <img src="${item.src}" alt="" class="size-[170px] my-[10px] display-flex justify-self-center object-contain">
                <p class="max-h-[55px] min-h-[55px] text-[13px] leading-6 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">${item.title}</p>
                <div class="mechanical-parts-discount flex items-center text-center justify-end gap-1.5  h-[20px]">
    
                    <div class="discount-container ${item.discount ? "" : "hidden"} p-1.5 mb-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                        <p class="flex justify-between display-flex gap-0.5">
                            <i class="ri-percent-fill text-[11px] font-bold"></i>
                            <span class="discount-box text-white text-[13px] pt-1">${item.discount}</span>
                       </p>
                    </div>
                    <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end">
                        <p>${item.previous_price}</p>
                    </div>
    
                </div>
                <div class="price-container flex justify-between">
                    <div class="star">
                        <span class="oil-star-text dark:text-white text-[14px]">${item.star}</span>
                        <i class="ri-star-fill oil-star text-amber-400 pb-1.5 text-[13px]"></i>
                    </div>
                    <div class="box-price text-[14px] max-[450px]:!text-[14px] ${typeof item.price == "number" ? "" : "font-bold"} display-flex gap-1 dark:text-white">
                        <p>${item.price}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price == "number" ? "" : "hidden"}">
                    </div>
                </div>
            </div>
        </div>
    `
}
const addMechanicalPartsHTML = () => {
    const mechanicalPartsSwiper = $.querySelector(".mechanical-parts-swiper")

    const mechanicalProducts = productsArray.filter((item) => item.type === "mechanical parts")

    mechanicalProducts.forEach((item) => {
        mechanicalPartsSwiper.insertAdjacentHTML("beforeend",
            createMechanicalPartsHTML(item)
        )
    })
    
    
}

const mechanicalPartsSwiper = new Swiper(".mechanical-parts-main", {
    slidesPerView: 5,
    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },


    speed: 800,


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        380: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 4,
        },

        1500: {
            slidesPerView: 5,
        },
    },
});






// Most Viewed products

const createviewedProduct = (item) => {
    return`
        <div class="products-slide  p-[15px] border-[1.5px] border-l border-b border-gray-100 dark:border-[#262631] group/changeColor cursor-pointer">
            <div class="products-slide-top display-flex justify-start gap-1">
                <img src="${item.src}" alt="" class="size-[70px]">
                <h3 class="title group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300 text-[13px] dark:text-white leading-6 h-11 line-clamp-2 text-start overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                    <a href="#">
                        ${item.title}
                    </a>
                </h3>
            </div>
            <div class="products-slide-bottom display-flex justify-between pt-[10px]">
                <div class="colors flex flex-row gap-0.5 display-flex w-[68px] h-[15px]">
                    ${item.color.map(color => `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`).join("")}
                </div>
                <div class="price-info display-flex">
                    <div class="star display-flex border-gray pl-1">
                        <span class="text-[13px] dark:text-white">${toPersianNumber(item.star)}</span>
                        <i class="ri-star-fill text-amber-400 pb-1 text-[13px]"></i>
                    </div>
                    <div class="price display-flex pr-2 ${typeof item.price === "number" ? "" : "text-[13px] font-bold"} dark:text-white">
                        <p>${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price === "number" ? "" : "hidden"}">
                    </div>
                </div>
            </div>
        </div>
        `
    
}
const addviewedProduct = () => {
    const viewedProductsContainer = $.querySelector(".viewed-products-container")
    
    const viewedProducts = productsArray.filter((item) => item.viewed >= 200)
    

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }

    const shuffledItems = shuffle(viewedProducts);
    const instantOffers = shuffledItems.slice(0, 12);

    instantOffers.forEach((item) => {
        viewedProductsContainer.insertAdjacentHTML("beforeend",
            createviewedProduct(item)
        )
    })
    
}






// Best-selling products
const bestSellingDesktopSwiper = $.querySelector(".bestSelling-desktop-swiper .swiper-wrapper")
const bestSellingMobileSwiper = $.querySelector(".bestSelling-mobile-swiper .swiper-wrapper")

const createBestSellingColors = (colors) => {
    return colors.map(color =>
        `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`
    ).join("")
}


const getBestSellingProducts = () => {
    return productsArray.filter(item => item.sales >= 100)
}


const createBestSellingProductsList = (products, minCount) => {
    if (!products.length) return []

    const result = []

    for (let i = 0; i < minCount; i++) {
        result.push(products[i % products.length])
    }

    return result
}

const desktopBestSellingProducts = () => {
    bestSellingDesktopSwiper.innerHTML = ""

    const products = getBestSellingProducts()
    const productsList = createBestSellingProductsList(products, 12)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createBestSellingColors(item.color)

        bestSellingDesktopSwiper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 cursor-pointer group/changeColor"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between h-[30px]">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img display-flex w-full max-w-[100%] mt-[20px]">
                    <img src="${item.src}" alt="" class="mx-auto size-[130px]">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] dark:text-white leading-6 h-11 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end h-[20px]">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div>
                    <div class="discount-container ${item.discount ? "" : "hidden"} p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                        <p class="flex justify-between display-flex gap-0.5">
                            <i class="ri-percent-fill text-[11px] font-bold"></i>
                            <span class="discount-box text-white text-[13px] pt-1">${toPersianNumber(item.discount.toLocaleString())}</span>
                       </p>
                    </div>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white h-[20px]">
                        <p class="${typeof item.price === "number" ? "" : "text-[14px] font-bold"}">${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1" ${typeof item.price === "number" ? "" : "hidden"}>
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileBestSellingProducts = () => {
    bestSellingMobileSwiper.innerHTML = ""

    const products = getBestSellingProducts()
    const productsList = createBestSellingProductsList(products, 6)

    productsList.forEach(item => {

        const productIndex = productsArray.indexOf(item)
        const colors = createBestSellingColors(item.color)

        bestSellingMobileSwiper.insertAdjacentHTML("beforeend", `
            <div
                data-slug="${item.slug}"
                class="swiper-slide bg-white dark:bg-[#414150] p-4 group/changeColor cursor-pointer"
                data-product-index="${productIndex}"
            >
                <div class="box-head flex justify-between h-[30px]">
                    <div class="color flex flex-col gap-0.5">
                        ${colors}
                    </div>

                    <div class="time text-[12px] text-gray-500 dark:text-white">
                        <p>
                            <span class="timer-seconds bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-minutes bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> :
                            <span class="timer-hours bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span> /
                            <span class="timer-days bg-gray-200 dark:bg-black/40 rounded-md px-0.5">۰۰</span>
                        </p>
                    </div>
                </div>

                <div class="box-img flex w-full items-center justify-center">
                    <img src="${item.src}" alt="" class="size-[120px] object-contain">
                </div>

                <div class="box-info my-2 mb-4">
                    <div class="star">
                        <span class="text-[15px] dark:text-white">${toPersianNumber(item.star.toLocaleString())}</span>
                        <i class="ri-star-fill text-amber-400 pb-1.5"></i>
                    </div>

                    <div class="title text-[13px] dark:text-white leading-5 h-10 line-clamp-2 overflow-hidden group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300">
                        ${item.title}
                    </div>
                </div>

                <div class="strikethrough-price text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end h-[20px]">
                    <p>${toPersianNumber(item.previous_price.toLocaleString())}</p>
                </div>

                <div class="price-container flex justify-between">
                    <div>
                    <div class="discount-container ${item.discount ? "" : "hidden"} px-5 bg-amber-500 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm w-8 h-[20px] pt-1 display-flex">
                        <p class="flex justify-between gap-0.5 p-0.5">
                            <i class="ri-percent-fill text-[12px] font-bold"></i>
                            <span class="discount-box text-white">${toPersianNumber(item.discount.toLocaleString())}</span>
                        </p>
                    </div>
                    </div>

                    <div class="box-price display-flex gap-1 dark:text-white h-[20px]">
                        <p class="${typeof item.price === "number" ? "" : "text-[14px] font-bold"}">${toPersianNumber(item.price.toLocaleString())}</p>
                        <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price === "number" ? "" : "hidden"}">
                    </div>
                </div>
            </div>
        `)
    })
}

const mobileBestSellingMediaQuery = window.matchMedia("(max-width: 825px)")


// بعد از تعریف mobileMediaQuery
// timer product
let resizeTimeoutBestSelling

const handleResizeBestSelling = () => {
    clearTimeout(resizeTimeoutBestSelling)
    resizeTimeoutBestSelling = setTimeout(() => {
        initBestSellingSwiper()
    }, 250)
}

window.addEventListener('resize', handleResizeBestSelling)


let desktopBestSellingSwiper = null
let mobileBestSellingSwiper = null
let timerIntervalBestSelling = null


const initBestSellingSwiper = () => {
    if (desktopBestSellingSwiper && typeof desktopBestSellingSwiper.destroy === "function") {
        desktopBestSellingSwiper.destroy(true, true)
        desktopBestSellingSwiper = null
    }

    if (mobileBestSellingSwiper && typeof mobileBestSellingSwiper.destroy === "function") {
        mobileBestSellingSwiper.destroy(true, true)
        mobileBestSellingSwiper = null
    }

    if (mobileFeaturedMediaQuery.matches) {
        mobileBestSellingProducts()

        mobileBestSellingSwiper = new Swiper(".bestSelling-mobile-swiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".bestSelling-next-mobile",
                prevEl: ".bestSelling-prev-mobile",
            },
            breakpoints: {
                360: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                390: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                530: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                840: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        })
    } else {
        desktopBestSellingProducts()

        desktopBestSellingSwiper = new Swiper(".bestSelling-desktop-swiper", {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 1,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".bestSelling-next",
                prevEl: ".bestSelling-prev",
            },
            breakpoints: {
                750: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                980: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                1270: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            },
        })
    }
}

const productBestSellingTimer = () => {

    if (timerInterval) {
        clearInterval(timerInterval)
    }

    const updateTimers = () => {

        const now = new Date()

        productsArray.forEach((item, index) => {

            const slides = $.querySelectorAll(
                `.swiper-slide[data-product-index="${index}"]`
            )

            if (!slides.length) return

            // پیدا کردن المنت time در تمام اسلایدهای این محصول
            const timeElements = [...slides].map(slide =>
                slide.querySelector(".time")
            ).filter(Boolean)

            // اگر تاریخ یا تخفیف معتبر نیست → مخفی کردن time
            if (
                !item.discount_start_date ||
                !item.discount_end_date ||
                !isDiscounted(item)
            ) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            const start = new Date(item.discount_start_date)
            const end = new Date(item.discount_end_date)

            // هنوز زمان تخفیف نرسیده
            if (now < start) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // زمان تخفیف تمام شده
            if (now >= end) {
                timeElements.forEach(time => {
                    time.classList.add("hidden")
                })
                return
            }

            // تخفیف فعال است → نمایش تایمر
            timeElements.forEach(time => {
                time.classList.remove("hidden")
            })

            const remainingTime = end - now

            const days = Math.floor(
                remainingTime / (1000 * 60 * 60 * 24)
            )

            const hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            )

            const minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) /
                (1000 * 60)
            )

            const seconds = Math.floor(
                (remainingTime % (1000 * 60)) /
                1000
            )

            slides.forEach(slide => {

                const timerDays = slide.querySelector(".timer-days")

                const timerHours = slide.querySelector(".timer-hours")

                const timerMinutes = slide.querySelector(".timer-minutes")

                const timerSeconds = slide.querySelector(".timer-seconds")

                if (
                    !timerDays ||
                    !timerHours ||
                    !timerMinutes ||
                    !timerSeconds
                ) {
                    return
                }

                timerDays.textContent = toPersianNumber(String(days).padStart(2, "0"))

                timerHours.textContent = toPersianNumber(String(hours).padStart(2, "0"))

                timerMinutes.textContent = toPersianNumber(String(minutes).padStart(2, "0"))

                timerSeconds.textContent = toPersianNumber(String(seconds).padStart(2, "0"))
            })
        })
    }

    updateTimers()

    timerInterval = setInterval(updateTimers, 1000)
}

const initBestSellingSection = () => {
    setTimeout(() => {
        initBestSellingSwiper()

        // آپدیت بعد از بارگذاری کامل تصاویر
        setTimeout(() => {
            if (desktopBestSellingSwiper) {
                desktopBestSellingSwiper.update()
            }
            if (mobileBestSellingSwiper) {
                mobileBestSellingSwiper.update()
            }
            productBestSellingTimer()
        }, 300)
    }, 100)
}

initBestSellingSection()

mobileMediaQuery.addEventListener("change", () => {
    initBestSellingSection()
})






// headlight

const headlight_PAGINATION_COUNT = productsArray.filter(
    item => item.type === "headlight"
).length
const headlightSwiper = $.querySelector(".headlight-swiper")

const headlightPagination=$.querySelector(".headlight-pagination")

const createHeadlightProductColors = (colors) => {
    return colors.map(color =>
        `<div class="circle ${color} ${color === "bg-white" ? "border border-gray-300" : ""} rounded-full size-2"></div>`
    ).join("")
}

const createHeadlightSlideHTML = (item) => {

    const colors = createHeadlightProductColors(item.color)
    

    return `
        <div  data-slug="${item.slug}" class="swiper-slide cursor-pointer bg-white dark:bg-[#414150] p-4 group/changeColor">
            <div class="flex h-[20px] justify-between">
                <div class="color flex flex-col gap-0.5">
                    ${colors}
                </div>
                <div class="discount-oil ${!item.discount ? "hidden" : ""} discount-container p-1.5 bg-amber-500 shadow-lg shadow-amber-400/30 text-[14px] rounded-t-xl rounded-br-xl rounded-bl-sm h-[20px] display-flex">
                    <p class="flex justify-between display-flex gap-0.5">
                        <i class="ri-percent-fill text-[11px] font-bold"></i>
                        <span class="text-white text-[13px] pt-1">
                            ${toPersianNumber(item.discount.toLocaleString())}
                        </span>
                    </p>
                </div>
            </div>
            <div class="box-img display-flex w-full mt-[20px]">
                <img
                    src="${item.src}"
                    alt=""
                    class="mx-auto size-[110px] object-contain"
                >
            </div>
            <div class="box-info my-2 mb-4">
                <div class="title text-[13px] min-h-[40px] group-hover/changeColor:text-blue-400 dark:group-hover/changeColor:text-white transition-colors duration-300 dark:text-white text-base/loose line-clamp-2">
                    <p>
                        ${item.title}
                    </p>
                </div>
            </div>
            <div class="strikethrough-price h-[20px] text-gray-400 dark:text-white/70 line-through text-[13px] flex justify-end">
                <p>
                    ${toPersianNumber(item.previous_price.toLocaleString())}
                </p>
            </div>
            <div class="price-container flex justify-between">
                <div class="star">
                    <span class="oil-star-text text-[15px] dark:text-white">
                        ${toPersianNumber(item.star.toLocaleString())}
                    </span>
                    <i class="ri-star-fill oil-star text-amber-400 pb-1.5"></i>
                </div>
                <div class="box-price text-[14px] max-[450px]:!text-[13px] ${typeof item.price == "number" ? "" : "font-bold"} display-flex gap-1 dark:text-white">
                    <p>
                        ${toPersianNumber(item.price.toLocaleString())}
                    </p>
                    <img src="../images/toman-D-K3lGL1.svg" alt="" class="size-4 pb-1 ${typeof item.price == "number" ? "" : "hidden"}">
                </div>
            </div>
        </div>
    `
}

const addHeadlightProducts = () => {
    const headlightProducts = productsArray.filter(item => item.type === "headlight")

    if (!headlightProducts.length) return

    const slides = []

    for (let i = 0; i < headlight_PAGINATION_COUNT; i++) {
        slides.push(headlightProducts[i % headlightProducts.length])
    }

    // Duplicate so loop has enough slides at 6-per-view
    headlightSwiper.innerHTML = [...slides, ...slides].map(createHeadlightSlideHTML).join("")
}

const renderHeadlightPagination = () => {
    headlightPagination.innerHTML = ""

    for (let i = 0; i < headlight_PAGINATION_COUNT; i++) {
        headlightPagination.insertAdjacentHTML(
            "beforeend",
            `
            <span
                data-index="${i}"
                class="not-active-pagination-product cursor-pointer">
            </span>
            `
        )
    }
}

const updateHeadlightPagination = (swiper) => {
    
    const bullets = headlightPagination.querySelectorAll("span")
    const activeIndex = swiper.realIndex % headlight_PAGINATION_COUNT

    bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active-pagination-product", index === activeIndex)
        bullet.classList.toggle("not-active-pagination-product", index !== activeIndex)
    })
}

addHeadlightProducts()
renderHeadlightPagination()

const headlightSwiperInstance = new Swiper(".headlight-container", {
    rtl: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 3,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: false,
    loop: true,
    loopAdditionalSlides: headlight_PAGINATION_COUNT,
    speed: 800,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        360: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 3
        },
        770: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 6
        }
    },
    on: {
        init(swiper) {
            swiper.slideToLoop(0, 0)
            updateHeadlightPagination(swiper)
        },
        slideChange(swiper) {
            updateHeadlightPagination(swiper)
        }
    }
})

headlightPagination.addEventListener("click", (event) => {
    const bullet = event.target.closest("span")

    if (!bullet) return

    const target = Number(bullet.dataset.index)

    headlightSwiperInstance.slideToLoop(target, 800)
})






// brands
const brandsPagination = $.querySelector(".brands-categories-pagination")
const PAGINATION_COUNT = 4

const restartBrandsAutoplay = (swiper) => {
    if (!swiper?.autoplay) return

    swiper.autoplay.stop()
    swiper.autoplay.start()
}

const createBrandsHTML = () => {
    const brandsSwiper = $.querySelector(".brands-swiper")
    brandsSwiper.innerHTML = ""

    brandsArray.forEach((brand) => {
        brandsSwiper.insertAdjacentHTML(
            "beforeend",
            `
            <div class="swiper-slide">
                <div class="card relative display-flex bg-white dark:bg-[#353542] rounded-full cursor-pointer group aspect-square w-full max-w-[110px]">
                    <img
                        src="${brand.src}"
                        alt="${brand.title}"
                        class="bg-white dark:bg-[#353542] w-full h-full p-[20%] rounded-full visible opacity-100 group-hover:invisible group-hover:opacity-0 transition-all duration-300"
                    >

                    <div
                        class="hover-title absolute bg-blue-600 px-2 py-0.5 rounded-md display-flex text-[12px] text-white shadow-lg shadow-blue-300 dark:shadow-blue-900 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
                    >
                        ${brand.title}
                    </div>
                </div>
            </div>
            `
        )
    })
}

const renderBrandsPagination = () => {
    brandsPagination.innerHTML = ""

    brandsArray.forEach((_, index) => {
        brandsPagination.insertAdjacentHTML(
            "beforeend",
            `
            <span
                data-index="${index}"
                class="not-active-pagination-product cursor-pointer">
            </span>
            `
        )
    })
}

const updateBrandsPagination = (swiper) => {
    const bullets = Array.from(
        brandsPagination.querySelectorAll("span")
    )

    const total = bullets.length

    if (!total) return

    const activeIndex = swiper.realIndex

    bullets.forEach((bullet) => {
        bullet.style.display = "none"

        bullet.classList.remove(
            "active-pagination-product",
            "not-active-pagination-product",
            "small-pagination-product"
        )

        bullet.classList.add(
            "not-active-pagination-product"
        )
    })

    if (total <= PAGINATION_COUNT) {
        bullets.forEach((bullet, index) => {
            bullet.style.display = "block"

            if (index === activeIndex) {
                bullet.classList.remove(
                    "not-active-pagination-product"
                )

                bullet.classList.add(
                    "active-pagination-product"
                )
            }
        })

        return
    }

    let start

    if (activeIndex === 0) {
        start = 0
    } else if (activeIndex >= total - 1) {
        start = total - PAGINATION_COUNT
    } else {
        start = activeIndex - 1
    }

    for (let i = start; i < start + PAGINATION_COUNT; i++) {
    const bullet = bullets[i]

    if (!bullet) continue

    bullet.style.display = "block"

    if (i === activeIndex) {
        bullet.classList.remove(
            "not-active-pagination-product",
            "small-pagination-product"
        )

        bullet.classList.add(
            "active-pagination-product"
        )
    } else if (
        i === start ||
        i === start + PAGINATION_COUNT - 1
    ) {
        bullet.classList.remove(
            "not-active-pagination-product"
        )

        bullet.classList.add(
            "small-pagination-product"
        )
    } else {
        bullet.classList.remove(
            "small-pagination-product"
        )

        bullet.classList.add(
            "not-active-pagination-product"
        )
    }
}
}

createBrandsHTML()
renderBrandsPagination()

const BrandsSwiperInstance = new Swiper(".brands-container", {
    rtl: true,

    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 7,

    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,

    centeredSlides: false,

    loop: true,
    speed: 800,

    watchOverflow: true,
    observer: true,
    observeParents: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    breakpoints: {
        0: {
            slidesPerView: 2
        },

        320: {
            slidesPerView: 4
        },

        540: {
            slidesPerView: 6
        },

        798: {
            slidesPerView: 8
        },

        990: {
            slidesPerView: 10
        },

        1200: {
            slidesPerView: 11
        }
    },

    on: {
        init: function () {
            updateBrandsPagination(this)
        },

        breakpoint: function () {
            requestAnimationFrame(() => {
                updateBrandsPagination(this)
            })
        },

        realIndexChange: function () {
            updateBrandsPagination(this)
        }
    }
})

brandsPagination.addEventListener("click", (event) => {
    const bullet = event.target.closest("span")

    if (!bullet) return

    const targetIndex = Number(
        bullet.dataset.index
    )

    if (Number.isNaN(targetIndex)) return

    BrandsSwiperInstance.slideToLoop(
        targetIndex,
        800
    )

    restartBrandsAutoplay(
        BrandsSwiperInstance
    )
})





// random articles
const randomArticlesSwiper = $.querySelector(".random-articles-swiper")
const randomArticlesPagination = $.querySelector(".random-articles-pagination")


const createRandomArticlesHTML = (item) => {
    articlesArray.forEach((item) => {
        randomArticlesSwiper.insertAdjacentHTML("beforeend",
            `
               <div class="swiper-slide !h-[300px] overflow-visible">
                   <div class="articles-card relative w-full h-[200px] p-[10px] group/change">
                       <img src="${item.src}" alt="" class="w-full h-[200px] object-cover rounded-b-md rounded-t-2xl cursor-pointer">
       
                       <span class="category-badge absolute top-[30px] right-[30px] bg-white text-gray-600 dark:bg-[#353542] dark:text-white group-hover/change:text-white group-hover/change:bg-blue-600 transition-colors duration-300 text-[13px] p-1 px-2 rounded-lg cursor-pointer">
                           <a href="#">${item.type}</a>
                       </span>
       
                       <div class="article-footer absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-[#353542] pt-[10px] px-[15px] pb-[15px] rounded-xl cursor-pointer">
                           <h3 class="article-title w-full min-w-0 whitespace-nowrap overflow-hidden text-ellipsis text-[13px] text-gray-600 mb-2 group-hover/change:text-cyan-400 transition-colors duration-300 dark:text-white">
                               ${item.title}
                           </h3>
       
                           <ul class="display-flex justify-start gap-2">
                               <li class="display-flex gap-1.5 text-gray-400 text-[12px]">
                                   <img src="${item.profile_src}" alt="" class="size-[20px] rounded-md">
                                   <a>${item.author}</a>
                               </li>
       
                               <li class="divider size-1 bg-blue-600 rounded-full"></li>
       
                               <li class="text-gray-400 text-[12px]">
                                   <span>${item.date}</span>
                               </li>
                           </ul>
                       </div>
       
                   </div>
               </div>
           `
            
        )
    })
}

const renderRandomArticlesPagination = () => {
    randomArticlesPagination.innerHTML = ""

    for (let i = 0; i < articlesArray.length; i++) {
        randomArticlesPagination.insertAdjacentHTML(
            "beforeend",
            `
            <span
                data-index="${i}"
                class="not-active-pagination-product cursor-pointer">
            </span>
            `
        )
    }
}

const updateRandomArticlesPagination = (swiper) => {
    const bullets = randomArticlesPagination.querySelectorAll("span")
    const activeIndex = swiper.realIndex % articlesArray.length

    bullets.forEach((bullet, index) => {
        bullet.classList.remove(
            "active-pagination-articles",
            "not-active-pagination-product"
        )

        if (index === activeIndex) {
            bullet.classList.add("active-pagination-articles")
        } else {
            bullet.classList.add("not-active-pagination-product")
        }
    })
}

createRandomArticlesHTML()
renderRandomArticlesPagination()

const randomArticlesSwiperInstance = new Swiper(".random-articles-container", {
    rtl: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 0,

    loop: true,
    speed: 800,

    observer: true,
    observeParents: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    },

    on: {
        init(swiper) {
            swiper.slideToLoop(0, 0)

            setTimeout(() => {
                updateRandomArticlesPagination(swiper)
            }, 0)
        },

        slideChange(swiper) {
            updateRandomArticlesPagination(swiper)
        }
    }
})
randomArticlesPagination.addEventListener("click", (event) => {
    const bullet = event.target.closest("span")

    if (!bullet) return

    const target = Number(bullet.dataset.index)

    if (Number.isNaN(target)) return

    randomArticlesSwiperInstance.slideToLoop(target, 800)
})




// * footer

// news letters
const newsLetterInput = $.querySelector(".news-letter-input")
const newsLetterBtn = $.querySelector(".news-letter-btn")
const emailToast = $.querySelector(".email-toast")
const toastTitle = $.querySelector(".toast-title")
const toastIcon = $.querySelector(".toast-icon")

let newsLettersContainer = []


newsLetterBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const userNewsLetter = newsLetterInput.value
    const regexNewsLetter = /^\w+([.\-_])?\w*@gmail.com$/g
    if (regexNewsLetter.test(userNewsLetter)) {
        newLetters = {
            id: newsLettersContainer.length + 1,
            newsLetter: userNewsLetter
        }
        newsLetterInput.value = ""
        
        
        if (newsLettersContainer.length === 0) {
            newsLettersContainer.push(newLetters)
            addToLocalStorage()
            showGoodToastBox()
            
        }  else {

    const isDuplicate = newsLettersContainer.some((item) => {
        return item.newsLetter === userNewsLetter
    })

    if (isDuplicate) {
        showDuplicateBox()
    } else {
        newsLettersContainer.push(newLetters)
        addToLocalStorage()
        showGoodToastBox()
    }
}
        
        
    }  else {
        newsLetterInput.value = ""
        showbadToastBox()
    }
    
})

const showGoodToastBox = () => {
    toastTitle.innerHTML = ""
    toastTitle.innerHTML = "ایمیل در خبرنامه عضویت یافت"

    toastIcon.classList.remove("text-red-200")
    toastIcon.classList.add("text-emerald-200")

    // ظاهر شدن از پایین به بالا
    emailToast.classList.remove(
        "opacity-0",
        "translate-y-10",
        "pointer-events-none",
        "bg-red-400"
    )
    
    emailToast.classList.add(
        "opacity-100",
        "translate-y-0",
        "scale-100",
        "bg-emerald-600/70"
    )
    
    setTimeout(() => {
        // بزرگ شدن + محو شدن
        emailToast.classList.remove(
            "opacity-100",
            "translate-y-0",
            "scale-100"
        )
    
        emailToast.classList.add(
            "opacity-0",
            "scale-110",
            "pointer-events-none"
        )
    }, 3000)

}
const showbadToastBox = () => {
    toastTitle.innerHTML = ""
    toastTitle.innerHTML = "ایمیل یا شماره همراه وارد شده نامعتبر است"

    toastIcon.classList.remove("text-emerald-200")
    toastIcon.classList.add("text-red-200")

    // ظاهر شدن از پایین به بالا
    emailToast.classList.remove(
        "opacity-0",
        "translate-y-10",
        "pointer-events-none",
        "bg-emerald-600/70"
    )

    emailToast.classList.add(
        "opacity-100",
        "translate-y-0",
        "scale-100",
        "bg-red-400"
    )

    setTimeout(() => {
        // بزرگ شدن + محو شدن
        emailToast.classList.remove(
            "opacity-100",
            "translate-y-0",
            "scale-100"
        )

        emailToast.classList.add(
            "opacity-0",
            "scale-110",
            "pointer-events-none"
        )
    }, 3000)
}
const showDuplicateBox = () => {
    toastTitle.innerHTML = ""
    toastTitle.innerHTML = "این ایمیل یا شماره همراه از قبل ثبت شده است"
    
    toastIcon.classList.remove("text-emerald-200")
    toastIcon.classList.add("text-red-200")
    
    // ظاهر شدن از پایین به بالا
    emailToast.classList.remove(
        "opacity-0",
        "translate-y-10",
        "pointer-events-none",
        "bg-emerald-600/70"
    )
    
    emailToast.classList.add(
        "opacity-100",
        "translate-y-0",
        "scale-100",
        "bg-red-400"
    )
    
    setTimeout(() => {
        // بزرگ شدن + محو شدن
        emailToast.classList.remove(
            "opacity-100",
            "translate-y-0",
            "scale-100"
        )
    
        emailToast.classList.add(
            "opacity-0",
            "scale-110",
            "pointer-events-none"
        )
    }, 3000)

}
function addToLocalStorage() {
    localStorage.setItem("news", JSON.stringify(newsLettersContainer))
}

toastIcon.addEventListener("click", () => {
    emailToast.classList.remove(
            "opacity-100",
            "translate-y-0",
            "scale-100"
        )
    
        emailToast.classList.add(
            "opacity-0",
            "scale-110",
            "pointer-events-none"
        )
})




// show footer nav bar in mobile
const footerIconBar=$.querySelector(".footer-icon-bar")
const footerItemsBar=$.querySelector(".footer-items-bar")
let openOrCloseFooterMenu=false
const showFooterBar=()=>{
    if(openOrCloseFooterMenu){
        footerIconBar.classList.add("close-hamburger-menu-footer")
        footerIconBar.classList.remove("open-hamburger-menu-footer")
        footerItemsBar.classList.add("hidden")
        openOrCloseFooterMenu=false
    }else{
        footerIconBar.classList.add("open-hamburger-menu-footer")
        footerIconBar.classList.remove("close-hamburger-menu-footer")
        footerItemsBar.classList.remove("hidden")
        openOrCloseFooterMenu=true
    }
}
footerIconBar.addEventListener("click",showFooterBar)

$.addEventListener("click",(e)=>{
    if(!footerItemsBar.contains(e.target)&&!footerIconBar.contains(e.target)&&openOrCloseFooterMenu){
        footerIconBar.classList.remove("open-hamburger-menu-footer")
        footerIconBar.classList.add("close-hamburger-menu-footer")
        footerItemsBar.classList.add("hidden")
        openOrCloseFooterMenu=false
    }
})





// support floating
const supportButton = $.querySelector(".support-button button")
const supportSymbol = $.querySelector(".support-button i")
const supportPanel = $.querySelector(".support-panel")

supportButton.addEventListener("click", () => {
    supportPanel.classList.toggle("open")
    supportSymbol.classList.toggle("ri-customer-service-fill")
    supportSymbol.classList.toggle("ri-close-line")

    supportButton.classList.toggle("paused")

    if (supportSymbol.classList.contains("ri-close-line")) {
        supportButton.classList.add("rounded-tl-xl")
    } else {
        supportButton.classList.remove("rounded-tl-xl")
    }

    console.log(supportButton.classList.contains("paused"))
})
$.addEventListener("click", (e) => {
    if (
        !supportButton.contains(e.target) &&
        !supportPanel.contains(e.target) &&
        supportPanel.classList.contains("open")
    ) {
        supportPanel.classList.remove("open")
        supportSymbol.classList.remove("ri-close-line")
        supportSymbol.classList.add("ri-customer-service-fill")
        supportButton.classList.remove("paused")
        supportButton.classList.remove("rounded-tl-xl")
    }
})







const getDataFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }

    const localNews = JSON.parse(localStorage.getItem("news"))

    if (localNews) {
        newsLettersContainer = localNews
    }
    
};
getDataFromLocalStorage()

const empty = () => {
    storyImg.querySelectorAll("img, video").forEach(el => el.remove());
    storyProgressBarContainer.innerHTML = ""
    headStoryTitle.innerHTML = ""
    storyDate.innerHTML = ""
    countLikes.innerHTML = ""
    linkStory.innerHTML = ""
    storyDetailsTitle.innerHTML = ""
    discount.innerHTML = ""
    price.innerHTML = ""
    colorsContainer.innerHTML = ""
}


window.addEventListener("load", getDataFromLocalStorage)
window.addEventListener("load", showGifs)
window.addEventListener("load", showRealTimeImg)
window.addEventListener("load", desktopDiscountedProducts)
window.addEventListener("load", mobileDiscountedProducts)
window.addEventListener("load", productDiscountedTimer)
window.addEventListener("load", addCategoryProduct)
window.addEventListener("load", addPopularProduct)
window.addEventListener("load", addMechanicalPartsHTML)
window.addEventListener("load", addviewedProduct)

window.addEventListener("load", function() {
    setTimeout(() => {
        initDiscountSection()
    }, 500)
})

menuIcon.addEventListener("click", showBar)
theme.addEventListener("click", changeTheme)

prevBtn.addEventListener("click", prevCircleStory)
nextBtn.addEventListener("click", nextCircleStory)

closeBtnStory.addEventListener("click", closeStory)
pauseBtnStory.addEventListener("click", pauseStory)
playBtnStory.addEventListener("click", playStory)


window.addEventListener("click", (e) => {
    const product = e.target.closest("[data-slug]")
    
    if (product) {
        const slug = product.dataset.slug

        window.location.href=`../show-product/singleProduct.html?slug=${slug}`
    }
})