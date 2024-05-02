import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StoryNavbar from "../components/StoryNavbar";
import DesignOne from "./DesignOne";
import DesignTwo from "./DesignTwo";
import axios from "axios";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => {
        console.log(err, "err in fetching");
      });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container className="">
      <StoryNavbar />
      <div className="">
        <Row className="p-1">
          <Col>
            <Col>
              {currentPage === 1 && (
                <DesignOne fetchData={fetchData()} stories={stories} />
              )}
              {currentPage === 2 && <DesignTwo />}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <Button
                onClick={handlePrevious}
                className="btn-color fs-4 border-0"
              >
                Previous
              </Button>
              <Button onClick={handleNext} className="border-0 btn-color fs-4">
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
