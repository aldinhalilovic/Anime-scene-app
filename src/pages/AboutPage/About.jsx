import "./About.css";
import Aldinimg from '../../img/Aldin.jpeg'

function About() {
  return (
    <div className="container">
     
      <div className="card">
        <img src={Aldinimg} alt="" className="profile-picture" />
        <div className="info-container">
          <span className="name">Aldin Halilovic</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Student at State University of Novi Pazar,<br /> Software Enginere
          </span>
          <span className="description"><a href="https://github.com/aldinhalilovic"rel="noreferrer" target="_blank"> GITHUB</a></span>
        </div>
      </div>
      
    </div>
  );
}

export default About;
