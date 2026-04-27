import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_USER = gql`
query GetUser {
  getUser {
    success
    message
    user {
      id
      name
      email
      img
      role {
        id
        name
        createdAt
        updatedAt
      }
      graphicConfiguration {
        id
        name
        img
        background
        header
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
}
`;
export const emptyUser:IUser = {
  id: "",
  name: "",
  email: "",
  img: "",
  role: {
    id: "",
    name: "",
    createdAt: "",
    updatedAt: ""
  },
  graphicConfiguration: {
    id: "",
    name: "",
    img: "",
    background: "",
    header: "",
    createdAt: "",
    updatedAt: ""
  },
  createdAt: "",
  updatedAt: ""
}
export interface IUser {
    id: string;
    name: string;
    email: string;
    role: IRole;
    img: string;
    graphicConfiguration: IGraphicConfiguration;
    createdAt: string;
    updatedAt: string;

}
export interface IRole {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface IGraphicConfiguration {
    id: string;
    name: string;
    img: string;
    background: string;
    header: string;
    createdAt: string;
    updatedAt: string;
}
export const useGetUser = () => {
  const { data, loading, error, refetch } = useQuery(GET_USER);
  return {
    data,
    error,
    loading,
    refetch
  };
}