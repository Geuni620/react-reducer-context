import { Heading } from 'src/components/heading';
import { Post } from 'src/components/post';
import { Section } from 'src/components/section';

export const RecentPosts = () => {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
};
