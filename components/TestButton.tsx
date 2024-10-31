import { classes } from "@/utils/utils";
import styles from "./TestButton.module.css";

export interface TestButtonProps {
  text: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

function TestButton({ text, buttonRef }: TestButtonProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className={classes(styles.module, "animate-pulse")}
    >
      {text}
    </button>
  );
}

export default TestButton;
