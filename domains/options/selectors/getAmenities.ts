import getOptions from '../cache'

const getAmenities = async () => {
    const options = await getOptions()
    return options.optionsPageOptions.fieldGroupOptions.amenities
}

const getAmenityGroups = async () => {
    const options = await getOptions()
    return options.optionsPageOptions.fieldGroupOptions.amenityGroups
}

export const getFeaturedAmenities = async () => {
    const amenities = await getAmenities()
    return amenities
        .filter(a => a.isFeatured)
        .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
}

export const getAmenitiesByGroup = async (groupId: string) => {
    const amenities = await getAmenities()
    return amenities.filter(a => a.group.includes(groupId))
}

export const getGroupedAmenities = async () => {
    const amenities = await getAmenities()
    const groups = await getAmenityGroups()
    return groups.map(group => ({
        ...group,
        amenities: amenities.filter(a => a.group.includes(group.id))
    }))
}

// export const amenitiesApi = {
//     getAll: getAmenities,
//     getGroups: getAmenityGroups,
//     getFeatured: getFeaturedAmenities,
//     getByGroup: getAmenitiesByGroup,
//     getGrouped: getGroupedAmenities
// }