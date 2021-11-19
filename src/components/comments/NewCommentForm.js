import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams();
  const { onAddedComment } = props;
  const { quoteId } = params;
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
