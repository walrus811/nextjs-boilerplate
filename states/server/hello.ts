import { useQuery } from "@tanstack/react-query";
import { ServerQueryOptions } from "./type";

export function useHello(options?: ServerQueryOptions<string, Error>) {
  return useQuery({
    queryKey: ["hello"],
    queryFn: () => fetch("/api/hello").then((res) => res.json()),
    ...options,
  });
}
