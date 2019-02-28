import images from "./images";

export const projectData = [
  {
    title: "aqquua",
    id: "aqquua",
    techStack: ["javascript-logo", "react-logo", "sass-logo", "aws-logo"],
    description: "Aqquua is a commercial aquaculture website built with React.js. The website uses the latest CSS properties for modern styling, prerendering for Search Engine Optimization (SEO), custom-made interactive animations, and transitions built with SASS and JavaScript. At launch, I deployed the website using AWS (Route 53, S3, CloudFront, and Lambda).",
    screenshot: images.projectLogos.aqquuaLogo,
    animationSubClass: "Right-animation",
    githubLink: "",
    deploymentLink: "https://aqquua.com/"
  },
  {
    title: "ZTHEPRO",
    id: "zthepro",
    techStack: ["javascript-logo", "react-logo", "sass-logo", "firebase-logo"],
    description: "ZTHEPRO is a musical portfolio built for a professional composer & music producer. It was made with React.js & SASS, and is deployed on Google's Firebase. Much like Aqquua's website, React.js libraries are utilized to trigger animations and other dynamic effects that coincide with the user's interaction with the site.",
    screenshot: images.projectLogos.zthepro,
    animationSubClass: "Left-animation",
    githubLink: "https://github.com/nycodinguru/reactproject",
    deploymentLink: "https://zthepro.com/"
  },
  {
    title: "Wristadvisor",
    id: "wristadvisor",
    techStack: ["html5-logo", "css-logo", "javascript-logo", "postgresql-logo", "ruby-on-rails-logo", "auth-logo", "react-logo"],
    description: "Wristadvisor is a full-stack project that features an e-commerce website built with React.js on the front-end. However, having just learned Ruby, and Ruby-on-Rails the week prior, I wanted to put my new found knowledge to the test. Thus, I decided not to go with Express.js, so I utilized a Ruby-on-Rails server on the back-end.",
    screenshot: images.projectLogos.wristadvisorLogo,
    animationSubClass: "Right-animation",
    githubLink: "https://github.com/nycodinguru/project4",
    deploymentLink: "http://wristadvisor.surge.sh/"
  },
  {
    title: "Reactagram",
    id: "reactagram",
    techStack: ["html5-logo", "css-logo", "javascript-logo", "express-js-logo", "postgresql-logo", "auth-logo", "react-logo"],
    description: "As the name suggests, Reactagram was built using React.js. The back-end was developed using Express.js and PostgreSQL, building off of my experience gained from the Newsington app. However, this project was built with a team of three other web developers, of which I was selected to lead and manage version control on GitHub.",
    screenshot: images.projectLogos.reactagramLogo,
    animationSubClass: "Left-animation",
    githubLink: "https://github.com/nycodinguru/reactagram/",
    deploymentLink: "http://reactagram-app.surge.sh/"
  },
  {
    title: "Newsington News",
    id: "newsington-news",
    techStack: ["html5-logo", "css-logo", "javascript-logo", "express-js-logo", "postgresql-logo", "auth-logo", "jquery-logo"],
    description: "Newsington is the first full-stack app I developed. It utilizes AJAX calls using jQuery on the front-end to fetch and render data from News API in HTML in real time, Axios calls via Express.js on the back-end to interact with the Postgres database, and it even features Auth for user signups, logins, and session tokens.",
    screenshot: images.projectLogos.newsingtonLogo,
    animationSubClass: "Right-animation",
    githubLink: "https://github.com/nycodinguru/newsingstonnews/",
    deploymentLink: "https://newsington-app.herokuapp.com/newsington/"
  },
  {
    title: "Snaaake!",
    id: "snaaake",
    techStack: ["html5-logo", "css-logo", "javascript-logo"],
    description: "Snaaake! was my first foray into making a JavaScript app, and no I didn't use a tutorial. Having worked lightly with HTML and CSS in the weeks prior I had to greatly expand my scope of JavaScript's capabilities from displaying the current date & time via the DOM to tracking and rendering an object in a 2D array using an MVC architecture.",
    screenshot: images.projectLogos.snaaakeLogo,
    animationSubClass: "Left-animation",
    githubLink: "https://github.com/nycodinguru/snaaake",
    deploymentLink: "https://nycodinguru.github.io/snaaake/"
  },
  {
    title: "null",
    id: "null",
    techStack: [""],
    description: "",
    screenshot: null,
    animationSubClass: "",
    githubLink: "",
    deploymentLink: ""
  }  
]

export const aboutSectionInfo = {
  title: "about.",
  resumeLink: "./resume/",
  linkedinLink: "https://www.linkedin.com/in/rashadrose/",
  blurb: "I am a web developer with a background in management and IT. I’m personable, self-motivated and I work well on a team. My time working as a field tech, traveling around the US and the globe, as well as my life-long personal interest in tinkering with tech, have given me a good grasp on people, history, culture, and of bunch of tech-oriented subject matter. I’m an empathetic person with a natural tendency to help others, and I also have a good sense of humor 😄."
}