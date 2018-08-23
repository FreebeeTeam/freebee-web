import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const FreebeeaMap = ({ classes }) => (
  <div>
    <div id="map" className="map" />
    <Link
      to="/"
      aria-label="return to index page"
      className="btn-floating btn-large waves-effect waves-light amber accent-3 to-index "
    >
      <i className="large material-icons">arrow_back</i>
    </Link>

    <ul id="slide-out" className="sidenav">
      <li className="user-view">
        <h5 className="sidebar-title">
          {'Поделитесь халявой с другими!'}
        </h5>
        <form className="row">
          <div id="feedback" className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="feedback_address" placeholder="ул. Халявина, 7" type="text" required />
                <label htmlFor="feedback_address">
                  {'Место халявы'}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="feedback_type"
                  placeholder="Туалет"
                  type="text"
                  className="validate"
                />
                <label htmlFor="feedback_type" className="active">
                  {'Вид халявы'}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="feedback_author"
                  placeholder="Freebeeman"
                  type="text"
                  className="validate"
                />
                <label htmlFor="feedback_author">
                  {'Автор'}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Описание найденной халявы" id="feedback_description" type="text" className="validate" />
                <label htmlFor="feedback_description">
                  {'Описание'}
                </label>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <button
                  className="cancel s5 btn waves-effect waves-light red accent-2 col"
                  type="button"
                >
                  {'Отменить'}
                </button>
                <button
                  className="submit offset-s2 s5 btn waves-effect waves-light amber accent-3 col"
                  type="submit"
                >
                  {'Отправить'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </li>
    </ul>

    <div className="freebee-filter fixed-action-btn">
      <button type="button" className="btn-floating btn-large amber accent-3">
        <i className="large material-icons black-text">filter_list</i>
      </button>
      <ul>
        <li>
          <button type="button" id="filter-by-wifis" className="btn-floating grey lighten-1">
            <i className="material-icons black-text">wifi</i>
          </button>
        </li>
        <li>
          <button type="button" id="filter-by-toilets" className="btn-floating grey lighten-1">
            <i className="material-icons black-text">wc</i>
          </button>
        </li>
        <li>
          <button type="button" id="filter-clear" className="btn-floating grey lighten-1">
            <img
              className="default-filter active-filter"
              src="./image/default-filter.png"
              alt="default filter"
            />
          </button>
        </li>
      </ul>
    </div>

    <div className="row hide-on-large-only">
      <button data-target="slide-out" type="button" className="contact-us sidenav-trigger btn waves-effect waves-light amber accent-3 col s12"> Нашли халяву? </button>
    </div>
    <button data-target="slide-out" type="button" className="contact-us-desktop hide-on-small-only hide-on-med-only sidenav-trigger btn waves-effect waves-light amber accent-3">
      {'Нашли халяву?'}
    </button>

  </div>
);

export default withStyles(styles)(FreebeeaMap);
