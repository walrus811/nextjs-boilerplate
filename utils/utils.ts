export function classes(...classes: string[]) {
  return classes.join(" ");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
