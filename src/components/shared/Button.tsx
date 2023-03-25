
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const Button = (props: Props) => {
    return (
        <AnchorLink
            className="bg-secondary-500 py-2 px-12 rounded-md text-white text-xl hover:bg-primary-500"
            onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {props.children}
        </AnchorLink>
    )
}

export default Button