import {GLOBAL_POST_TYPE_FIELDS} from "@/lib/wordpress/queries/common/global";
import {FEATURED_IMAGE_FIELDS} from "@/lib/wordpress/queries/common/media";
import {TAX_CITIES_FIELDS__EDGES} from "@/lib/wordpress/queries/city/fragments";

const placeCardFields = `
    fragment PlaceCardFields on Place {
        ${GLOBAL_POST_TYPE_FIELDS}
        ${FEATURED_IMAGE_FIELDS}
        ${TAX_CITIES_FIELDS__EDGES}
    }
`

export const GET_PLACE_CARD = `
    ${placeCardFields}
    query GetPlaceCard(
        $id: ID!
        $idType: PlaceIdType = DATABASE_ID
        $imageSize: MediaItemSizeEnum = MEDIUM
    ) {
        place(id: $id, idType: $idType) {
            ...PlaceCardFields
        }
    }
`

export const GET_PLACE_CARDS = `
    query GetPlaceCards(
      $first: Int, 
      $last: Int, 
      $before: String, 
      $after: String,
      $imageSize: MediaItemSizeEnum = MEDIUM
    ) {
      places(
        after: $after, 
        before: $before, 
        first: $first, 
        last: $last
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            ...PlaceCardFields
          }
        }
      }
    }
    
    ${placeCardFields}
`