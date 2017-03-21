import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import { connect } from 'react-redux';
import { getTimelineAction, getNextTimelineAction } from '../actions/timelineActions';
import { logoutAction } from '../../authentication/actions/loginAction';

const style = require('./timeline.css');

const materialUIStyle = {
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
  },
  gridTile: {
    height: '200px',
    width: '200px',
    borderRadius: '25px',
    margin: 'auto',
  },
};

class Timeline extends React.Component {

  componentWillMount() {
    this.props.getTimeline();
  }

  getFeedElements = () => {
    const feeds = (this.props.timelineFeed || []).filter(feed => (
      Object.prototype.hasOwnProperty.call(feed, 'images')
    ));

    return (feeds || []).map(feed => (
      <GridTile
        style={materialUIStyle.gridTile}
        key={feed.id}
        title={feed.caption}
      >
        <img src={feed.images[0].url} alt={'Nothing here!'} />
      </GridTile>
    ));
  }

  showMoreFeed = () => {
    this.props.getNextTimeline(this.props.cursor);
  }

  render() {
    return (
      <div className={style.container}>
        <AppBar
          title={<span>Instagram Timeline</span>}
          iconElementLeft={<div />}
          iconElementRight={<FlatButton label="Logout" onClick={this.props.logout} />}
        />
        <div className={style.root}>
          <GridList
            cellHeight={'auto'}
            style={materialUIStyle.gridList}
            cols={4}
            padding={20}
          >
            {this.getFeedElements()}
          </GridList>
        </div>
        <div className={style.bottomContainer}>
          <FlatButton
            label={this.props.isMoreAvailable ? 'Show More' : 'No More Feeds'}
            onClick={this.showMoreFeed}
            disabled={!this.props.isMoreAvailable || this.props.isGettingTimeline}
          />
        </div>
      </div>
    );
  }
}


Timeline.propTypes = {
  getTimeline: React.PropTypes.func.isRequired,
  getNextTimeline: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  timelineFeed: React.PropTypes.array.isRequired,
  cursor: React.PropTypes.string.isRequired,
  isMoreAvailable: React.PropTypes.bool.isRequired,
  isGettingTimeline: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isGettingTimeline: state.timeline.isGettingTimeline,
  timelineFeed: state.timeline.feed,
  cursor: state.timeline.cursor,
  isMoreAvailable: state.timeline.isMoreAvailable,
});

const mapDispatchToProps = dispatch => ({
  getTimeline: () => dispatch(getTimelineAction()),
  getNextTimeline: cursor => dispatch(getNextTimelineAction(cursor)),
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
