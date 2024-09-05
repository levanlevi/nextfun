import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
    // todo replace with env
    uri: "ws://localhost:8080/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': 'fd945ef89b66d9958f7b24205502337932ef87c4694f4b3c7012ebeda677cbd9',
            },
        },
    },
});

const httpLink = new HttpLink({
    // todo replace with env
    uri: "http://localhost:8080/v1/graphql",
    headers: {
        'x-hasura-admin-secret': 'fd945ef89b66d9958f7b24205502337932ef87c4694f4b3c7012ebeda677cbd9',
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
