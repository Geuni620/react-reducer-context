import { useContext } from 'react';
import { LevelContext } from 'src/components/level-context';

type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  const level = useContext(LevelContext);

  return (
    <section className="border-[1px] border-solid border-black p-4">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};
