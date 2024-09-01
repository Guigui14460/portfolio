import { Teaching } from "../model/Teaching";
import languageInformations from "./languagesData";

export const trainingsData: Teaching[] = [
    {
        name: "Design Patterns in 3rd year of BSc (practical work)",
        description: "Java reminders, design patterns, test-driven development, project management, MVC (Model-View-Controller) with a Swing application.",
        beginDate: 2024,
        where: "University of Caen Normandy",
        languages: [languageInformations["java"]],
        keywords: ["desgin patterns", "mvc", "unit test", "swing"],
    },
];
