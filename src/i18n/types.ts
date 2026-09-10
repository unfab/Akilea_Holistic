export type Language = 'sl' | 'en' | 'hr' | 'it' | 'sr';

export interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  stripePriceId?: string;
}

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    about: string;
    blog: string;
    consultation: string;
    lectures: string;
    ebook: string;
    bookAppointment: string;
    holisticCenter: string;
  };
  hero: {
    badge: string;
    title: string;
    desc: string;
    ctaServices: string;
    ctaAbout: string;
  };
  massagesSection: {
    badge: string;
    title: string;
    desc: string;
    viewAllServices: string;
    bookNow: string;
    durationSuffix: string;
  };
  threeSquares: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDesc: string;
    square1: {
      badge: string;
      tag: string;
      date: string;
      title: string;
      desc: string;
      cta: string;
      allBlogs: string;
    };
    square2: {
      badge: string;
      tag: string;
      date: string;
      title: string;
      desc: string;
      cta: string;
      allWorkshops: string;
    };
    square3: {
      badge: string;
      tag: string;
      date: string;
      title: string;
      desc: string;
      cta: string;
      moreInfo: string;
    };
  };
  aboutSection: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    quote: string;
    imageAlt: string;
  };
  testimonialsSection: {
    badge: string;
    title: string;
    desc: string;
    verified: string;
    items: TestimonialItem[];
  };
  bookingWidget: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDesc: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    selectDatePrompt: string;
    noSlots: string;
    monthNames: string[];
    dayNames: string[];
    timesTitle: string;
    contactSub: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    confirmBtn: string;
    payAtLocationBtn: string;
    payWithCardBtn: string;
    waitingText: string;
    redirectingText: string;
    successTitle: string;
    successDesc: string;
    bookAnother: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    desc: string;
    detailsBtn: string;
    closeDetailsBtn: string;
    bookBtn: string;
    payOnlineBtn: string;
    items: ServiceItem[];
  };
  blogPage: {
    badge: string;
    title: string;
    desc: string;
    readTimePrefix: string;
    backBtn: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    ctaEmailBtn: string;
  };
  footer: {
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    tagline: string;
    contactTitle: string;
    linksTitle: string;
    allServices: string;
    privacyPolicy: string;
    terms: string;
    rightsReserved: string;
  };
  cookieBanner: {
    title: string;
    text: string;
    privacyLink: string;
    acceptBtn: string;
  };
}
