import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

const CONNECT = gql`
query conected {
  conected
}
`;
export const useConected = () => {
  const [active, setActive] = useState(false);
  const { data, loading, error, refetch } = useQuery(CONNECT);
  setTimeout(()=>{
    setActive(true);
  },500);
  return {
    data,
    error,
    loading,
    refetch,
    active
  };
}
