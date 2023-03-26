type Props = {
    children: string
}

const SectionTitle = (props: Props) => {
    return (
        <div className="text-5xl text-special-500 tracking-widest">
            {props.children}
        </div>
    )
}

export default SectionTitle