type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <div className="md:text-6xl text-4xl font-bold py-10">
            {title}
        </div>
    )
}

export default PageTitle
