import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            item: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            item: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            item: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            item: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}