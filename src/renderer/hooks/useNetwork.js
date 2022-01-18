import { useQuery } from "react-query";
import { NetworkService } from "services";

const useNetwork = () =>
  useQuery("useNetwork", () => NetworkService.retrieve(), {
    refetchOnWindowFocus: false,
    placeholderData: { data: { status: 0 } },
    select: (query) => query.status === 204,
    refetchInterval: 5000,
  });

export default useNetwork;
