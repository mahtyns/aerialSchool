import { ClassInt, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import SectionTitle from "../shared/SectionTitle"
import Class from "../shared/Class"
import course1 from '@/assets/Courses1.png'
import course2 from '@/assets/Courses2.png'
import course3 from '@/assets/Courses3.png'
import course4 from '@/assets/Courses4.png'
import course5 from '@/assets/Courses5.png'

const classes: Array<ClassInt> = [
    {
        class_name: 'Aerial hoop',
        class_description: 'Discover the art of aerial hoop as you gracefully maneuver through suspended hoops. Build strength, flexibility, and coordination while performing stunning aerial tricks and poses high above the ground.',
        class_img: course1
    },
    {
        class_name: 'Stretching',
        class_description: 'Improve your flexibility, body alignment, and range of motion through dedicated stretching classes. Learn various stretching techniques that target different muscle groups, helping you achieve greater flexibility, prevent injuries, and enhance overall athletic performance.',
        class_img: course2
    },
    {
        class_name: 'Aerial silks',
        class_description: 'Experience the thrill of aerial silk as you learn to climb, wrap, and create mesmerizing shapes in the air. Enhance your core strength, balance, and body awareness while floating and spinning in beautifully flowing fabric.',
        class_img: course3
    },
    {
        class_name: 'Acrobatics - handstands',
        class_description: 'Embark on a thrilling journey of mastering handstands and acrobatic movements. Develop core strength, balance, and body control as you learn the art of hand balancing. Explore exciting acrobatic skills such as flips, tumbles, and dynamic movements, taking your physical abilities to new heights.',
        class_img: course4
    },
    {
        class_name: 'Aerial yoga',
        class_description: ' Elevate your yoga practice with the wonders of aerial yoga. Explore traditional yoga poses, inversions, and flows while supported by soft aerial hammocks. Feel weightless, increase your flexibility, and deepen your stretches in this unique and invigorating practice.',
        class_img: course5
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Classes = (props: Props) => {
    return (
        <section id="ourclasses" className="w-5/6 mt-20 py-20 mx-auto  xs:pt-4">
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.OurClasses)}>
                <div className="w-full text-center pt-12">
                    <SectionTitle>
                        Discover our classes
                    </SectionTitle>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="md:w-2/3 mx-auto pt-12 pb-0 text-primary-500 md:text-xl font-montserrat xs:text-lg xs:w-full xs:pt-6">
                        Our aerial classes include everything from aerial yoga and aerial silks to aerial hoop and aerial hammock, giving you plenty of options to choose from. With our focus on safety, technique, and fun, our aerial school is the perfect place to learn and grow in your aerial arts practice. Come fly with us and experience the joy and excitement of aerial arts today!
                    </motion.div>
                    <div className="mt-10 h-[450px] overflow-x-auto overflow-y-hidden w-full ">
                        <ul className="w-[2800px] whitespace-nowrap flex flex-row gap-8">
                            {classes.map((item, index) => <Class key={index} img_src={item.class_img} name={item.class_name} descr={item.class_description} />)}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Classes