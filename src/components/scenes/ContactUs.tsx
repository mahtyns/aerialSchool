import { SelectedPage } from "@/shared/types"
import SectionTitle from "../shared/SectionTitle"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = (props: Props) => {
    return (
        <section id="contactus" className="w-5/6 min-h-full py-20 mx-auto">
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.ContactUs)}>
                <div className="w-full text-center pt-12">
                    <SectionTitle>
                        Join us today!
                    </SectionTitle>
                    <p className="md:w-2/3 mx-auto pt-12 pb-0 text-primary-500 text-2xl xs:text-xl xs:w-full font-montserrat">
                        If you're ready to take your workout to the next level, check out our available aerial courses and sign up for a class today!
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs