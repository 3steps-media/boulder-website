import {GLOBAL_POST_TYPE_FIELDS} from "@/lib/wordpress/queries/global";
import {FEATURED_IMAGE_FIELDS} from "@/lib/wordpress/queries/media";
//import {SEO_FIELDS} from "@/lib/wordpress/queries/seo";

export const FRAGMENT_PLACE_ACF = `
    fragment CptPlaceFragment on CptPlace {
      location {
        fullAddress
        shortAddress
      }
      email
      phone
      shortDescription
      fullDescription
      websiteUrl
      socialLinks {
        facebook
        instagram
        twitter
        youtube
        tiktok
      }
      pricing{
        price
        linkToPriceList
      }
      photos(first: 12) {
        nodes {
          id
          altText
          caption(format: RENDERED)
          sourceUrl
          mediaDetails {
            sizes {
              height
              name
              sourceUrl
              width
            }
          }
        }
      }
      amenities
      importantInformation
      groupSize
      beginnersCourses
      paymentMethods
      workingHours{
        from
        to
      }
    }
`

export const FRAGMENT_PLACE_DETAILS = `
    fragment PlaceFragment on Place {
      ${GLOBAL_POST_TYPE_FIELDS}
      ${FEATURED_IMAGE_FIELDS}
      cptPlace {
        ...CptPlaceFragment
      }
    }
`

export const FRAGMENT_PLACE_PREVIEW = `
    fragment PlacePreviewFragment on Place {
      ${GLOBAL_POST_TYPE_FIELDS}
      ${FEATURED_IMAGE_FIELDS}
    }
`