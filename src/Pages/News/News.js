import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
  const newsDetails = useLoaderData();
  const { _id, title, author, details, total_view, image_url } = newsDetails;
  console.log(newsDetails);
  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Header className="d-flex align-items-end justify-content-between">
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
            <span>{total_view}</span>
            <FaRegBookmark className="mx-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
      </Card>
    </div>
  );
};

export default News;
