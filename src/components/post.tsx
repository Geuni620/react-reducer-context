import { Heading } from 'src/components/heading';
import { Section } from 'src/components/section';

type PostProps = {
  title: string;
  body: string;
};

export const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <Section>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
};
