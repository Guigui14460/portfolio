import styles from "@/styles/Tab.module.css"
import React, { useEffect, useState, CSSProperties } from "react";

export const TabPanel = (props: { title: string; children: React.ReactNode }) => {
    return <div>{props.children}</div>
};

export const Tab = (props: { active?: number; children: React.ReactNode | React.ReactNode[]; tabStyle?: CSSProperties; contentTabStyle?: CSSProperties; tabListStyle?: CSSProperties }) => {
    const [activeTab, setActiveTab] = useState(props.active || 0);
    const [tabsData, setTabsData] = useState<{title: string; children: JSX.Element}[]>([]);

    useEffect(() => {
        let data: {title: string; children: JSX.Element}[] = [];

        React.Children.forEach(props.children, (element) => {
            if(!React.isValidElement(element)) return;

            const {props: {title, children}} = element;
            data.push({ title, children });
        });

        setTabsData(data);
    }, [props.children]);

    return <div className={styles["tab"]} style={props.tabStyle}>
        <ul className={styles["tab__list"]} style={props.tabListStyle}>
            {tabsData.map((value, index) => {
                const style = index === activeTab ? "selected" : "";
                return <li key={index} className={`${styles["tab__list-item"]} ${styles[style]}`} onClick={() => setActiveTab(index)}>
                    <button>{value.title}</button>
                </li>
            })}
        </ul>
        <div className={styles["tab__content"]} style={props.contentTabStyle}>{tabsData[activeTab] && tabsData[activeTab].children}</div>
    </div>
};
