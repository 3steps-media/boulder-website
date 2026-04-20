import {GLOBAL_TERM_FIELDS} from "@/lib/wordpress/queries/common/global";

export const TAX_CITIES_FIELDS__EDGES = `
    cities {
        edges {
            node {
                ${GLOBAL_TERM_FIELDS}
            }
        }
    }
`

export const TAX_CITIES_FIELDS = `
    cities {
        nodes {
            ${GLOBAL_TERM_FIELDS}
        }
    }
`