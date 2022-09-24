import { gql, useQuery } from "@apollo/client";



const GET_MISSION = gql`
query GetMission($id: ID!){
        mission(id: $id) {
          name
          id
          website
          description
        }  
}`;

export const useMission = (id) => {
    const {data, error, loading} = useQuery(GET_MISSION, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading,
    };
};
