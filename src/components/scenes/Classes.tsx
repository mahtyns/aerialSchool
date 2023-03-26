import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import SectionTitle from "../shared/SectionTitle"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Classes = (props: Props) => {
    return (
        <section id="ourclasses" className="w-5/6 min-h-full py-20 mx-auto">
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.OurClasses)}>
                <div className="w-full text-center pt-12">
                    <SectionTitle>
                        Discover our classes
                    </SectionTitle>
                    <p className="w-2/3 mx-auto pt-12 pb-0 text-primary-500 text-2xl">
                        Our aerial classes include everything from aerial yoga and aerial silks to aerial hoop and aerial hammock, giving you plenty of options to choose from. With our focus on safety, technique, and fun, our aerial school is the perfect place to learn and grow in your aerial arts practice. Come fly with us and experience the joy and excitement of aerial arts today!
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default Classes