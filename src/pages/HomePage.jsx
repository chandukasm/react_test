import React, { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const HomePage = () => {
  const [albums, setAlbums] = useState([]);

  const [searchBy, setSearchBy] = useState(null);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    let res = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=50/json"
    );

    let response = await res.json();
    console.log(response.feed.entry);
    setAlbums(response.feed.entry);
  };

  const renderSearch = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 30,
          marginBlock: 10,
        }}
      >
        <h6>Searh By Name</h6>
        <Form.Control
          onChange={(e) => setSearchBy(e.target.value)}
          type="email"
          placeholder="Enter Album name"
        />
      </div>
    );
  };

  const searchAlbums = () => {
    let searchInput = searchBy.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    let reg = new RegExp("^" + searchInput, "i"); //i for caseinsensitive look regx at test/resx
    //^mathces the start
    let searchReasults = albums.filter((album) =>
      reg.test(album["im:artist"]["label"])
    );
    return searchReasults.map((album) => <AlbumCard album={album} />);
  };

  return (
    <div style={{ margin: 10 }}>
      <h4 style={{ textAlign: "center", marginBlock: 20 }}>I tunes top 50</h4>

      <div>{renderSearch()}</div>
      <Row xs={1} md={2} className="g-4">
        {albums.map((album) => {
          return searchBy === null ? (
            <AlbumCard album={album} />
          ) : (
            searchAlbums()
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;
