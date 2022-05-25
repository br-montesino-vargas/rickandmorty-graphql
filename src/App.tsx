import { ApolloProvider } from '@apollo/client'
import { client } from './gql/config/apollo'

import { AppRouter } from './routers/AppRouter';
import { ListNickNames } from './exercises/ListNicknames';
import './exercises/function'

function App()
{
    return (
        <ApolloProvider client={ client }>
            <AppRouter />
            <ListNickNames
                listNames={["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"]}
                order="ASC"
            />
            <ListNickNames
                listNames={["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"]}
                order="DESC"
            />
        </ApolloProvider>
    );
}

export default App;