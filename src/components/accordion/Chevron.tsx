import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../icons";
library.add(faChevronRight);

const Chevron = (props: { className?: string; }) => {
    return <FontAwesomeIcon className={props.className} type="solid" size="1x" iconName="chevron-right" />
};

export default Chevron;
