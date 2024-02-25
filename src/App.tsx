import { AllPosts } from 'src/components/all-posts';
import { Heading } from 'src/components/heading';
import { Post } from 'src/components/post';
import { Section } from 'src/components/section';

export const App = () => {
  return (
    <main className="mx-auto w-[500px]">
      <Section>
        <Heading>My Profile</Heading>
        <Post title="Hello traveller!" body="Read about my adventures." />
        <AllPosts />
      </Section>
    </main>
  );
};
