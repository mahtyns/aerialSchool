import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
    icon: JSX.Element,
    benefit: string,
    description: string
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = (props: Props) => {
    return (
        <div className="border-2 w-1/3 h-96 rounded-xl">
            <div className="p-6 mx-auto text-center">
                <div className="flex items-center justify-center w-full py-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full text-white flex items-center justify-center">
                        {props.icon}
                    </div>
                </div>
                <div className="text-special-500 text-2xl py-2">
                    {props.benefit}
                </div>
                <div className="text-primary-500 text-xl py-4 w-5/6 mx-auto">
                    {props.description}
                </div>
                <AnchorLink
                    href="contactus"
                    onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
                    className="text-secondary-500 text-xl">
                    Learn more...
                </AnchorLink>
            </div>
        </div>
    )
}

export default Benefit