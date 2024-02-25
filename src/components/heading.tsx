import { useContext } from 'react';
import { LevelContext } from 'src/components/level-context';

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return (
        <h1
          style={{
            fontSize: '2rem',
          }}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          style={{
            fontSize: '1.5rem',
          }}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          style={{
            fontSize: '1.17rem',
          }}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          style={{
            fontSize: '1rem',
          }}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          style={{
            fontSize: '0.83rem',
          }}
        >
          {children}
        </h5>
      );
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
};
