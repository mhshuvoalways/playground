import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => (
  <Button label="Click me" handleOnChange={() => console.log("Button clicked")}>
    Default Button
  </Button>
);

export const CustomStyleButton = () => (
  <Button
    label="Custom Style Button"
    handleOnChange={() => console.log("Button clicked")}
    style={{
      background: "blue",
      color: "yellow",
    }}
  >
    Custom Style Button
  </Button>
);
