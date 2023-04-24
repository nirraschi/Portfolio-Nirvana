import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "Graphic Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Proyecto Individual Henry",
      company_name: "Soy Henry",
      icon: starbucks,
      iconBg: "#1d1836",
      date: "Dic 2022",
      points: [
        "Diseñando y desarrollando una aplicación web en react utilizando JavaScript, Redux, React, Express, PostgreSQL, HTML, CSS.",
        "Una aplicación de comidas donde se renderizan cards con recetas de comida tomadas de una API pública, y se puede ordenar y filtrar según detalles.",
        "Deploy",
      ],
    },
    {
      title: "EcoSun: Proyecto Final Soy Henry",
      company_name: "Soy Henry",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023",
      points: [
        "En este proyecto en el que trabajé en equipo, desarrollamos una aplicación web eCommerce utilizando JavaScript, Redux, React, Express, entre otras tecnologias.",
        "Trabajé en el equipo de desarrollo Frontend",
        "Realice el maquetado de la web",
        "Implemente responsive design a la aplicación",
        "Participé en revisiones de código frontend y brindando comentarios constructivos a los otros desarrolladores."
      ],
    },
    {
      title: "Mi Portafolio",
      company_name: "Portafolio",
      icon: shopify,
      iconBg: "#383E56",
      date: "Abril 2023",
      points: [
        "Desarrollé este portafolio con React y Tailwind Css para los estilos, y utilice librerias y herramientas para el desarrollo 3D y las interacciónes como Three.Js",
    
        
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Contenta de trabajar con Nirvana, impecable",
      name: "Margarita Ruda",
      designation: "Administrativa",
      company: "Clinica dental",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      testimonial:
        "Muy creativa en sus trabajos, diseños de calidad y esteticamente muy lindos! muy responsable",
      name: "Martín",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      testimonial:
        "Desarrollo de web en wordpress impecable y rápido. Recomendable",
      name: "Marisa Wangule",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Green Kitchen: Soy Henry",
      description:
        "Es una aplicación de comidas donde se renderizan tarjetas con recetas de comida tomadas de una API pública, y se puede ordenar y filtrar según tipos de dietas y otros detalles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/nirraschi/ProyectoIndividual-Foods",
    },
    {
      name: "EcoSun: Henry Proyecto Final",
      description:
        "Aplicación web eCommerce desarrollada en un equipo de 8 integrantes utilizando Javascript, React, Node.js, Redux, Express, Bootstrap y CSS Puro entre otras tecnologías. Todas las funcionalidades.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/aliaz9/frontend-pf/",
    },
    {
      name: "Mi Portafolio",
      description:
        "Este portafolio fue desarrollado con react, tailwindcss para los estilos y con librerías como three.js para las animaciones 3d.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/nirraschi/Portfolio-Nirvana",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };