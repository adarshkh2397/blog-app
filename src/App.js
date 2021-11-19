import { Routes, Route, Navigate, Link } from "react-router-dom";

import AllQuote from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="quotes" />} />
        <Route path="quotes" element={<AllQuote />} />
        <Route path="quotes/:quoteId" element={<QuoteDetail />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link to="comments" className="btn--flat">
                  View comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
