type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="border-[1px] border-solid border-black p-4">
      {children}
    </section>
  );
};
