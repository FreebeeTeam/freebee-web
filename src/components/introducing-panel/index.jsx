import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import { map } from '../../themes/images';
import styles from './styles';

const IntroducingPanel = ({ classes }) => (
  <div className={classes.panel}>
    <article className={classes.article}>
      <section className={classes.section}>
        <h1 className={classes.textCenter}>
          {'Привет!'}
        </h1>
        <p>
          {'Мы разрабатываем сервис, который представляет собой '}
          <Link to="/map">карту</Link>
          {' с отметками о различных бесплатных возможностях — от общедоступных розеток, wifi точек и туалетов, до бесплатных мероприятий.'}
        </p>
        <blockquote className={classes.blockquote}>
          <p className={classes.blockquoteContent}>
            <q>Нельзя недооценивать силу халявы.</q>
          </p>
          <footer className={classes.blockquoteFooter}>Эрик Картман, Южный Парк S6E9</footer>
        </blockquote>
        <p>
          {'В настоящее время приложение находится в стадии разработки. Следите за обновлениями!'}
        </p>
        <div className={classes.icons}>
          <div className={classes.iconContainer}>
            <a
              className={cn(classes.icon, classes.github)}
              href="https://github.com/FreebeeTeam"
            >
              {''}
            </a>
            <a
              className={cn(classes.icon, classes.vk)}
              href="https://vk.com/freebeeapp"
            >
              {''}
            </a>
            <Link
              className={cn(classes.icon, classes.mapIcon)}
              to="/map"
            >
              <img
                className={classes.mapIconImg}
                src={map}
                alt="Карта с бесплатными возможностями"
              />
            </Link>
          </div>
        </div>
      </section>
    </article>
  </div>
);

IntroducingPanel.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(IntroducingPanel);
