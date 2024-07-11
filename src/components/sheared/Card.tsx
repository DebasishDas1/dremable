type CardProps = {
  children: React.ReactElement[];
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col items-center m-4 bg-white rounded-lg p-4 md:w-60 w-[100%] shadow-xl">
      {children}
    </div>
  );
};

export default Card;
