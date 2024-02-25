export const SeoOptimizationHeader: React.FC = () => {
    return (
        <>
            {/* Corporation Schema */}
            {/* <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Corporation",
                    "name": "Dremable",
                    "alternateName": "Dremable Wedding",
                    "url": "https://www.dremable.com/",
                    "logo": "https://drive.google.com/file/d/1vGso-q00IrIGLVPbJNDiVwEEPuw_jQlg/view?usp=sharing",
                    "sameAs": [
                        "https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h",
                        "https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg==",
                        "https://www.youtube.com/channel/UCjqqcLCuG2YdM9Sh5QJJCYA",
                        "https://twitter.com/dremablewedding",
                        "https://www.dremable.com/"
                    ]
                })}
            </script> */}

            {/* BreadcrumbList */}
            {/* <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Wedding Planners",
                            "item": "https://www.dremable.com/magicians/weddingPlanners"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Wedding Photographers",
                            "item": "https://www.dremable.com/magicians/photographers"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Bridal Makeup Artists",
                            "item": "https://www.dremable.com/magicians/makeupArtists"
                        },
                        {
                            "@type": "ListItem",
                            "position": 4,
                            "name": "Who We Are",
                            "item": "https://www.dremable.com/about"
                        }
                    ]
                })}
            </script> */}

            {/* gtag */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-8ES0Q9KN1N`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8ES0Q9KN1N', {
                        page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
};

export const SeoOptimizationBody: React.FC = () => {
    return (
        <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDR7CP7Z"
                    height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
            </noscript>
        </>
    );
}
