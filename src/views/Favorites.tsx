import { useQuery } from "@apollo/client"
import { CharacterList, Loader } from "../components";
import { GET_CHARACTERS_BY_IDS } from '../gql/queries/rickandmorty'

export const Favorites = () =>
{
    const arrayFavorites:number[] = JSON.parse(localStorage.getItem('favorites') as any) || [];
      
    const { data, loading } = useQuery( GET_CHARACTERS_BY_IDS,
    {
        variables: { ids: arrayFavorites },
        skip: !arrayFavorites.length
    })

    if( !arrayFavorites.length ) return <h1 className="text-center mt-5">Still No Favorites</h1>
    if( loading ) return <Loader />

    const { charactersByIds } = data

    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="text-center my-5">Favorites</h1>
            <CharacterList results={ charactersByIds } />
        </div>
    )
}
