/**
 * Youssef ElSissy Portfolio - Modern Single-Page Application
 * Built with React 18 & Babel Standalone
 */

const { useState, useEffect, useMemo } = React;

// --- App Data ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Youssef Elsissy",
    nameArabic: "يوسف السيسي",
    title: "Junior Data Scientist",
    slogan: "Turning raw datasets into actionable insights and robust predictive models.",
    bio: "Computer Science student at New Mansoura University and an aspiring Junior Data Scientist with hands-on experience in Python, SQL, data analysis, exploratory data analysis (EDA), data visualization, and machine learning fundamentals. Experienced in cleaning and analyzing datasets, performing feature engineering, developing and evaluating classification models, and communicating data-driven insights through visualizations.",
    phone: "+201094972723",
    email: "yosefelsissy@gmail.com",
    linkedin: "https://www.linkedin.com/in/youssef-elsissy/",
    github: "", // Kept empty for verified project-level repository mapping
    location: "Egypt",
    avatar: "./personal_photo.jpg"
  },
  stats: [
    { label: "B.Sc. GPA", value: "3.26", icon: "fa-solid fa-graduation-cap" },
    { label: "", value: "Data Science", icon: "fa-solid fa-brain" },
    { label: "Computer Science", value: "Student", icon: "fa-solid fa-code" },
    { label: "English Level", value: "B2", icon: "fa-solid fa-language" }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    major: "Computer Science (Software Engineering Orientation)",
    institution: "New Mansoura University, Egypt",
    period: "2023 – 2027",
    gpa: "3.26 / 4.0",
    description: "Studying Computer Science with a strong Software Engineering orientation, mastering software architecture, algorithm design, and core programming paradigms, while simultaneously building specialized capabilities in Data Science, analytical workflows, and machine learning.",
    courses: [
      "Software Engineering & Architecture",
      "Data Analysis & Visualization",
      "Machine Learning Fundamentals",
      "SQL & Database Systems",
      "Exploratory Data Analysis (EDA)",
      "Algorithms & Problem Solving"
    ]
  },
  skillCategories: [
    {
      title: "Programming & Web Development",
      icon: "fa-brands fa-python",
      skills: [
        { name: "Python", iconClass: "devicon-python-plain colored" },
        { name: "HTML", iconClass: "devicon-html5-plain colored" },
        { name: "CSS", iconClass: "devicon-css3-plain colored" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
        { name: "Data Structures & Scripting", iconClass: "fa-solid fa-code" }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: "fa-solid fa-chart-pie",
      skills: [
        { name: "Pandas", iconClass: "devicon-pandas-plain colored" },
        { name: "NumPy", iconClass: "devicon-numpy-plain colored" },
        { name: "Plotly", iconClass: "fa-solid fa-chart-line" },
        { name: "Matplotlib & Seaborn", iconClass: "fa-solid fa-chart-area" },
        { name: "Exploratory Data Analysis (EDA)", iconClass: "fa-solid fa-magnifying-glass-chart" },
        { name: "Data Cleaning & Preparation", iconClass: "fa-solid fa-filter" }
      ]
    },
    {
      title: "Machine Learning Fundamentals",
      icon: "fa-solid fa-brain",
      skills: [
        { name: "Scikit-learn", iconClass: "devicon-scikitlearn-plain colored" },
        { name: "Classification & Regression", iconClass: "fa-solid fa-diagram-project" },
        { name: "Decision Trees & Random Forest", iconClass: "fa-solid fa-sitemap" },
        { name: "KNN, Logistic Regression & Naive Bayes", iconClass: "fa-solid fa-circle-nodes" },
        { name: "Clustering & Model Evaluation", iconClass: "fa-solid fa-chart-bar" }
      ]
    },
    {
      title: "Databases & SQL",
      icon: "fa-solid fa-database",
      skills: [
        { name: "SQL Workflows", iconClass: "fa-solid fa-database" },
        { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
        { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain colored" }
      ]
    }
  ],
  experience: [
    {
      id: "depi-internship",
      title: "Data Scientist Intern",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Egypt",
      period: "July 2026 – December 2026",
      isFeatured: true,
      tag: "Official DEPI Track",
      responsibilities: [
        "Developing practical skills across the end-to-end data science workflow, including data analysis, SQL, machine learning, and data visualization.",
        "Performing exploratory data analysis (EDA), data cleaning, and statistical summaries across structured datasets.",
        "Developing and evaluating machine learning models using Scikit-learn for classification, regression, and clustering tasks.",
        "Formulating SQL queries to aggregate, extract, and manipulate data for analytical workflows.",
        "Translating complex analytical findings into intuitive visual charts and reports to support decision-making."
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "Plotly", "Matplotlib", "Seaborn"]
    }
  ],
  services: [
    {
      title: "Exploratory Data Analysis (EDA)",
      icon: "fa-solid fa-magnifying-glass-chart",
      description: "Analyzing structured datasets to uncover patterns, anomalies, and key relationships through statistical summaries and correlation studies.",
      benefits: ["Summary statistics & distributions", "Correlation & trend identification", "Hypothesis testing insights"]
    },
    {
      title: "Dataset Cleaning & Feature Engineering",
      icon: "fa-solid fa-broom",
      description: "Preparing messy datasets by handling missing values, removing duplicates, and constructing meaningful features for downstream analysis.",
      benefits: ["Data sanitization & validation", "Analytical feature creation", "Structured tabular preparation"]
    },
    {
      title: "Data Visualization & Dashboards",
      icon: "fa-solid fa-chart-column",
      description: "Building clear, informative charts and interactive visualizations using tools like Plotly, Seaborn, and Matplotlib to present metrics clearly.",
      benefits: ["Interactive Plotly figures", "Metric performance tracking", "Audience-friendly reports"]
    },
    {
      title: "Introductory ML Classification",
      icon: "fa-solid fa-network-wired",
      description: "Developing and evaluating baseline classification models using Scikit-learn to solve foundational predictive tasks and benchmark accuracy.",
      benefits: ["Train/test evaluation", "Model comparison & metrics", "Supervised classification models"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Instagram Engagement & Performance Analysis",
      category: "analysis",
      categoryName: "Data Analysis & EDA",
      desc: "Analyzed 119 Instagram posts across 13 performance metrics (impressions, engagement, traffic sources, hashtags, profile visits, follows). Cleaned the dataset, engineered three analytical features (Impression Class, Post ID, Exploded Hashtags), conducted correlation analysis, and built interactive visualizations to uncover high-performing hashtags and traffic contributions.",
      tech: ["Python", "Pandas", "Plotly", "NumPy", "EDA"],
      demoUrl: "",
      repoUrl: "https://github.com/youssefelsissy/Instagram-analysis",
      icon: "fa-solid fa-chart-line"
    },
    {
      id: "proj-2",
      title: "Iris Flower Classification",
      category: "ml",
      categoryName: "Machine Learning",
      desc: "Developed a machine learning classification project to predict iris flower species from sepal and petal measurements. Prepared the dataset, split it into training and testing sets, trained and compared multiple classification models using Scikit-learn, and evaluated accuracy to demonstrate core concepts in model training and testing.",
      tech: ["Python", "Scikit-learn", "Machine Learning", "Classification"],
      demoUrl: "",
      repoUrl: "",
      icon: "fa-solid fa-seedling"
    }
  ],
  achievements: [
    {
      title: "DEPI Data Scientist Intern Selection",
      org: "Digital Egypt Pioneers Initiative (DEPI)",
      desc: "Selected for the official DEPI data science track, actively building applied competencies in machine learning, SQL, and data analysis.",
      icon: "fa-solid fa-graduation-cap"
    }
  ],
  testimonials: [
    {
      quote: "Committed to rigorous data analysis, reproducible code, and continuous learning across modern machine learning algorithms and statistical methodologies.",
      name: "Data Science & Analytics Focus",
      role: "Core Technical Discipline",
      initials: "DS"
    },
    {
      quote: "Bridging the gap between raw datasets and understandable visual narratives through exploratory data analysis and effective chart design.",
      name: "Data Visualization & Communication",
      role: "Applied Practice",
      initials: "DV"
    },
    {
      quote: "Consistently refining foundational understanding of algorithms, database structures, and model evaluation metrics during university studies and DEPI training.",
      name: "Continuous Growth & Academic Rigor",
      role: "Academic & Professional Values",
      initials: "CG"
    }
  ]
};

// --- Toast Component ---
function ToastContainer({ toasts }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          <i className={toast.icon || "fa-solid fa-circle-check"}></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

// --- Navigation Bar Component ---
function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Honors' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}>
          <span className="brand-badge">&lt;/&gt;</span>
          <span>Youssef <span className="gradient-text">Elsissy</span></span>
        </a>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span>Available for Hire</span>
          </div>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={mobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

// --- Hero Section Component ---
function Hero({ data, onNavigate, onEmailClick }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="hero-greeting-wave">👋</span>
              <span>Hello World, welcome to my portfolio</span>
            </div>

            <h1 className="hero-name">
              I'm <span className="gradient-text">{data.name}</span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="hero-role">{data.title}</span>
              <span className="hero-role-badge">Data Analysis &amp; ML</span>
            </div>

            <div className="hero-slogan-box">
              <i className="fa-solid fa-terminal"></i>
              <span>&ldquo;{data.slogan}&rdquo;</span>
            </div>

            <p className="hero-description">
              {data.bio}
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => onNavigate('projects')}
              >
                <span>View Projects</span>
                <i className="fa-solid fa-arrow-down"></i>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => onNavigate('contact')}
              >
                <span>Contact Me</span>
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>

            <div className="hero-socials">
              {data.linkedin ? (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              ) : null}
              {data.github ? (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Repositories"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              ) : null}
              <a
                href={`tel:${data.phone}`}
                className="social-icon-btn"
                title={`Call: ${data.phone}`}
                aria-label="Call Direct Phone"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <button
                className="social-icon-btn"
                onClick={() => onEmailClick(data.email)}
                title={`Email: ${data.email}`}
                aria-label="Send Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-wrapper">
              <img
                src={data.avatar}
                alt={data.name}
                className="avatar-img-inner"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react">
              <i className="fa-solid fa-chart-line text-cyan"></i>
              <span>Data Analysis &amp; EDA</span>
            </div>

            <div className="floating-badge badge-js">
              <i className="devicon-python-plain colored"></i>
              <span>Python &amp; SQL</span>
            </div>

            <div className="floating-badge badge-depi">
              <i className="fa-solid fa-brain"></i>
              <span>Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- About Section Component ---
function About({ data }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-user"></i>
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Analytical Thinking, <span className="gradient-text">Data-Driven Insights</span>
          </h2>
          <p className="section-subtitle">
            Exploring datasets, uncovering statistical trends, and building reliable predictive models.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              I am a Computer Science student at New Mansoura University and an aspiring Junior Data Scientist with hands-on experience in Python, SQL, data analysis, exploratory data analysis (EDA), data visualization, and machine learning fundamentals.
            </p>
            <p>
              I don't just build classification models and run statistical analyses; I focus on the &lsquo;so what?&rsquo;&mdash;translating heavy quantitative analysis into clean, visual insights that non-technical stakeholders can easily understand and act upon.
            </p>
          </div>

          <div className="stats-grid">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card">
                <i className={`${stat.icon} stat-icon gradient-text`}></i>
                <div className="stat-number">{stat.value}</div>
                {stat.label ? <div className="stat-label">{stat.label}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Education Section Component ---
function Education({ data }) {
  const edu = data.education;
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Foundations</span>
          </h2>
          <p className="section-subtitle">
            Solid theoretical grounding in computer science paired with applied software engineering and data science.
          </p>
        </div>

        <div className="education-container">
          <div className="education-card glass-card">
            <div className="edu-icon-badge">
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-timeline">{edu.period}</span>
              </div>
              <div className="edu-institution">
                <i className="fa-solid fa-landmark text-cyan"></i>
                <span>{edu.institution} &bull; GPA: {edu.gpa}</span>
              </div>
              <p className="edu-description">
                {edu.description}
              </p>
              <div className="edu-tags">
                {edu.courses.map((course, idx) => (
                  <span key={idx} className="tech-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Skills Section Component ---
function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-cubes-stacked"></i>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core programming, web development, data manipulation, statistical visualization, and machine learning.
          </p>
        </div>

        <div className="skills-categories">
          {data.skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-header">
                <i className={`${category.icon} category-icon`}></i>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-tag-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <i className={skill.iconClass}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Experience Section Component ---
function Experience({ data }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-briefcase"></i>
            <span>Hands-on Experience</span>
          </div>
          <h2 className="section-title">
            Work Experience
          </h2>
          <p className="section-subtitle">
            Practical data science training, workflow execution, and machine learning practice.
          </p>
        </div>

        <div className="experience-timeline">
          {data.experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className={`timeline-card glass-card ${exp.isFeatured ? 'featured-depi' : ''}`}>
                <div className="exp-badge-row">
                  {exp.isFeatured && (
                    <span className="depi-special-tag">
                      <i className="fa-solid fa-star"></i>
                      <span>{exp.tag}</span>
                    </span>
                  )}
                  <span className="edu-timeline">{exp.period}</span>
                </div>

                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-company">
                  <i className="fa-solid fa-location-dot"></i> {exp.company} &bull; {exp.location}
                </div>

                <ul className="exp-bullets">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                <div className="edu-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Offered Services Component ---
function Services({ data }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-sliders"></i>
            <span>What I Deliver</span>
          </div>
          <h2 className="section-title">
            Offered <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Focused analytical and data-driven capabilities tailored for exploratory and machine learning tasks.
          </p>
        </div>

        <div className="services-grid">
          {data.services.map((service, idx) => (
            <div key={idx} className="service-card glass-card">
              <div className="service-icon-box">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-benefits">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx}>
                    <i className="fa-solid fa-check"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Featured Projects Component ---
function Projects({ data }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return data.projects;
    return data.projects.filter(p => p.category === filter);
  }, [filter, data.projects]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-chart-pie"></i>
            <span>Project Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical projects applying exploratory data analysis, interactive visualizations, and machine learning models.
          </p>
        </div>

        <div className="project-filters">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'analysis', label: 'Data Analysis & EDA' },
            { key: 'ml', label: 'Machine Learning' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`filter-btn ${filter === tab.key ? 'active' : ''}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-thumbnail-wrapper">
                <div className="project-mockup-screen">
                  <i className={`${project.icon} mockup-icon`}></i>
                  <span className="mockup-subtext">&lt;Data Science /&gt;</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-badge-row">
                  <span className="project-category-tag">{project.categoryName}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                {(project.demoUrl || project.repoUrl) && (
                  <div className="project-links">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Live Demo</span>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <span>GitHub Repo</span>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Achievements & Competitions Component ---
function Achievements({ data }) {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-chart-line"></i>
            <span>Key Highlights</span>
          </div>
          <h2 className="section-title">
            Milestones &amp; <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Notable milestones and training selections in my technical development.
          </p>
        </div>

        <div className="achievements-grid">
          {data.achievements.map((item, idx) => (
            <div key={idx} className="achievement-card glass-card">
              <div className="achievement-icon-wrap">
                <i className={item.icon}></i>
              </div>
              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-org">{item.org}</div>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials / Professional Values Component ---
function Testimonials({ data }) {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-compass"></i>
            <span>Focus &amp; Philosophy</span>
          </div>
          <h2 className="section-title">
            Current Focus &amp; <span className="gradient-text">Core Values</span>
          </h2>
          <p className="section-subtitle">
            Core principles guiding my analytical practice, continuous learning, and project delivery.
          </p>
        </div>

        <div className="testimonials-grid">
          {data.testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div>
                <i className="fa-solid fa-quote-left quote-icon"></i>
                <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar-wrap">
                  {t.initials}
                </div>
                <div className="author-info">
                  <h5>{t.name}</h5>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Section Component ---
function Contact({ data, onEmailClick, addToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please fill out all required fields.', 'fa-solid fa-triangle-exclamation');
      return;
    }

    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email)}&su=${mailSubject}&body=${mailBody}`;
    const mailtoUrl = `mailto:${data.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      const opened = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      if (!opened) {
        window.location.href = mailtoUrl;
      }
      addToast('Composing message to Youssef...', 'fa-solid fa-paper-plane');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  // Format clean international phone for WhatsApp: 201094972723
  const waPhone = data.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-envelope"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Data &amp; Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you're looking to discuss Data Science opportunities, discuss end-to-end ML projects, or simply exchange insights on data analytics—feel free to drop a message or reach out.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <p className="contact-info-desc">
              Whether you're looking to discuss Data Science opportunities, discuss end-to-end ML projects, or simply exchange insights on data analytics—feel free to drop a message or reach out.
            </p>

            <div className="contact-cards-list">
              {/* Phone card with Call and WhatsApp actions */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-left">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div className="contact-card-label">Direct Phone / WhatsApp</div>
                    <div className="contact-card-val">{data.phone}</div>
                  </div>
                </div>
                <div className="contact-actions-dual">
                  <a
                    href={`tel:${data.phone}`}
                    className="copy-btn action-link-btn"
                    title="Call Phone Number"
                  >
                    <i className="fa-solid fa-phone"></i> Call
                  </a>
                  <a
                    href={`https://wa.me/${waPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="copy-btn action-link-btn wa-btn"
                    title="Open WhatsApp Chat"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>

              {/* Email card with Gmail compose */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-left">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div className="contact-card-label">Email Address</div>
                    <div className="contact-card-val">{data.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => onEmailClick(data.email)}
                  title="Open Gmail Compose"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Send Email
                </button>
              </div>

              {/* Location card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-left">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="contact-card-label">Location</div>
                    <div className="contact-card-val">{data.location}</div>
                  </div>
                </div>
                <span className="copy-btn" style={{ cursor: 'default' }}>Verified</span>
              </div>

              {/* LinkedIn Profile */}
              {data.linkedin ? (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-card glass-card"
                >
                  <div className="contact-item-left">
                    <div className="contact-card-icon">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>
                      <div className="contact-card-label">LinkedIn Profile</div>
                      <div className="contact-card-val">in/youssef-elsissy</div>
                    </div>
                  </div>
                  <span className="copy-btn">Visit <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="contact-form-card glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  <i className="fa-regular fa-user"></i> Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Mohamed"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <i className="fa-regular fa-envelope"></i> Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. mohamed@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  <i className="fa-solid fa-tag"></i> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Data Science Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  <i className="fa-regular fa-comment-dots"></i> Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, dataset, or goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Preparing Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message (via Gmail)</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer({ data, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>
              <span className="brand-badge">&lt;/&gt;</span>
              <span>Youssef <span className="gradient-text">Elsissy</span></span>
            </a>
            <p>Junior Data Scientist &amp; Computer Science Student. Python, SQL, EDA &amp; Machine Learning.</p>
          </div>

          <div className="footer-socials">
            {data.linkedin ? (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            ) : null}
            <a href={`mailto:${data.email}`} className="social-icon-btn" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href={`tel:${data.phone}`}
              className="social-icon-btn"
              title={`Call: ${data.phone}`}
              aria-label="Phone"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {data.name}. All Rights Reserved. Built with React &amp; Modern Vanilla CSS.
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

// --- Main App Root Component ---
function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const addToast = (message, icon) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, icon }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Copy to clipboard helper
  const handleCopy = (text, successMsg) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => addToast(successMsg, 'fa-solid fa-copy'))
        .catch(() => addToast(`Copied: ${text}`, 'fa-solid fa-copy'));
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      addToast(successMsg, 'fa-solid fa-copy');
    }
  };

  // Email Gmail compose helper with mailto fallback
  const handleEmail = (email) => {
    const subject = encodeURIComponent("Portfolio Inquiry / Data Science Opportunity");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}`;
    const opened = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = `mailto:${email}?subject=${subject}`;
    }
  };

  // Navigation scroll helper
  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy effect to highlight active navbar section
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'skills', 'experience', 'services', 'projects', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero data={PORTFOLIO_DATA.personal} onNavigate={handleNavigate} onEmailClick={handleEmail} />
        <About data={PORTFOLIO_DATA} />
        <Education data={PORTFOLIO_DATA} />
        <Skills data={PORTFOLIO_DATA} />
        <Experience data={PORTFOLIO_DATA} />
        <Services data={PORTFOLIO_DATA} />
        <Projects data={PORTFOLIO_DATA} />
        <Achievements data={PORTFOLIO_DATA} />
        <Testimonials data={PORTFOLIO_DATA} />
        <Contact data={PORTFOLIO_DATA.personal} onEmailClick={handleEmail} addToast={addToast} />
      </main>
      <Footer data={PORTFOLIO_DATA.personal} onNavigate={handleNavigate} />
      <ToastContainer toasts={toasts} />
    </div>
  );
}

// Render the application into #root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<PortfolioApp />);
}
