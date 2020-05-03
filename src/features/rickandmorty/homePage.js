import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Button, Spin, Tabs, Empty } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

import {
  addEpisodesFromAPI,
  addFavourite,
  removeFavourite,
  selectEpisodes,
  selectFavourites,
} from "./apiSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const episodes = useSelector(selectEpisodes);
  const favourites = useSelector(selectFavourites);

  const toggleFavAction = (episode) => {
    favourites.find((ep) => ep.id === episode.id)
      ? dispatch(removeFavourite(episode))
      : dispatch(addFavourite(episode));
  };

  useEffect(() => {
    //adds episodes from the TVMaze API on mounting the component
    dispatch(addEpisodesFromAPI());
  }, [dispatch]);

  return (
    <>
      <div style={{ margin: 40 }}>
        <Tabs>
          <Tabs.TabPane tab="Episodes" key="1">
            <h1>Episodes</h1>
            <p>Select your favourite episodes</p>
            <Row gutter={[16, 16]} justify="center">
              {episodes.length !== 0 ? (
                episodes.map((item) => {
                  return (
                    <Col>
                      <Card
                        key={item.id}
                        style={{ width: 300 }}
                        cover={
                          <img
                            src={item.image != null ? item.image.medium : null}
                            alt={item.name}
                          />
                        }
                      >
                        <Card.Meta
                          title={`Season: ${item.season} Episode: ${item.number}`}
                          description={item.name}
                        />
                        <br />
                        <Button
                          icon={
                            favourites.find((fav) => fav.id === item.id) ? (
                              <LikeFilled />
                            ) : (
                              <LikeOutlined />
                            )
                          }
                          type="primary"
                          onClick={() => toggleFavAction(item)}
                        >
                          {favourites.find((fav) => fav.id === item.id)
                            ? "Unlike"
                            : "Like"}
                        </Button>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <div style={{ marginLeft: 10, marginTop: 30 }}>
                  <Spin size="large" />
                </div>
              )}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Favourites" key="2">
            <h1>Favourites</h1>
            <p>See your favourite episodes here</p>
            <Row gutter={[16, 16]} justify="center">
              {favourites.length !== 0 ? (
                favourites.map((item) => {
                  return (
                    <Col>
                      <Card
                        key={item.id}
                        style={{ width: 300 }}
                        cover={
                          <img
                            src={item.image != null ? item.image.medium : null}
                            alt={item.name}
                          />
                        }
                      >
                        <Card.Meta
                          title={`Season: ${item.season} Episode: ${item.number}`}
                          description={item.name}
                        />
                        <br />
                        <Button
                          icon={
                            favourites.find((fav) => fav.id === item.id) ? (
                              <LikeFilled />
                            ) : (
                              <LikeOutlined />
                            )
                          }
                          type="primary"
                          onClick={() => toggleFavAction(item)}
                        >
                          {favourites.find((fav) => fav.id === item.id)
                            ? "Unlike"
                            : "Like"}
                        </Button>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <div style={{ marginLeft: 10, marginTop: 30 }}>
                  <Empty />
                </div>
              )}
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
