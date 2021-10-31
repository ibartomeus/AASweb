import Head from 'next/head';
import { getAllPosts } from '../../lib/api/posts';
import { Container, Layout } from '../../components';
import { Blog } from '../../containers';

export default function IndexPage({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <Blog.Posts>
          {allPosts.map((post) => (
            <Blog.Preview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </Blog.Posts>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}