import React, { ReactElement, useState } from "react";

// Styles
import styles from "./Note.module.css";

// Types
import { Props } from "./Note.types";

function Note(props: Props): ReactElement {
  const [finish, setFinish] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setFinish(event.target.checked);
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  }

  return (
    <article className={styles.container}>
      avc
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <label>
        State
        <input
          id="status"
          type="checkbox"
          onChange={(e) => handleOnChange(e)}
        />
      </label>
    </article>
  );
}

export default Note;
