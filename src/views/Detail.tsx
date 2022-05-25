import { useQuery } from "@apollo/client"
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from "../components"
import { GET_CHARACTER_BY_ID } from '../gql/queries/rickandmorty'

export const Detail = () =>
{
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, loading } = useQuery( GET_CHARACTER_BY_ID,
    {
        variables: { id }
    })

    if( loading ) return <Loader />

    const { name, status, species, gender, image, origin, location } = data.character

    const handleNavigateToHome = () => navigate('/')
    

    return (
        <div className="mt-5 card shadow-sm">
            <div className="d-flex gap-3">
                <div>
                    <img src={ image } alt={ name } height={500} width={500} />
                </div>
                <div className="d-flex flex-column fs-5 mt-3">
                    <span>Name: <p className="fw-bold">{ name }</p></span>
                    <span>Status: <p className="fw-bold">{ status }</p></span>
                    <span>Species: <p className="fw-bold">{ species }</p></span>
                    <span>Gender: <p className="fw-bold">{ gender }</p></span>
                    <span>Origin: <p className="fw-bold">{ origin.name }</p></span>
                    <span>Location: <p className="fw-bold">{ location.name }</p></span>
                </div>
            </div>
            <button className="btn btn-success" onClick={ handleNavigateToHome }>Volver</button>
        </div>
    )
}
