export function sum( numeros = [0] )
{
    let listaAjustada = numeros.map( num => { return num%2 == 0 && num < 20 ? 20 : num })
    console.log('listaAjustada', listaAjustada );

    return function callback( returnList )
    {
        return returnList( listaAjustada )
    }
}

sum([1,2,3])( result => console.log('callback', result ));