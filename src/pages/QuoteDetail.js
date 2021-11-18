import { Fragment } from "react";

import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = dummy_quotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
