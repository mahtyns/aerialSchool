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