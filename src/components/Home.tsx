import { FC } from "react";
import './home.css'
import github from "../assets/github.svg"
import dev from "../assets/dev.svg"
import linkedin from "../assets/linkedin.svg"
import upwork from "../assets/upwork.svg"
import email from "../assets/email.svg"

const Home: FC = () => {
  const skills = [
    "Next.js",
    "React.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Google Lit",
    "Stencil.js",
    "Webpack",
    "Module Federation",
    "Tailwind CSS",
    "SCSS",
    "HTML",
    "Chart.js",
    "RxJS",
    "React-Query",
    "Lerna.js",
    "Storybook",
    "Redux-Saga",
    "Jest",
    "React Testing Library",
  ];

  return (
    <div className="Home">
      <header>
        <h1>Sanchit Wakekar</h1>
        <p>Frontend Developer</p>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Building Beautiful & Functional Web Experiences</h2>
          <p>
            I specialize in creating modern, responsive, and user-friendly web applications using cutting-edge technologies.
          </p>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Hi, I'm Sanchit Wakekar, a passionate frontend developer with expertise in React, JavaScript, and CSS. I love turning ideas into reality through clean and efficient code.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="card">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="links">
        <h2>Hire me</h2>
        <div className="card">
          <div className="links-grid">
            <a href="https://linkedin.com/in/sanchit-wakekar" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={linkedin} />
            <span>LinkedIn</span>
            </a>
            <a href="https://dev.to/sanchit_wakekar" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={dev} />
            <span>Dev.to</span>
            </a>
            <a href="https://github.com/sanchitwakekar" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={github} />
              <span>GitHub</span>
            </a>
            <a href="https://www.upwork.com/freelancers/~017e77e7230b49e4a2" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={upwork} />
              <span>Upwork</span>
            </a>
            <a href="mailto:sanchit.manoj.wakekar@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={email} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2023 Sanchit Wakekar. All rights reserved.</p>
      </footer>
    </div>
  );
}
//     const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const skills = [
//     "Next.js",
//     "React.js",
//     "React Native",
//     "TypeScript",
//     "JavaScript",
//     "Lightning Web Components",
//     "Google Lit",
//     "Stencil.js",
//     "Webpack",
//     "Module Federation",
//     "Tailwind CSS",
//     "SCSS",
//     "HTML",
//     "RxJS",
//     "STOMP.js",
//     "React-Query",
//     "React-i18next",
//     "Lerna.js",
//     "Storybook",
//     "Redux-Saga",
//     "Jest",
//     "React Testing Library",
//   ];

//   return (
//     <div className={`Home ${theme}`}>
//       <header>
//         <h1>Sanchit Wakekar</h1>
//         <p>Frontend Developer</p>
//         <button onClick={toggleTheme}>
//           {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//         </button>
//       </header>

//       <section className="hero">
//         <div className="hero-content">
//           <h2>Building Beautiful & Functional Web Experiences</h2>
//           <p>
//             I specialize in creating modern, responsive, and user-friendly web applications using cutting-edge technologies.
//           </p>
//         </div>
//       </section>

//       <section className="about">
//         <h2>About Me</h2>
//         <div className="card">
//           <p>
//             Hi, I'm Sanchit Wakekar, a passionate frontend developer with expertise in React, JavaScript, and CSS. I love turning ideas into reality through clean and efficient code.
//           </p>
//         </div>
//       </section>

//       <section className="skills">
//         <h2>Technical Skills</h2>
//         <div className="card">
//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <div key={index} className="skill-item">
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="links">
//         <h2>Connect with Me</h2>
//         <div className="card">
//           <ul>
//             <li>
//               <a href="https://github.com/<your-github-username>" target="_blank" rel="noopener noreferrer">
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://linkedin.com/in/<your-linkedin-username>" target="_blank" rel="noopener noreferrer">
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="https://dev.to/sanchit_wakekar" target="_blank" rel="noopener noreferrer">
//                 Dev.to
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/sanchit.wakekar/" target="_blank" rel="noopener noreferrer">
//                 Instagram
//               </a>
//             </li>
//             <li>
//               <a href="mailto:<your-email>" target="_blank" rel="noopener noreferrer">
//                 Email
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <footer>
//         <p>© 2023 Sanchit Wakekar. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

export {Home}