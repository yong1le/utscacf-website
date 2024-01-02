const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${className} flex flex-col justify-center px-10 py-12 transition-all
      sm:min-h-screen sm:px-16 md:px-28 lg:px-48`}
    >
      {children}
    </div>
  );
};

export default Section;
