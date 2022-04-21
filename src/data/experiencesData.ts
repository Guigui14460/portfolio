import { ExpType } from "../model/Experience";

export const experiencesData: ExpType[] = [
    {
        title: "Data Scientist",
        from: new Date("2021-04-01"),
        to: new Date("2021-06-04"),
        location: "Caen, France",
        entreprise: "Orange Labs",
        entrepriseLogo: "/orange.png",
        entrepriseUrl: "https://www.orange.com",
        referent: {
            firstName: "Étienne",
            lastName: "Daspe",
            jobDescription: "Software engineer",
            url: "https://fr.linkedin.com/in/etiennedaspe",
        },
        associatedTo: "Orange Money",
        associatedToUrl: "https://orangemoney.fr/",
        subject: "Development of a demonstrator in Python as part of research work on the simulation of financial transactions",
        description: "I explored and visualized data from the production platform. From this, I then created a test simulator generating financial transactions in order to create Machine Learning models to verify the realism of this simulator. Then, I interpreted these models in order to continuously improve the simulator. Finally, I used Deep Learning techniques to go further in the realism analysis.",
        keywords: ["machine learning", "deep learning", "simulator", "finance", "data science"],
    },
];