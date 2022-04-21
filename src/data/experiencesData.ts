import { ExpType } from "../model/Experience";

export const experiencesData: ExpType[] = [
    {
        employementType: "Technical Intern",
        title: "Data Scientist",
        from: "April 2021",
        to: "June 2021",
        location: "Caen, France",
        entreprise: "Orange Labs",
        entrepriseLogo: "/orange.png",
        // entrepriseLogo: "https://www.angeluriot.com/portfolio/resources/images/experience/Cea.png",
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
];