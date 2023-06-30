export enum SelectedPage {
    Home = "home",
    WhyUs = "whyus",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface BenefitType {
    icon: JSX.Element,
    benefit: string,
    description: string
}

export interface ClassInt {
    class_name: string,
    class_description: string,
    class_img: string
}