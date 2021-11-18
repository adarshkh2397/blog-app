import QuoteList from "../components/quotes/QuoteList";

const dummy_quotes = [
  {
    id: "bcjhasfnee",
    author: "Adarsh",
    text: "I wrote it!",
  },
  {
    id: "atecdniewcn",
    author: "Bob",
    text: "Bob wrote it!",
  },
];

const AllQuote = () => {
  return <QuoteList quotes={dummy_quotes} />;
};

export default AllQuote;
