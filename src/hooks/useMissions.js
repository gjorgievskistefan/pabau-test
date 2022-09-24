import { useQuery, gql } from "@apollo/client"

const GET_MISSIONS = gql`
query {
  missions {
    id
    name
    website
  }
  }
`

export const useMissions = () => {

  const { error, data, loading, } = useQuery(GET_MISSIONS);

  return {
    error,
    data,
    loading,
  }
}