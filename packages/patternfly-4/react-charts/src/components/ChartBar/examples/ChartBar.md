---
title: 'Bar'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartAxis', 'ChartBar', 'ChartGroup', 'ChartLegend', 'ChartVoronoiContainer']
---

import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
import './chart-bar.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a bar chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/bar-chart)

## Simple bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domain={{y: [0,9]}}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={600}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Purple bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      themeColor={ChartThemeColor.purple}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color (ordered), horizontal bar chart with bottom-left aligned legend
This demonstrates zoom for both the x and y axis
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-bottom-left">
    <Chart
      allowZoom
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom-left"
      height={400}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 100, // Adjusted to accommodate tooltip
        top: 50
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11} horizontal>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Single bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domain={{y: [0,9]}}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={600}
    >
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
    </Chart>
  </div>
</div>
```

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>
- `ChartLegend` may be used as a standalone component, instead of using `legendData` and `legendPosition`
- Use `ChartGroup` to apply color scales and other properties to multiple components
- Themes are inherited, so a default theme may override `themeColor` for a child component
- The `theme` and `themeColor` props should be applied at the most top level component

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see <a href="https://formidable.com/open-source/victory/docs/victory-chart" target="_blank">VictoryChart</a>
 - For `ChartAxis` props, see <a href="https://formidable.com/open-source/victory/docs/victory-axis" target="_blank">VictoryAxis</a>
 - For `ChartBar` props, see <a href="https://formidable.com/open-source/victory/docs/victory-bar" target="_blank">VictoryBar</a>
 - For `ChartGroup` props, see <a href="https://formidable.com/open-source/victory/docs/victory-group" target="_blank">VictoryGroup</a>
 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartVoronoiContainer` props, see <a href="https://formidable.com/open-source/victory/docs/victory-voronoi-container" target="_blank">VictoryVoronoiContainer</a>
