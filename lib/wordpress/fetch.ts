import {GRAPHQL_API_URL} from "@/lib/constants";

export async function fetchFromWP<TData>(query: string, variables: Record<string, unknown> = {}, revalidate: number = 3600): Promise<TData> {
    const res = await fetch(GRAPHQL_API_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables}),
        next: {
            revalidate
        }
    });

    const json = await res.json();

    if (json.errors) {
        console.error('GraphQL errors:', json.errors);
        throw new Error('Failed to fetch data from WPGraphQL');
    }

    return json.data as TData;
}