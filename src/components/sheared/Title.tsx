type TitleProps = {
    children: string;
}
const Title = ({ children }: TitleProps) => {
    return (
        <div className='md:text-5xl text-3xl font-bold md:p-12 pt-8 pb-8'>
            {children}
        </div>
    )
}

export default Title