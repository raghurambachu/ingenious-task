// key 1,2,... represents the taskId
// key MentorVideo,Information,... represent the information regarding that tab
// Currently I am storing images in the public in real time images would be served from cloudinary or any other cloud based url
const appData = {
  1: {
    "Mentor Video": {
      image: "/images/person.jpg",
      imageAlt: "Person Mentor",
      intro:
        "Watch this video from the mentor introducing you to the task and continue with the program task.",
    },
    Information: {
      paras: [
        "DHL Global Forwarding (DGF) is the freight forwarding Division of Deutsche Post DHL providing air and ocean freight forwarding services. It also plans and undertakes major logistics projects under the brand  DHL Industrial Projects.",
        "Digitalization is at the heart of business intelligence, infrastructure and customer visibility. Our approach to innovation and development is customer centric and we believe will prove to be the force behind the retention of our reputation of a logistics leader.",
      ],
    },
    Task: {
      paras: [
        "You are required to do some market research and list down the key challenges logistics companies face. You can go ahead and do extensive research through various mediums but summarise key points for the task.",
      ],
      list: [
        "Please create a presentation that lists and explains at least 5 challenges.Support your research with examples and references.",
        "Keep the brief of each challenge between 100-150 words only hence put down a concise analysis of your research.",
      ],
    },
    Resources: {
      intro:
        "White Paper: Change at the Speed of the Consumer: How E-Commerce is Accelerating Logistics Innovations",
      images: ["/images/wp-1.png", "/images/wp-2.png", "/images/wp-3.png"],
    },
  },
  2: {
    "Mentor Video": {
      image: "/images/person.jpg",
      imageAlt: "Person Mentor",
      intro:
        "Watch this video from the mentor introducing you to the task and continue with the program task.",
    },
    Information: {
      paras: [
        "One of the core principles of any logistics company is corresponding with customers’ expectations by providing seamless services and delivering orders on time. Before for customers, it was already enough to have goods delivered from one point to the destination point, now, as the technologies have evolved, customers demand total traceability throughout the whole delivery process.",
        "However, this is easier said than done. So how do we know if a proposed or advertised solution is the right step? The solution assessment method is proven, flexible, adaptable and easy to use. It is intuitive for the stakeholders involved in the process and for those who get to see and endorse the outcome.",
      ],
    },
    Task: {
      paras: [
        "In this task you are required to conduct a solution assessment for the 5 proposed solutions that the team has brainstormed and proposed so that you can evaluate and prioritise the solutions in a way that the solution that delivers the best results for the business with minimal risk is obtained. You are required to conduct a thorough study on each of the solutions before summarising your results. Please find the following solutions to be evaluated:",
      ],
      list: [
        "Integrating activity and geolocation tracking",
        "CRM customised for logistics needs",
        "Inventory/warehouse tracking information system",
        "Use an application for internal communication",
        "Create and utilise customized eLearning system",
      ],
    },
    Resources: {
      intro:
        "Guide: https://issuu.com/experttoolkit/docs/solution_assessment_method_guide___",
      images: ["/images/resources-img.png"],
    },
  },
};

export default appData;
