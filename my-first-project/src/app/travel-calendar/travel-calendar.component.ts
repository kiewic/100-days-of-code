import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

interface CityData {
  "Dryness_Per_Month": Record<string, number>;
  "Average_Temperatures": Record<string, number>;
}

@Component({
  selector: 'app-travel-calendar',
  templateUrl: './travel-calendar.component.html',
  styleUrls: ['./travel-calendar.component.css']
})
export class TravelCalendarComponent implements AfterViewInit {
  @ViewChild('chart', { static: true }) chartElement: ElementRef;

  private data: Record<string, CityData> = {
    "Kuala Lumpur": {
      "Dryness_Per_Month": {
        "January": 2,
        "February": 2,
        "March": 2,
        "April": 2,
        "May": 2,
        "June": 3,
        "July": 3,
        "August": 2,
        "September": 2,
        "October": 1,
        "November": 1,
        "December": 1
      },
      "Average_Temperatures": {
        "January": 27,
        "February": 28,
        "March": 28,
        "April": 28,
        "May": 28,
        "June": 27,
        "July": 27,
        "August": 27,
        "September": 27,
        "October": 27,
        "November": 27,
        "December": 27
      }
    },
    "Hanoi": {
      "Dryness_Per_Month": {
        "January": 4,
        "February": 4,
        "March": 3,
        "April": 3,
        "May": 2,
        "June": 1,
        "July": 1,
        "August": 1,
        "September": 2,
        "October": 4,
        "November": 5,
        "December": 5
      },
      "Average_Temperatures": {
        "January": 17,
        "February": 18,
        "March": 20,
        "April": 24,
        "May": 28,
        "June": 30,
        "July": 30,
        "August": 29,
        "September": 28,
        "October": 25,
        "November": 21,
        "December": 18
      }
    },
    "Jakarta": {
      "Dryness_Per_Month": {
        "January": 1,
        "February": 2,
        "March": 2,
        "April": 2,
        "May": 3,
        "June": 4,
        "July": 5,
        "August": 5,
        "September": 5,
        "October": 4,
        "November": 2,
        "December": 1
      },
      "Average_Temperatures": {
        "January": 27,
        "February": 27,
        "March": 27,
        "April": 28,
        "May": 28,
        "June": 27,
        "July": 27,
        "August": 27,
        "September": 28,
        "October": 28,
        "November": 28,
        "December": 27
      }
    },
    "Singapore": {
      "Dryness_Per_Month": {
        "January": 2,
        "February": 3,
        "March": 4,
        "April": 3,
        "May": 2,
        "June": 3,
        "July": 3,
        "August": 3,
        "September": 2,
        "October": 2,
        "November": 2,
        "December": 2
      },
      "Average_Temperatures": {
        "January": 27,
        "February": 27,
        "March": 28,
        "April": 28,
        "May": 28,
        "June": 28,
        "July": 28,
        "August": 28,
        "September": 28,
        "October": 28,
        "November": 27,
        "December": 27
      }
    },
    "Taipei": {
      "Dryness_Per_Month": {
        "January": 3,
        "February": 3,
        "March": 2,
        "April": 2,
        "May": 2,
        "June": 2,
        "July": 3,
        "August": 3,
        "September": 2,
        "October": 4,
        "November": 5,
        "December": 4
      },
      "Average_Temperatures": {
        "January": 16,
        "February": 16,
        "March": 18,
        "April": 22,
        "May": 25,
        "June": 27,
        "July": 29,
        "August": 29,
        "September": 27,
        "October": 24,
        "November": 21,
        "December": 17
      }
    },
    "Shenzhen": {
      "Dryness_Per_Month": {
        "January": 4,
        "February": 3,
        "March": 2,
        "April": 2,
        "May": 2,
        "June": 1,
        "July": 2,
        "August": 2,
        "September": 2,
        "October": 3,
        "November": 4,
        "December": 4
      },
      "Average_Temperatures": {
        "January": 15,
        "February": 16,
        "March": 18,
        "April": 22,
        "May": 25,
        "June": 28,
        "July": 29,
        "August": 29,
        "September": 28,
        "October": 25,
        "November": 21,
        "December": 17
      }
    },
    "Shanghai": {
      "Dryness_Per_Month": {
        "January": 4,
        "February": 4,
        "March": 3,
        "April": 3,
        "May": 3,
        "June": 2,
        "July": 2,
        "August": 3,
        "September": 3,
        "October": 4,
        "November": 4,
        "December": 4
      },
      "Average_Temperatures": {
        "January": 5,
        "February": 7,
        "March": 10,
        "April": 16,
        "May": 21,
        "June": 25,
        "July": 29,
        "August": 29,
        "September": 25,
        "October": 20,
        "November": 14,
        "December": 8
      }
    },
    "Seoul": {
      "Dryness_Per_Month": {
        "January": 5,
        "February": 5,
        "March": 4,
        "April": 4,
        "May": 3,
        "June": 2,
        "July": 1,
        "August": 1,
        "September": 2,
        "October": 4,
        "November": 5,
        "December": 5
      },
      "Average_Temperatures": {
        "January": -2,
        "February": 0,
        "March": 5,
        "April": 12,
        "May": 17,
        "June": 22,
        "July": 25,
        "August": 26,
        "September": 21,
        "October": 15,
        "November": 8,
        "December": 2
      }
    }
  };

  private margin = { top: 20, right: 20, bottom: 30, left: 100 };
  private months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  private padding = 4; // Padding between city rows

  constructor() { }

  ngAfterViewInit(): void {
    this.createHeatmap();
  }

  private createHeatmap(): void {
    const cities = Object.keys(this.data);

    const svgHeight = 400 - this.margin.top - this.margin.bottom;
    const svgWidth = this.chartElement.nativeElement.getBoundingClientRect().width - this.margin.left - this.margin.right;

    // Append the svg object to the chart container
    const svg = d3.select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    const x = d3.scaleBand()
      .range([0, svgWidth])
      .domain(this.months)
      .padding(0.01);

    const y = d3.scaleBand()
      .range([0, svgHeight])
      .domain(cities)
      .padding(0.01);

    // Append axes
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${svgHeight})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(y));

    // Define color scales
    const drynessScale = d3.scaleSequential(d3.interpolateBlues)
      .domain([1, 5]);

    const temperatureScale = d3.scaleSequential(d3.interpolateReds)
      .domain([0, 30]); // Adjust the domain based on your temperature data

    // Create heatmap rectangles
    cities.forEach((city) => {
      const drynessData = this.data[city].Dryness_Per_Month;
      const temperatureData = this.data[city].Average_Temperatures;

      this.months.forEach(month => {
        const xPos = x(month);
        const yPos = y(city) + (this.padding / 2); // Add padding between rows
        const rectWidth = x.bandwidth();
        const rectHeight = (y.bandwidth() - this.padding) / 2; // Adjust height to include padding

        // Dryness rectangle
        svg.append('rect')
          .attr('x', xPos)
          .attr('y', yPos)
          .attr('width', rectWidth)
          .attr('height', rectHeight)
          .style('fill', drynessScale(drynessData[month]));

        // Temperature rectangle
        svg.append('rect')
          .attr('x', xPos)
          .attr('y', yPos + rectHeight) // Position below the dryness rectangle
          .attr('width', rectWidth)
          .attr('height', rectHeight)
          .style('fill', temperatureScale(temperatureData[month]));
      });
    });

    // // Add city labels
    // svg.selectAll(".city-label")
    //   .data(cities)
    //   .enter()
    //   .append("text")
    //   .attr("class", "city-label")
    //   .attr("x", -10)
    //   .attr("y", d => y(d)! + y.bandwidth() / 2)
    //   .attr("dy", ".35em")
    //   .attr("text-anchor", "end")
    //   .text(d => d.replace('_', ' '));
  }
}