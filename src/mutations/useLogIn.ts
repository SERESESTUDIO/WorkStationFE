import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const LOG_IN = gql`
  mutation LogIn($input: UserAuthInput) {
    authUser(input: $input) {
      success
      message
      token
    }
  }
`;

export const useLogIn = () => {
  const [createFunction, { data, error, loading }] = useMutation(LOG_IN);
  const setValues = (email: string, password: string) => {
    createFunction({
      variables: {
        input: {
            email,
            password,
        },
      },
    });
  };
  return {
    data,
    error,
    loading,
    setValues,
  };
};
