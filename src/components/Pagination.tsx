import { PaginationProp } from "../interfaces"

export const Pagination = ({ prev, next, setPage }: PaginationProp) =>
{
    return (
        <nav className="my-5">
            <ul className='pagination justify-content-center'>
                {
                    prev &&
                    <li className='page-item'>
                        <button className='page-link' onClick={ () => setPage( prev ) }>Previous</button>
                    </li>
                }
                {
                    next &&
                    <li className='page-item'>
                        <button className='page-link' onClick={ () => setPage( next ) }>Next</button>
                    </li>
                }
            </ul>
        </nav>
    )
}
