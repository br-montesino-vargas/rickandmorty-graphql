import { useState } from "react"
import { useQuery } from "@apollo/client"
import { CharacterList, Pagination, Loader } from "../components"
import { GET_CHARACTERS } from '../gql/queries/rickandmorty'


export const Main = () =>
{
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery( GET_CHARACTERS,
    {
        variables: { page }
    })

    if( loading ) return <Loader />
    
    const { results, info } = data.characters

    return (
        <div className='container'>
            <Pagination prev={ info.prev } next={ info.next } setPage={ setPage } />
            <CharacterList results={ results } />
            <Pagination prev={ info.prev } next={ info.next } setPage={ setPage } />
        </div>
    )
}
