(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDCOlUHw-jBFV9d0i5Noh5J3NoWX-mimw8"),
    authDomain: ("TURBOPACK compile-time value", "prodg-9828d.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "prodg-9828d"),
    storageBucket: ("TURBOPACK compile-time value", "prodg-9828d.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "652305094640"),
    appId: ("TURBOPACK compile-time value", "G-915G1F5EJ6")
};
// Prevent re-initialising during hot-reload in dev
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    signOut: async ()=>{}
});
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsubscribe": (firebaseUser)=>{
                    setUser(firebaseUser);
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["AuthProvider.useEffect"], []);
    const signOut = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            signOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/auth-context.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
function useAuth() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/metadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultMetadata",
    ()=>defaultMetadata,
    "engineeringMetadata",
    ()=>engineeringMetadata,
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema,
    "generateFAQSchema",
    ()=>generateFAQSchema,
    "homeMetadata",
    ()=>homeMetadata,
    "mbaMetadata",
    ()=>mbaMetadata,
    "mbbsMetadata",
    ()=>mbbsMetadata,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: 'Euro Tech EDU - Study Abroad',
    description: 'Expert study abroad consultants in India offering end-to-end guidance for MBBS, Engineering, MBA, and Post-Graduation programs in USA, UK, Germany, Australia, Canada, and more.',
    url: 'https://www.eurotechedu.in',
    ogImage: '/og-image.jpg',
    email: 'info@eurotechedu.in',
    phone: '+91-9004675133',
    address: {
        street: 'Dombivli',
        city: 'Dombivli',
        state: 'Maharashtra',
        zip: '421201',
        country: 'India'
    },
    social: {
        facebook: 'https://facebook.com/eurotechedu',
        instagram: 'https://instagram.com/eurotechedu',
        linkedin: 'https://linkedin.com/company/eurotechedu',
        youtube: 'https://youtube.com/@eurotechedu'
    }
};
const defaultMetadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: [
        'study abroad consultant India',
        'MBBS abroad for Indian students',
        'engineering abroad',
        'MBA abroad',
        'post graduation abroad',
        'overseas education consultant',
        'study abroad 2026',
        'international education',
        'study in USA',
        'study in UK',
        'study in Germany',
        'study in Australia',
        'study in Canada',
        'NMC approved universities',
        'affordable MBBS abroad',
        'free consultation study abroad'
    ],
    authors: [
        {
            name: 'Euro Tech EDU'
        }
    ],
    creator: 'Euro Tech EDU',
    publisher: 'Euro Tech EDU',
    category: 'Education',
    classification: 'Business',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-IN': '/',
            'en': '/'
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        alternateLocale: [
            'en_US',
            'en_GB'
        ],
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: 'Euro Tech EDU - Study Abroad Consultant'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            siteConfig.ogImage
        ],
        creator: '@eurotechedu'
    },
    verification: {
    },
    other: {
        'theme-color': '#0066cc',
        'msapplication-TileColor': '#0066cc',
        'msapplication-config': '/browserconfig.xml'
    }
};
const homeMetadata = {
    title: '#1 Study Abroad Consultant in India | MBBS, Engineering, MBA | Euro Tech EDU',
    description: 'Expert study abroad consultants in India. End-to-end guidance for MBBS, Engineering & MBA programs in USA, UK, Germany, Australia, Canada. 500+ successful placements. Free consultation available.',
    keywords: [
        'study abroad consultant India',
        'best overseas education consultant',
        'MBBS abroad for Indian students',
        'engineering abroad',
        'MBA abroad',
        'study abroad 2026-27',
        'euro tech edu',
        'study abroad free consultation'
    ],
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Euro Tech EDU | #1 Study Abroad Consultant in India',
        description: 'Expert study abroad consultants in India. End-to-end guidance for MBBS, Engineering & MBA programs in USA, UK, Germany, Australia. 500+ successful placements.',
        url: siteConfig.url
    }
};
const mbbsMetadata = {
    title: 'MBBS Abroad for Indian Students 2026 | NMC Approved Universities | Low Fees',
    description: 'Study MBBS abroad at NMC approved universities. Affordable medical degrees in Georgia, UK, Germany, USA, Australia. No donation/capitation fees. FMGE/NEXT preparation support. 2026-27 intake open. Apply now!',
    keywords: [
        'MBBS abroad for Indian students',
        'NMC approved universities abroad',
        'MBBS in Georgia',
        'MBBS in UK',
        'MBBS in Germany',
        'MBBS abroad low fees',
        'MBBS abroad without NEET',
        'MBBS abroad 2026',
        'FMGE coaching',
        'medical degree abroad',
        'study medicine abroad',
        'affordable MBBS',
        'MBBS abroad admission'
    ],
    alternates: {
        canonical: '/programs/mbbs'
    },
    openGraph: {
        title: 'MBBS Abroad for Indian Students 2026 | NMC Approved | Euro Tech EDU',
        description: 'Study MBBS abroad at NMC approved universities. Affordable options in Georgia, UK, Germany. No donation fees. 2026 intake open.',
        url: `${siteConfig.url}/programs/mbbs`
    }
};
const engineeringMetadata = {
    title: 'Engineering Abroad for Indian Students | Top Universities 2026 | Free Consultation',
    description: 'Study Engineering abroad at top global universities. Practical learning, paid internships & PR pathways. USA, Germany, Canada, Australia options. Free profile evaluation and admission guidance.',
    keywords: [
        'engineering abroad for Indian students',
        'study engineering abroad',
        'B.Tech abroad',
        'engineering in Germany',
        'engineering in USA',
        'engineering in Canada',
        'engineering abroad scholarships',
        'computer science abroad',
        'mechanical engineering abroad',
        'STEM programs abroad',
        'engineering abroad fees',
        'best engineering universities abroad'
    ],
    alternates: {
        canonical: '/programs/engineering'
    },
    openGraph: {
        title: 'Engineering Abroad | Top Universities 2026 | Euro Tech EDU',
        description: 'Study Engineering abroad at top global universities. Practical learning, paid internships & PR pathways. Free consultation.',
        url: `${siteConfig.url}/programs/engineering`
    }
};
const mbaMetadata = {
    title: 'MBA Abroad for Indian Students | Top B-Schools 2026 | High ROI | Free Consultation',
    description: 'MBA abroad programs for Indian students. Top B-schools in USA, UK, Australia, Canada, Germany. 1-year MBA options available. Global networking & post-study work visas. Free consultation.',
    keywords: [
        'MBA abroad for Indian students',
        'study MBA abroad',
        'MBA in USA',
        'MBA in UK',
        'MBA in Australia',
        'MBA in Canada',
        'MBA in Germany',
        '1 year MBA abroad',
        'executive MBA abroad',
        'MBA abroad without GMAT',
        'MBA abroad fees',
        'top B schools abroad',
        'MBA scholarships abroad',
        'post study work visa MBA'
    ],
    alternates: {
        canonical: '/programs/mba'
    },
    openGraph: {
        title: 'MBA Abroad | Top B-Schools 2026 | Euro Tech EDU',
        description: 'MBA abroad programs for Indian students. Top B-schools in USA, UK, Australia. 1-year options. Global networking & post-study work visas.',
        url: `${siteConfig.url}/programs/mba`
    }
};
function generateBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
}
function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/seo/structured-data.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleSchema",
    ()=>ArticleSchema,
    "BreadcrumbSchema",
    ()=>BreadcrumbSchema,
    "CourseSchema",
    ()=>CourseSchema,
    "FAQPageSchema",
    ()=>FAQPageSchema,
    "HowToSchema",
    ()=>HowToSchema,
    "LocalBusinessSchema",
    ()=>LocalBusinessSchema,
    "OrganizationSchema",
    ()=>OrganizationSchema,
    "ServiceSchema",
    ()=>ServiceSchema,
    "WebPageSchema",
    ()=>WebPageSchema,
    "WebsiteSchema",
    ()=>WebsiteSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/metadata.ts [app-client] (ecmascript)");
'use client';
;
;
;
function OrganizationSchema() {
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
        alternateName: 'Euro Tech EDU',
        url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url,
        logo: {
            '@type': 'ImageObject',
            url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/logo.png`,
            width: 512,
            height: 512
        },
        description: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].description,
        foundingDate: '2014',
        sameAs: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].social.facebook,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].social.instagram,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].social.linkedin,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].social.youtube
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phone,
            contactType: 'customer service',
            availableLanguage: [
                'English',
                'Hindi',
                'Marathi'
            ],
            areaServed: 'IN'
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.city,
            addressRegion: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.state,
            postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.zip,
            addressCountry: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.country
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "organization-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(organizationData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = OrganizationSchema;
function LocalBusinessSchema() {
    const localBusinessData = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
        alternateName: 'Euro Tech Education',
        url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url,
        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phone,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].email,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].description,
        image: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/og-image.jpg`,
        '@id': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url,
        address: {
            '@type': 'PostalAddress',
            streetAddress: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.street,
            addressLocality: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.city,
            addressRegion: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.state,
            postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.zip,
            addressCountry: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address.country
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.2183,
            longitude: 73.0878
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                opens: '10:00',
                closes: '19:00'
            }
        ],
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'India'
        },
        serviceType: [
            'Study Abroad Consulting',
            'MBBS Admission Guidance',
            'Engineering Abroad Admissions',
            'MBA Abroad Consulting',
            'Visa Documentation Support',
            'Scholarship Guidance'
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Study Abroad Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Free Career Counselling',
                        description: 'Personalized one-to-one counseling for study abroad aspirants'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'University Shortlisting',
                        description: 'Expert university selection based on profile and budget'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Admission Processing',
                        description: 'End-to-end application and admission support'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Visa Documentation',
                        description: 'Complete visa filing and documentation assistance'
                    }
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "local-business-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(localBusinessData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c1 = LocalBusinessSchema;
function WebsiteSchema() {
    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        },
        publisher: {
            '@type': 'Organization',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
            logo: {
                '@type': 'ImageObject',
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/logo.png`
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "website-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(websiteData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c2 = WebsiteSchema;
function WebPageSchema({ title, description, url, image }) {
    const webpageData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: description,
        url: url,
        image: image || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].ogImage,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        publisher: {
            '@type': 'Organization',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
            logo: {
                '@type': 'ImageObject',
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/logo.png`
            }
        },
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString()
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "webpage-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(webpageData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_c3 = WebPageSchema;
function BreadcrumbSchema({ items }) {
    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "breadcrumb-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(breadcrumbData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_c4 = BreadcrumbSchema;
function FAQPageSchema({ questions }) {
    const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "faq-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(faqData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c5 = FAQPageSchema;
function CourseSchema({ name, description, provider, courseMode = 'onsite', educationalLevel }) {
    const courseData = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: name,
        description: description,
        provider: {
            '@type': 'Organization',
            name: provider,
            sameAs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url
        },
        courseMode: courseMode,
        educationalLevel: educationalLevel || 'Undergraduate',
        inLanguage: 'English',
        availableLanguage: [
            'English'
        ],
        educationalCredentialAwarded: `${name} Degree`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "course-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(courseData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_c6 = CourseSchema;
function ServiceSchema({ name, description, provider, areaServed }) {
    const serviceData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: name,
        provider: {
            '@type': 'Organization',
            name: provider
        },
        description: description,
        areaServed: {
            '@type': 'Place',
            name: areaServed
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${name} Services`
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "service-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(serviceData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
_c7 = ServiceSchema;
function HowToSchema({ name, description, steps, totalTime }) {
    const howToData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: name,
        description: description,
        totalTime: totalTime || 'P3M',
        step: steps.map((step)=>({
                '@type': 'HowToStep',
                name: step.name,
                text: step.text,
                url: step.url
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "howto-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(howToData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_c8 = HowToSchema;
function ArticleSchema({ title, description, url, image, datePublished, dateModified, author }) {
    const articleData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        url: url,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: author
        },
        publisher: {
            '@type': 'Organization',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name,
            logo: {
                '@type': 'ImageObject',
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].url}/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "article-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(articleData)
        }
    }, void 0, false, {
        fileName: "[project]/components/seo/structured-data.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
_c9 = ArticleSchema;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "OrganizationSchema");
__turbopack_context__.k.register(_c1, "LocalBusinessSchema");
__turbopack_context__.k.register(_c2, "WebsiteSchema");
__turbopack_context__.k.register(_c3, "WebPageSchema");
__turbopack_context__.k.register(_c4, "BreadcrumbSchema");
__turbopack_context__.k.register(_c5, "FAQPageSchema");
__turbopack_context__.k.register(_c6, "CourseSchema");
__turbopack_context__.k.register(_c7, "ServiceSchema");
__turbopack_context__.k.register(_c8, "HowToSchema");
__turbopack_context__.k.register(_c9, "ArticleSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1842ce3f._.js.map