module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/metadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/metadata.ts [app-route] (ecmascript)");
;
function manifest() {
    return {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].name,
        short_name: 'EuroTechEDU',
        description: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0066cc',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en-IN',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml'
            }
        ],
        categories: [
            'education',
            'business'
        ],
        shortcuts: [
            {
                name: 'Free Consultation',
                short_name: 'Consult',
                description: 'Get free study abroad consultation',
                url: '/#contact',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192'
                    }
                ]
            },
            {
                name: 'MBBS Programs',
                short_name: 'MBBS',
                description: 'Explore MBBS abroad options',
                url: '/programs/mbbs',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192'
                    }
                ]
            },
            {
                name: 'Engineering Programs',
                short_name: 'Engineering',
                description: 'Explore Engineering abroad options',
                url: '/programs/engineering',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192'
                    }
                ]
            },
            {
                name: 'MBA Programs',
                short_name: 'MBA',
                description: 'Explore MBA abroad options',
                url: '/programs/mba',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192'
                    }
                ]
            }
        ],
        related_applications: [],
        prefer_related_applications: false
    };
}
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05d0f474._.js.map