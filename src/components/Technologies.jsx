import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'
import { DiReact, DiNodejs, DiPython, DiGit, DiAws } from 'react-icons/di'

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <DiReact size={40} />, experience: '2 years' },
      { name: 'Vue', icon: <DiVuejs size={40} />, experience: '1 year' },
      { name: 'TypeScript', icon: <DiJavascript1 size={40} />, experience: '2 years' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <DiNodejs size={40} />, experience: '3 years' },
      { name: 'Python', icon: <DiPython size={40} />, experience: '4 years' },
      { name: 'PostgreSQL', icon: <DiPostgresql size={40} />, experience: '3 years' }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: <DiGit size={40} />, experience: '4 years' },
      { name: 'AWS', icon: <DiAws size={40} />, experience: '2 years' },
      { name: 'Docker', icon: <DiDocker size={40} />, experience: '2 years' }
    ]
  }
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Technologies I Use</h2>
        
        {technologies.map((techGroup) => (
          <div key={techGroup.category} className="mb-5">
            <h3 className="h4 mb-4">{techGroup.category}</h3>
            <Row className="g-4">
              {techGroup.items.map((tech) => (
                <Col key={tech.name} md={6} lg={4}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <div className="mb-3 text-primary">{tech.icon}</div>
                      <h4 className="h5 mb-2">{tech.name}</h4>
                      <Badge bg="secondary" className="mb-3">
                        {tech.experience}
                      </Badge>
                      <ProgressBar now={getExperienceLevel(tech.experience)} 
                        label={`${getExperienceLevel(tech.experience)}%`} 
                        className="w-100" />
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

// Helper function for progress bar
const getExperienceLevel = (experience) => {
  const years = parseInt(experience, 10)
  return Math.min(years * 25, 100) // 1 year = 25%, 4+ years = 100%
}