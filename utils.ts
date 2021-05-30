import 'isomorphic-unfetch';
import { gql, createClient } from '@urql/core';

const client = createClient({
    url: 'https://striking-buzzard-60.hasura.app/v1/graphql',
    fetchOptions: () => {
        return {
            headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
            }
        };
    }
});

const getAllHandles = async () => {
    try {
        const query = gql`
            query GetAllHandles {
                cr_handles {
                    id
                    handle_name
                    last_tweet_id
                }
            }
        `;

        const { data } = await client.query(query).toPromise();
        return { status: true, data };
    } catch (e) {
        return { status: false, error: e };
    }
};

const updateLastTweetId = async (handleId: number, tweetId: string) => {
    try {
        const query = gql`
            mutation UpdateLastTweetId($tweetId: String!, $id: bigint!) {
                update_cr_handles(_set: {last_tweet_id: $tweetId}, where: {id: {_eq: $id}}) {
                    affected_rows
                }
            }
        `;
        await client.mutation(query, {
            id: handleId,
            tweetId: tweetId
        }).toPromise();
        return { status: true };
    } catch (e) {
        return { status: false, error: e };
    }
};

export { getAllHandles, updateLastTweetId };