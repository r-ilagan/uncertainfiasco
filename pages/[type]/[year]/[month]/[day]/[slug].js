import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  getPostBySlug,
  getAllPosts,
  getTitleFromSlug,
  getDateFromSlug,
} from '../../../../../lib/data';

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
  const { year, month, day, slug } = params;
  const allPosts = getAllPosts();
  const currentPost = `${year}-${month}-${day}-${slug}`;
  const post = allPosts.find((item) => item.slug === currentPost);
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: getTitleFromSlug(post.slug),
        type: post.data.type,
        ...getDateFromSlug(post.slug),
      },
    })),
    fallback: false,
  };
}
