import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learning Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit Now" />
        </ul>
      </Layout>
    </div>
  );
}
