// Populate Desktop Navigation
const desktopNav = document.getElementById("desktop-nav");
desktopNav.innerHTML = `
  <div class="logo">Jamie Malabayabas</div>
  <ul class="nav-links">
    <li><a href="#profile">Profile</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Skills</a></li>
    <li><a href="#projects">Hobbies</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;

// Populate Hamburger Navigation
const hamburgerNav = document.getElementById("hamburger-nav");
hamburgerNav.innerHTML = `
  <div class="logo">Jamie Malabayabas</div>
  <div class="hamburger-menu">
    <div class="hamburger-icon" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu-links">
      <li><a href="#about" onclick="toggleMenu()">About</a></li>
      <li><a href="#experience" onclick="toggleMenu()">Skills</a></li>
      <li><a href="#projects" onclick="toggleMenu()">Hobbies</a></li>
      <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
    </div>
  </div>
`;

// Populate Profile Section
const profileSection = document.getElementById("profile");
profileSection.innerHTML = `
  <div class="section__pic-container">
    <img
      src="assets/jamie2.png"
      class="about-pic1"
    />
  </div>
  <div class="section__text">
    <p class="section__text__p1">Hello, I'm</p>
    <h1 class="title">Jamie Malabayabas</h1>
    <p class="section__text__p2">
      Learn More About Me
    </p>
  </div>
`;

// Populate About Section
const aboutSection = document.getElementById("about");
aboutSection.innerHTML = `
  <h1 class="title">About Me</h1>
  <div class="section-container">
    <div class="section__pic-container">
      <img src="assets/jamie1.png" class="about-pic" />
    </div>
    <div class="about-details-container">
      <div class="about-containers">
        <div class="details-container">
          <img src="./assets/experience.png" alt="Experience icon" class="icon" />
          <h3>Motto</h3>
          <p>Embrace growth, cherish moments, and create a legacy of kindness.</p>
        </div>
        <div class="details-container">
          <img src="./assets/education.png" alt="Education icon" class="icon" />
          <h3>Education</h3>
          <p>B.Sc. Information Technology</p>
        </div>
      </div>
      <div class="text-container">
        <p>
          Hey there! I'm Jamie Malabayabas, a student who's always excited to learn and grow. I'm passionate about exploring new things, whether it's through my studies or personal interests. I believe that every challenge is an opportunity to learn, and I'm always eager to take on something new. When I'm not studying, you can find me hanging out with friends, diving into hobbies, or just enjoying the little things in life. I’m all about staying curious and making the most of every moment!
        </p>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#experience'"
    />
  </div>
`;

// Populate Experience Section
const experienceSection = document.getElementById("experience");
experienceSection.innerHTML = `
  <p class="section__text__p1">Explore My</p>
  <h1 class="title">Skills</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container">
        <h2 class="experience-sub-title">Hard Skills</h2>
        <div class="article-container">
          <article>
            <img src="./assets/checkmark.png" alt="Checkmark icon" class="icon" />
            <div>
              <h3>Programming (Java, Python, JavaScript)</h3>
              <p>Learning</p>
            </div>
          </article>
          <article>
            <img src="./assets/checkmark.png" alt="Checkmark icon" class="icon" />
            <div>
              <h3>Database Management (SQL, NoSQL)</h3>
              <p>Learning</p>
            </div>
          </article>
        </div>
      </div>
      <div class="details-container">
        <h2 class="experience-sub-title">Soft Skills</h2>
        <div class="article-container">
          <article>
            <img src="./assets/checkmark.png" alt="Checkmark icon" class="icon" />
            <div>
              <h3>Flexible</h3>
            </div>
          </article>
          <article>
            <img src="./assets/checkmark.png" alt="Checkmark icon" class="icon" />
            <div>
              <h3>Friendly</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
`;

// Populate Projects Section
const projectsSection = document.getElementById("projects");
projectsSection.innerHTML = `
  <h1 class="title">Hobbies</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container color-container">
        <h2 class="experience-sub-title project-title">Singing</h2>
      </div>
      <div class="details-container color-container">
        <h2 class="experience-sub-title project-title">Reading Books</h2>
      </div>
    </div>
  </div>
`;

// Populate Contact Section
const contactSection = document.getElementById("contact");
contactSection.innerHTML = `
  <p class="section__text__p1">Get in Touch</p>
  <h1 class="title">Contact Me</h1>
  <div class="contact-info-upper-container">
    <div class="contact-info-container">
      <img
        src="./assets/email.png"
        alt="Email icon"
        class="icon contact-icon email-icon"
      />
      <p><a href="mailto:lourd@gmail.com">jamieMalabayabas@gmail.com</a></p>
    </div>
  </div>
`;
