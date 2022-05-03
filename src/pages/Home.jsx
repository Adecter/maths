import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import useScrollPosition from "../js/useScrollPosition";
import Video from '../video.mp4';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const scrollPosition = useScrollPosition();

  return (
    <div className="home container">
        <div className="home__button">
          <a href="#/">Записаться на обучение</a>
        </div>
        <div className="home__list">
            <div className="home__video">
                <video controls autostart="true" autoPlay src={Video} type="video/mp4" />
            </div>
            <div className="home__item">
                <h1 className="home__item__title">Индивидуальная программа</h1>
                <p className="home__item__text">Разрабатывается для каждого ученика с учетом его потребностей</p>
            </div>
            <div className="home__item">
                <h1 className="home__item__title">Опытные преподаватели</h1>
                <p className="home__item__text">Помогут найти пробелы, подтянуть знания и улучшить оценки</p>
            </div>
            <div className="home__item">
                <h1 className="home__item__title">Интерактивная платформа</h1>
                <p className="home__item__text">Автоматически проверяет задания, следит за прогрессом и сохраняет историю занятий</p>
            </div>
        </div>
    </div>
  );
};

export default Home;