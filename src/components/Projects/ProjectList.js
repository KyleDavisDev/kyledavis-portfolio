const Screenshots = {
  CustomWebIcons: require("../../images/Custom-Icons-SS-min.png"),
  DoublePendulumSS: require("../../images/DoublePendulum-SS-min.png"),
  FeatureSpotlight: require("../../images/FeatureSpotlight-SS-min.png"),
  FractalTreesSS: require("../../images/FractalTrees-SS-min.png"),
  KyleBonarReactWebsite: require("../../images/KyleBonarReactWebsite-SS-min.png"),
  KyleBonarOriginalWebsite: require("../../images/KyleBonarOriginalWebsite-SS-min.png"),
  PhyllotaxisSS: require("../../images/Phyllotaxis-SS-min.png"),
  PingPongSS: require("../../images/PingPong-SS-min.png"),
  SonsofVidya: require("../../images/SonsofVidya-SS-min.png"),
  TamuAstronomySS: require("../../images/Tamu-Astronomy-SS-min.png"),
  TamuPhysicsSS: require("../../images/Tamu-Physics-SS-min.png"),
  WordCounterSS: require("../../images/WordCounter-SS-min.png")
};
const Logos = {
  AdobeIllustratorLogo: require("../../images/Adobe-Illustrator-CC-Logo.png"),
  BootstrapLogo: require("../../images/Bootstrap-Logo.png"),
  CSS3Logo: require("../../images/CSS3-Logo.png"),
  ExpressLogo: require("../../images/ExpressJS-Logo.png"),
  FoundationLogo: require("../../images/Foundation-Logo.png"),
  GitHubLogo: require("../../images/GitHub-Logo.png"),
  HTML5Logo: require("../../images/HTML5-Logo.png"),
  JSLogo: require("../../images/JS-Logo.png"),
  JQueryLogo: require("../../images/JQuery-Logo.png"),
  LinkedInLogo: require("../../images/LinkedIn-Logo.png"),
  LinuxLogo: require("../../images/Linux-Logo.png"),
  MySQLLogo: require("../../images/MySQL-Logo.png"),
  NginxLogo: require("../../images/Nginx-Logo.png"),
  NodeJSLogo: require("../../images/NodeJS-Logo.png"),
  PHPLogo: require("../../images/PHP-Logo.png"),
  ReactJSLogo: require("../../images/ReactJS-Logo.png"),
  SassLogo: require("../../images/Sass-Logo.png"),
  WordPressLogo: require("../../images/Wordpress-Logo.png")
};

const ProjectList = [
  {
    url: "sons_of_vidya",
    documentTitleName: "Sons of Vidya",
    name: "Sons of Vidya",
    description:
      "The 'Sons of Vidya' is a very small channel on YouTube that I have been watching for years now. In most of their videos, you will find The Sons commentating over themselves playing video games and I find their quirky sense of humor entertaining. After noticing that their website was put together in 2011 (and looked like it!) I decided to offer up my skills and contribute back to the channel. I designed a garage-like style website with an awesome vintage logo, several custom badges each with a common Sons' catchphrase, and a 'Feature Video' section that automatically pulls the most-recent Sons video. The front end consists of React and SCSS, while the backend includes Node and Nginx reverse proxying. Additionally, the site has an autorefreshing SSL certificate through Let's Encrypt and has an overall score of \"A+\" from SSL Labs for security.",
    tools: [
      {
        name: "Linux Server Language",
        img: Logos.LinuxLogo
      },
      { name: "Nginx Web Server", img: Logos.NginxLogo },
      {
        name: "NodeJS Server Language",
        img: Logos.NodeJSLogo
      },
      {
        name: "ExpressJS Routing",
        img: Logos.ExpressLogo
      },
      {
        name: "ReactJS Library",
        img: Logos.ReactJSLogo
      },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "Sass CSS", img: Logos.SassLogo }
    ],
    img: Screenshots.SonsofVidya,
    external: {
      linkPath: "https://sonsofvidya.com",
      name: "Sons of Vidya Fan Website"
    }
  },
  {
    url: "feature_spotlight",
    documentTitleName: "Feature Spotlight",
    name: "Feature Spotlight",
    description:
      "This project was originally developed for the UTSA Mobile App in an attempt to battle the feeling of staleness, which existed on the app prior. Originally, the app would open up to a \"What's New\" landing page which would be updated every couple of months but with the new design and layout, any of the app's components can be promoted and shown off at the drop of a hat. In production, this design has been used for the calendar, student registration, a tech conference, and now dining. This design is responsive and will soon be used on other non-mobile platforms as well.",
    tools: [
      { name: "HTML5", img: Logos.HTML5Logo },
      {
        name: "Bootstrap CSS Library",
        img: Logos.BootstrapLogo
      },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.FeatureSpotlight,
    external: {
      linkPath:
        "https://crane.it.utsa.edu:8443/resources/appSpotlight/dining/index.html",
      name: "UTSA Feature Spotlight"
    }
  },
  {
    url: "kyle_bonar_react",
    documentTitleName: "React Portfolio",
    name: "ReactJS Portfolio",
    description:
      'A bit recursive, right? This project was a complete rewrite of my original portfolio website. This project has served as a platform for me to get comfortable with a ton of different popular JavaScript technologies and the build tools often associate with them; namely NodeJS, ReactJS, Express, Webpack, and Babel. Originally, I started with Facebook\'s "create-react-app", which greatly simplifies getting started with ReactJS, however I much prefer knowing what was going on under the hood. Because of this, I spent a good bit of time figuring out all of the individually pieces and how they work together. Understanding the ground-level components, I believe, have helped me to not only become a better ReactJS developer, but developer as a whole. Another awesome aspect of this project is scoring an "A+" in security, which is the highest score, from SSL Labs!',
    tools: [
      {
        name: "Linux Server Language",
        img: Logos.LinuxLogo
      },
      { name: "Nginx Web Server", img: Logos.NginxLogo },
      {
        name: "NodeJS Server Language",
        img: Logos.NodeJSLogo
      },
      {
        name: "ExpressJS Routing",
        img: Logos.ExpressLogo
      },
      {
        name: "ReactJS Library",
        img: Logos.ReactJSLogo
      },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "Sass CSS", img: Logos.SassLogo }
    ],
    img: Screenshots.KyleBonarReactWebsite,
    external: {
      linkPath: "https://kylebonar.com",
      name: "Kyle Bonar ReactJS Portfolio Website"
    }
  },
  {
    url: "tamu_physics",
    documentTitleName: "TAMU Physics",
    name: "Texas A&M Physics Website",
    description:
      "In just two short months, the Physics Department's website was given a massive overhaul. Everything from choosing a new server host, to updating the backend logic and databases, to making the design responsive, to providing the staff and faculty members a practical way to update and manage content throughout the site. On a massive team of exactly two people, I played a huge role in getting this project up and running.",
    tools: [
      {
        name: "PHP 5.4 Server Language",
        img: Logos.PHPLogo
      },
      { name: "Wordpress", img: Logos.WordPressLogo },
      {
        name: "MySQL database",
        img: Logos.MySQLLogo
      },
      {
        name: "JQuery JavaScript library",
        img: Logos.JQueryLogo
      },
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      {
        name: "Foundation Zurb CSS library",
        img: Logos.FoundationLogo
      },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.TamuPhysicsSS,
    external: {
      linkPath: "http://physics.tamu.edu",
      name: "TAMU Physics Website"
    }
  },
  {
    url: "tamu_mitchell",
    documentTitleName: "TAMU Astronomy",
    name: "Texas A&M Astronomy Website",
    description:
      "As a student Web Development Assistant, I worked on a small team to recreate the Astronomy Department's home domain. We were responsible for migrating years of static content into a MySQL database, for both easier management and record keeping, while also ensuring that every page be responsive. Several custom Wordpress themes were developed for this project and are actively maintained today.",
    tools: [
      {
        name: "PHP 5.4 Server Language",
        img: Logos.PHPLogo
      },
      { name: "Wordpress", img: Logos.WordPressLogo },
      {
        name: "MySQL database",
        img: Logos.MySQLLogo
      },
      {
        name: "JQuery JavaScript library",
        img: Logos.JQueryLogo
      },
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      {
        name: "Foundation Zurb CSS library",
        img: Logos.FoundationLogo
      },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.TamuAstronomySS,
    external: {
      linkPath: "http://mitchell.physics.tamu.edu",
      name: "TAMU Astronomy Website"
    }
  },
  {
    url: "kyle_bonar_original",
    documentTitleName: "Original Website",
    name: "Kyle Bonar First Personal Website",
    description:
      "When I started this project, I simply wanted to show off some projects that I had built, I had no idea the steps involved to put a website out on the internet. Starting from scratch, I had to configure a fresh server, install all of the proper tools, register and connect to the proper domain name, and implement security protocols. Luckily, with enough documentation and triple-checking each and every step, I was able to create this all my own. The webpage may not be the most visually appealing thing but I am incredibly proud of myself for sticking it out, and not getting overwhelmed by the immense challenge. Lastly, this project was built on the LEMP stack although, as it stands, is mostly just a static webpage.",
    tools: [
      {
        name: "Linux Server Language",
        img: Logos.LinuxLogo
      },
      { name: "Nginx Web Server", img: Logos.NginxLogo },
      {
        name: "PHP 5.4 Server Language",
        img: Logos.PHPLogo
      },
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.KyleBonarOriginalWebsite,
    external: {
      linkPath: "/KyleBonar_2015",
      name: "Original Kyle Bonar Website"
    }
  },
  {
    url: "illustrator_web_icons",
    documentTitleName: "Adobe Illustrator Web Icons",
    name: "Adobe Illustrator Web Icons",
    description:
      "As a UI/UX Developer for The University of Texas at San Antonio, I have spent a fair amount of time inside of the Adobe Suite. In doing so, I have created many icons, logos, and document designs which are currently being used across UTSA including UTSA Mobile App itself. I have also grown more comfortable in optimizing high-resolution images into a more web appropriate form to increase page load times and to decrease page load sizes.",
    tools: [
      {
        name: "Adobe Illustrator CC",
        img: Logos.AdobeIllustratorLogo
      }
    ],
    img: Screenshots.CustomWebIcons,
    external: {
      linkPath: "https://github.com/KyleBonar/utsa-icons",
      name: "GitHub of Web Icons"
    }
  },
  {
    url: "Word_Counting_App",
    documentTitleName: "Word Counter",
    name: "Word Counting App",
    description:
      "Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub.",
    tools: [
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.WordCounterSS,
    external: {
      linkPath: "/JSGames/wordCount",
      name: "Fun Word Counting Application"
    }
  },
  {
    url: "Phyllotaxis_App",
    documentTitleName: "Phyllotaxis",
    name: "Phyllotaxis App",
    description:
      "To create nice phyllotaxis images using only client-side rendering. Users can click anywhere within the canvas to create unique patterns and hopefully learn a bit too! The most common of phyllotaxis plants is the Aloe Polyphylla. This code can be found in my gitHub.",
    tools: [
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.PhyllotaxisSS,
    external: {
      linkPath: "/JSGames/phyllotaxis",
      name: "Phyllotaxis Art"
    }
  },
  {
    url: "Fractal_Trees_App",
    documentTitleName: "Fractal Trees",
    name: "Fractal Trees App",
    description:
      "To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub.",
    tools: [
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.PhyllotaxisSS,
    external: {
      linkPath: "/JSGames/fractalTrees",
      name: "Fractal Tree Application"
    }
  },
  {
    url: "Double_Pendulum_Vis",
    documentTitleName: "Double Pendulum",
    name: "Double Pendulum Visualization",
    description:
      "Inspired by my research as a senior in computational physics, the double pendulum is an excellent example of chaos theory. The simplified idea is that even the slightest change in the initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub.",
    tools: [
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.DoublePendulumSS,
    external: {
      linkPath: "/JSGames/doublePend",
      name: "Double Pendulum Visualization"
    }
  },
  {
    url: "Classic_Ping_Pong",
    documentTitleName: "Ping Pong",
    name: "Classic Ping Pong Application",
    description:
      "A classic arcade game brought to you in a browser! This was my first time messing around with HTML5's canvas as well as creating a very simple A.I.. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
    tools: [
      { name: "JavaScript", img: Logos.JSLogo },
      { name: "HTML5", img: Logos.HTML5Logo },
      { name: "CSS3", img: Logos.CSS3Logo }
    ],
    img: Screenshots.PingPongSS,
    external: {
      linkPath: "/JSGames/doublePend",
      name: "Simple Pong Game"
    }
  }
];

export default ProjectList;
