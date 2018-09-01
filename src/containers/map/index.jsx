// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { FreebeeMap } from '../../components';
import { wifiActions, toiletsActions } from '../../redux/actions';
import { wifisSelector, toiletsSelector } from '../../redux/selectors/markers';
import type { Wifi, Toilet } from '../../types/models';

type Props = {
  wifis?: Wifi[],
  toilets?: Toilet[],
  getWifis: () => void,
  getToilets: () => void,
};

class MapContainer extends React.Component<Props> {
  static defaultProps = {
    wifis: [],
    toilets: [],
  }

  componentDidMount = () => {
    const { getWifis, getToilets } = this.props;

    getWifis();
    getToilets();
  }

  render() {
    const { wifis, toilets } = this.props;

    return (
      <FreebeeMap
        wifis={wifis}
        toilets={toilets}
      />
    );
  }
}


const mapStateToProps = state => ({
  wifis: wifisSelector(state),
  toilets: toiletsSelector(state),
});

const { getWifiMarkers } = wifiActions;
const { getToiletMarkers } = toiletsActions;

const mapDispatchToProps = dispatch => ({
  getWifis: () => dispatch(getWifiMarkers()),
  getToilets: () => dispatch(getToiletMarkers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
