import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';

import {
  misc,
  freebee,
  map,
} from '../../themes/images';

const MainPage = ({ classes }) => (
  <div className={classes.sky}>
    <div className={classes.sign}>
      <div className={classes.grass}>
        <div className={classes.grassBack} />
        <div className={classes.grassMiddle} />
        <div className={classes.grassFront} />
        <div className={classes.pillar}>
          <div className={classes.pillarShadow} />
          <div className={classes.pillarBase} />
          <div className={classes.pillarHead} />
          <div className={classes.pillarSphere} />
        </div>

        <div className={classes.plates}>
          <div className={classes.plateTop}>
            <div className={cn(classes.plateInner, classes.red)}>
              <div className={classes.nail1} />
              <a href="http://cyclowiki.org/wiki/%D0%A5%D0%B0%D0%BB%D1%8F%D0%B2%D0%B0">
                <img
                  className={cn(classes.plateImage, classes.freebee)}
                  alt="freebee cyclowiki"
                  src={freebee}
                />
              </a>
            </div>
          </div>
          <div className={classes.plateBottom}>
            <div className={cn(classes.plateInner, classes.yellow)}>
              <h3 className={classes.mapRedirect}>
                <Link
                  className={classes.mapRedirectLink}
                  to="/map"
                >
                  {'Карта'}
                </Link>
              </h3>
              <Link to="/map">
                <img
                  alt="map marker"
                  className={cn(classes.plateImage, classes.misc)}
                  src={misc}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  </div>
);

MainPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(MainPage);
