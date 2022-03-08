import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [error, setError] = useState("");
  const [entering, setIsEntering] = useState(true);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredAuthor.trim() === "") {
      setError("Author Name is required.");
      return;
    }

    if (enteredText.trim() === "") {
      setError("Quote is required.");
      return;
    }
    setError("");
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
    setError("");
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
    setError("");
  };

  return (
    <Card>
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={formFocusedHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        {!entering && error && <div className={classes.error}>{error}</div>}
        <div className={classes.actions}>
          <button className="btn" onClick={finishEnteringHandler}>
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
