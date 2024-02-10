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
        referents: [{
            firstName: "Étienne",
            lastName: "Daspe",
            jobDescription: "Software engineer",
            url: "https://fr.linkedin.com/in/etiennedaspe",
        }],
        associatedTo: "Orange Money",
        associatedToUrl: "https://orangemoney.fr/",
    },
    {
        employementType: "Research Intern",
        title: "Data Scientist",
        from: "February 2023",
        to: "August 2023",
        location: "Palaiseau, France",
        entreprise: "CEA (Commissariat à l'Énerge Atomique et aux Énergie Alternatives) LIST",
        entrepriseLogo: "/images/enterprises/cea.webp",
        entrepriseUrl: "https://list.cea.fr/en/",
        keywords: ["computer vision", "deep learning", "sport", "pattern recognition", "image", "video", "detection", "tracking"],

        description: "The first aim was to be able to locate the ball in images taken from videos of team sports games. The second was to find the ball carrier by associating the players with the ball in an intelligent way (algorithms, learned models). An existing dataset was enriched to solve this task and to evaluate our criteria. Finally, the last objective was to apply this to video and fill in the detection gaps from the previous two objectives.",
        subject: "Detection and tracking of the ball holder in videos of team sports matches",
        referents: [
            {
                firstName: "Astrid",
                lastName: "Sabourin",
                jobDescription: "Research Engineer in Artificial Intelligence applied to Computer Vision",
                url: "https://www.linkedin.com/in/astrid-sabourin-2b678aa4",
            },
            {
                firstName: "Adrien",
                lastName: "Maglo",
                jobDescription: "Computer Vision Engineer and Researcher",
                url: "https://fr.linkedin.com/in/adrien-maglo-0590a050",
            },
        ],
    },
    {
        employementType: "Research",
        title: "PhD Student",
        from: "September 2023",
        to: "August 2026",
        location: "Caen, France",
        entreprise: "GREYC (affiliated to University of Caen Normandy)",
        entrepriseLogo: "/images/enterprises/greyc-unicaen.webp",
        entrepriseUrl: "https://www.greyc.fr/",
        keywords: ["computer vision", "deep learning", "self-supervision", "representation learning", "3D point cloud"],

        description: "The main objective of this thesis is to improve existing methods and develop new, more efficient methods in the field of neural networks for 3D point clouds. More specifically, my work will aim to cover a part called \"self-supervised learning of representations\" which makes it possible to learn general features of 3D objects using no labelled data via one or more pretextual tasks. Such models can then be used as information encoders for a more precise target task.",
        subject: "Self-supervised learning of 3D point cloud representations",
        referents: [
            {
                firstName: "Frédéric",
                lastName: "Jurie",
                jobDescription: "University Professor, reasearcher at GREYC in Artificial Intelligence applied to Computer Vision",
                url: "https://jurie.users.greyc.fr/",
            },
            {
                firstName: "Gaurav",
                lastName: "Sharma",
                jobDescription: "Head of AI Research at Typeface, reasearcher in Artificial Intelligence applied to Computer Vision",
                url: "https://grvsharma.com/",
            },
        ],
    }
];
