import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = (props: Props) => {

    const pageToLower = props.page.toLowerCase().replace(/ /g, "") as SelectedPage

    return (
        <div>
            <AnchorLink
                className={`${props.selectedPage === pageToLower ? "text-special-500" : "text-primary-500"}
                transition duration-500 hover:text-special-500
                `}
                href={`#${pageToLower}`}
                onClick={() => props.setSelectedPage(pageToLower)}
            >
                {props.page}
            </AnchorLink>
        </div>
    )
}

export default Link