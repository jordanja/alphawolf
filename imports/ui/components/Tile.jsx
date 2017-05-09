import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
import Item from './Item.jsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ReactDOM from 'react-dom';
import {Button as clickbutton} from 'react-bootstrap';

import { Table } from 'react-bootstrap';

import { Data, Companies, Stocks, SelectedStock } from '../../api/data.js';
import Button from './Button.jsx';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



var NUMDAYS = 365;

export default class Tile extends Component {

//converts raw api data into structure the graph component uses
parseDataIntoGraph(result, news){
  if(result != null){
      console.log(result);
      console.log(news);
	  var array = result.data.CompanyReturns[0].Data;
	  var data = [];
	  var i = 0;
	  while(i < array.length){
	  	var headline = "";
	  	var url = "";
	  	for (var j = 0; j < news.length; j++) {
	  		// console.log("comparing articles' dates");
	  		if (array[i].Date === news[j].date) {
	  			console.log("found news match on " + news[j].date);
				headline = (news[j].headline != "") ? news[j].headline : news[j].abstract;
				url = (news[j].url != "") ? news[j].url : "";
				break;
			}
		}
	    data.push({
	      name: array[i].Date,
	      value: Math.round((array[i].Close)*100),
		  info: headline,
		  url: url,
	    });
	    i = i +1;
	  }
	  return data;
	}
}

	//renders a whole bunch of stats for the user
	render() {
		console.log("Tile rendered");
    console.log("NAME: " + this.props.stockData.name);

		if(this.props.display == "HOME"){
		return (
			<div className="tile">
				<Item news={"Uber stocks fall amidst scandals"}/>
				<Item news={"Oil does something"}/>
				<Item news={"Oil does something"}/>
				<Item news={"Oil does something"}/>
				<div className="inner">
					<div className="big">
						{this.props.stockData.code}
					</div>

					<div className="big">

					</div>

				</div>

			</div>
			);
		}else{
			// console.log(this.parseDataIntoGraph(this.props.stockData.data));
      var companyReturns = this.props.stockData.data.data.CompanyReturns[0];
      var currClose = companyReturns.Data[NUMDAYS].Close;
      var prevClose = companyReturns.Data[NUMDAYS-1].Close;
      var positiveSign = (companyReturns.Data[NUMDAYS].Close-companyReturns.Data[0].Close) >= 0 ? "+" : "";
      var highestClose = parseFloat(companyReturns.Data[0].Close);
      var lowestClose = parseFloat(companyReturns.Data[0].Close);

      console.log("Array length: " + companyReturns.Data.length);
      // Get the lowest and highest values of the stock
      for (var i = 0; i < companyReturns.Data.length; i++) {
        var currClose = parseFloat(companyReturns.Data[i].Close);
        // console.log("Curr: " + currClose + " | high: " + highestClose + " | low: " + lowestClose + " | typeof(high): " + typeof(highestClose));
        if (currClose > highestClose) highestClose = currClose;
        if (currClose < lowestClose) lowestClose = currClose;
      }

			return (
				<div className="tile">
					<div className="inner">
					<div className="big">
          <h1>{this.props.stockData.name} ({this.props.stockData.code})</h1>
          <h2> <b>{parseFloat(currClose).toFixed(2)}</b> <span className={positiveSign === "+" ? "stock-positive" : "stock-negative"}>{positiveSign}
          {currClose-prevClose} ({positiveSign}{(currClose-prevClose)/prevClose*100})</span></h2>
          <Table>
            <thead>
              <tr>
                <th colspan="2">Statistics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yesterday's close</td>
                <td>{parseFloat(currClose).toFixed(2)}</td>
              </tr>
              <tr>
                <td>52-week change</td>
                <td className={positiveSign === "+" ? "stock-positive" : "stock-negative"}>{parseFloat(currClose-companyReturns.Data[0].Close).toFixed(2)}{' '}
                ({positiveSign}{parseFloat((currClose-companyReturns.Data[0].Close)/companyReturns.Data[0].Close*100).toFixed(2)}%)</td>
              </tr>
              <tr>
                <td>52-week high</td>
                <td>{parseFloat(highestClose).toFixed(2)}</td>
              </tr>
              <tr>
                <td>52-week low</td>
                <td>{parseFloat(lowestClose).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
					Company Info <br />
					<button id="thisweek">This week</button>
					<button id="thismonth">This month</button>
					<button id="thisyear">This year</button>
					</div>

					</div>

					<LineChart width={600} height={300} data={this.parseDataIntoGraph(this.props.stockData.data, Session.get('newsData'))}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       				<XAxis dataKey="name"/>
       				<YAxis domain={['auto', 'auto']}/>
       				<CartesianGrid strokeDasharray="3 3" vertical={false}/>
       				<Tooltip content={ showTooltipData }/>
       				<Legend />
       				<Line type="monotone" dataKey="value" dot={false}  stroke="#8884d8" activeDot={{r: 8}}/>
      				</LineChart>



				</div>

				);
		}
	}
}

function showTooltipData (data) {
    if ( typeof data.payload[0] !== 'undefined') {
        // console.log(this.props.stockData.news);
        // console.log(Object.keys(data.payload[0]));
        // console.log(Object.values(data.payload[0]));
    	var date = data.payload[0].payload.name;
    	var value = data.payload[0].payload.value;
    	var info = data.payload[0].payload.info;
    	var url = data.payload[0].payload.url;

		// return tooltip as url link if there exists an article, or just return share data
		return <div id="tag">{date}<br/>
							 Price: ${value/100}<br/>
			                 <a href={(url !== "") ? url : ""} target="_blank">
							 {(info !== "") ? "NEWS:" + info : ""}</a></div>;
    }
}

// const CustomTooltip  = React.createClass({
//     propTypes: {
//         type: PropTypes.string,
//         payload: PropTypes.array,
//         label: PropTypes.string,
//     },
//
//     getIntroOfPage(label) {
//         this.props.stockData.news.forEach ( function (news) {
// 			if (news.date === label) {
// 				return news.headline;
// 			}
// 		})
//     },
//
//     render() {
//         const { active } = this.props;
//
//         if (active) {
//             const { payload, label } = this.props;
//             return (
// 				<div className="custom-tooltip">
// 					<p className="label">{`${label} : ${payload[0].value}`}</p>
// 					<p className="intro">{this.getIntroOfPage(label)}</p>
// 					<p className="desc">Anything you want can be displayed here.</p>
// 				</div>
//             );
//         }
//
//         return null;
//     }
// });


Tile.propTypes = {
  // This component gets the return figure to display through a React prop.
  // We can use propTypes to indicate it is required
  stockData: PropTypes.object.isRequired,
};
