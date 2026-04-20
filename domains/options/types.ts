export interface AmenityModel {
    id: string
    name: string
    isFeatured?: boolean
    order?: number
    icon: string
    group: string[]
}

export interface AmenityGroupModel {
    id: string
    name: string
    icon: string
    amenities: AmenityModel[]
}

export interface PaymentMethodModel {
    id: number
    name: string
    icon: string
}

export interface OptionsResponse {
    optionsPageOptions: {
        fieldGroupOptions: {
            amenities: AmenityModel[]
            amenityGroups: AmenityGroupModel[]
            paymentMethods: PaymentMethodModel[]
        }
    }
}