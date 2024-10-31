import { expect, test } from "vitest";
import { classes } from "../utils/utils";

test("classes(success)", () => {
  expect(classes("a", "b", "c")).toBe("a b c");
});

test("classes(fail)", () => {
  expect(classes("a", "b", "c")).toBe("nono");
});
