import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <a className="navbar-brand" href="#">Tanvee</a>

      {/* Toggle Button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
       <span className="navbar-toggler-icon"></span>
       </button>

    {/* Collapsible Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-center mx-3">
       <li className="nav-item">
       <a className="nav-link" href="#about">About</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/Tanvee_Waikar_Resume.pdf" download>Resume</a>
       </li>
      </ul>
    </div>
  </nav>

      {/* Hero Section */}
      <div className="container text-center my-5">
        <h1>Hi, I'm Tanvee 👋</h1>
        <h3>Frontend Developer | React Developer</h3>
        <p>
          I build responsive and user-friendly web applications using React and
          MERN stack.
        </p>
        <a href="/Tanvee_Waikar_Resume.pdf" className="btn btn-primary mt-3" download>
        Download Resume
        </a>
      </div>

      {/* About */}
      <div className="container my-5" id="about">
        <h2>About Me</h2>
        <p>
          I am an IT Engineering student passionate about frontend development.
          I have experience in building full-stack applications using MERN stack
          and currently improving my skills in Python and SQL.
        </p>
      </div>

      {/* Skills */}
      <div className="container my-5" id="skills">
        <h2>Skills</h2>
        <div className="row">
          {["HTML","CSS","JavaScript","React","Bootstrap","Node.js","MongoDB","Python"].map((skill) => (
            <div className="col-md-3 mb-3" key={skill}>
              <div className="card p-3 skill-card text-center">{skill}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="container my-5" id="projects">
        <h2>Projects</h2>
        <div className="row">
          {/* Pizza Craft */}
          <div className="col-md-4 mb-4">
            <div className="card p-3 h-100">
              <h4>Pizza Craft</h4>
              <p>
                MERN stack pizza customization app with authentication, admin
                dashboard, and order system.
              </p>
              <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

              <div className="carousel-item active">
                <img src="/images/pizza-one.png" className="d-block w-100 project-img" />
              </div>

              <div className="carousel-item">
              <img src="/images/pizza-two.png" className="d-block w-100 project-img" />
              </div>

              <div className="carousel-item">
              <img src="/images/pizza-three.png" className="d-block w-100 project-img" />
              </div>

              <div className="carousel-item">
              <img src="/images/pizza-four.png" className="d-block w-100 project-img" />
              </div>
            </div>
            {/* Previous Button */} 
            <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>

            {/* Next Button */}
            <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
          </div>
             <div className="mt-auto">
                <a href="https://pizza-craft-sigma.vercel.app/pizza" target="_blank">Live Demo</a>
                <br />
                <a href="https://github.com/tanveewaikar/OIBSIP" target="_blank"> GitHub</a>
              </div>
            </div>
          </div>

          {/* TextUtils */}
          <div className="col-md-4 mb-4">
            <div className="card p-3 h-100">
              <h4>TextUtils</h4>
              <p>
                React app for text manipulation like uppercase, lowercase, and
                word count.
              </p>
              <img src="/images/textutils.png" className="d-block w-100 project-img" />
              <div className="mt-auto">
                 <a href="https://tanveewaikar.github.io/textutils/#/" target="_blank"> Live Demo</a>
                 <br />
                 <a href="https://github.com/tanveewaikar/textutils" target="_blank" > GitHub</a>
              </div>
            </div>
          </div>

          {/* Life Receipts */}
          <div className="col-md-4 mb-4">
            <div className="card p-3 h-100">
              <h4>Life Receipts</h4>
              <p>
                Final year project for tracking daily productivity and habits.
              </p>
              <img src="/images/life-Receipt-one.png" className="d-block w-100 project-img"/>
              <div className="mt-auto">
                 <a href="https://life-receipt-backend.onrender.com/" target="_blank"> Live Demo</a>
                 <br />
                 <a href="https://github.com/siddhiii07/Life-Receipt" target="_blank" > GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container my-5 text-center" id="contact">
        <h2>Contact</h2>
        <p>Email: tanveewaikar1311@gmail.com</p>
        <p>
          <a href="https://github.com/tanveewaikar" target="_blank">GitHub: https://github.com/tanveewaikar</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/tanvee-waikar-a32613369" target="_blank">LinkedIn: https://www.linkedin.com/in/tanvee-waikar-a32613369</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        © 2026 Tanvee Waikar
      </footer>
    </>
  );
}

export default App;
