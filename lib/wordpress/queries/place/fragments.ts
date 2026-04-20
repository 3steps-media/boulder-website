export const ACF_PLACE_FIELDS = `
    cPTPlace {
        location {
            fullAddress
            shortAddress
        }
        shortDescription
        websiteUrl
        socialLinks {
            facebook
            instagram
            twitter
        }
        photos {
            nodes {
                id
                altText
                caption(format: RENDERED)
                sourceUrl
                mediaDetails {
                    width
                    height
                    sizes {
                        height
                        name
                        sourceUrl
                        width
                    }
                }
            }
        }
    }
`