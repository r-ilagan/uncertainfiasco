import Head from 'next/head';
import { blogPosts } from '../../../../../lib/data';
import { getPostBySlugAndYear } from '../../../../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{content}</p>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { year, slug } = params;
  const post = getPostBySlugAndYear(year, slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
  ]);
  console.log(post);
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
