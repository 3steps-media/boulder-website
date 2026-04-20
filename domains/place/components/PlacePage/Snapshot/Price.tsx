import {Flex, NumberFormatter, Text} from "@mantine/core";
import {ACFModel} from "@/domains/place/types";

type PriceProps = {
    pricing: ACFModel['pricing'];
}

export default function Price({pricing}: PriceProps) {
    const price = pricing.price ?? null;
    const link = pricing.linkToPriceList ?? null;

    if (price === null) return null;

    return (
        <Flex justify={'flex-end'} align={'flex-start'} gap={4}>
            <Text size={'sm'} lh={1} mt={3} c={'dimmed'}>
                ab
            </Text>
            <Text size={'40px'} lh={1}>
                <NumberFormatter
                    value={price}
                    suffix={'€'}
                    thousandSeparator
                    decimalSeparator="."
                    fixedDecimalScale={false}
                />
            </Text>
        </Flex>
    )
}