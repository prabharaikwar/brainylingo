import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const DesignTwo = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((res) => {
        setStories(res.data);
        if (res.data.length > 0) {
          setSelectedStory(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err, "err in fetching");
      });
  };

  const handleStoryClick = (story) => {
    axios
      .get(`https://child.onrender.com/api/sciencefiction/${story._id}`)
      .then((res) => {
        setSelectedStory(res.data);
      })
      .catch((err) => {
        console.error("Error fetching story:", err);
      });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={5}>
          {selectedStory && (
            <Card>
              <Card.Img
                variant="top"
                src={`https://ik.imagekit.io/dev24/${selectedStory.Image}`}
              />
              <Card.Body>
                <Card.Title>{selectedStory.Title}</Card.Title>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col md={7}>
          <Row>
            {stories.map((story) => (
              <Col key={story._id} xs={6} md={4} lg={3} className="mb-4">
                <Card onClick={() => handleStoryClick(story)} className="h-100">
                  <Card.Img
                    variant="top"
                    src={`https://ik.imagekit.io/dev24/${story.Image}`}
                  />
                  <Card.Body>
                    <Card.Title>{story.Title}</Card.Title>
                    <Card.Text>{story.Status}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DesignTwo;
