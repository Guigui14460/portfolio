import React, { useRef, useState } from "react";
import "./accordion.css";
import Chevron from "./Chevron";

const Accordion = (props: { title: string; children: React.ReactNode}) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("");

    const content = useRef<HTMLDivElement>(null);

    function toggleAccordion() {
        setActive(!active);
        if(null !== content.current)
            setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active ? "" : "rotate");
    }

    return <div className="accordion">
        <button className={`accordion__title ${active ? "active" : ""}`} onClick={toggleAccordion}>{props.title}<Chevron className={`accordion__icon ${rotate}`} /></button>
        <div className="accordion__content" ref={content} style={{ maxHeight: height }}>
            <div className="accordion__text">{props.children}</div>
        </div>
    </div>
};

export default Accordion;
