import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  getPostBySlug,
  getAllPosts,
  getTitleFromSlug,
  getDateFromSlug,
} from '../../../../../lib/data';

export default function BlogPage({ source, frontMatter }) {
  return (
    <div>
      <Head>
        {/* <title>{title}</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MDXRemote {...source} />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { year, month, day, slug } = params;
  const postFileName = `${year}-${month}-${day}-${slug}`;
  const { data, content } = getPostBySlug(year, postFileName);

  data.date = data.date.toString();

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: { source: mdxSource, frontMatter: data },
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
