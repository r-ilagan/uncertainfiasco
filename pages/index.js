import Head from 'next/head';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import { getAllPosts, getUrlFromSlug } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Uncertain Fiasco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        {posts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </article>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const posts = allPosts.map(({ data, content, slug }) => {
    // hacky way of fixing date being parsed as a string
    const date = new Date(data.date).toISOString();
    const post = {
      ...data,
      date,
      content,
      slug,
    };
    return post;
  });

  return {
    props: {
      posts,
    },
  };
}

function BlogListItem({
  slug,
  title,
  date,
  metaDate,
  content,
  type,
  metaTitle,
}) {
  const url = `/${type}/${metaDate}/${metaTitle}`;
  return (
    <div>
      <div>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </div>
      <div>{format(parseISO(date), 'MMMM do, uuu')}</div>
    </div>
  );
}
