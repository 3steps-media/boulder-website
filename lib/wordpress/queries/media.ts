export const FEATURED_IMAGE_FIELDS = `
    featuredImage {
      node {
        id
        altText
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
`