import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

interface CityData {
  "Walkability_Per_Month": Record<string, number>;
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
    "Seoul": {
      "Walkability_Per_Month": {
        "January": 2,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 4,
        "June": 3,
        "July": 2,
        "August": 2,
        "September": 3,
        "October": 4,
        "November": 4,
        "December": 3
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
    },
    "Shanghai": {
      "Walkability_Per_Month": {
        "January": 3,
        "February": 3,
        "March": 3,
        "April": 4,
        "May": 4,
        "June": 2,
        "July": 2,
        "August": 3,
        "September": 3,
        "October": 4,
        "November": 4,
        "December": 3
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
    "Taipei": {
      "Walkability_Per_Month": {
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
      "Walkability_Per_Month": {
        "January": 4,
        "February": 4,
        "March": 3,
        "April": 3,
        "May": 3,
        "June": 2,
        "July": 2,
        "August": 2,
        "September": 2,
        "October": 4,
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
    "Hanoi": {
      "Walkability_Per_Month": {
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
    "Kuala_Lumpur": {
      "Walkability_Per_Month": {
        "January": 3,
        "February": 3,
        "March": 3,
        "April": 3,
        "May": 3,
        "June": 4,
        "July": 4,
        "August": 3,
        "September": 3,
        "October": 2,
        "November": 2,
        "December": 2
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
    "Singapore": {
      "Walkability_Per_Month": {
        "January": 3,
        "February": 4,
        "March": 4,
        "April": 3,
        "May": 3,
        "June": 3,
        "July": 3,
        "August": 3,
        "September": 3,
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
    "Jakarta": {
      "Walkability_Per_Month": {
        "January": 2,
        "February": 2,
        "March": 3,
        "April": 3,
        "May": 4,
        "June": 4,
        "July": 5,
        "August": 5,
        "September": 5,
        "October": 4,
        "November": 3,
        "December": 2
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
    }
  };

  private margin = { top: 20, right: 20, bottom: 30, left: 100 };
  private months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngAfterViewInit(): void {
    this.createAreaCharts();
  }

  private createAreaCharts(): void {
    const cities = Object.keys(this.data);

    const svgHeight = this.chartElement.nativeElement.getBoundingClientRect().height - this.margin.top - this.margin.bottom;
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
      .padding(0.1);

    const numberOfRows = cities.length;
    const rowHeight = (svgHeight / numberOfRows) * 0.7; // 90% of the available height for each row
    const rowMargin = (svgHeight / numberOfRows) * 0.3; // 10% margin between rows

    const yTemperature = d3.scaleLinear()
      .domain([0, 30]) // Adjust the domain based on your temperature data
      .range([rowHeight, 0]); // Adjust height based on rowHeight

    const yDryness = d3.scaleLinear()
      .domain([0, 5]) // Adjust the domain based on your dryness data
      .range([rowHeight, 0]); // Adjust height based on rowHeight

    // Define line and area generators
    const areaTemperature = d3.area<{ month: string, value: number }>()
      .x(d => x(d.month) + x.bandwidth() / 2) // Center area on the x axis
      .y0(d => yTemperature(0)) // Start area at y = 0
      .y1(d => yTemperature(d.value));

    const areaDryness = d3.area<{ month: string, value: number }>()
      .x(d => x(d.month) + x.bandwidth() / 2) // Center area on the x axis
      .y0(d => yDryness(0)) // Start area at y = 0
      .y1(d => yDryness(d.value));

    const lineTemperature = d3.line<{ month: string, value: number }>()
      .x(d => x(d.month) + x.bandwidth() / 2) // Center line on the x axis
      .y(d => yTemperature(d.value));

    const lineDryness = d3.line<{ month: string, value: number }>()
      .x(d => x(d.month) + x.bandwidth() / 2) // Center line on the x axis
      .y(d => yDryness(d.value));

    // Create grid lines
    const grid = svg.append('g')
      .attr('class', 'grid');

    // Vertical grid lines (for months)
    x.domain().forEach(month => {
      grid.append('line')
        .attr('x1', x(month) + x.bandwidth() / 2)
        .attr('x2', x(month) + x.bandwidth() / 2)
        .attr('y1', 0)
        .attr('y2', svgHeight)
        .attr('stroke', '#ccc')
        .attr('stroke-dasharray', '2,2');
    });

    // Horizontal grid lines (for cities)
    cities.forEach((city, i) => {
      const yOffset = i * (rowHeight + rowMargin);
      grid.append('line')
        .attr('x1', 0)
        .attr('x2', svgWidth)
        .attr('y1', yOffset)
        .attr('y2', yOffset)
        .attr('stroke', '#ccc')
        .attr('stroke-dasharray', '2,2');
    });

    // Create area charts for each city
    cities.forEach((city, i) => {
      const drynessData = Object.keys(this.data[city].Walkability_Per_Month).map(month => ({
        month,
        value: this.data[city].Walkability_Per_Month[month]
      }));

      const temperatureData = Object.keys(this.data[city].Average_Temperatures).map(month => ({
        month,
        value: this.data[city].Average_Temperatures[month]
      }));

      // Positioning for each city row
      const yOffset = (i * (rowHeight + rowMargin)) + rowMargin;

      // Draw temperature area
      svg.append('path')
        .data([temperatureData])
        .attr('class', 'area temperature')
        .attr('d', areaTemperature)
        .attr('transform', `translate(0, ${yOffset})`)
        .style('fill', 'red')
        .style('fill-opacity', 0.3) // Adjust transparency
        .style('stroke', 'none');

      // Draw dryness area
      svg.append('path')
        .data([drynessData])
        .attr('class', 'area dryness')
        .attr('d', areaDryness)
        .attr('transform', `translate(0, ${yOffset})`)
        .style('fill', 'blue')
        .style('fill-opacity', 0.3) // Adjust transparency
        .style('stroke', 'none');

      // Draw temperature line on top of the area
      svg.append('path')
        .data([temperatureData])
        .attr('class', 'line temperature')
        .attr('d', lineTemperature)
        .attr('transform', `translate(0, ${yOffset})`)
        .style('stroke', 'red')
        .style('fill', 'none');

      // Draw dryness line on top of the area
      svg.append('path')
        .data([drynessData])
        .attr('class', 'line dryness')
        .attr('d', lineDryness)
        .attr('transform', `translate(0, ${yOffset})`)
        .style('stroke', 'blue')
        .style('fill', 'none');

      // Add city labels
      svg.append('text')
        .attr('class', 'city-label')
        .attr('x', -10)
        .attr('y', yOffset + rowHeight / 2)
        .attr('dy', '.35em')
        .attr('text-anchor', 'end')
        .text(city);
    });

    // Add month axis at the bottom of the chart
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${svgHeight})`)
      .call(d3.axisBottom(x));

    // Draw bottom horizontal grid line
    grid.append('line')
      .attr('x1', 0)
      .attr('x2', svgWidth)
      .attr('y1', svgHeight)
      .attr('y2', svgHeight)
      .attr('stroke', '#ccc')
      .attr('stroke-dasharray', '2,2');
  }
}
