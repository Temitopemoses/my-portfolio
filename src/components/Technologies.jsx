import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'
import { DiReact, DiNodejs, DiPython, DiGit, DiAws, DiJavascript1, DiPostgresql, DiDocker, DiHtml5, DiCss3, DiBootstrap } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <DiReact size={40} />, experience: '2 years' },
      { name: 'TypeScript', icon: <DiJavascript1 size={40} />, experience: '2 years' },
      { name: 'HTML', icon: <DiHtml5 size={40} />, experience: '4 years' },
      { name: 'CSS', icon: <DiCss3 size={40} />, experience: '4 years' },
      { name: 'Bootstrap', icon: <DiBootstrap size={40} />, experience: '3 years' },
      { name: 'Tailwind', icon: <SiTailwindcss size={40} />, experience: '1 year' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <DiNodejs size={40} />, experience: '3 years' },
      { name: 'Python', icon: <DiPython size={40} />, experience: '1 years' },
      { name: 'PostgreSQL', icon: <DiPostgresql size={40} />, experience: '3 years' }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: <DiGit size={40} />, experience: '3 years' },
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
        <h2 className="text-center mb-5 text-light">Technologies I Use</h2>
        {technologies.map((techGroup) => (
          <div key={techGroup.category} className="mb-5">
            <h3 className="h4 mb-4 text-light">{techGroup.category}</h3>
            <Row className="g-4">
              {techGroup.items.map((tech) => (
                <Col key={tech.name} md={6} lg={4}>
                  <Card className="h-100 shadow-sm bg-secondary text-light">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <div className="mb-3 text-dark">{tech.icon}</div>
                      <h4 className="h5 mb-2">{tech.name}</h4>
                      <Badge bg="light" text="dark" className="mb-3">
                        {tech.experience}
                      </Badge>
                      <ProgressBar now={getExperienceLevel(tech.experience)} 
                        label={`${getExperienceLevel(tech.experience)}%`} 
                        className="w-100 bg-dark ">
                        <ProgressBar 
                      now={getExperienceLevel(tech.experience)} 
                        className="bg-warning" />
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