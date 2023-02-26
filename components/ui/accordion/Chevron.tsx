import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FontAwesomeIcon } from "../icons";
library.add(faChevronRight);

const Chevron = (props: { className?: string; }) => {
    return <FontAwesomeIcon iconName="chevron-right" type="solid" size="1x" className={classNames(props.className, "icon-size")} />
};

export default Chevron;
