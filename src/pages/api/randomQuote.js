import allQuotes from '../../../quotes.json';

export default (req, res) => {
  const author = req.query.author?.toLowerCase();
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote =>
      quote.author.toLowerCase().includes(author)
    );
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(
      quote => quote.author.toLowerCase() === 'unknown'
    );
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);
};
