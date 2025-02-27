import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'
import { DiReact, DiNodejs, DiPython, DiGit, DiAws, DiJavascript1, DiPostgresql, DiDocker, DiHtml5, DiCss3, DiBootstrap } from 'react-icons/di'
import { SiTailwindcss, SiFlask, SiDjango } from 'react-icons/si'
import '../styles/custom.css'; // Import the custom CSS file

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <DiReact size={40} />, experience: '2 years', description: 'A JavaScript library for building user interfaces.' },
      { name: 'TypeScript', icon: <DiJavascript1 size={40} />, experience: '2 years', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
      { name: 'HTML', icon: <DiHtml5 size={40} />, experience: '4 years', description: 'The standard markup language for creating web pages.' },
      { name: 'CSS', icon: <DiCss3 size={40} />, experience: '4 years', description: 'A style sheet language used for describing the presentation of a document written in HTML.' },
      { name: 'Bootstrap', icon: <DiBootstrap size={40} />, experience: '3 years', description: 'A CSS framework directed at responsive, mobile-first front-end web development.' },
      { name: 'Tailwind', icon: <SiTailwindcss size={40} />, experience: '1 year', description: 'A utility-first CSS framework for rapidly building custom user interfaces.' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <DiNodejs size={40} />, experience: '3 years', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
      { name: 'Python', icon: <DiPython size={40} />, experience: '1 years', description: 'A high-level, interpreted programming language with dynamic semantics.' },
      { name: 'PostgreSQL', icon: <DiPostgresql size={40} />, experience: '3 years', description: 'A powerful, open source object-relational database system.' },
      { name: 'Flask', icon: <SiFlask size={40} />, experience: '1 year', description: 'A micro web framework written in Python.' },
      { name: 'Django', icon: <SiDjango size={40} />, experience: '1 year', description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.' }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: <DiGit size={40} />, experience: '3 years', description: 'A distributed version control system for tracking changes in source code during software development.' }
    ]
  }
]

// Helper function for progress bar
const getExperienceLevel = (experience) => {
  const years = parseInt(experience, 10)
  return Math.min(years * 25, 100) // 1 year = 25%, 4+ years = 100%
}

export default function Technologies() {
  return (
    <section id="technologies" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center mb-5 text-light" data-aos="fade-up">Technologies I Use</h2>
        {technologies.map((techGroup) => (
          <div key={techGroup.category} className="mb-5">
            <h3 className="h4 mb-4 text-light" data-aos="fade-up">{techGroup.category}</h3>
            <Row className="g-4">
              {techGroup.items.map((tech) => (
                <Col key={tech.name} md={6} lg={4} data-aos="fade-up">
                  <Card className="h-100 shadow-sm bg-secondary text-light">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <div className="mb-3 text-dark">{tech.icon}</div>
                      <h4 className="h5 mb-2">{tech.name}</h4>
                      <p className="text-center">{tech.description}</p>
                      <Badge bg="light" text="dark" className="mb-3">
                        {tech.experience}
                      </Badge>
                      <ProgressBar now={getExperienceLevel(tech.experience)} 
                        label={`${getExperienceLevel(tech.experience)}%`} 
                        className="w-100 bg-dark custom-progress-bar">
                        <ProgressBar 
                          now={getExperienceLevel(tech.experience)} 
                          className="custom-progress-bar-inner" 
                        />
                      </ProgressBar>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  )
}