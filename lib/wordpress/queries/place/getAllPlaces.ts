import {GLOBAL_POST_TYPE_FIELDS} from "@/lib/wordpress/queries/common/global";
import {FEATURED_IMAGE_FIELDS} from "@/lib/wordpress/queries/common/media";
import {SEO_FIELDS} from "@/lib/wordpress/queries/common/seo";
import {ACF_PLACE_FIELDS} from "@/lib/wordpress/queries/place/fragments";

export const GET_ALL_PLACES = `
    fragment PlaceFields on Place {
        ${GLOBAL_POST_TYPE_FIELDS}
        ${FEATURED_IMAGE_FIELDS}
        ${SEO_FIELDS}
        ${ACF_PLACE_FIELDS}
    }
    
    query gGetAllPlaces(
        $imageSize: MediaItemSizeEnum = LARGE
    )   {
        places {
            nodes {
                ...PlaceFields 
            } 
        }
    }
`