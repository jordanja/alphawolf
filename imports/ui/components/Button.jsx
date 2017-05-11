import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { createContainer } from 'meteor/react-meteor-data';
import { Data, Companies, Stocks} from '../../api/data.js';
import Tile from './Tile.jsx';


export default class Button extends Component {
	render() {
		return (
			<div className={this.props.stock.new ? "radio animated slideInRight" : "radio"}>
                <input type="radio" id={this.props.stock.code} value={this.props.stock.name} onChange={this.props.optionChange}
                             name="choice" className="radio-with-label" />
                <label className="label-for-radio button" htmlFor={this.props.stock.code}> &nbsp; {this.props.stock.code}  &nbsp;</label>
            </div>
		);
	}
}


Button.propTypes = {

  stock: PropTypes.object.isRequired,
  optionChange: PropTypes.func.isRequired,

};