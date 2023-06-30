<template>
  <div class="content">
    <div class="PathMap">
        <svg ref="svg" width="550" height="450">
          
          <image
            ref="map"
            xlink:href="../assets/magasinPlan.png"
            x="0"
            y="0"
            width="525"
            height="415"
            v-on:load="handleImageLoad"
          ></image>
          
        </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import graphData from '@/assets/occupancy_graph.json';
import {productStored} from '../stores/auth.store.js';
import startNodeImage from '@/assets/ici.png';



export default {
  name: 'Map',
  
  
 

  mounted() {

  
  var product = JSON.stringify(productStored().getProduct)
  product = JSON.parse(product)
  const coordinates = product.coordinates;

  const graph = graphData;
  graph.width = 100;
  graph.height = 100;
  const endNode = Math.round(coordinates[0])*10 + ',' + Math.round(coordinates[1])*10;
  const startNode = '99,99';
  console.log(endNode);


  
  const path = aStar(graph, startNode, endNode);


  const svg = d3.select(this.$refs.svg);
  // const image = this.$refs.map;

  const imageWidth = this.$refs.map.width.baseVal.value;
  const imageHeight = this.$refs.map.height.baseVal.value;


  const scaleX = imageWidth / graph.width;
  const scaleY = imageHeight / graph.height;

  const lineData = path.map((node) => {
    const [x, y] = node.split(',');
    return { x: parseInt(x), y: parseInt(y) };
  });




  const line = d3
    .line()
    .x((d) => d.x * scaleX)
    .y((d) => d.y * scaleY);

    const group = svg.append('g');

// Draw the path as a line overlay
group
  .append('path')
  .datum(lineData)
  .attr('d', line)
  .style('stroke', 'blue')
  .style('stroke-width', 2)
  .style('fill', 'none');

console.log(startNodeImage)

group
  .append('image')
  .attr('href', startNodeImage)
  .attr('width', 40)
  .attr('height', 40)
  .attr('x', lineData[0].x * scaleX -20)
  .attr('y', lineData[0].y * scaleY -40);

group
  .append('image') 
  .attr('href', product.image)
  .attr('width', 40)
  .attr('height', 40)
  .attr('x', lineData[lineData.length - 1].x * scaleX -20)
  .attr('y', lineData[lineData.length - 1].y * scaleY -20)

// Move the image to the back
group.selectAll('path').raise();
    group.select('image:first-child').raise();
    group.select('image:last-child').raise();

},
};

function calculateHeuristic(node, endNode) {
  const [x1, y1] = node.split(',');
  const [x2, y2] = endNode.split(',');
  const dx = parseInt(x2) - parseInt(x1);
  const dy = parseInt(y2) - parseInt(y1);
  return Math.sqrt(dx ** 2 + dy ** 2);
}

function aStar(graph, startNode, endNode) {
  const openList = [];
  const cameFrom = {};
  const gScores = {};

  openList.push(startNode);
  gScores[startNode] = 0;

  while (openList.length > 0) {
    let current = openList.shift();

    if (current === endNode) {
      break;
    }

    for (const neighbor of graph[current]) {
      const newGScore = gScores[current] + 1; // Assuming edge weight is 1

      if (!gScores[neighbor] || newGScore < gScores[neighbor]) {
        gScores[neighbor] = newGScore;
        const fScore = newGScore + calculateHeuristic(neighbor, endNode);
        const index = openList.findIndex((node) => node === neighbor);

        if (index === -1) {
          openList.push(neighbor);
        }

        cameFrom[neighbor] = current;
      }
    }

    openList.sort((a, b) => {
      const fScoreA = gScores[a] + calculateHeuristic(a, endNode);
      const fScoreB = gScores[b] + calculateHeuristic(b, endNode);
      return fScoreA - fScoreB;
    });
  }

  const path = [endNode];
  let current = endNode;

  while (current !== startNode) {
    current = cameFrom[current];
    path.unshift(current);
  }

  return path;
}

</script>

<style scoped>
  /* svg {
    z-index: 1;
  } */

  .content {
    display: flex;
    justify-content: center;
    margin:auto;
    /* align-items: center; */
    height: 100vh;
  }

  .PathMap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%; /* Adjust this value as needed */
    overflow: hidden;
  }

  .map-image,
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

