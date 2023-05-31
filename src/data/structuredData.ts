export const structuredData = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "TV-service",
  telephone: [
    "+38 (044) 233-75-08",
    "+38 (050) 974-77-22",
    "+38 (067) 659-39-05",
    "+38 (063) 233-75-08",
  ],
  email: "rizotv@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Проспект Перемоги 60, м.Київ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: {
      "@type": "DayOfWeek",
      name: "ПН–СБ",
    },
    opens:
      "Укажите допустимую дату и время по стандарту ISO 8601. Например: 2015-07-27 или 2015-07-27T15:30",
    closes:
      "Укажите допустимую дату и время по стандарту ISO 8601. Например: 2015-07-27 или 2015-07-27T15:30",
  },
};
