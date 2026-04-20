import {Fancybox} from "@fancyapps/ui/dist/fancybox";
import {FancyboxGalleryModel} from "@/domains/place/types";

export const handleOpenGallery = (images: FancyboxGalleryModel[], startIndex = 0) => {
    Fancybox.show(
        images,
        {
            startIndex,
            Carousel: {
                Thumbs: {
                    type: "modern"
                },
                Toolbar: {
                    display: {
                        left: ["counter"],
                        middle: [],
                        right: ["close"],
                    },
                },
            },
            Hash: false,
            mainStyle: {
                "--f-thumb-width": "44px",
                "--f-thumb-height": "44px",
                "--f-thumb-border-radius": "8px",
            }
        }
    )
}
