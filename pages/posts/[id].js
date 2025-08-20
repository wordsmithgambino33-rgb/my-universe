import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      id: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontMatter: data,
      content,
    },
  };
}

export default function Post({ frontMatter, content }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-gray-600 mb-8">{frontMatter.date}</p>
      <article className="prose prose-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
