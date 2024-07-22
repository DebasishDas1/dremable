type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="md:text-6xl text-4xl font-bold py-16 text-center md:w-[85%]">
      <h1> {title}</h1>
    </div>
  );
};

export default PageTitle;
