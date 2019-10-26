import React from 'react';
import PlacementsList from './PlacementsList';
import PlacementsListFilter from './PlacementsListFilter';
import WhatsApp from './WhatsApp';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsThreeLiner from './PlacementsThreeLiner';
import { connect } from 'react-redux';
import selectPlacements from '../selectors/placements';
import ShareButton from './ShareButton';
import PlacementsHeader from './PlacementsHeader';
import ReviewTags from './ReviewTags';
import { PlacementsListItem } from './PlacementsListItem';

const Placements = (props) => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <PlacementsHeader/>
    <ReviewTags />
    <div className="placement-container__rowDisplay">
      <div className="placement-content-container">
        <PlacementsThreeLiner id={props.placements[0].id} placement={props.placements[0]}/>
        <PlacementsThreeLiner id={props.placements[1].id} placement={props.placements[1]}/>
        <PlacementsThreeLiner id={props.placements[2].id} placement={props.placements[2]}/>
        <PlacementsThreeLiner id={props.placements[3].id} placement={props.placements[3]}/>
        <PlacementsThreeLiner id={props.placements[4].id} placement={props.placements[4]}/>
        <PlacementsThreeLiner id={props.placements[5].id} placement={props.placements[5]}/>
        <PlacementsThreeLiner id={props.placements[6].id} placement={props.placements[6]}/>
        <PlacementsThreeLiner id={props.placements[7].id} placement={props.placements[7]}/>
        <PlacementsThreeLiner id={props.placements[8].id} placement={props.placements[8]}/>
        <PlacementsThreeLiner id={props.placements[9].id} placement={props.placements[9]}/>
        <PlacementsThreeLiner id={props.placements[10].id} placement={props.placements[10]}/>
        <PlacementsThreeLiner id={props.placements[11].id} placement={props.placements[11]}/>
        <PlacementsThreeLiner id={props.placements[12].id} placement={props.placements[12]}/>
        <PlacementsThreeLiner id={props.placements[13].id} placement={props.placements[13]}/>
        <PlacementsThreeLiner id={props.placements[14].id} placement={props.placements[14]}/>
        <PlacementsThreeLiner id={props.placements[15].id} placement={props.placements[15]}/>
        <PlacementsThreeLiner id={props.placements[16].id} placement={props.placements[16]}/>
        <PlacementsThreeLiner id={props.placements[17].id} placement={props.placements[17]}/>
      </div>
    </div>
    {/* <PlacementsListFilter /> */}
    {/* <PlacementsList /> */}
    {/* <WhatsApp /> */}
    {/* <ShareButton /> */}
  </div>
);

// export default Placements;

const mapStateToProps = (state) => {
  return {
      placements: selectPlacements(state.placements,state.filter)
  };
};

export default connect(mapStateToProps)(Placements);