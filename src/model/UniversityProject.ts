import { Project } from './Project';

export interface UniversityProject extends Project {
    teachingUnit: string;
    year: number;
}
