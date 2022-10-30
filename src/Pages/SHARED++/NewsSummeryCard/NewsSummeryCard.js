import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  // console.log(news);
  const { _id, title, author, details, total_view, image_url } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="left d-flex align-items-end">
            <Image
              src={author.img}
              roundedCircle
              className="me-3"
              style={{ height: "60px" }}
            ></Image>
            <div>
              <p className="mb-0">
                <small>{author.name}</small>
              </p>
              <p className="mb-0">
                <small>{author.published_date} </small>
              </p>
            </div>
          </div>
          <div className="right">
            <FaRegBookmark className="mx-2"></FaRegBookmark>

            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>
            {details.length > 200 ? (
              <>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`}> read more</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{total_view}</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
