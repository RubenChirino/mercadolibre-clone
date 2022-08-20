import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useProduct(id: string | undefined) {
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  };
}
