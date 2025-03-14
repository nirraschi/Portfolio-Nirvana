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
    code,
    code2,
    censys,

    carrent,
    jobit,
    tripguide,
    threejs,
    shopify,
    productos

  } from "../assets";
  
  export const navLinks = [
    {
      id: "sobremi",
      title: "Sobre mi",
    },
    {
      id: "experiencia",
      title: "Experiencias",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "UI/UX Enthusiast",
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
      title: "Soluciones de Software con IA para negocios",
      company_name: "Productos-AI: Pasantía",
      icon: productos,
      iconBg: "#E6DEDD",
      date: "Feb 2023",
      points: [
        "Trabajé en un equipo SCRUM, en área de desarrollo frontend, creando componentes completos reutilizables, ayudando así a cumplir con el gran objetivo de sacar exitosamente la primera versión del producto.",
        "Integración de servicios de inteligencia artificial utilizando JavaScript y TypeScript. Diseño Frontend utilizando TailwindCSS y CSS",
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
    {
      title: "App de Retrospectivas",
      company_name: "App",
      icon: code,
      iconBg: "#383E56",
      date: "Abril 2024",
      points: [
        "Aplicación simple desarrollada en TypeScript para gestionar retrospectivas de equipos ágil.",
    
        
      ],
    },
    {
      title: "Proyectos Personales",
      company_name: "Portafolio",
      icon: code2,
      iconBg: "#383E56",
      date: "Abril 2024",
      points: [
        "Sistema de Acreditaciónes en Eventos Mediante QR: Desarrollada con Js, React, Next.js y MongoDB Atlas. • Automatización con Puppeteer: Creación de scripts para automatizar tareas repetitivas en navegadores. • Desarrollo de proyectos personales aplicando mis conocimientos.",
    
        
      ],
    },
    {
      title: "QC / QA",
      company_name: "Censys S.A",
      icon: censys,
      iconBg: "#383E56",
      date: "Junio 2023 - Enero 2025",
      points: [
        "Participé en un equipo ágil con metodología Kanban, donde analicé problemas y diseñé casos de prueba efectivos para garantizar la calidad de los requerimientos.",
        "Colaboré estrechamente con desarrolladores para garantizar que el producto cumpliera con los mas altos estándares de calidad.",
        "Adquirí visión estratégica sobre cómo el frontend impacta en operaciones críticas de entidades bancarias.",
        "Durante esta linda experiencia, adquirí conocimientos sobre procesos bancarios, normas financieras y términos contables, lo que me permitió comprender mejor el funcionamiento de las entidades bancarias y su integración con sistemas tecnológicos",
    
        
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Bootcamp Desarrollo FullStack (2022)",
      company: "Henry",

    },
    {
      testimonial:
        "Curso TypeScript + Testing (2024)",
      company: "Fundación Integrar",
    },
    {
      testimonial:
        "Soy autodidacta, aprendiendo principalmente a través de recursos en línea, tutoriales y documentación. Me especialicé en el stack MERN.",
      company: "Formación Autodidacta",
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