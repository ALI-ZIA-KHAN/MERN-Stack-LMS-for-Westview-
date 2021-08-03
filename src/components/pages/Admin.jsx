import React, { Component } from "react";
import StudentData from "../StudentData";
import CourseData from "../CoursesData";
import {Link} from "react-router-dom";
import "../StudentPortal.css"
import Navbar from "../Navbar";
import $ from "jquery";
import "../Navbar.css";

/**
 *	Animated Graph Tutorial for Smashing Magazine
 *	July 2011
 *   
 * 	Author:	Derek Mack
 *			derekmack.com
 *			@derek_mack
 *
 *	Example 3 - Animated Bar Chart via jQuery
 */

// Wait for the DOM to load everything, just to be safe
$(document).ready(function() {
  // hide table if js enabled
  $('#data-table').addClass('js');

	// Create our graph from the data table and specify a container to put the graph in
	createGraph('#data-table', '.chart');
	
	// Here be graphs
	function createGraph(data, container) {
		// Declare some common variables and container elements	
		var bars = [];
		var figureContainer = $('<div id="figure"></div>');
		var graphContainer = $('<div class="graph"></div>');
		var barContainer = $('<div class="bars"></div>');
		var data = $(data);
		var container = $(container);
		var chartData;		
		var chartYMax;
		var columnGroups;
		
		// Timer variables
		var barTimer;
		var graphTimer;
		
		// Create table data object
		var tableData = {
			// Get numerical data from table cells
			chartData: function() {
				var chartData = [];
				data.find('tbody td').each(function() {
					chartData.push($(this).text());
				});
				return chartData;
			},
			// Get heading data from table caption
			chartHeading: function() {
				var chartHeading = data.find('caption').text();
				return chartHeading;
			},
			// Get legend data from table body
			chartLegend: function() {
				var chartLegend = [];
				// Find th elements in table body - that will tell us what items go in the main legend
				data.find('tbody th').each(function() {
					chartLegend.push($(this).text());
				});
				return chartLegend;
			},
			// Get highest value for y-axis scale
			chartYMax: function() {
				var chartData = this.chartData();
				// Round off the value
				var chartYMax = Math.ceil(Math.max.apply(Math, chartData) / 100) * 100;
				return chartYMax;
			},
			// Get y-axis data from table cells
			yLegend: function() {
				var chartYMax = this.chartYMax();
				var yLegend = [];
				// Number of divisions on the y-axis
				var yAxisMarkings = 5;						
				// Add required number of y-axis markings in order from 0 - max
				for (var i = 0; i < yAxisMarkings; i++) {
					yLegend.unshift(((chartYMax * i) / (yAxisMarkings - 1)));
				}
				return yLegend;
			},
			// Get x-axis data from table header
			xLegend: function() {
				var xLegend = [];
				// Find th elements in table header - that will tell us what items go in the x-axis legend
				data.find('thead th').each(function() {
					xLegend.push($(this).text());
				});
				return xLegend;
			},
			// Sort data into groups based on number of columns
			columnGroups: function() {
				var columnGroups = [];
				// Get number of columns from first row of table body
				var columns = data.find('tbody tr:eq(0) td').length;
				for (var i = 0; i < columns; i++) {
					columnGroups[i] = [];
					data.find('tbody tr').each(function() {
						columnGroups[i].push($(this).find('td').eq(i).text());
					});
				}
				return columnGroups;
			}
		}
		
		// Useful variables for accessing table data		
		chartData = tableData.chartData();		
		chartYMax = tableData.chartYMax();
		columnGroups = tableData.columnGroups();
		
		// Construct the graph
		
		// Loop through column groups, adding bars as we go
		$.each(columnGroups, function(i) {
			// Create bar group container
			var barGroup = $('<div class="bar-group"></div>');
			// Add bars inside each column
			for (var j = 0, k = columnGroups[i].length; j < k; j++) {
				// Create bar object to store properties (label, height, code etc.) and add it to array
				// Set the height later in displayGraph() to allow for left-to-right sequential display
				var barObj = {};
				barObj.label = this[j];
				barObj.height = Math.floor(barObj.label / chartYMax * 100) + '%';
				barObj.bar = $('<div class="bar fig' + j + '"><span>' + barObj.label + '%</span></div>')
					.appendTo(barGroup);
				bars.push(barObj);
			}
			// Add bar groups to graph
			barGroup.appendTo(barContainer);			
		});
		
		// Add heading to graph
		var chartHeading = tableData.chartHeading();
		var heading = $('<h4>' + chartHeading + '</h4>');
		heading.appendTo(figureContainer);
		
		// Add legend to graph
		var chartLegend	= tableData.chartLegend();
		var legendList	= $('<ul class="legend"></ul>');
		$.each(chartLegend, function(i) {			
			var listItem = $('<li><span class="icon fig' + i + '"></span>' + this + '</li>')
				.appendTo(legendList);
		});
		legendList.appendTo(figureContainer);
		
		// Add x-axis to graph
		var xLegend	= tableData.xLegend();		
		var xAxisList	= $('<ul class="x-axis"></ul>');
		$.each(xLegend, function(i) {			
			var listItem = $('<li><span>' + this + '</span></li>')
				.appendTo(xAxisList);
		});
		xAxisList.appendTo(graphContainer);
		
		// Add y-axis to graph	
		var yLegend	= tableData.yLegend();
		var yAxisList	= $('<ul class="y-axis"></ul>');
		$.each(yLegend, function(i) {			
			var listItem = $('<li><span>' + this + '%</span></li>')
				.appendTo(yAxisList);
		});
		yAxisList.appendTo(graphContainer);		
		
		// Add bars to graph
		barContainer.appendTo(graphContainer);		
		
		// Add graph to graph container		
		graphContainer.appendTo(figureContainer);
		
		// Add graph container to main container
		figureContainer.appendTo(container);
		
		// Set individual height of bars
		function displayGraph(bars, i) {		
			// Changed the way we loop because of issues with $.each not resetting properly
			if (i < bars.length) {
				// Animate height using jQuery animate() function
				$(bars[i].bar).animate({
					height: bars[i].height
				}, 800);
				// Wait the specified time then run the displayGraph() function again for the next bar
				barTimer = setTimeout(function() {
					i++;				
					displayGraph(bars, i);
				}, 100);
			}
		}
		
		// Reset graph settings and prepare for display
		function resetGraph() {
			// Stop all animations and set bar height to 0
			$.each(bars, function(i) {
				$(bars[i].bar).stop().css('height', 0);
			});
			
			// Clear timers
			clearTimeout(barTimer);
			clearTimeout(graphTimer);
			
			// Restart timer		
			graphTimer = setTimeout(function() {		
				displayGraph(bars, 0);
			}, 200);
		}
		
		// Helper functions
		
		// Call resetGraph() when button is clicked to start graph over
		$('#reset-graph-button').click(function() {
			resetGraph();
			return false;
		});
		
		// Finally, display graph via reset function
		resetGraph();
	}	
});






class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <div>
      <div className = "adminBg"></div>
      <Navbar />
      <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
      <div  >
        <button className = "btn"  onClick={this.toggleHidden.bind(this)}>View Courses</button>
        {!this.state.isHidden && <CourseData />}
        {!this.state.isHidden || <StudentData />}
        </div>

        <div class = "barGrapph">
        <div id="wrapper">
			<div class="chart">
				<h2>Daily Activities</h2>
				<table id="data-table" border="1" cellpadding="10" cellspacing="0" summary="skillset">
					<thead>
						<tr>
							<td>&nbsp;</td>
							<th scope="col">Courses Viewed</th>
							<th scope="col">Work Uploaded</th>
							<th scope="col">Quiz Attempted</th>
							<th scope="col">Games Played</th>
							<th scope="col">Other Activity</th>
						</tr>
					</thead>
					<tbody>
						<tr>		
							<td>90</td>
							<td>50</td>
							<td>80</td>
							<td>95</td>
              <td>80</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
</div>

<div id="wrappers">
	<div id="header">
		<p id="txt_title"> Website View Data</p>
		
	</div>

	<div id="q2_2010">
	<div id="q1_2010">
	<div id="q4_2009">
	<div id="q3_2009">
	<div id="q2_2009">
	<div id="q1_2005">
		<div id="labels">
			<ul>
				<li><span></span>No Of Click</li>
				<li><span></span>No Of Views</li>
				<li><span></span>Engagement</li>
				<li><span></span>Conversion</li>
				<li><span></span>Other</li>
			</ul>
		</div>
		
		<div id="percentage_wrapper">
			<div id="percentage">
				<ul>
					<li><p>60.14%</p><p>61.79%</p><p>63.90%</p><p>67.02%</p><p>68.28%</p><p>89.68%</p></li>
					<li><p>24.98%</p><p>24.56%</p><p>24.39%</p><p>23.28%</p><p>23.22%</p><p>6.83%</p></li>
					<li><p>7.14%</p><p>6.03%</p><p>4.27%</p><p>3.08%</p><p>2.35%</p><p>0%</p></li>
					<li><p>5.10%</p><p>4.91%</p><p>4.64%</p><p>4.35%</p><p>3.89%</p><p>2.36%</p></li>
					<li><p>2.66%</p><p>2.73%</p><p>2.52%</p><p>2.29%</p><p>2.27%</p><p>1.15%</p></li>
				</ul>
			</div>
		</div>
		<div id="slider">
			<div id="chart_holder">
				<div id="pie_chart">
					<ul>
						<li id="c1_r"><p><span class="pie_left"></span></p></li> 	
						<li id="c1_l"><p><span class="pie_right"></span></p></li>
						<li id="c2_r"><p><span class="pie_left"></span></p></li> 	
						<li id="c2_l"><p><span class="pie_right"></span></p></li>
						<li id="c3_r"><p><span class="pie_left"></span></p></li> 	
						<li id="c3_l"><p><span class="pie_right"></span></p></li>
						<li id="c4_r"><p><span class="pie_left"></span></p></li> 	
						<li id="c4_l"><p><span class="pie_right"></span></p></li>
						<li id="c5_r"><p><span class="pie_left"></span></p></li> 	
						<li id="c5_l"><p><span class="pie_right"></span></p></li>
					</ul>
				</div>
				<div id="pyr_chart">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="btn_panel">
			<ul>
				<li><a href="#q1_2005"><span>Q1</span><span>2005</span></a></li>
				<li><a href="#q2_2009"><span>Q2</span><span>2009</span></a></li>
				<li><a href="#q3_2009"><span>Q3</span><span>2009</span></a></li>
				<li><a href="#q4_2009"><span>Q4</span><span>2009</span></a></li>
				<li><a href="#q1_2010"><span>Q1</span><span>2010</span></a></li>
				<li><a href="#q2_2010"><span>Q2</span><span>2010</span></a></li>
			</ul>
		</div>
	</div> {/*q1_2005*/}
	</div> {/*q2_2009*/}
	</div> {/*q3_2009*/}
	</div> {/*q4_2009*/}
	</div> {/*q1_2010*/}
	</div> {/*q2_2010*/}
</div>
      </div>
    );
  }
}

export default Admin;