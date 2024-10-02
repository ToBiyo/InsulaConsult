export const projectsCardsData = class {
  constructor(logo, title, description, alt) {
    this.logo = logo;
    this.title = title;
    this.description = description;
    this.alt = alt;
  }
};

export const servicesCardsData = class {
  constructor(img, title, subservices, alt) {
    this.img = img;
    this.title = title;
    this.subservices = subservices;
    this.alt = alt;
  }
};
