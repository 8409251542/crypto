import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gitHub from "../../Assets/Projects/git.png";
import Every from "../../Assets/Projects/every.png";
import poke from "../../Assets/Projects/poke.png";
import Eat from "../../Assets/Projects/Screenshot 2024-08-23 110856.png"
import Fit from "../../Assets/Projects/Screenshot 2024-08-23 114014.png"
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poke}
              isBlog={false}
              title="Pokemon"
              description="Experience the Pokémon universe like never before with our web app! Easily fetch and explore detailed profiles of your favorite Pokémon characters. Whether you're a seasoned trainer or new to the journey, our user-friendly interface makes discovering and learning about Pokémon a breeze. Dive into the world of Pokémon and uncover the stats, abilities, and lore of each creature with just a few clicks. Start your adventure today."
              ghLink="https://github.com/8409251542/pokemon"
              demoLink="https://8409251542.github.io/pokemon/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Every}
              isBlog={false}
              title="Every Expence"
              description="Take control of your finances effortlessly with our AI-powered daily expense tracker and investment assistant! Using HTML, CSS, and JavaScript, our intuitive web app empowers users to track daily expenses and receive personalized investment advice. Seamlessly manage your budget, set financial goals, and watch your investments grow with AI-driven insights. Stay ahead of your financial journey with our easy-to-use interface and expert guidance. Start optimizing your finances today!"
              ghLink="https://github.com/8409251542/everyexpence"
              demoLink="https://8409251542.github.io/everyexpence/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitHub}
              isBlog={false}
              title="GitHub"
              description="Discover, explore, and connect with developers worldwide using our Git Profile Finder! Crafted with HTML, CSS, and JavaScript, our sleek web app lets you search for GitHub profiles effortlessly. Explore developers' repositories, contributions, and stats with ease. Whether you're scouting for collaborators, seeking inspiration, or networking with fellow coders, our intuitive interface streamlines the process. Enhance your coding journey and expand your network with our Git Profile Finder today!"
              ghLink="https://github.com/8409251542/gitHub"
              demoLink="https://8409251542.github.io/gitHub/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eat}
              isBlog={false}
              title="EatFast"
              description="Discover, explore, and cook with ease using EatFast, your ultimate recipe finder! Built with React.js, our responsive web app allows you to search for delicious recipes effortlessly. Navigate through a vast collection of recipes, view detailed ingredients, and follow step-by-step cooking instructions with a user-friendly interface powered by React Router and dynamic components. Whether you're a seasoned chef or just starting out, EatFast helps you whip up meals in no time. Enhance your culinary journey and find your next favorite dish with EatFast today!"
              ghLink="https://github.com/8409251542/new-recipies"
              demoLink="https://new-recipies.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fit}
              isBlog={false}
              title="FitGuru"
              description="Get fit and stay healthy with Fit Guru, your go-to fitness app for personalized workouts! Developed with React and powered by Axios, our app helps you discover exercises tailored to specific body parts and health concerns. Whether you're looking to strengthen your core, improve flexibility, or address specific fitness issues, Fit Guru provides detailed exercise guides with an easy-to-navigate interface. Start your fitness journey today and achieve your goals with customized workout plans, all at your fingertips with Fit Guru!"
              ghLink="https://github.com/8409251542/FitGuru"
              demoLink="https://fit-guru-chi.vercel.app/#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
