import Layout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello, Next.js' },
    { id: 'learn-nextjs', title: 'Learn that Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
}

const PostLink = props => (
  <>
    <li>
      <Link href="/posts/[id]" as={`/posts/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        font-family: 'Arial';
        text-decoration: none;
        color: deepskyblue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: deepskyblue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}
