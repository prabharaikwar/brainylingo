import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

const DesignOne = ({ stories }) => {
  return (
    <Container>
      <div className="p-1 align-item-center">
        <h1 className="text-center mt-4 text-light">Science Fiction Stories</h1>
        <div className="d-flex justify-content-around">
          <Button variant="primary" className="rounded-pill  px-3 fs-4">
            New
          </Button>
          <Button variant="warning" className="rounded-pill text-light fs-4">
            In Progress
          </Button>
          <Button variant="success" className="rounded-pill fs-4">
            Completed
          </Button>
          <Button
            variant="Info"
            className="rounded-pill text-light fs-4 btn-gradient"
          >
            Clear All
          </Button>
        </div>
      </div>
      <Row className="mt-4">
        {stories.map((story) => (
          <div className="col-md-3 mb-4 bg-card" key={story._id}>
            <Card className="custom-card bg-card">
              <Card.Img
                variant="top"
                src={`https://ik.imagekit.io/dev24/${story.Image}`}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title className="custom-card-title text-light">
                  {story.Title}
                </Card.Title>
              </Card.Body>
              <Button
                variant="light"
                className="rounded-pill custom-read-more-btn fw-bold"
              >
                {story.Status}
              </Button>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default DesignOne;
