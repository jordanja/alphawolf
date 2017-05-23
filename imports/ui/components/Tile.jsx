import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
import Item from './Item.jsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ReactDOM from 'react-dom';
import { Table, Form, Glyphicon, Tooltip as Toolitip, OverlayTrigger } from 'react-bootstrap';

import { Data, Companies, Stocks, SelectedStock, News } from '../../api/data.js';
import Button from './Button.jsx';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
var Highcharts = require('highcharts/highstock');


export default class Tile extends Component {

  handleClickItem(itemVal){
    //re-renders tiles, need to somehow get itemVal
    //console.log("something is pressed!\n" + JSON.stringify(itemVal.value));
    console.log(itemVal.currentTarget.value);

    switch (itemVal) {
      case "hot":
          data[0].code = "hot";
          break;
      case "consumer1":
          data[0].code = "consumer1";
          break;
      case "consumer2":
          data[0].code = "consumer2";
          break;
      case "energy":
          data[0].code = "energy";
          break;
      case "financial":
          data[0].code = "financial";
          break;
      case "health":
          data[0].code = "health";
          break;
      case "industrials":
          data[0].code = "industrials";
          break;
      case "it":
          data[0].code = "it";
          break;
      case "materials":
        data[0].code = "materials";
        break;
      case "metalmine":
        data[0].code = "metalmine";
        break;
      case "resource":
        data[0].code = "resource";
        break;
      case "telecom":
        data[0].code = "telecom";
        break;
      default:
        data[0].code = "Home";
        break;
      }
  }

  //return a render page based on the catergory selected
  renderCat(category){
    //debugging statement:
    console.log("the category trying to be render is: "+ category);
    var returnHtml;

    //arr of results
    var hotStocks;

    //regrex goes here
    //https://hotcopper.com.au/


    if (category == "hot"){
      return(<h2>Hot Stocks</h2>);
    }else if(category == "tutorial"){
      return (

          <p>
            <h2>Beginners guide to the Stock Market</h2>
            <b>Welcome to Investing Basics!</b> If you've found your way here, chances are you've either got some money socked away or you're planning to do so. But first things first. Why is investing a smart idea?

            <br /><br />
            Simply put, you want to invest in order to create wealth. It's relatively painless, and the rewards are plentiful. By investing in the stock market, you'll have a lot more money for things like retirement, education, recreation -- or you could pass on your riches to the next generation so that you become your family's Most Cherished Ancestor. Whether you're starting from scratch or have a few thousand dollars saved, Investing Basics will help get you going on the road to financial (and Foolish!) well-being.

            <br /><br />
            It can be very challenging for someone who does not understand the financial lingo to confidently asses and make investments based on data that they do not understand. Thats where COWS comes in. A revolutionary new website, redefining how a stocks portfolio should look.

            <br />
            <h3>Buying shares on a share exchange</h3>
            There are five public share exchanges in Australia. Four of them directly supervise the companies that issue the shares that trade on their markets. The fifth exchange, Chi-X, currently only provides the infrastructure for trading shares already quoted on the ASX.
            <br /><br />
            The five exchanges are:
            <ul>
              <li><a href="http://www.asx.com.au">Australian Securities Exchange (ASX)</a> - the main stock exchange in Australia</li>
              <li><a href="http://www.chi-x.com.au">Chi-X</a> - an exchange that trades company shares already quoted on the ASX, but does not list or supervise the companies</li>
              <li><a href="http://www.nsxa.com.au">National Stock Exchange of Australia (NSXA)</a> - a securities exchange that lists about 70 small to medium sized companies</li>
              <li><a href="http://simvse.com.au">SIM Venture Securities Exchange (SIM VSE)</a> - an exchange for innovative companies involved in the clean technology, renewable energy and bio science field</li>
              <li><a href="http://www.apx.com.au/APX/Public/EN/Default.aspx">Asia Pacific Stock Exchange (APX)</a> - a stock exchange with a focus on growth oriented companies from the Asia-Pacific region</li>
            </ul>
            To start buying and selling shares on any of these exchanges, simply visit their link.

            <br />
            <h3>Reading a COWS stocks sheet</h3>
            The COWS stocks page list only the crucial information needed to invest in stocks. We leave out the unimportant and irrelevant data. Below is a guide as to what each piece of information means, and how it should affect your investment decisions.
            <ul>
              <li><strong>Stock Code</strong>: An abbreviation used to uniquely identify publicly traded shares of a particular stock on a particular stock market</li>
              <li><strong>Sector</strong>: The sector of the stock defines the industry that the company is mostly involved in. Sector analysis provides the investor with an idea of how well a group of companies in the same sector could be expected to perform as a whole. Generally, a group of stocks within a sector tend to move together because companies within the same industry group are affected in similar ways by market and economic conditions.</li>
              <li><strong>Summary</strong>: A general company description. It is advisable to research/invest instocks that you can understand their business model.</li>
              <li><strong>Close</strong>: The closing price is the final price at which a stock is traded on a given trading day. The closing price represents the most up-to-date valuation of a security until trading commences again on the next trading day. Although closing prices do not reflect the after-hours price or corporate actions, they may still act as useful markers for investors to assess changes in stock prices over time — the closing price of one day can be compared to the previous closing price to measure market sentiment for a given security over a trading day</li>
              <li><strong>Previous Close</strong>: The stock's closing price on the preceding day of trading.</li>
              <li><strong>Monthly Change</strong>: Monthly change is the difference between the closing price of a stock on the day's trading and the previous month's closing price. It shows the companies performance over the past month and provides a short term illustration of the companies performance.</li>
              <li><strong>Monthly High</strong>: The highest price that the stock has traded at in the previous month. This can give an indication of the possible future benefits of the stock.</li>
              <li><strong>Monthly Low</strong>: The lowest price that the stock has traded at in the previous month. This can give an indication of the possible future flaws of the stock. </li>
              <li><strong>Annual Change</strong>: Annual change is the difference between the closing price of a stock on the day's trading and the previous year's closing price. It shows the companies performance over the past year and provides a long term illustration of the companies performance.</li>
              <li><strong>Annual High</strong>: The highest price that the stock has traded at in the previous year. This can give an indication of the possible future benefits of the stock.</li>
              <li><strong>Annual Low</strong>: The lowest price that the stock has traded at in the previous year. This can give an indication of the possible future flaws of the stock. </li>

            </ul>
          </p>
      );
    }else if(category == "consumer1"){
      return (<h2>Consumer Discretionary</h2>);
    }else if (category == "consumer2"){
      return(<h2>Consumer Staples</h2>);
    }else if (category == "energy"){
      return(<h2>Energy</h2>);
    }else if (category == "financial"){
      return(<h2>Financial</h2>);
    }else if (category == "health"){
      return(<h2>Health</h2>);
    }else if (category == "industrials"){
      return(<h2>Industrial</h2>);
    }else if (category == "it"){
      return(<h2>Information Technology</h2>);
    }else if (category == "materials"){
      return(<h2>Materials</h2>);
    }else if (category == "metalmine"){
      return(<h2>Metals and Mining</h2>);
    }else if (category == "resource"){
      return(<h2>Resources</h2>);
    }else if (category == "telecom"){
      return(<h2>Telecommunications</h2>);
    }else if (category == "util"){
      return(<h2>{}"=ujyew"}</h2>);
    }else if(category == "bank"){
      return(<h2>Bank</h2>);
    }
  }



  //converts raw api data into structure the graph component uses
  parseDataIntoGraph(result, news, announcements) {
    if(result != null) {
      // console.log(announcements);
        // console.log(result);
        // console.log("NEWS: " + JSON.stringify(news));
       // console.log(section);

  	  var array = result;
      var stockData = [];
      var newsData = [];
      var announcementData = [];

      // convert data for graphing on high stocks
      // format:
      // [[timestamp, stockValue], [timestamp, stockValue] ....]
      for (i = 0; i < array.length; i ++) {
        var datestr = array[i].Date;
        // console.log("DATESTR:" + datestr);
        datestr = datestr.split("/");
        var dd = parseInt(datestr[0]);
        var mm = parseInt(datestr[1])-1;
        var yyyy = parseInt(datestr[2]);
        var timestamp = Date.UTC(yyyy,mm,dd);
        // console.log("SPLIT:" + dd + "/" + mm + "/" + yyyy);

        stockData.push({ x: timestamp, y: array[i].Close });
      }

      console.log(news);
      // parse data for displaying news
      for (var j = 0; j < news.length; j++) {
        var currNewsItem = news[j];
        var newsDate = currNewsItem["date"];

        var datestr = newsDate.split("/");
        var dd = parseInt(datestr[0]);
        var mm = parseInt(datestr[1])-1;
        var yyyy = parseInt(datestr[2]);
        var timestamp = Date.UTC(yyyy,mm,dd);

        var newsExistsForDate = false;
        for (var k = 0; k < newsData.length; k++) {
          if (newsData[k].x === timestamp) {
            newsExistsForDate = true;
            break;
          }
        }

        if (newsExistsForDate) continue;

        var currNewsData = {  x: timestamp,
                              title: "",
                              style: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: "#FA6C61",
                              },
                              text: "<b>Related news</b><br>" + currNewsItem.headline + "<br>" +
                                    "<span class='tooltip-link'><i>Click to read more!</i></span>",
                              url: currNewsItem.url
                           };
        // console.log(currNewsData);
        newsData.push(currNewsData);
      }
      newsData.sort(function(a, b) {
          return parseFloat(a.x) - parseFloat(b.x);
      });

      // parse data for announcements
      for (var j = 0; j < announcements.length; j++) {
        var date = announcements[j].date;

        var datestr = date.split("/");
        var dd = parseInt(datestr[0]);
        var mm = parseInt(datestr[1])-1;
        var yyyy = parseInt(datestr[2]);
        var timestamp = Date.UTC(yyyy,mm,dd);

        announcementData.push ({ x: timestamp,
                                 y: null,
                                 title: "",
                                 style: { color: 'rgba(0,0,0,0)' },
                                 text: "<b>Company announcement</b><br>" + announcements[j].title + "<br>" +
                                       "<span class='tooltip-link'><i>Click to read more!</i></span>",
                                 url: announcements[j].url
                              });
      }
      announcementData.sort(function(a, b) {
        return parseFloat(a.x) - parseFloat(b.x);
      });
      // console.log(announcementData);

      var chart = Highcharts.stockChart('container', {
        series: [
          // stock data graph
          {
            data: stockData,
            name: "Closing Price",
            id: "stockData"
          },
          // news data graph
          {
            type: 'flags',
            name: 'Company News',
            data: newsData,
            useHTML: true,
            shape: 'url(assets/news-icon2.png)', //'circlepin',
            events: { // upon click, it will launch another tab
              click: function (event) {
                console.log(event);
                event.preventDefault();
                window.open(event.point.url, '_blank');
              }
            },
            width: 14,
            y: -30, // position relative to graph
          },
          // announcement data graph
          {
            type: 'flags',
            name: 'Annnoucements',
            data: announcementData,
            onSeries: 'stockData',
            useHTML: true,
            shape: 'url(assets/announcement.png)',
            events: {
              click: function (event) {
                console.log(event);
                event.preventDefault();
                window.open(event.point.url, '_blank');
              }
            },
            width: 30,
            // states: { hover: { halo: { attributes: { fill: Highcharts.getOptions().colors[2], 'stroke-width': 1, stroke: Highcharts.getOptions().colors[1] }, opacity: 0.25, size: 10 } } } // leave here for future maybe
          },
          // set more options here for graph or more graph data
        ],
        // set title of graph
        title: {
          text: "Closing Price",
          style: {
            'font-weight': 'bold',
            // 'color': "#7cb5ec"
          }
        },
        // set tooltip format
        tooltip: {
          style: {
            width: '250px',
            backgroundColor: '#FCFFC5',
            // borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3
          },
        },
        // initial range selected
        rangeSelector: {
          selected: 1
        },
        // scrollbar: {
        //   enabled: false
        // },
        chart: {
          backgroundColor: "#f5f5f5",
          borderColor: "#c4c4c4",
          borderWidth: 2,
          borderRadius: 2,
        },
        yAxis: {
          title: {
            text: 'Dollars',
            enabled: true,
            style: {
              'font-weight': 'bold',
              'color': "#7cb5ec"
            }
          },
        },
        legend: {
          layout: 'horizontal',
          enabled: true,
          // borderRadius: 5,
          // borderWidth: 1,
          // borderColor: 'darkgrey'
        },
        // ... more options - see http://api.highcharts.com/highcharts
      });
  	}
  }

  renderStocksName() {
    return this.props.stockData.map((data, i, stockData) => {
      if (data.name === "Company") {
        const tooltip_ticker = (
            <Toolitip id="tooltip"><strong>ASX Code</strong><br />An abbreviation used to uniquely identify publicly traded shares in Australian Stock Exchange of a particular company</Toolitip>
            //<font size="2"><OverlayTrigger placement="top" overlay={tooltip_ticker}><Glyphicon glyph="info-sign" /></OverlayTrigger></font>
        );
        return (<td className="small-col add-borders align-center"><h1>{ data.name }<font size="2"><OverlayTrigger placement="top" overlay={tooltip_ticker}><Glyphicon glyph="info-sign" /></OverlayTrigger></font></h1></td>);
      }

      var companySector = data.sector;

      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="equal-col align-right"><h1>{data.name} <span className="stock-code">({data.code})</span></h1></td>);
        } else {
          return (<td className="equal-col"><h1>{data.name} <span className="stock-code">({data.code})</span></h1></td>);
        }
      } else {
        return (<td><h1>{data.name} <span className="stock-code">({data.code})</span></h1></td>);
      }

    })
  }

  renderStocksSector() {
    return this.props.stockData.map((data, i, stockData) => {
      if (!data.sector) data.sector = "Unknown sector";
      var tooltip = (
        <Toolitip id="tooltip"><strong>Company sector</strong><br />The business sector or corporate sector that this company operates in the economy</Toolitip>
      );
      if (data.sector === "Sector") {
        return (<td className="align-center add-borders"><b>{data.sector }</b> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right">{data.sector}</td>);
        }
      }
      return (<td>{data.sector}</td>);
    })
  }

  renderStocksDescription() {
    return this.props.stockData.map((data, i, stockData) => {
      if (!data.short_description) data.short_description = "No description available.";
      var tooltip = (
        <Toolitip id="tooltip"><strong>Company activities</strong><br />The main activities that this company engages in</Toolitip>
      );

      if (data.short_description === "Summary") {
        return (<td className="align-center add-borders"><b>{data.short_description}</b> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right">{data.short_description}</td>);
        }
      }
      return (<td>{data.short_description}</td>);
    })
  }

  renderStocksUrl() {
    return this.props.stockData.map((data, i, stockData) => {
      if (!data.url) {
        return (<td>No website URL available</td>);
      }
      if (data.url === "Company Website") {
        return (<td className="align-center add-borders"><b>{data.url}</b></td>);
      }
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right"><a href={data.url}>{data.url}</a></td>);
        }
      }
      return (<td><a href={data.url}>{data.url}</a></td>);
    })
  }

  renderStocksPhone() {
    return this.props.stockData.map((data, i, stockData) => {
      if (!data.phone) data.phone = "No phone no. available."
      if (data.phone === "Phone no.") {
        return (<td className="align-center add-borders"><b>{data.phone}</b></td>);
      }
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right">{data.phone}</td>);
        }
      }
      return (<td>{data.phone}</td>);
    })
  }

  renderStocksClose() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Close</strong><br /><div align="left">This is the last trading price recorded when the market closed on the day</div></Toolitip>);

      if (data.yesterdayClose) {
          return (<td className="align-center add-borders"><h2><b>{data.yesterdayClose + " "}</b><OverlayTrigger placement="top" overlay={tooltip}><font size="2"><Glyphicon glyph="info-sign" /></font></OverlayTrigger></h2></td>);
      }

      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;

      var currClose = companyReturns[NUMDAYS].Close;
      var prevClose = companyReturns[NUMDAYS-1].Close;
      var positiveSignDay = (companyReturns[NUMDAYS].Close-companyReturns[NUMDAYS-1].Close) >= 0 ? "+" : "";

      // const tooltip_close = (
      //     <Toolitip id="tooltip"><strong>$Close, Change in Price, % Change in price </strong><br /><div align="left">Close: The close is the last trading price recorded when the market closed on the day<br />Change: the dollar value change in the stock price from the previous day's closing price<br />% Change: The percentage change from yesterday's closing price</div></Toolitip>
      //     //<font size="2"><OverlayTrigger placement="top" overlay={tooltip_ticker}><Glyphicon glyph="info-sign" /></OverlayTrigger></font>
      // );
      var tooltip_change = (<Toolitip id="tooltip"><strong>Change in price</strong><br /><div align="left">The dollar value change in the stock price from the previous day's closing price</div></Toolitip>);
      var tooltip_pchange = (<Toolitip id="tooltip"><strong>Percentage change in price </strong><br /><div align="left">The change in the stock price calculated as a percentage of the previous day's closing price</div></Toolitip>);

        if (stockData.length === 3) {
        if (i === 0) {
          return (
            <td className="align-right"><h2><b>
              <span>${parseFloat(currClose).toFixed(2)}</span>
              <OverlayTrigger placement="top" overlay={tooltip_change}><span className={positiveSignDay === "+" ? "stock-positive" : "stock-negative"}>{" " + positiveSignDay}
                {parseFloat(currClose-prevClose).toFixed(2) + " "}</span></OverlayTrigger>
              <OverlayTrigger placement="top" overlay={tooltip_pchange}><span className={positiveSignDay === "+" ? "stock-positive" : "stock-negative"}>
                ({positiveSignDay}{parseFloat((currClose-prevClose)/prevClose*100).toFixed(2)}%)</span></OverlayTrigger>
            </b></h2></td>
          );
        }
      }
      return (
        <td><h2><b>
          <span>${parseFloat(currClose).toFixed(2)}</span>
          <OverlayTrigger placement="top" overlay={tooltip_change}><span className={positiveSignDay === "+" ? "stock-positive" : "stock-negative"}>{" " + positiveSignDay}
              {parseFloat(currClose-prevClose).toFixed(2) + " "}</span></OverlayTrigger>
          <OverlayTrigger placement="top" overlay={tooltip_pchange}><span className={positiveSignDay === "+" ? "stock-positive" : "stock-negative"}>
            ({positiveSignDay}{parseFloat((currClose-prevClose)/prevClose*100).toFixed(2)}%)</span></OverlayTrigger>
        </b></h2></td>
      );
    });
  }

  renderPreviousClose() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Previous close</strong><br /><div align="left">A security's closing price on the preceding day of trading</div></Toolitip>);
      if (data.prevClose) {
        return (<td className="small-col align-center">{data.prevClose + " "} <br /> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }

      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var prevClose = companyReturns[NUMDAYS-1].Close;
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="equal-col align-right"><b>${parseFloat(prevClose).toFixed(2)}</b></td>);
        }
      }
      return (<td><b>${parseFloat(prevClose).toFixed(2)}</b></td>)
    })
  }

  renderMonthlyChange() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Monthly change</strong><br /><div align="left">Difference in price between the last closing price and the closing price a month ago</div></Toolitip>);
      if (data.monthlyChange) {
        return (<td className="align-center">{ data.monthlyChange + " " }<br />  <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var monthBefore = Math.max(NUMDAYS-30, 0);

      var currClose = companyReturns[NUMDAYS].Close;
      var positiveSignMonth = (companyReturns[NUMDAYS].Close-companyReturns[monthBefore].Close) >= 0 ? "+" : "";
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className={positiveSignMonth === "+" ? "stock-positive align-right" : "stock-negative align-right"}><b>${parseFloat(currClose-companyReturns[monthBefore].Close).toFixed(2)}{' '}
          ({positiveSignMonth}{parseFloat((currClose-companyReturns[monthBefore].Close)/companyReturns[monthBefore].Close*100).toFixed(2)}%)</b></td>);
        }
      }
      return (<td className={positiveSignMonth === "+" ? "stock-positive" : "stock-negative"}><b>{parseFloat(currClose-companyReturns[monthBefore].Close).toFixed(2)}{' '}
      ({positiveSignMonth}{parseFloat((currClose-companyReturns[monthBefore].Close)/companyReturns[monthBefore].Close*100).toFixed(2)}%)</b></td>)
    })
  }

  renderMonthlyHigh() {
    return this.props.stockData.map((data, i, stockData) => {
        var tooltip = (
          <Toolitip id="tooltip"><strong>Monthly high</strong><br /><div align="left">The highest intra-day price during the preceding month</div></Toolitip>);
        if (data.monthlyHigh) {
        return (<td className="align-center">{ data.monthlyHigh + " " } <br />  <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var monthBefore = Math.max(NUMDAYS-30, 0);
      var highestCloseMonth = parseFloat(companyReturns[monthBefore].Close);

      for (var j = monthBefore; j < companyReturns.length; j++) {
        var compareClose = parseFloat(companyReturns[j].Close);
        // console.log("Curr: " + compareClose + " | high: " + highestCloseAnnual + " | low: " + lowestCloseAnnual + " | typeof(high): " + typeof(highestCloseAnnual));
        if (compareClose > highestCloseMonth) highestCloseMonth = compareClose;
      }

      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right"><b>${parseFloat(highestCloseMonth).toFixed(2)}</b></td>);
        }
      }
      return (<td><b>${parseFloat(highestCloseMonth).toFixed(2)}</b></td>)
    })
  }

  renderMonthlyLow() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Monthly low</strong><br /><div align="left">The lowest intra-day price during the preceding month</div></Toolitip>);
      if (data.monthlyLow) {
        return (<td className="align-center">{ data.monthlyLow + " " }<br /> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger></td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var monthBefore = Math.max(NUMDAYS-30, 0);
      var lowestCloseMonth = parseFloat(companyReturns[monthBefore].Close);

      for (var j = monthBefore; j < companyReturns.length; j++) {
        var compareClose = parseFloat(companyReturns[j].Close);
        // console.log("Curr: " + compareClose + " | high: " + highestCloseAnnual + " | low: " + lowestCloseAnnual + " | typeof(high): " + typeof(highestCloseAnnual));
        if (compareClose < lowestCloseMonth) lowestCloseMonth = compareClose;
      }
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right"><b>${parseFloat(lowestCloseMonth).toFixed(2)}</b></td>);
        }
      }
      return (<td><b>${parseFloat(lowestCloseMonth).toFixed(2)}</b></td>)
    })
  }

  renderYearlyChange() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Annual change</strong><br /><div align="left">Difference in price between the last closing price and the closing price a year ago</div></Toolitip>);
      if (data.annualChange) {
        return (<td className="align-center">{ data.annualChange + " " } <br /> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger> </td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var yearBefore = Math.max(NUMDAYS-365, 0);

      var currClose = companyReturns[NUMDAYS].Close;
      var positiveSignAnnual = (companyReturns[NUMDAYS].Close-companyReturns[yearBefore].Close) >= 0 ? "+" : "";
      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className={positiveSignAnnual === "+" ? "stock-positive align-right" : "stock-negative align-right"}><b>{parseFloat(currClose-companyReturns[yearBefore].Close).toFixed(2)}{' '}
          ({positiveSignAnnual}{parseFloat((currClose-companyReturns[yearBefore].Close)/companyReturns[yearBefore].Close*100).toFixed(2)}%)</b></td>);
        }
      }
      return (<td className={positiveSignAnnual === "+" ? "stock-positive" : "stock-negative"}><b>{parseFloat(currClose-companyReturns[yearBefore].Close).toFixed(2)}{' '}
      ({positiveSignAnnual}{parseFloat((currClose-companyReturns[yearBefore].Close)/companyReturns[yearBefore].Close*100).toFixed(2)}%)</b></td>);

    })
  }

  renderYearlyHigh() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Yearly high</strong><br /><div align="left">The highest intra-day price during the preceding 52 weeks</div></Toolitip>);
      if (data.annualHigh) {
        return (<td className="align-center">{ data.annualHigh + " " } <br /> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger> </td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var yearBefore = Math.max(NUMDAYS-365, 0);
      var highestCloseYear = parseFloat(companyReturns[yearBefore].Close);

      for (var j = yearBefore; j < companyReturns.length; j++) {
        var compareClose = parseFloat(companyReturns[j].Close);
        // console.log("Curr: " + compareClose + " | high: " + highestCloseAnnual + " | low: " + lowestCloseAnnual + " | typeof(high): " + typeof(highestCloseAnnual));
        if (compareClose > highestCloseYear) highestCloseYear = compareClose;
      }

      if (stockData.length === 3) {
        if (i === 0) {
          return (<td className="align-right"><b>${parseFloat(highestCloseYear).toFixed(2)}</b></td>);
        }
      }
      return (<td><b>${parseFloat(highestCloseYear).toFixed(2)}</b></td>);
    })
  }

  renderYearlyLow() {
    return this.props.stockData.map((data, i, stockData) => {
      var tooltip = (
        <Toolitip id="tooltip"><strong>Yearly low</strong><br /><div align="left">The lowest intra-day price during the preceding 52 weeks</div></Toolitip>);
      if (data.annualLow) {
        return (<td className="align-center">{ data.annualLow + " " } <br /> <OverlayTrigger placement="top" overlay={tooltip}><Glyphicon glyph="info-sign" /></OverlayTrigger> </td>);
      }
      var companyReturns = data.stock_data;
      var NUMDAYS = companyReturns.length-1;
      var yearBefore = Math.max(NUMDAYS-365, 0);
      var lowestCloseYear = parseFloat(companyReturns[yearBefore].Close);

      for (var j = yearBefore; j < companyReturns.length; j++) {
        var compareClose = parseFloat(companyReturns[j].Close);
        // console.log("Curr: " + compareClose + " | high: " + highestCloseAnnual + " | low: " + lowestCloseAnnual + " | typeof(high): " + typeof(highestCloseAnnual));
        if (compareClose < lowestCloseYear) lowestCloseYear = compareClose;
      }
      if (stockData.length === 3) {
        if (i === 0) {
          console.log("This should work");
          return (<td className="align-right"><b>${parseFloat(lowestCloseYear).toFixed(2)}</b></td>);
        }
      }
      return (<td><b>${parseFloat(lowestCloseYear).toFixed(2)}</b></td>);
    })
  }


  //get some info about the company
  getCompanySummary(Name){
  	console.log("the stock name to get summary from is"+ " "+Name);
  	var resultString;
  		//invoke the server method
  	if (Meteor.isClient && Name){
  	    Meteor.call("getSummary", Name, function(error, results) {
  	    	resultString = results.content.toString();
  	    	resultString = /\"extract\"\:\"(.*)\"\}{4}/.exec(resultString);
  	    	console.log(resultString[1]);
  	    	return resultString[1];
  	    });

  	}
  }

	//renders a whole bunch of stats for the user
	render() {

    // While we only have functionality for 1 stock

    var data = this.props.stockData;
    console.log("PROS.STOCKDATA: ");
    console.log(data);
    //rendering news page here
    //value consponds to data code which will be used as a switch function
		if(data[0].code === "Home") {
  		return (
  			<div className="tile">
          <Item optionChange={this.props.onChange} news={"Tutorial"} imagef={"http://keravnoslaw.com/images/banking.jpg"} value={"tutorial"}/>
  				<Item optionChange={this.props.onChange} news={"Consumer Staples"} imagef={"http://www.etftrends.com/wp-content/uploads/2012/10/consumer-staples-etfs.png"} value={"consumer2"}/>
  				<Item optionChange={this.props.onChange} news={"Energy"} imagef={"https://www.dentons.com/-/media/images/website/background-images/industry-sectors/energy/energy-2.jpg  "} value={"energy"}/>
  				<Item optionChange={this.props.onChange} news={"Financials"} imagef={"http://static.memrise.com/uploads/course_photos/3146044000150629230223.jpg"} value={"financial"}/>
          <Item optionChange={this.props.onChange} news={"Industrials"} imagef={"http://relaypowersystems.com/wp-content/uploads/2011/10/refinery.jpg"} value={"industrials"}/>
          <Item optionChange={this.props.onChange} news={"Information Technology"} imagef={"https://i.ytimg.com/vi/GyfPJ1i1Y5Y/maxresdefault.jpg "} value={"it"}/>
          <Item optionChange={this.props.onChange} news={"Materials"} imagef={"http://cambabest.co.uk/wp-content/uploads/2015/02/Building-banner1.jpg"} value={"materials"}/>
          <Item optionChange={this.props.onChange} news={"Utilities"} imagef={"http://allentownboronj.com/vertical/Sites/%7B7748EEEB-2391-4653-8B6A-4A64C85A6D79%7D/uploads/8329283_orig.jpg"} value={"util"}/>

        </div>
  			);
		}else if (data[0].code === "hot"){
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "consumer1"){
      //render consumer1 tile
      //make an all in one rendering function for shares
      console.log(this.renderCat(data[0].code));
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "consumer2"){
      //render consumer2 tiles
      return(this.renderCat(data[0].code));
    }else if (data[0].code === "tutorial"){
      //render consumer2 tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "energy"){
      //render energy tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "financial"){
      //render financial tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "health"){
      //render health tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "industrials"){
      //render industrials tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "it"){
      //render it tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "materials"){
      //render materials tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "metalmine"){
      //render metals and mining tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "resource"){
      //render resource tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "telecom"){
      //render telecommunication tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "util"){
      //render utilities tiles
      return(this.renderCat(data[0].code));

    }else if (data[0].code === "bank"){
      //render bank tiles
      return(this.renderCat(data[0].code));
    }else {
      // While graph only works with one company
      if (data[0].code === "dontshowthisever") {
        var news = data[1].companyNews;
      	// var companySum = this.getCompanySummary(data.name);
        this.parseDataIntoGraph(data[1].stock_data, news, data[1].announcements);
      } else {
        var news = data[0].companyNews;
      	// var companySum = this.getCompanySummary(data.name);
        this.parseDataIntoGraph(data[0].stock_data, news, data[0].announcements);
      }
      // const tooltip_statistics = (
      //     <Toolitip id="tooltip"><strong>Statistics</strong><br /><strong>Previous close: </strong>A security's closing price on the preceding day of trading<br /><br />
      //       <strong>Monthly/Annual Change: </strong> Difference in price between the last closing price and the closing price a month/year ago.<br /><br />
      //       <strong>Monthly/Annual High/Low: </strong> A 1-month/52-week high/low is the highest and lowest price that a stock has traded at during the previous year.<br /><br />
      //
      //     </Toolitip>
      //     //<font size="2"><OverlayTrigger placement="top" overlay={tooltip_ticker}><Glyphicon glyph="info-sign" /></OverlayTrigger></font>
      // );
      var columnSpan = data.length+1;
      if (data.length === 3) {
        console.log("Got 2 stocks");
      } else if (data.length === 2) {
        console.log("Got 1 stock");
      }
			return (
				<div className="tile">
          <Table className="borderless">
            <tbody>
              <tr>
              { this.renderStocksName() }
              </tr>
              <tr>
              { this.renderStocksSector() }
              </tr>
              <tr>
              { this.renderStocksDescription() }
              </tr>
              <tr>
              { this.renderStocksUrl() }
              </tr>
              <tr>
              { this.renderStocksPhone() }
              </tr>
              <tr>
              { this.renderStocksClose() }
              </tr>
            </tbody>
          </Table>
          <Table bordered hover>
            <thead>
              <tr>
                <th colSpan={columnSpan}>Statistics</th>
                {/*<th colSpan={columnSpan}>Statistics<font size="2"><OverlayTrigger placement="top" overlay={tooltip_statistics}><Glyphicon glyph="info-sign" /></OverlayTrigger></font></th>*/}
              </tr>
            </thead>
            <tbody>
              <tr>
                { this.renderPreviousClose() }
              </tr>
              <tr>
                { this.renderMonthlyChange() }
              </tr>
              <tr>
                { this.renderMonthlyHigh() }
              </tr>
              <tr>
                { this.renderMonthlyLow() }
              </tr>
              <tr>
                { this.renderYearlyChange() }
              </tr>
              <tr>
                { this.renderYearlyHigh() }
              </tr>
              <tr>
                { this.renderYearlyLow() }
              </tr>
            </tbody>
          </Table>
          {  }
				</div>

				);
		}
	}
}

Tile.propTypes = {
  // This component gets the return figure to display through a React prop.
  // We can use propTypes to indicate it is required
  stockData: PropTypes.array.isRequired,
};
