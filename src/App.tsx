import { ApolloProvider } from '@apollo/client'
import { client } from './gql/config/apollo'

import { AppRouter } from './routers/AppRouter';

function App()
{
    return (
        <ApolloProvider client={ client }>
            <AppRouter />
        </ApolloProvider>
    );
}

export default App;