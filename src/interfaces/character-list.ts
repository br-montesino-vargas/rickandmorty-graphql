export interface CharacterLocation {
    name: string;
}

export interface CharacterList {
    id: number;
    name: string;
    image: string;
    location: CharacterLocation;
}

export interface CharacterListProp {
    results: CharacterList[];
}