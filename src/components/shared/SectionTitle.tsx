type Props = {
    children: React.ReactNode
}

const SectionTitle = (props: Props) => {
    return (
        <h1 className="md:text-4xl text-special-500 tracking-widest xs:text-3xl">
            {props.children}
        </h1>
    )
}

export default SectionTitle