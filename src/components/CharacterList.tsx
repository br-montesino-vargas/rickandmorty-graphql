import { Character } from "./Character"
import { CharacterListProp } from "../interfaces"

export const CharacterList = ({ results }: CharacterListProp) =>
{
    return (
        <div className="row">
            {
                results.map(( item, index ) =>
                (
                    <Character item={ item } key={ index }/>
                ))
            }
        </div>
    )
}