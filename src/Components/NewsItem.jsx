import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/news.jpg'

function NewsItem({ title, description, src, url }) {
  return (
    <Card style={{ width: "380px", height: "500px" }} className="mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <Card.Img variant="top" src={src?src:image} style={{ height: "200px", width: "100%", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description || "Please Click on the Read More"}</Card.Text>
        <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;
