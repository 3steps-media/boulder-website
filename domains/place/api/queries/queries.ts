import {
    FRAGMENT_PLACE_ACF,
    FRAGMENT_PLACE_DETAILS,
    FRAGMENT_PLACE_PREVIEW
} from "@/domains/place/api/queries/fragments";
import {FRAGMENT_PAGE_INFO} from "@/lib/wordpress/queries/pageInfo";
import {FRAGMENT_CITY} from "@/domains/city/api/queries/fragments";

export const PLACE_SLUGS_COLLECTION_QUERY = `
    query getPlaceSlugsCollection {
      places(where: {status: PUBLISH}) {
        nodes {
          slug
        }
      }
    }
`

export const PLACE_PREVIEW_COLLECTION_QUERY = `
      ${FRAGMENT_PAGE_INFO}
      ${FRAGMENT_PLACE_PREVIEW}
      ${FRAGMENT_CITY}

      query getPlacePreviewCollection(
            $first: Int, 
            $last: Int, 
            $before: String, 
            $after: String
      ) {
        places(after: $after, before: $before, first: $first, last: $last, where: {status: PUBLISH}) {
          pageInfo {
            ...RootQueryToPlaceConnectionPageInfoFragment
          }
          edges {
            cursor
            node {
              ...PlacePreviewFragment
              cities {
                nodes {
                  ...CityFragment
                }
              }
            }
          }
        }
      }
`

export const PLACE_DETAILS_QUERY = `
    ${FRAGMENT_PLACE_ACF}
    ${FRAGMENT_PLACE_DETAILS}
    ${FRAGMENT_CITY}

    query getPlaceBySlug(
        $id: ID = ""
    ) {
      place(id: $id, idType: SLUG) {
        ...PlaceFragment
        cities {
          nodes {
            ...CityFragment
          }
        }
        commentCount
      }
    }
`

export const PLACE_PREVIEW_QUERY = `...`
