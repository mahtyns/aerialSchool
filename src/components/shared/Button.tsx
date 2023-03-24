
import { SelectedPage } from "@/shared/types"

type Props = {
    children: string
    setSelectedPage: (value: SelectedPage) => void
}

const Button = (props: Props) => {
    return (
        <button className="bg-secondary-500 py-2 px-12 rounded-md text-white text-xl">
            {props.children}
        </button>
    )
}

export default Button