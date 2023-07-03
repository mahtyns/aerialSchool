import { SelectedPage } from "@/shared/types"
import SectionTitle from "../shared/SectionTitle"
import { motion } from "framer-motion"
import ContactUsPicture from '@/assets/ContactPicture.jpg'
import { useForm } from "react-hook-form"
import Button from "../shared/Button"
import { error } from "console"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const
    ContactUs = (props: Props) => {

        const {
            register,
            trigger,
            formState: { errors }
        } = useForm()

        const inputStyling = 'bg-gray-100 placeholder-white px-4 py-3 rounded-lg my-4 text-lg w-full'
        const handleSubmit = async (e: any) => {
            const isValid = await trigger()
            if (!isValid) {
                e.preventDefault()
            }
        }

        return (
            <section id="contactus" className="w-5/6 min-h-full py-20 mx-auto">
                <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.ContactUs)}>
                    <div className="w-full text-center pt-12 pb-10">
                        <SectionTitle>
                            <span className="text-secondary-500">Join us</span> today and start flying!
                        </SectionTitle>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}>
                            <p className="md:w-2/3 mx-auto pt-12 pb-0 text-primary-500 text-2xl xs:text-xl xs:w-full font-montserrat">
                                If you're ready to take your workout to the next level, check out our available aerial courses and sign up for a class today!
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="flex flex-col md:flex-row w-full md:gap-16 ">
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <form
                            className="flex flex-col mb-20"
                            target="_blank"
                            onSubmit={handleSubmit}
                            method="POST"
                            action="https://formsubmit.co/f7a7e6c65ddac50631675d2e8992da78">
                            <input
                                type="name"
                                placeholder="name"
                                className={inputStyling}
                                {...register("name", {
                                    required: true,
                                    maxLength: 100
                                })} />
                            {
                                errors.name && (
                                    <p className="mt-2 text-primary-500" >
                                        {
                                            errors.name.type === "required" && "This field is required"
                                        }
                                        {
                                            errors.name.type === "maxLength" && "Max lenght is 100 characters"
                                        }
                                    </p>
                                )
                            }
                            <input
                                type="email"
                                placeholder="email"
                                className={inputStyling}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {
                                errors.email && (
                                    <p className="mt-2 text-primary-500" >
                                        {
                                            errors.email.type === "required" && "This field is required"
                                        }
                                        {
                                            errors.email.type === "pattern" && "This is not an email address"
                                        }
                                    </p>
                                )
                            }

                            <input
                                placeholder="message"
                                className={`${inputStyling} h-[300px]`}
                                {...register("message", {
                                    required: true,
                                    maxLength: 1000,
                                })} />
                            {
                                errors.message && (
                                    <p className="mt-2 text-primary-500" >
                                        {
                                            errors.message.type === "required" && "This field is required"
                                        }
                                        {
                                            errors.message.type === "pattern" && "The message should be max. 1000 characters long."
                                        }
                                    </p>
                                )
                            }
                            <button type="submit" className="bg-special-500 py-2 px-16 rounded-md text-white text-xl hover:bg-primary-500 self-start my-4">
                                JOIN US
                            </button>
                        </form>

                    </motion.div>
                    <div className="md:w-1/2 md:mt-16">
                        <img
                            src={ContactUsPicture}
                            alt="Contact us today!"
                            className="object-cover w-inherit" />
                    </div>
                </div>
            </section>
        )
    }

export default ContactUs