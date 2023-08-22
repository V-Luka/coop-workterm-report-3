import React from 'react';
import './App.css';
import SunLife from './images/SunLife.jpg';
import Snowfall from 'react-snowfall'

function App() {

  return (
      <div style={{height: '100%', width: '100%'}}>
      <div className="report">
      <Snowfall className="particles"/>
      <div className="logo">
        <img className="logoImage" src={SunLife} alt="Logo PNG" />
      </div>
      <div className="reportContent">
        <h1 className="headers">Introduction</h1>
        <p className="internalText">Founded in 1865, Sun Life Financial is an established Canadian services company who is primarily known as a life insurance company. Their goal as a company is to allow their clients to achieve lifetime financial security and live healthier lives. Sun Life Financial is in the Financial Services industry and has offices located in Canada, United States, United Kingdom, Philippines, and Indonesia to name a few.</p>

        <h1 className="headers">Goals</h1>
        <p className="internalText">My first goal for this work term was to improve my written communication. This goal was achieved through regular messages with my co-workers, back and forth emails between numerous parties and written updates to provide more context for my co-workers to better understand the problem that is at hand. Along with this, written communication with outside organizations for necessary information was required for completion of tasks. My second goal was to improve my current organization and time management. I was able to achieve this goal through our scheduled sprints, time estimation on tickets and daily stand-up meetings to discuss progress of tickets, blockers, and anything else related to the ticket. I continuously used collaboration tools to manage my work and assure all work is completed on my end. I also used version control tools to manage repos and to properly merge updated files to the proper repo after the information is validated. I was also able to balance out workload while being a part of different teams and contributing for multiple different objectives. My final goal was to improve my ability to work in a team. My ability to work in a team improved tremendously for different reasons. The first reason was the multiple different group chats between different teams to keep everyone updated on the tasks that are being worked on and to show how work from a different team can be used by another team. Along with this, daily stand-up meetings with the entire Dev Ops team along with members from different teams allows for continuous communication regarding the progress of tickets that each team is working on. The friendliness of all co-workers that I worked with also made the environment welcoming and I was able to openly ask questions even if they were obvious to the experienced workers, they were more than welcome to help me understand it to the same degree as they do. I used many different tools available at Sun Life during my work term to achieve this goal.</p>

        <h1 className="headers">Job Description</h1>
        <p className="internalText">At Sun Life, I was employed as a DevOps Automation Engineer on the DevOps team. My first project was creating a visual representation of a large dataset that helps determine activeness amongst users for a specific application. After completing this task, I was assigned another task revolved around creating a best practices documentation so when new users are getting onboarded, they are aware of the standards that should be in place when adopting specific tools. Another project was modifying infrastructure code to help create guardrails for when users consume what our team produces. Many skills that were required for this job were related to soft skills such as adaptability, willing to learn and communication/collaboration which I felt confident with regarding my own ability to show these skills. Technical skills like programming in different languages that I am not used to and using large datasets to draw conclusions and visualizations were skills that I learned through my time with the company which I can now say I have experience with which I can use in future work.</p>

        <h1 className="headers">Conclusion</h1>
        <p className="internalText">In conclusion, Sun Life Financial was an amazing steppingstone in my career that really helped me push my career and knowledge in a direction that I feel is more fitting for what I am looking for as a final career. I was able to gain valuable knowledge from experienced workers and understand how a bigger corporation functions on a day-to-day basis while still expanding my skillset and knowledgebase on these new technologies. As this is my final coop placement, I am grateful for the teams that I was able to work with and the welcoming company culture that they provided me that helped me gain valuable knowledge that I can use to shape my career and future.</p>

        <h1 className="headers">Acknowledgements</h1>
        <p className="internalText">I would like to thank first and foremost, both co-op coordinators, Laura Gatto and Kate McRoberts for all the behind the scenes work regarding the coop process and the help they provided with connecting to employers. Secondly, I would like to thank Amy Weston for helping me with all the paperwork and onboarding for my first day back at Sun Life Financial. I would like to specifically thank Sukh Saggu, Richard Mauchline and Andre Rodrigues for their continuous support throughout the work term which helped me ease into the position and allow me to gain valuable knowledge and experience. Their extensive knowledge helped me quickly familiarize myself with the new work environment and tools that I would be using during the term. Lastly, I would like to thank Sun Life Financial as a company along with all my fellow co-workers that I spent the last few terms working with for an unforgettable experience which helped me shape my career through development of my skillset.</p>
      </div>
      </div>
      <footer className="footer">
        <div className="mainFooter">
          <div className="footerText">
            <ul>
              <li className="footerList"><p>Luka Vukadinovic</p></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
