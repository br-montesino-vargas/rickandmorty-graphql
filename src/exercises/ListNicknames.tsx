export const ListNickNames = ({ listNames, order } : { listNames:string[], order:string }) =>
{
    listNames = listNames.filter(( item ) =>  item.trim().length > 0 );

    const SortASC = (a:string, b:string)=> 
    { 
        var ret = 0;
        a = a.toLowerCase();b = b.toLowerCase();

        if(a > b)  ret = 1;
        if(a < b)  ret = -1; 

        return ret;
    }

    const SortDESC = (a:string, b:string)=> 
    { 
        var ret = 0;
        a = a.toLowerCase();b = b.toLowerCase();

        if(a > b)  ret = -1;
        if(a < b)  ret = 1;

        return ret;
    }

    if( order.toUpperCase() === 'DESC')
    {
        listNames = listNames.sort( SortDESC )
    }

    if( order.toUpperCase() === 'ASC')
    {
        listNames = listNames.sort( SortASC )
    }

    return (
        <>
        <hr />
        <ul className="row">
            {
                listNames.map(( item ,index ) =>
                (
                    <li key={index}>{ item.trim() }</li>
                ))
            }
        </ul>
        </>
    )
}
