type Props = {
    children: string
}

const SectionTitle = (props: Props) => {
    return (
        <div className="md:text-4xl text-special-500 tracking-widest xs:text-3xl">
            {props.children}
        </div>
    )
}

export default SectionTitle