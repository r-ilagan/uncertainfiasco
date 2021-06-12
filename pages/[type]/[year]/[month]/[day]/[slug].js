import { useMemo } from 'react';
import Head from 'next/head';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import {
  getPostBySlug,
  getAllPosts,
  getTitleFromSlug,
  getDateFromSlug,
} from '../../../../../lib/data';

import Footer from '../../../../../components/footer';

export default function ContentPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <Head>
        <title>{frontMatter.title} | Uncertain Fiasco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="prose prose-lg">
          <Component />
          <Footer />
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { year, month, day, slug } = params;
  const postFileName = `${year}-${month}-${day}-${slug}`;
  const { data, content } = getPostBySlug(year, postFileName);
  data.date = data.date.toString();
  const { code } = await bundleMDX(content);

  return {
    props: { code, frontMatter: data },
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
