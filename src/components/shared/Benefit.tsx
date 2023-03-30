import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"

type Props = {
    icon: JSX.Element,
    benefit: string,
    description: string
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = (props: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            className="border-2 md:w-[450px] h-96 rounded-xl xs:w-5/6 sm:w-2/3" >
            <div className="p-6 mx-auto text-center">
                <div className="flex items-center justify-center w-full py-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full text-white flex items-center justify-center">
                        {props.icon}
                    </div>
                </div>
                <div className="text-special-500 text-2xl py-2 xs:text-xl sm:text-xl">
                    {props.benefit}
                </div>
                <div className="text-primary-500 text-xl py-4 w-5/6 mx-auto font-montserrat xs:text-lg sm:text-md">
                    {props.description}
                </div>
                <AnchorLink
                    href="contactus"
                    onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
                    className="text-secondary-500 text-xl">
                    Learn more...
                </AnchorLink>
            </div>
        </motion.div >
    )
}

export default Benefit