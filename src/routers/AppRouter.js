import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Main, Detail, Favorites } from '../views'
import { Navbar } from '../components'

export const AppRouter = () =>
{
    return (
        <>
            <div className='container'>
                <BrowserRouter>
                <Navbar />
                
                    <Routes>

                        <Route
                            path="/"
                            element={ <Main /> }
                        />

                        <Route
                            path="/favorites"
                            element={ <Favorites /> }
                        />

                        <Route
                            path="/character/:id"
                            element={ <Detail /> }
                        />

                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
	)
}
