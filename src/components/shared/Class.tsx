type Props = {
    name: string,
    descr?: string,
    img_src: string
}
const Class = (props: Props) => {

    const overlayStyles = `p-5 absolute z-30 flex
    h-[400px] w-[530px] flex-col items-center justify-center
    whitespace-normal bg-secondary-500 text-center text-white
     opacity-0 transition duration-500 hover:opacity-90`;

    return (
        <div className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl p-2">
                    {props.name}
                </p>
                <p className="text-base">
                    {props.descr}
                </p>
            </div>
            <img className='h-[400px] w-[530px] object-cover' src={props.img_src} alt={props.name} />
        </div>
    )
}

export default Class