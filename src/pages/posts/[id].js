import useSWR from 'swr';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Post() {
  const router = useRouter();
  const query = router.query;
  const content = `
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.
  
  ### This is a title
  
  And here's the content.
  `;

  // Quote stuff
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch a quote. Sorry.';

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown source={content} />
      </div>
      <main className="center">
        <div className="quote">{quote}</div>
        {author && <span className="author">- {author}</span>}
      </main>
      <style jsx global>{`
        h1,
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: deepskyblue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }

        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }

        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </Layout>
  );
}
