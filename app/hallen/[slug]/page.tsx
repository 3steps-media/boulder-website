import React from "react";
import {notFound} from 'next/navigation'
import {placeApi} from "@/domains/place/api";
import {getFeaturedAmenities, getGroupedAmenities} from "@/domains/options/selectors/getAmenities";
import PlacePage from "@/domains/place/components/PlacePage/PlacePage";
import {getPaymentMethods} from "@/domains/options/selectors/getPaymentMethods";

export async function generateStaticParams() {
    const places = await placeApi.loadPlaceSlugsCollection();

    return places
        .filter((place) => !!place.slug)
        .map((place) => ({slug: place.slug}));
}

export default async function Halle({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    if (!slug) {
        notFound();
    }

    const [place, featured, grouped, paymentMethods] = await Promise.all([
        placeApi.loadPlaceDetailsBySlug(slug),
        getFeaturedAmenities(),
        getGroupedAmenities(),
        getPaymentMethods()
    ]);


    return (
        <PlacePage
            place={place}
            amenities={{featured: featured, grouped: grouped}}
            paymentMethods={paymentMethods}
        />
    )
}
