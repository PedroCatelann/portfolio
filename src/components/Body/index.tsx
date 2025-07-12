import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
/* import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; */
import {
  faDownload as FaDownloadLight,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faYarn } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";

export default function Body() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Haello! My name is Pedro Catelan.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index)); // Usa charAt para evitar undefined
        index++;
      } else {
        clearInterval(typingInterval); // Limpa o intervalo quando o texto termina
      }
    }, 50); // Velocidade de digitação (50ms por caractere)

    return () => clearInterval(typingInterval); // Limpa o intervalo ao desmontar o componente
  }, [fullText]);

  return (
    <div>
      <section
        id="about"
        className="bg-white-100 py-10 flex items-center justify-center min-h-screen"
      >
        <div className="container mx-auto px-4">
          <img
            className="h-24 w-24 mx-auto bg-gray-200 shadow-2xl rounded-full mb-4 transition-transform duration-300 hover:scale-125"
            src="/public/avatar.png"
            alt="Avatar"
          ></img>
          <p className="text-gray-700 text-md text-center max-w-2xl mx-auto mb-4">
            {typedText}
          </p>
          <div className="flex flex-row justify-center mb-4 gap-2">
            <a
              href="https://www.linkedin.com/in/pcatelan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-gray-600 text-2xl mx-auto transition-transform duration-300 hover:scale-125"
              />
            </a>
            <a
              href="https://www.instagram.com/pe_catelann/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-600 text-2xl mx-auto transition-transform duration-300 hover:scale-125"
              />
            </a>
            <a
              href="https://github.com/PedroCatelann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-600 text-2xl mx-auto transition-transform duration-300 hover:scale-125"
              />
            </a>
          </div>
          <div className="flex flex-row justify-center mb-6 gap-2">
            <a
              href="/public/English - Pedro Catelan.pdf"
              download="Pedro_Catelan_CV.pdf"
              className="group bg-white-500 text-gray-600 text-sm border border-gray-600 px-4 py-2 rounded shadow hover:bg-gray-600 hover:text-white transition duration-300 flex items-center"
            >
              Download CV
              <FontAwesomeIcon
                icon={FaDownloadLight}
                size="1x"
                className="text-gray-600 text-2xl ml-2 transition duration-300 group-hover:text-white"
              />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto">
            I began my journey in programming in 2021 as a Data Structures
            teaching assistant at the Federal Institute of São Paulo, an
            experience that strengthened my technical foundation, soft skills,
            and teaching abilities. Since 2022, I have been working as a Full
            Stack Developer, specializing in React.js, Spring Boot, and modern
            technologies to build efficient and scalable solutions. Currently, I
            focus on developing systems for the financial sector and websites,
            applying best practices and ensuring high-quality projects.
          </p>
        </div>
      </section>
      <hr></hr>
      <section
        id="education"
        className="bg-white-100 py-10 flex items-center justify-center min-h-screen"
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 25 }} // Começa invisível e deslocado para baixo
          whileInView={{ opacity: 1, y: 0 }} // Fica visível e volta à posição original
          transition={{ duration: 1 }} // Duração da animação
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold text-center mb-6">Education</h1>
          <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto max-w-xl">
            <h2 className="text-xl font-semibold mb-2">
              Federal Institute of São Paulo
            </h2>
            <p className="text-gray-700 text-xl mb-2">
              Bachelor's Degree in Computer Science
            </p>
            <p>
              <ul className="list-disc list-inside text-base text-gray-600 mt-2 mb-2">
                <li>Web and mobile application development</li>
                <li>Systems analysis and modeling</li>
                <li>Databases and software engineering</li>
                <li>Practical development projects</li>
              </ul>
            </p>
            <p className="text-gray-500">2019 - 2023</p>
          </div>
        </motion.div>
      </section>
      <hr></hr>
      <section id="skills" className="bg-white-100 py-10 flex">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 25 }} // Começa invisível e deslocado para baixo
          whileInView={{ opacity: 1, y: 0 }} // Fica visível e volta à posição original
          transition={{ duration: 1 }} // Duração da animação
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="flex flex-row mx-auto max-w-xl justify-center gap-4 mb-4">
            <div className="shadow-md rounded-sm p-6 mb-4 border border-gray-100">
              <div className="flex flex-row flex-wrap gap-4 justify-center px-4">
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faJava}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">Java</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">React</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">Javascript</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">SQL</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faDocker}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">Docker</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">HTML5</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">CSS3</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faYarn}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">Yarn</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faGit}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">Git</p>
                </div>
                <div className="bg-gray-100 w-24 h-24 flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-125">
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-blue-700 mb-2"
                    size="2x" // Ajuste o tamanho do ícone para caber no layout
                  />
                  <p className="text-center text-sm">NodeJs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <hr></hr>

      <section
        id="projects"
        className="flex items-center justify-center py-4 mb-4"
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 25 }} // Começa invisível e deslocado para baixo
          whileInView={{ opacity: 1, y: 0 }} // Fica visível e volta à posição original
          transition={{ duration: 1 }} // Duração da animação
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">
                Declaração de Informações de Meios de Pagamentos - DIMP
              </h2>
              <p className="text-gray-700 text-xl mb-2">
                This application was developed to facilitate the declaration of
                payment methods for the Central Bank of Brazil. It was created
                using Java, Spring Boot, JPA, Hibernate, and Micronaut
                Framework. The database used is SQL Server, and Redis was
                employed for caching. The application also utilizes Vault for
                secure credential management and JUnit for testing. Swagger was
                implemented for API documentation, and the frontend was built
                with Vite and React.
              </p>
            </div>
            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">NH.med</h2>
              <p className="text-gray-700 text-xl mb-2">
                This application was created to enhance concepts of Java and
                Spring Boot, specifically focusing on RESTful APIs utilizing
                Spring Security, JPA, Hibernate, and authentication with OAuth
                and JWT. For managing database migrations, Flyway was employed,
                and MySQL was the chosen database.
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">
                São Paulo Futebol Clube
              </h2>
              <p className="text-gray-700 text-xl mb-2">
                Web application developed with Java for the internal team of São
                Paulo Futebol Clube to promote digital transformation of
                processes and communications.
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">api-tf-banco</h2>
              <p className="text-gray-700 text-xl mb-2">
                This application was created in conjunction with the
                api-tf-remessa to simulate the purchase of US dollars abroad.
                The purpose of this application is to simulate the transfer of
                the remittance value to the platform's account, in addition to
                other intermediations with an external API. The technologies
                used were Java, JPA, Hibernate, Micronaut Framework, SSMS,
                Redis, and Vault. JUnit was used for testing, and Swagger for
                documentation.
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">api-tf-remessa</h2>
              <p className="text-gray-700 text-xl mb-2">
                This application was created in conjunction with the
                api-tf-banco to simulate the purchase of US dollars abroad. The
                purpose of this application is to simulate the value of a
                remittance, obtain the dollar exchange rate, and create
                remittances. The technologies used were Java, JPA, Hibernate,
                Micronaut Framework, SSMS, Redis, and Vault. JUnit was used for
                testing, and Swagger for documentation.
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">general-books</h2>
              <p className="text-gray-700 text-xl mb-2">
                An application created to train styling concepts using HTML5 and
                CSS3.
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">seller-api</h2>
              <p className="text-gray-700 text-xl mb-2">
                This API was developed in Spring Boot to facilitate the
                management of sales, products, and customers. Below, you will
                find information about the features, configurations, available
                endpoints, and how to contribute to the development.
                Technologies used: Spring Boot, Spring Security, Hibernate, SQL,
                OAuth, RESTful APIs, Git
              </p>
            </div>

            <div className="shadow-md rounded-sm p-6 mb-4 border-l-4 border-gray-600 mx-auto w-full transition-transform duration-300 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">space-app</h2>
              <p className="text-gray-700 text-xl mb-2">
                Application created to practice Frontend React concepts with
                TypeScript using Styled-Components.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <hr></hr>

      <section id="contact" className="flex items-center justify-center py-4">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 25 }} // Começa invisível e deslocado para baixo
          whileInView={{ opacity: 1, y: 0 }} // Fica visível e volta à posição original
          transition={{ duration: 1 }} // Duração da animação
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
          <p className="text-center text-lg mb-6 text-gray-700">
            Let's work together! Feel free to get in touch.
          </p>
          <div className="flex items-center justify-center py-4">
            <form
              className="w-full max-w-4xl bg-white p-6 rounded shadow-md border border-gray-200"
              action="https://formspree.io/f/mvgrdrop"
              method="POST"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company"
                >
                  Empresa
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nome da empresa"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col mt-6 items-center">
            <div className="flex flex-col items-start w-full max-w-xs">
              <div className="flex items-center justify-center mt-4 py-2">
                <div className="text-gray-600 hover:text-blue-600 transition duration-300 mr-2 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl mr-2" />
                  Pedro Henrique Formis Catelan
                </div>
              </div>
              <div className="flex items-center mt-4 py-2">
                <a
                  href="https://www.linkedin.com/in/pcatelan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 mr-2 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl mr-2"
                  />
                  linkedin.com/in/pcatelan
                </a>
              </div>
              <div className="flex items-center mt-4 py-2">
                <a
                  href="https://wa.me/5517992274088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 mr-2 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-2xl mr-2"
                  />
                  17 99227-4088
                </a>
              </div>
              <div className="flex items-center mt-4 py-2">
                <a
                  href="https://github.com/PedroCatelann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 mr-2 flex items-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
                  github.com/PedroCatelann
                </a>
              </div>
              <div className="flex items-center mt-4 py-2">
                <a
                  href="mailto:pedrohfktlan@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 mr-2 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="text-2xl mr-2"
                  />
                  pedrohfktlan@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="flex items-center justify-center py-4 bg-gray-100">
        <div>
          <p>© 2025 Pedro Catelan. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
