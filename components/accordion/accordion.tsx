import styles from './accordion.module.scss'

import Details from "@/components/details";
import {cn} from "@/utils/Utils";

type Props = {
    panels: {
        title: string;
        content: string;
        name?: string;
        isOpen?: boolean;
    }[];
    classes?: string;
}

export default function Accordion(props: Props) {
    return (
        <>
            <div className={cn(
                styles.uiAccordion,
                props.classes !== undefined ? props.classes : ''
            )}>
                {props.panels.map((panel, index) => (
                    <Details
                        key={index}
                        title={panel.title}
                        content={panel.content}
                        name={panel.name}
                        isOpen={panel.isOpen !== undefined && panel.isOpen}
                    />
                ))}
            </div>
        </>
    )
}