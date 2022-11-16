import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BsApple } from "react-icons/bs";

const AlbumCard = ({ album }) => {
  return (
    <Col>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ margin: 5 }}>
          <img variant="cover" src={album["im:image"][2].label} />
        </div>
        <div style={{ width: "70%" }}>
          <Card.Title className="text-center">
            {album["im:name"]["label"]}
          </Card.Title>
          <Card.Body>
            <Card.Text>
              artist: <strong>{album["im:artist"]["label"]}</strong>
            </Card.Text>

            <Card.Text>
              release Date:{" "}
              <strong>{album["im:releaseDate"].attributes.label}</strong>
            </Card.Text>

            <Card.Text>
              content type:{" "}
              <strong>{album["im:contentType"].attributes.label}</strong> -
              {album["im:contentType"]["im:contentType"].attributes.label}
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <Button
            variant="primary"
            onClick={() => (window.location.href = album.link.attributes.href)}
          >
            itunes <BsApple style={{ marginBottom: 6 }} />
          </Button>
          <Card.Text>
            price: <strong>{album["im:price"].label}</strong>
          </Card.Text>
          <footer style={{ fontSize: 8 }}>{album["rights"]["label"]}</footer>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default AlbumCard;
