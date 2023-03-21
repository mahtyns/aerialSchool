import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo-Volare.png'

type Props = {}

const Navbar = (props: Props) => {

    const flexBetween = 'flex items-center justify-between'

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt="Volare School" src={Logo} className="w-56" />
                        <div className={`${flexBetween} w-full gap-16`}>
                            <div className={`${flexBetween} gap-8 text-lg`}>
                                <p>Home</p>
                                <p>Why us</p>
                                <p>Our Courses</p>
                                <p>Contact us</p>
                            </div>
                            <div className={`${flexBetween} gap-4 text-lg`}>
                                <p>Sign in</p>
                                <button>Join us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar