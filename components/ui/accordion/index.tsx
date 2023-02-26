import styles from "@/styles/Accordion.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";

const Accordion = (props: { title: string; children: ReactNode; id?: string, isOpen?: boolean }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0);
    const [rotate, setRotate] = useState("");

    const content = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if(null !== content.current)
                setHeight(content.current.scrollHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const toggleAccordion = () => {
        setActive(!active);
        if(null !== content.current)
            setHeight(content.current.scrollHeight);
        setRotate(active ? "" : "rotate");
        // eslint-disable-next-line
    }

    useEffect(() => {
        const value = !!props.isOpen;
        if(value) {
            setActive(true);
            if(null !== content.current)
                setHeight(content.current.scrollHeight);
            setRotate("");
        }
    }, [props.isOpen])

    return <div className={styles["accordion"]} id={props.id}>
        <button className={`${styles["accordion__title"]} ${active && styles["active"]}`} onClick={toggleAccordion}>{props.title}<Chevron className={`${styles["accordion__icon"]} ${styles[rotate]}`} /></button>
        <div className={styles["accordion__content"]} ref={content} style={{ maxHeight: (active ? height : 0) }}>
            <div className={styles["accordion__text"]}>{props.children}</div>
        </div>
    </div>
};

export default Accordion;
