import React from 'react'
import {Element} from "react-scroll";
import Project from '../Project/Project';
import auction from "../image/Auction.jpeg";
import todolist from "../image/todolist.jpeg";
import recommender from "../image/recommender.jpg"
import ecommercee from "../image/ecommercee.png"


import "./ProjectContainer.css"
const ProjectContainer = () => {
  const projects=[
    {
    img:
    auction,
    title:
    "Online Bidding System",
    desc:
    "Welcome to our online bidding platform, where auctions meet convenience. Explore diverse categories, bid securely, and join a vibrant community. Experience the thrill of bidding from anywhere, anytime!",
    link:
    "www.google.com",
    },
    {
      img:
      todolist,
      title:
      "ToDoList",
      desc:
      "A to-do list is a tool used to organize tasks and prioritize activities. It typically consists of a list of items or tasks that need to be completed, along with deadlines or priority levels. It helps individuals or teams stay focused, manage their time effectively, and track their progress towards their goals.",
      link:
      "www.google.com",
      },
      {
        img:
        recommender,
        title:
        "Recommander System",
        desc:
        "Introducing our revolutionary AI-based Practice Challenge Recommender System, seamlessly integrated with top Programming Online Judge platforms like Code Chef and Code Forces. Bid farewell to tracking woes and unlock your coding potential effortlessly with personalized guidance and motivation.",
        link:
        "www.google.com",
        },
        {
          img:
          ecommercee,
          title:
          "E-commerce Website",
          desc:
          "Welcome to our online store! We've got great stuff just for you. It's easy to shop here - pick what you like, pay securely, and we'll deliver it fast. Join us for special deals and be part of our happy customer family. Start shopping now and enjoy the convenience!",
          link:
          "www.google.com",
          }
  ]

  return (
    <Element className="projectContainer" id="projects">
    <h1>Projects</h1>
    <p className="project_header">Here, I'm excited to showcase a selection of projects I've had the privilege to work on. Each project represents a journey of discovery, innovation, and collaboration, reflecting my commitment to delivering exceptional results.</p>
    <div className="projectContainer__projects">
     {
        projects.map((project,index)=>{
            return (
                <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
            )
        })
     }
    </div>
    </Element>
  )
}

export default ProjectContainer