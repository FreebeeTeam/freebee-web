// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FilterButton } from '../../components';
import { filterSelector } from '../../redux/selectors/markers';
import { setFilter } from '../../redux/actions/markers';

const mapState = (state: {}) => ({
  selectedFilter: filterSelector(state),
});

const mapDispatch = dispatch => bindActionCreators({
  setFilter,
}, dispatch);

export default connect(mapState, mapDispatch)(FilterButton);