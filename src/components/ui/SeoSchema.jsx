import React from "react";
import { BUSINESS, PRODUCTS, CATEGORIES, FAQS, formatPrice } from "@/data/products";

export default function SeoSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      description: BUSINESS.description,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      openingHours: "Mo-Sa 08:00-20:00",
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: CATEGORIES.find((c) => c.id === p.category)?.label,
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "ARS",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
