import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  prettyDOM,
  render,
  RenderResult,
} from "@testing-library/react";

// Component
import Note from "./Note";

describe("<Note />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Note title="Note title" content="Note content..." />);
  });

  test("Render content", () => {
    component.getByText("Note title");
    component.getByText("Note content...");
    console.log(prettyDOM(component.container));
  });

  test("Changing the note state", () => {
    const input = component.container.querySelector(
      "#status"
    ) as HTMLInputElement;
    fireEvent.change(input);
  });
});
