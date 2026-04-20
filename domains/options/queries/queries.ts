export const OPTIONS_QUERY = `
    query getOptions {
      optionsPageOptions {
        fieldGroupOptions {
          amenities {
            id
            name
            icon
            isFeatured
            order
            group
          }
          amenityGroups {
            id
            name
          }
          paymentMethods {
            id
            name
            icon
          }
        }
      }
    }
`