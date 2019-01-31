import images from "./images";

export const navbarLinks = [
    {
      title: "projects",
      color: "#ff4400",
      id: "Sales",
      link: true
    },
    {
      title: "bio",
      color: "#ffc702",
      id: "Contact"
    },
    {
      title: "contact",
      color: "#16639f",
      id: "About"
    },
    {
      title: ".Farm",
      color: "#f32e37",
      id: "Farm",
      link: true
    }
  ];

  export const projectData = [
    {
      title: "aqquua",
      id: "aqquua",
      techStack: ["javascript-logo", "react-logo", "sass-logo"],
      description: "Aqquua is a commericial aquaculure website built with React.js. The website uses a lot of modern styling, prerendering for SEO, custom interactive animations, and transitions built with SASS and Javascript. At launch, I deployed the website using AWS (Route 53, S3, CloudFront, and Lambda).",
      screenshot: images.projectLogos.aqquuaLogo,
      animationSubClass: "Left-animation",
      githubLink: "",
      deploymentLink: "http://aqquua.surge.sh/"
    },
    {
      title: "Wristadvisor",
      id: "wristadvisor",
      techStack: ["html5-logo", "css-logo", "javascript-logo", "postgresql-logo", "ruby-on-rails-logo", "react-logo"],
      description: "Wristadvisor is a full-stack project that features an e-commerce website built with React.js on the front-end. However, having just learned Ruby, and Ruby-on-Rails the week prior, I wanted to put my new found skills to the test. Thus, I decided not to go with Express this time around, so I utilized a Ruby-on-Rails server on the back-end.",
      screenshot: images.projectLogos.wristadvisorLogo,
      animationSubClass: "Right-animation",
      githubLink: "https://github.com/nycodinguru/project4",
      deploymentLink: "http://wristadvisor.surge.sh/"
    },
    {
      title: "Reactagram",
      id: "reactagram",
      techStack: ["html5-logo", "css-logo", "javascript-logo", "express-js-logo", "postgresql-logo", "react-logo"],
      description: "As the name suggests, Reactagram was built using React.js. The back-end was built using Express.js, building off of my experience gained from the Newsington app. However, this project was built with a team of three other web developers, of which I was selected to manage and merge changes on GitHub.",
      screenshot: images.projectLogos.reactagramLogo,
      animationSubClass: "Left-animation",
      githubLink: "https://github.com/nycodinguru/reactagram/",
      deploymentLink: "http://reactagram-app.surge.sh/"
    },
    {
      title: "Newsington News",
      id: "newsington-news",
      techStack: ["html5-logo", "css-logo", "javascript-logo", "express-js-logo", "postgresql-logo"],
      description: "Newsington is the first full-stack app I developed. It utilizes AJAX calls using jQuery on the front-end, Axios calls using Express.js on the back-end, a PostgreSQL database, and features Auth for user signups, logins, and session tokens.",
      screenshot: images.projectLogos.newsingtonLogo,
      animationSubClass: "Right-animation",
      githubLink: "https://github.com/nycodinguru/newsingstonnews/",
      deploymentLink: "https://newsington-app.herokuapp.com/newsington/"
    },
    {
      title: "Snaaake!",
      id: "snaaake",
      techStack: ["html5-logo", "css-logo", "javascript-logo"],
      description: "Snaaake! was my first foray into making a Javascript application. Having worked lightly with HTML and CSS in the weeks prior I had to greatly expand my scope of Javacript's capabilities from displaying the current date and time on a webpage to tracking an object using a 2D array.",
      screenshot: images.projectLogos.snaaakeLogo,
      animationSubClass: "Left-animation",
      githubLink: "https://github.com/nycodinguru/snaaake",
      deploymentLink: "https://nycodinguru.github.io/snaaake/"
    },
    {
      title: "aqquua",
      id: "aqquua2",
      techStack: ["html5-logo", "css-logo", "javascript-logo"],
      description: "Featuring a professional, modular architecture built with React.js, Aqquua's website uses a lot of modern styling, custom interactive animations, and transitions built with SASS (complied into CSS), and Javascript. At launch, I deployed the website using AWS (Route 53, S3, and Lambda).",
      screenshot: images.projectLogos.aqquuaLogo,
      animationSubClass: "Right-animation",
      githubLink: "",
      deploymentLink: "http://aqquua-beta.surge.sh/"
    }  
]