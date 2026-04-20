import {unstable_cache} from 'next/cache'
import {OPTIONS_QUERY} from "@/domains/options/queries/queries";
import {fetchFromWP} from "@/lib/wordpress/fetch";
import {OptionsResponse} from './types'

const getOptions = unstable_cache(
    async (): Promise<OptionsResponse> => {
        const data = await fetchFromWP<OptionsResponse>(OPTIONS_QUERY)
        if (!data) throw new Error('Failed to fetch site options')
        return data
    },
    ['site-options'],
    {revalidate: false}
)

export default getOptions;