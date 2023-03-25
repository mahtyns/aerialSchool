import { SelectedPage } from "@/shared/types"
import Button from "@/components/shared/Button"
import useMediaQueries from "@/hooks/useMediaQueries"
import Logo from '@/assets/Logo-Volare.png'
import MainPagePic from '@/assets/MainPagePicture.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Vogue from '@/assets/Vogue.png'
import Elle from '@/assets/Elle.png'
import Cosmopolitan from '@/assets/Cosmopolitan.png'
import WomensHealth from '@/assets/WomensHealth.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {

    const isAboveMediumScreen = useMediaQueries("(min-width: 1122px)")

    return (
        <section id="home" className="gap-16 py-24 md:h-full md:pb-0">
            <div className="md:flex md:items-center justify-center w-5/6 mx-auto md:h-5/6 gap-24">
                <div id="mainHeader" className="md:w-1/3 mt-32 md:basis-1/3" >
                    <div className="md:-mt-48" >
                        <div className="relative z-10" >

                            <div className="before:absolute before:-top-10 md:before:content-textShadow before:-left-20 before:z-[-1] " >
                                <img src={Logo} alt="Logo Volare" className="md:w-auto xs:w-64 xs:pl-4" />
                            </div>

                        </div>
                        <div>
                            <h1 className="mt-8 px-4 md:text-4xl tracking-widest text-special-500 xs:text-2xl">
                                Learn to fly with us.
                            </h1>
                            <p className="mt-4 px-4 md:text-xl text-primary-500 xs:text-lg">
                                Discover the thrill of aerial arts! Our aerial classes offer a unique workout experience that will challenge your strength and flexibility while suspended in the air. Come fly with us.
                            </p>
                        </div>
                        <div className="flex justify-between mt-6 px-4 gap-2 w-80 items-center md:justify-start">
                            <Button
                                setSelectedPage={props.setSelectedPage}
                            >
                                Join us
                            </Button>
                            <AnchorLink className="text-primary-500 text-lg leading-10 font-bold "
                                onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
                                href={`${SelectedPage.ContactUs}`}>
                                Learn more...
                            </AnchorLink>
                        </div>
                    </div>
                </div>
                <div id="mainImage" >
                    <img alt="Main Page Graphic" src={MainPagePic} />
                </div>
            </div>

            {
                isAboveMediumScreen ? (
                    <div id="Sponsors" className="bg-gray-50 w-full h-32 flex justify-center">
                        <div className="flex w-2/3 justify-between items-center">
                            <div>
                                <img alt="Vogue" src={Vogue} className="w-36 " />
                            </div>
                            <div>
                                <img alt="Cosmopolitan" src={Cosmopolitan} className="w-52" />
                            </div>
                            <div>
                                <img alt="Elle" src={Elle} className="w-24" />
                            </div>
                            <div>
                                <img alt="Women's Health" src={WomensHealth} className="w-48" />
                            </div>
                        </div>
                    </div>
                ) : null

            }

        </section>
    )
}

export default Home