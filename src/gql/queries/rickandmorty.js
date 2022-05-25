import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`

	query getCharacters($page: Int!)
	{
		characters(page: $page)
		{
			results
			{
				id
				name
				image
				location
				{
					name
				}
			}
			info
			{
				prev
				next
			}
		}
	}
`;

export const GET_CHARACTER_BY_ID = gql`

	query character($id: ID!)
	{
		character(id: $id)
		{
			name
			status
			species
			type
			gender
			origin
			{
				name
			}
			location
			{
				name
			}
			image
			created
		}
	}
`;

export const GET_CHARACTERS_BY_IDS = gql`

	query charactersByIds($ids: [ID!]!)
	{
		charactersByIds(ids: $ids)
		{
			id
			name
			image
			location
			{
				name
			}
		}
	}
`;