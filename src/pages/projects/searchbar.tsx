import Select, { MultiValue } from "react-select";
import makeAnimated from 'react-select/animated';
import { CSSProperties } from "styled-components";
import { GroupedOption, groupedOptions, KeywordOption, LanguageOption } from "../../model/Options";
import './style.css';

// animation on select
const animatedComponents = makeAnimated();

// grouped select
const groupStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};
const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const ProjectsSearchBar = ({onChange}: { onChange: (value: MultiValue<LanguageOption | KeywordOption>) => void; }) => {
    return <Select<LanguageOption | KeywordOption, true, GroupedOption> 
        isDisabled={false} isLoading={false} isClearable isRtl={false} isSearchable
        name="projects-search-bar" className="multi-select" classNamePrefix="select" isMulti
        closeMenuOnSelect={false} closeMenuOnScroll={true} placeholder="Select languages or keywords to filter projects"
        noOptionsMessage={() => "No more languages or keywords to select :("} components={animatedComponents}
        options={groupedOptions} formatGroupLabel={formatGroupLabel} onChange={onChange}
    />
};

export default ProjectsSearchBar;
