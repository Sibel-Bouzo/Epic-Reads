import { navElements } from "../../../data/data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src="images/logo-alt.png" alt="logo" />
        <div className="explore">
          <h3>Explore</h3>
          <ul>
            {navElements.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.navElement}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul className="flex !list-none">
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/sibel-bouzo/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://github.com/Sibel-Bouzo"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        &copy; Copyright 2024 sibel. All rights reserved
      </div>
    </footer>
  );
};
