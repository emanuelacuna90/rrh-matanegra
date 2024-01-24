(() => {
var exports = {};
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 8478:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SingleCard_container__JdMph",
	"hover-animation-basic": "SingleCard_hover-animation-basic__yzZmR",
	"anim-play": "SingleCard_anim-play__0LZMO",
	"anim-fade-in-up": "SingleCard_anim-fade-in-up__oKDfG",
	"fade-in-up": "SingleCard_fade-in-up__LOmn4",
	"anim-fade-in-left": "SingleCard_anim-fade-in-left__IQZ9Y",
	"fade-in-left": "SingleCard_fade-in-left__q8Lso",
	"anim-fade-in-right": "SingleCard_anim-fade-in-right__5E2c3",
	"fade-in-right": "SingleCard_fade-in-right__R2wq1",
	"anim-delay-1": "SingleCard_anim-delay-1__07eOj",
	"anim-delay-2": "SingleCard_anim-delay-2__b2FJ0",
	"anim-delay-3": "SingleCard_anim-delay-3__ejw0S",
	"anim-delay-4": "SingleCard_anim-delay-4__DALXu",
	"anim-delay-5": "SingleCard_anim-delay-5__sv3W3",
	"anim-delay-6": "SingleCard_anim-delay-6__xmOch",
	"anim-delay-7": "SingleCard_anim-delay-7__ua95l",
	"anim-delay-8": "SingleCard_anim-delay-8__bQ7yZ",
	"anim-delay-9": "SingleCard_anim-delay-9__lk_Wd",
	"anim-delay-10": "SingleCard_anim-delay-10__WfxVf",
	"anim-delay-11": "SingleCard_anim-delay-11__n7tZR",
	"anim-delay-12": "SingleCard_anim-delay-12__kDZGL",
	"anim-delay-13": "SingleCard_anim-delay-13__w19ba",
	"anim-delay-14": "SingleCard_anim-delay-14__6kDUc",
	"sinlge-card": "SingleCard_sinlge-card__ZtgSn",
	"content-image": "SingleCard_content-image__tfLDy",
	"information": "SingleCard_information__GrdAd",
	"title": "SingleCard_title__UFwDR",
	"image": "SingleCard_image__Rw4TO"
};


/***/ }),

/***/ 7127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8478);
/* harmony import */ var _SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4397);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4009);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5489);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SingleCard = ({ modelo , images , transmicion , gas , traccion  })=>{
    const { ref: refAnimation , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        threshold: 0
    });
    const classAnimPlay = inView && (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["anim-play"]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${(_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["sinlge-card"])} ${(_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[`anim-fade-in-up`]} ${classAnimPlay}`,
        ref: refAnimation,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    size: "md",
                    color: "primary",
                    className: (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                    children: modelo
                }),
                images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: (images === null || images === void 0 ? void 0 : images.length) > 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        className: (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().swiper),
                        ..._data__WEBPACK_IMPORTED_MODULE_7__/* .swiperProps */ .p,
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                            swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade,
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination
                        ],
                        children: images === null || images === void 0 ? void 0 : images.map((hilux, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["content-image"]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        src: `/assets/img/auto/hilux${hilux.hilux}.jpeg`,
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                })
                            }, index)
                        )
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().image)} ${(_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().swiper)}`,
                        children: images === null || images === void 0 ? void 0 : images.map((hilux, index)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                src: `/assets/img/auto/hilux${hilux.hilux}.jpeg`,
                                width: 350,
                                height: 350,
                                objectFit: "cover"
                            }, index));
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_SingleCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().information),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                " Transmisi\xf3n: ",
                                transmicion
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                " Combustible: ",
                                gas
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                " Tracci\xf3n: ",
                                traccion
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ swiperProps)
/* harmony export */ });
const swiperProps = {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    pagination: {
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    }
};


/***/ }),

/***/ 5066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_dataSingle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4704);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6076);
/* harmony import */ var _organisms_Contact_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4981);
/* harmony import */ var _organisms_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7127);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_organisms_Contact_Contact__WEBPACK_IMPORTED_MODULE_2__, _organisms_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_3__]);
([_organisms_Contact_Contact__WEBPACK_IMPORTED_MODULE_2__, _organisms_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const LayoutSingle = ({ vehicleData  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_organisms_SingleCard_SingleCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...vehicleData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_organisms_Contact_Contact__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: _data_dataSingle__WEBPACK_IMPORTED_MODULE_1__/* .data.title */ .a.title,
                copy: _data_dataSingle__WEBPACK_IMPORTED_MODULE_1__/* .data.copy */ .a.copy,
                templateId: _utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .emailJsSingleTemplateId */ .AU,
                layout: "vehicle"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ data)
/* harmony export */ });
const data = {
    title: 'Consulta por reserva',
    copy: 'Complete lo campos y nos pondremos en contacto a la brevedad'
};


/***/ }),

/***/ 5363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ cards)
/* harmony export */ });
const cards = [
    {
        id: 1,
        slug: 'cronos-drive-cvt',
        modelo: 'Cronos',
        transmicion: 'Automatica',
        gas: 'Nafta',
        traccion: '-',
        images: [
            {
                hilux: 21
            },
            {
                hilux: 22
            },
            {
                hilux: 23
            },
            {
                hilux: 24
            }, 
        ]
    },
    {
        id: 2,
        modelo: 'Yaris XLS',
        transmicion: 'Manual',
        gas: 'nafta',
        traccion: '-',
        slug: 'yaris-xls',
        images: [
            {
                hilux: 18
            },
            {
                hilux: 19
            }, 
        ]
    },
    {
        id: 3,
        modelo: 'Etios X6 M/T',
        transmicion: 'Manual',
        gas: 'nafta',
        traccion: '-',
        slug: 'etios',
        images: [
            {
                hilux: 16
            },
            {
                hilux: 17
            }, 
        ]
    },
    {
        id: 4,
        modelo: 'Hilux DX',
        transmicion: 'Manual',
        gas: 'nafta',
        traccion: '4x4',
        slug: 'hilux-dx-1',
        images: [
            {
                hilux: 1
            },
            {
                hilux: 2
            },
            {
                hilux: 3
            },
            {
                hilux: 4
            },
            {
                hilux: 5
            },
            {
                hilux: 6
            },
            {
                hilux: 7
            },
            {
                hilux: 8
            },
            {
                hilux: 18
            },
            {
                hilux: 19
            },
            {
                hilux: 20
            }, 
        ]
    },
    {
        id: 5,
        modelo: 'Hilux SRV',
        transmicion: 'Automatica',
        gas: 'nafta',
        traccion: '4x4',
        slug: 'hilux-srv',
        images: [
            {
                hilux: 1
            },
            {
                hilux: 2
            },
            {
                hilux: 3
            },
            {
                hilux: 4
            },
            {
                hilux: 5
            },
            {
                hilux: 6
            }, 
        ]
    },
    {
        id: 6,
        modelo: 'Hilux DX',
        transmicion: 'Manual',
        gas: 'nafta',
        traccion: '4x4',
        slug: 'hilux-dx-2',
        images: [
            {
                hilux: 1
            },
            {
                hilux: 2
            },
            {
                hilux: 3
            },
            {
                hilux: 4
            },
            {
                hilux: 5
            },
            {
                hilux: 6
            },
            {
                hilux: 7
            },
            {
                hilux: 8
            },
            {
                hilux: 18
            },
            {
                hilux: 19
            },
            {
                hilux: 20
            }, 
        ]
    },
    {
        id: 7,
        modelo: 'Hilux DX c/s',
        transmicion: 'Manual',
        gas: 'Gas Oil',
        traccion: '4x4',
        slug: 'hilux-dx-cs',
        images: [
            {
                hilux: 25
            },
            {
                hilux: 27
            },
            {
                hilux: 28
            },
            {
                hilux: 29
            },
            {
                hilux: 30
            },
            {
                hilux: 31
            }, 
        ]
    }, 
];


/***/ }),

/***/ 1745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_dataVehicles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5363);
/* harmony import */ var _components_templates_HeadSeo_HeadSeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9679);
/* harmony import */ var _components_templates_LayoutSingle_LayoutSingle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_LayoutSingle_LayoutSingle__WEBPACK_IMPORTED_MODULE_3__]);
_components_templates_LayoutSingle_LayoutSingle__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const VehicleDetail = ({ vehicleData  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_HeadSeo_HeadSeo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: `Matanegra SRL | ${vehicleData.modelo}`,
                content: "Consulta por reserva"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_LayoutSingle_LayoutSingle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                vehicleData: vehicleData
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VehicleDetail);
// Static Props
async function getStaticPaths() {
    return {
        paths: _data_dataVehicles__WEBPACK_IMPORTED_MODULE_1__/* .cards.map */ ._.map(({ slug  })=>({
                params: {
                    vehicle: slug
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { vehicle  } = params;
    const vehicleData = _data_dataVehicles__WEBPACK_IMPORTED_MODULE_1__/* .cards.find */ ._.find((card)=>card.slug === vehicle
    );
    return {
        props: {
            vehicleData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@emailjs/browser");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,134,699], () => (__webpack_exec__(1745)));
module.exports = __webpack_exports__;

})();