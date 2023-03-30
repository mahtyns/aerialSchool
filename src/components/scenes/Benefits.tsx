import { BenefitType, SelectedPage } from "@/shared/types"
import Benefit from "../shared/Benefit"
import { motion } from "framer-motion"
import SectionTitle from "../shared/SectionTitle"
import {
    HomeModernIcon,
    AcademicCapIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        benefit: 'Best certified instructors',
        description: `Our instructors are highly experienced and dedicated to helping you achieve your goals, whether you're a beginner or an advanced aerialist.`
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        benefit: 'Modern facilites and equipment',
        description: `Our facilities are state-of-the-art, with modern equipment and spacious studios that provide plenty of room to move and fly. `
    },
    {
        icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
        benefit: 'Follow your progress',
        description: `We also have a dedicated app that allows you to easily track your progress, set goals, and stay motivated.`
    },
]

const Benefits = (props: Props) => {
    return (
        <section id='whyus'
            className="mx-auto md:w-5/6 min-h-5/6 pt-20 xs:pt-12">
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.WhyUs)}>
                <div className="w-full text-center py-12">
                    <SectionTitle>
                        Best aerial classes in your zone
                    </SectionTitle>
                    <p className="md:w-2/3 mx-auto pt-12 pb-0 text-primary-500 md:text-xl font-montserrat xs:text-lg xs:w-full xs:pt-6">
                        At our aerial school, we believe that aerial arts are not only a fun and exciting way to stay fit, but also offer a range of physical and mental benefits. No matter which class you choose, our experienced instructors will guide you through proper technique and progression, helping you achieve your aerial goals safely and effectively.
                    </p>
                </div>
                <div className="flex md:flex-row gap-6 pt-8 xs:flex-col md:justify-center sm:items-center xs:items-center sm:w-full xxs:flex-col">
                    {
                        benefits.map((elem: BenefitType) =>
                            <Benefit
                                key={elem.benefit}
                                benefit={elem.benefit}
                                description={elem.description}
                                icon={elem.icon}
                                setSelectedPage={props.setSelectedPage} />
                        )
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits