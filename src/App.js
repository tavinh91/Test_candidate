import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import GifPlayer from "react-gif-player";
import { Image,ImageGroup } from "react-fullscreen-image";

const App = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=6mL8y0X2sUtgML0hsot3Z9ANCUBRtVM8&limit=30&rating=g"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.data));
  }, []);

  return (
    <div className="App">
      <div className="container ">
        <div className="row">
          {items.slice(0, visible).map((item) => (
            <div className="card col-sm-6">
              <ImageGroup>
                <Image className="img"
                    src={item.images["480w_still"].url}
                    alt="loading..."
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}>
                  {/* <GifPlayer
                    className="img"
                    gif={item.images.downsized.url}
                    alt="loading..."
                    playing={false}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  /> */}
                </Image>
              </ImageGroup>
              <div className="id">
                <span>{item.title}</span>
              </div>
              {console.log(item)}
            </div>
          ))}
        </div>
        <div className="center">
          <button onClick={showMoreItems}>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default App;
