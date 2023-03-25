import { SelectedPage } from "@/shared/types"
import Button from "@/components/shared/Button"
import useMediaQueries from "@/hooks/useMediaQueries"
import Logo from '@/assets/Logo-Volare.png'
import MainPagePic from '@/assets/MainPagePicture.png'
import TextShadow from '@/assets/TextShadow.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Vogue from '@/assets/Vogue.png'
import Elle from '@/assets/Elle.png'
import Cosmopolitan from '@/assets/Cosmopolitan.png'
import WomensHealth from '@/assets/WomensHealth.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = (props: Props) => {

    const isAboveMediumScreen = useMediaQueries("(min-width: 1060px)")

    return (
        <section id="home" className="gap-16 py-24 md:h-full md:pb-0">
            <div className="flex flex-row justify-center w-[80%] m-auto">
                <div id="mainHeader" className="w-[50%]">
                    <div>
                        <div>
                            <div className="relative z-10">
                                <img src={Logo} alt="Logo Volare" />
                            </div>
                            <div className="absolute top-12 left-56">
                                <img src={TextShadow} alt="Volare" />
                            </div>
                        </div>
                        <div>
                            <h1 className="p-4 text-4xl tracking-widest text-special-500">
                                Learn to fly with us.
                            </h1>
                            <p className="px-4 text-xl text-primary-500 w-[50%]">
                                Discover the thrill of aerial arts! Our aerial classes offer a unique workout experience that will challenge your strength and flexibility while suspended in the air. Come fly with us.
                            </p>
                        </div>
                        <div className="flex justify-between gap-2 px-4 py-6 w-80 ">
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
                <div id="mainImage">
                    <img alt="Main Page Graphic" src={MainPagePic} />
                </div>
            </div>

            {
                isAboveMediumScreen ? (
                    <div id="Sponsors" className="bg-primary-300 w-full h-32 flex ">
                        <div className="flex flex-row justify-between">
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