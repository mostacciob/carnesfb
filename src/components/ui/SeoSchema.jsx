import React, { useEffect, useState } from "react";
import { BUSINESS, CATEGORIES, FAQS } from "@/data/products";
import { fetchCatalog } from "@/lib/sheetCatalog";

const INSTAGRAM_URL = "https://www.instagram.com/carnes.fb/";

function todayISODate() {
  return new Date().toISOString().slice(0, 10);
}

export default function SeoSchema() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let montado = true;
    fetchCatalog()
      .then(({ productos }) => {
        if (montado) setProductos(productos);
      })
      .catch(() => {});
    return () => { montado = false; };
  }, []);

  const priceValidUntil = todayISODate();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "GroceryStore",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      description: BUSINESS.description,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Manuela Gómez 277",
        addressLocality: "General Rodríguez",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: {
        "@type": "Place",
        name: "General Rodríguez y alrededores",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "08:00",
          closes: "14:00",
        },
      ],
      priceRange: "$$",
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BUSINESS.url}/#website`,
      url: BUSINESS.url,
      name: BUSINESS.name,
      publisher: { "@id": `${BUSINESS.url}/#business` },
      inLanguage: "es-AR",
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
  ];

  if (productos.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: productos.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          ...(p.description ? { description: p.description } : {}),
          category: CATEGORIES.find((c) => c.id === p.category)?.label,
          image: `${BUSINESS.url}${p.image}`,
          url: `${BUSINESS.url}/#catalogo`,
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "ARS",
            priceValidUntil,
            availability: "https://schema.org/InStock",
            seller: { "@id": `${BUSINESS.url}/#business` },
          },
        },
      })),
    });
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
