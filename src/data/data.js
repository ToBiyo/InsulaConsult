
export const projectsCardsData = class {
    constructor(logo, title, description){
        this.logo = logo;
        this.title = title;
        this.description = description;
    }
};

export const servicesCardsData = class{
    constructor(img, title, subservices){
        this.img = img;
        this.title = title;
        this.subservices = subservices;
    }
}

export const companiesCardsData = class{
    constructor(src, description, link){
        this.src = src;
        this.description = description;
        this.link = link;
    }
}

export const collaboratorsCardsData = class{
    constructor(image, name, role, story, interests, linkedin){
        this.image = image;
        this.name = name;
        this.role = role;
        this.story = story;
        this.interests = interests;
        this.linkedin = linkedin;
    }
}