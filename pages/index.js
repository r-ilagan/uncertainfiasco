import Head from 'next/head';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Uncertain Fiasco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Uncertain Fiasco</h1>
      </main>
      <div>
        {posts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div>
      <div>
        <Link href="">
          <a>{title}</a>
        </Link>
      </div>
      <div>{format(parseISO(date), 'MMMM do, uuu')}</div>
    </div>
  );
}
