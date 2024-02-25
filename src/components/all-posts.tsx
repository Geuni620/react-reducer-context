import { Heading } from 'src/components/heading';
import { RecentPosts } from 'src/components/recent-post';
import { Section } from 'src/components/section';

export const AllPosts = () => {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
};
