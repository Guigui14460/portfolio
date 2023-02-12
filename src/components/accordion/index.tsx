import "./accordion.css";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";

const Accordion = (props: { title: string; children: ReactNode; id?: string, isOpen?: boolean }) => {
    const [active, setActive] = useState(!props.isOpen);
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

    const toggleAccordion = useCallback(() => {
        setActive(!active);
        if(null !== content.current)
            setHeight(content.current.scrollHeight);
        setRotate(active ? "" : "rotate");
    }, [])

    useEffect(() => {
        toggleAccordion()
    }, [props.isOpen, toggleAccordion])

    return <div className="accordion" id={props.id}>
        <button className={`accordion__title ${active && "active"}`} onClick={toggleAccordion}>{props.title}<Chevron className={`accordion__icon ${rotate}`} /></button>
        <div className="accordion__content" ref={content} style={{ maxHeight: (active ? height : 0) }}>
            <div className="accordion__text">{props.children}</div>
        </div>
    </div>
};

export default Accordion;
