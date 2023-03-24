import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo-Volare.png'
import Link from "../shared/Link"
import { SelectedPage } from "@/shared/types"
import useMediaQueries from "@/hooks/useMediaQueries"
import Button from "../shared/Button"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = (props: Props) => {

    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreen = useMediaQueries("(min-width: 1122px");
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt="Volare School" src={Logo} className="w-40" />
                        {isAboveMediumScreen ?
                            (<div className={`${flexBetween} w-full gap-16`}>
                                <div className={`${flexBetween} gap-8 text-lg`}>
                                    <Link
                                        page="Home"
                                        selectedPage={props.selectedPage}
                                        setSelectedPage={props.setSelectedPage}
                                    />
                                    <Link
                                        page="Why us"
                                        selectedPage={props.selectedPage}
                                        setSelectedPage={props.setSelectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={props.selectedPage}
                                        setSelectedPage={props.setSelectedPage}
                                    />
                                    <Link
                                        page="Contact us"
                                        selectedPage={props.selectedPage}
                                        setSelectedPage={props.setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8 text-lg`}>
                                    <p>Sign in</p>
                                    <Button
                                        setSelectedPage={props.setSelectedPage}
                                    >
                                        Join us
                                    </Button>
                                </div>
                            </div>)
                            :
                            (<button className="rounded-full bg-secondary-500 p-3"
                                onClick={() => { setMenuToggled(!isMenuToggled) }}>
                                <Bars3Icon className="w-10 h-10 text-white" />
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar