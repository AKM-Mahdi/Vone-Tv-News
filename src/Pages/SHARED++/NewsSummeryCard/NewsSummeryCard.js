import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsSummeryCard = ({ news }) => {
  const { _id, title, author, details, total_view, image_url } = news;
  return (
    <div>
      <Card className="">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
