import { useState } from 'react';
import { MultiValue } from 'react-select';
import TeachingCard from './teachingCard';
import Grid from '../../components/grid';
import ObjectFilterBar from '../../components/filterBar/FilterBar';
import { hasLanguagesOrKeywords } from '../../model/Teaching';
import { KeywordOption, LanguageOption } from '../../model/Options';
import { teachingGroupedOptions, trainingsData } from '../../data';
import Marginer from '../../components/marginer';

const TeachingPage = () => {
    const [filters, setFilters] = useState<MultiValue<LanguageOption | KeywordOption>>([]);

    const teachingGrid = trainingsData.filter(value => hasLanguagesOrKeywords(value, filters)).map(value =>
        <Grid key={value.name.split(" ").join("-")} column sm={12} md={12} lg={12} padding="0"><TeachingCard key={value.name.split(" ").join("-")} teaching={value} padding="0.75rem" /></Grid>
    );

    return <>
        <h1>Teaching</h1>
        <p style={{ color: "#bfa110", fontWeight: 700 }}>Each section are ordered by most recent to more older.</p>
        <ObjectFilterBar
            onChange={setFilters}
            options={teachingGroupedOptions}
            name="trainings-search-bar"
            noOptionsMessage="No more languages or keywords to select 😢"
            placeholder="Select options to filter trainings"
        />
        <Marginer direction="vertical" margin="2em" />

        {
            teachingGrid.length !== 0 && 
                <Grid row>
                    {teachingGrid}
                </Grid>
        }
    </>
};

export default TeachingPage;
