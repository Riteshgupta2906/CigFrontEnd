import "./styles.css";
import React from "react";
import Post from "../BlogPost/newPost";
import postImage from "../images/CreativeWriting.svg";

const description=[
  {
    title:"Uttarakhand Udyog Mahotsava",
    description:"Uttarakhand Udyog Mahotsava is an event organized by the Government of Uttarakhand, organized by all the major Industrial associations.",
    image:"/UKUM.svg",
    content:"Uttarakhand Udyog Mahotsava is an event organized by the Government of Uttarakhand, organized by all the major Industrial associations of Uttarakhand with IITR as a leading organizer, aimed at promoting the development of start-ups in the state of Uttarakhand, India. The Corporate Interactions Group, IIT Roorkee was the organizing student body on behalf of IIT Roorkee for the successful execution of the event.The CIG team started planning for the event well in advance. They coordinated with the event organizers, industry associations, and stakeholders to serve all the necessary arrangements. Team CIG successfully developed and deployed the official UKUM website before the commencement of event to ensure hassle free transfer of information.The CIG team was present at registration desks to manage the registration of more than 250 stalls and address their general queries. More than 200 visitors were from IIT Roorkee itself. The members along with dedicated volunteers helped in managing logistics, ensuring that all the materials and equipment required were transported to the respective stalls on time. The volunteers helped in setting up posters across the space. They also helped in installing and assembling stalls from IIT Roorkee. The team volunteered in arranging for lunch and refreshments for the participants, ensuring that there were no interruptions in the event proceedings."
  
  },
   
  {
    title:"Hero Moto Corp (Industrial Visit)",
    image:"/Hero.svg",
    description:"Hero MotoCorp Haridwar plant is the largest two-wheeler manufacturing plant in the world with a capacity to produce 9,500 vehicles daily.",
    content:"The purpose of the visit was to gain insights into the various aspects of the manufacturing and production processes of motorcycles.The students were given a presentation about the company’s history, mission, and vision, followed by a discussion session. This session gave students exposure about various aspects of the company including manufacturing and market strategies, business, company culture, employee management, and research and development.The students were then escorted to the assembly and production line area, where they witnessed various processes, including advanced robot-based painting, welding, assembly lines, safety check, and zero-waste procedures.Mr. Raj Kumar, Head of Employee Relations, had an interactive session with the students, where he assured them about the various proactive employee management measures, including a comprehensive grievance redressal system and advanced employee relations strategy."
  },
  {
    title:"Institute Research Day",
    image:"/IRD.svg",
    description:"Celebrating birthday of one of the greatest contributor to the scientific community,Albert Einstein,institute organized the Institute Research Day.",
    content:`IIT Roorkee is renowned for its research culture. We have a strong emphasis on interdisciplinary research and collaboration among faculty members, students and researchers from different fields. Hence to celebrate the birthday of one of the greatest contributor to the scientific community, Albert Einstein, the institute organized the Institute Research Day on 13th and 14th March, 2023. Prof K.K. Pant, Director, IITR gave the inaugural address, followed by a poster competition session which witnessed more than 200 entries which was four times compared to last year. The Mehta Family School of Data Science and AI delivered a talk on “AI- Now and Beyond” along with professors from premier universities like Purdue University, University of Oxford and University of California.
    Our Director advised the students to get equipped with and use the latest technologies like AI and ML as powerful tools to expedite their research works. He also emphasized on the fact that newer technologies like AI is bringing together researchers and students from different branches and disciplines to work together on a much larger project, serving a much larger cause which was not possible with obsolete technologies. “Getting familiar with the fast changing technologies and adapting to multiple skillsets” was the golden piece of advise to all the engineering students for career growth.`
  },
  {
    title:"Corporate Leaders Interaction",
    image:"/CLI1.svg",
    description:"Shravan Tickoo is a distinguished alumnus of the 2015 graduating class of the IITR.He currently holds the position of Growth Product Manaager.",
    content:"Shravan Tickoo is a distinguished alumnus of the 2015 graduating class of the Indian Institute of Technology, Roorkee (IITR). He currently holds the position of Growth Product Manager, in addition to being a sought-after speaker and educator. Furthermore, he is an avid angel investor with a portfolio spanning more than 12 successful startup ventures. With a wealth of experience spanning various industries, Shravan has made significant contributions during his tenure at notable organizations such as Flipkart, Blackbuck, Times Group, Edureka, BYJUs, and is currently affiliated with Bhanzu."
  },
  {
    title:"Corporate Leaders Interaction",
    image:"/CLI2.png",
    description:"Blockchain, the revolutionary technology that's transforming industries around the globe, has become synonymous with security and transparency",
    content:"Blockchain, the revolutionary technology that's transforming industries around the globe, has become synonymous with security, transparency, and innovation. In the world of blockchain and cryptocurrency, Team CIG is your trusted source to get started. We bring you an exclusive interview with Arpit Sharma, a visionary in the blockchain space. With a wealth of experience and expertise, Arpit has been at the forefront of blockchain adoption, pioneering solutions that have reshaped the digital landscape. Arpit Sharma serves as the Managing Director and General Manager, overseeing operations in South Asia, South East Asia, and the Middle East, for Near Protocol."

  }
]

export default function Blog() {
  return (
    <div className="event">
      <div className="b">
        <div className="eventContent">
          <h1 id="Heading">Event</h1>
          <div>
            <p>
            The Corporate Interactions Group (CIG) is actively involved in creating opportunities for educational enrichment, professional 
            development, and industry engagement.We play a pivotal role in bridging the gap between academia and the corporate world, 
            ultimately benefiting both students and the wider business community.
            </p>
          </div>
        </div>
        <img className="mainImage" src={postImage} alt=""></img>
      </div>
      <div className="selection">
        <button className="button button-3">Hackathon</button>
        <button className="button button-3">Event</button>
        <button className="button button-3">NewsLetter</button>
        <button className="button button-3">CLI</button>
        <button className="button button-3">Industial Trip</button>
      </div>
      <div className="EventPost">
      {
        description.map((item)=>(
        
          <Post title={item.title} content={item.content}  description={item.description} image={item.image}/>
          
           
        ))
      }
       
      </div>
    </div>
  );
}
