import { Outlet } from "react-router";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <Outlet />
    </figure>
  );
};

export default HighlightedQuote;
