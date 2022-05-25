import { useNavigate } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai';

export const Navbar = () =>
{
    const navigate = useNavigate()

    const handleGoToFavorites = () =>
    {
        navigate('/favorites')
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Rick and Morty APP</a>
                <button className="btn btn-danger btn-outline" onClick={ handleGoToFavorites }>Favorites <AiFillHeart /> </button>
            </div>
        </nav>
    )
}