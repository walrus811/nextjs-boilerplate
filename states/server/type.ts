import { UseQueryOptions } from "@tanstack/react-query";

export type ServerQueryOptions<T, E> = Omit<
  UseQueryOptions<T, E>,
  "queryKey" | "queryFn"
>;
