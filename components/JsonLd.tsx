export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://pixelfluxcreative.com/#organization",
                "name": "Pixel Flux Creative",
                "url": "https://pixelfluxcreative.com",
                "logo": "http://pixelfluxcreative.com/wp-content/uploads/2026/01/logo_pxf_n.png",
                "description": "Agencia de ingeniería digital global especializada en la creación de ecosistemas autónomos.",
                "sameAs": [
                    "https://www.linkedin.com/company/pixel-flux-creative",
                    "https://www.instagram.com/pixelfluxcreative"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+56-9-3234-8612",
                    "contactType": "customer service",
                    "email": "info@pixelfluxcreative.com",
                    "areaServed": "Global",
                    "availableLanguage": ["Es", "En"]
                }
            },
            {
                "@type": "ProfessionalService",
                "parentOrganization": {
                    "@id": "https://pixelfluxcreative.com/#organization"
                },
                "name": "Pixel Flux Creative",
                "image": "http://pixelfluxcreative.com/wp-content/uploads/2026/01/logo_pxf_n.png",
                "priceRange": "$$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "CL"
                },
                "telephone": "+56 9 3234 8612"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
