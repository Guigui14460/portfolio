import { ExpType } from "../model/Experience";

export const experiencesData: ExpType[] = [
    {
        employementType: "Technical Intern",
        title: "Data Scientist",
        from: "April 2021",
        to: "June 2021",
        location: "Caen, France",
        entreprise: "Orange Labs",
        entrepriseLogo: "/images/enterprises/orange.webp",
        entrepriseUrl: "https://www.orange.com",
        keywords: ["machine learning", "deep learning", "simulation", "finance", "data science"],
        
        description: "I explored and visualized data from the production platform. From this, I then created a test simulator generating financial transactions in order to create Machine Learning models to verify the realism of this simulator. Then, I interpreted these models in order to continuously improve the simulator. Finally, I used Deep Learning techniques to go further in the realism analysis.",
        subject: "Development of a demonstrator in Python as part of research work on the simulation of financial transactions",
        referent: {
            firstName: "Étienne",
            lastName: "Daspe",
            jobDescription: "Software engineer",
            url: "https://fr.linkedin.com/in/etiennedaspe",
        },
        associatedTo: "Orange Money",
        associatedToUrl: "https://orangemoney.fr/",
    },
    {
        employementType: "Research Intern",
        title: "Research Intern",
        from: "February 2023",
        to: "August 2023",
        location: "Palaiseau, France",
        entreprise: "CEA (Commissariat à l'Énerge Atomique)",
        entrepriseLogo: "/images/enterprises/cea.webp",
        entrepriseUrl: "https://list.cea.fr/en/",
        keywords: ["deep learning", "pattern recognition", "computer vision", "sport", "video", "detection", "tracking"],

        description: "The first objective is to estimate the depth of the scene in order to be able to determine the position of the ball and the players in the match relative to the camera position. When the ball is occluded, an estimate of the probability of the ball's position is required. The second is to determine the ball carrier as best as possible using the previous estimation and a calibration of the field with a priori data in order to reason in 3D.",
        subject: "Detection and tracking of the ball holder in videos of team sports matches",
        referent: {
            firstName: "Astrid",
            lastName: "Sabourin",
            jobDescription: "Research Engineer in Artificial Intelligence applied to Computer Vision",
            url: "https://www.linkedin.com/in/astrid-sabourin-2b678aa4",
        },
    }
];
