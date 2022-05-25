import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CharacterList } from '../interfaces'
import { useEffect, useState } from 'react';

export const Character = ({ item }: { item:CharacterList }) =>
{
    const arrayFavorites:number[] = JSON.parse(localStorage.getItem('favorites') as any) || [];
    
    
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)

    const handleNavigateDetail = (id: number) =>
    {
        navigate(`/character/${id}`)
    }

    const { id, name, location, image } = item;

    const handleSaveToFavorites = () =>
    {
        const favorites:number[] = JSON.parse(localStorage.getItem('favorites') as any) || [];
        
        localStorage.setItem('favorites', JSON.stringify([...favorites, id]))

        setIsFavorite(!isFavorite)
    }

    const handleRemoveToFavorites = () =>
    {
        const favorites:number[] = JSON.parse(localStorage.getItem('favorites') as any) || [];
        const newFavorites = favorites.filter(favorites => favorites !== id)

        localStorage.setItem('favorites', JSON.stringify( newFavorites ))

        setIsFavorite(!isFavorite)
    }

    useEffect(() =>
    {
        const isInFavorite = arrayFavorites.includes(id);
        setIsFavorite(isInFavorite)
    }, [])

    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <img
                    src={ image }
                    alt={ name }
                    onClick={ () => handleNavigateDetail( id ) }
                    role="button"
                />
                <div className="card-body" style={{ height: '150px' }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="card-title">{ name }</h5>
                        {
                            isFavorite
                            ?
                                <AiFillHeart role='button' onClick={ handleRemoveToFavorites } />
                            :
                                <AiOutlineHeart role='button' onClick={ handleSaveToFavorites } />
                        }
                    </div>
                    <hr />
                    <p>Location: { location.name }</p>
                </div>
            </div>
        </div>
    )
}
