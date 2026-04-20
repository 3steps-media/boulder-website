import React from "react";
import styles from "./Information.module.css";

type InformationItemProps = {
    icon?: React.ReactNode,
    title?: string,
    content?: string
}

export default function InformationItem({icon, title, content}: InformationItemProps) {
    return (

        <div className={styles.InformationItem}>
            <dl>
                <div>
                    <dt>
                        {icon}
                        <span>{title}</span>
                    </dt>
                    <dd>{content}</dd>
                </div>
            </dl>
        </div>
    );
}