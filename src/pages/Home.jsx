import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="min-h-[80vh] grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1>Hi there!</h1>
          <h1>I'm Tiago Vattos Zamboni</h1>
          <h1>FullStack Developer</h1>
        </div>
        <div className="flex items-center justify-center">
          <img src="/example.png" alt="example" className="w-auto h-80" />
        </div>
      </section>

      <section className="min-h-[50vh] grid grid-cols-2">
        <div className="content-center">
          <h2>LET ME INTRODUCE MYSELF</h2>
          <ul className="grid grid-cols-1 gap-6">
            <li>
              I fell in love with programming, and I keep learning and improving
              every day!
            </li>
            <li>
              My field of interest is building and developing modern web
              applications, from backend to frontend. I enjoy creating efficient
              and scalable solutions using the latest technologies.
            </li>
            <li>I am skilled in Java and JavaScript.</li>
            <li>
              Whenever possible, I apply my passion for development by working
              with Node.js on the backend and modern JavaScript frameworks like
              React.js on the frontend.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img src="/example.png" alt="example" className="w-auto h-80" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-[30vh]">
        <h2>FIND ME ON</h2>
        <p>Feel free to connect with me</p>
        <div className="flex gap-5 mt-4">
          <Link to="https://github.com/tiagovattosz">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/tiago-vattos-zamboni-680952232/">
            <FaLinkedinIn />
          </Link>
          <Link to="https://www.instagram.com/tiagovattosz/">
            <FaInstagram />
          </Link>
        </div>
      </section>
    </div>
  );
}
