import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const COMMUNITY_ITEMS = gql`
query getAllComunityItems {
  getAllCommunityItems {
    success
    message
    communityItems {
      id
      name
      img
    }
  }
}
`;
export const useGetAllComunityItems = () => {
  const { data, loading, error, refetch } = useQuery(COMMUNITY_ITEMS);
  return {
    data,
    error,
    loading,
    refetch
  };
}
