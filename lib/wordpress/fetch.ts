import {GRAPHQL_API_URL} from "@/lib/constants";

export async function fetchFromWP<TData>(query: string, variables: Record<string, unknown> = {}, revalidate: number = 3600): Promise<TData | null> {
    if (!GRAPHQL_API_URL) {
        console.warn('GRAPHQL_API_URL is not defined');
        return null;
    }

    try {
        const res = await fetch(GRAPHQL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables}),
            next: {
                revalidate
            }
        });

        if (!res.ok) {
            console.warn(`GraphQL request failed: ${res.status} ${res.statusText}`);
            return null;
        }

        const json = await res.json();

        if (json.errors) {
            console.error('GraphQL errors:', json.errors);
            return null;
        }

        return json.data as TData;
    } catch (e) {
        console.warn('fetchFromWP failed:', e);
        return null;
    }
}