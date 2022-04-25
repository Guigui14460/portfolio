import './FilterBar.css';
import Select, { MultiValue, Theme } from "react-select";
import makeAnimated from 'react-select/animated';
import { CSSProperties } from "styled-components";
import { GroupedOption, KeywordOption, LanguageOption } from "../../model/Options";
import { groupedOptions } from "../../data";

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

const ProjectsFilterBar = ({onChange}: { onChange: (value: MultiValue<LanguageOption | KeywordOption>) => void; }) => {
    function customTheme(theme: Theme) {
        return {
            ...theme,
            borderRadius: 0,
            colors: {
                ...theme.colors,
                primary50: '#444',
                primary25: '#333',
                privary: '#222',
            },
        };
    };

    return <Select<LanguageOption | KeywordOption, true, GroupedOption> 
        isDisabled={false} isLoading={false} isClearable isRtl={false} isSearchable
        name="projects-search-bar" className="multi-select" classNamePrefix="select" isMulti
        closeMenuOnSelect={false} closeMenuOnScroll={true} placeholder="Select options to filter projects"
        noOptionsMessage={() => "No more languages or keywords to select :("} components={animatedComponents}
        options={groupedOptions} formatGroupLabel={formatGroupLabel} onChange={onChange} theme={customTheme}
        aria-label="Searchable select"
    />
};

export default ProjectsFilterBar;
