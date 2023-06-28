<template>
  <div>
    
    <img ref="map" src="../assets/magasinPlan.png" style="position: absolute; top: 0; left: 0; width: 525px; height: 100%;" />
    <svg ref="svg" width="528" height="415"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'; 
import graphData from '@/assets/occupancy_graph.json';

export default {
  mounted() {
  const graph = graphData;
  graph.width = 100;
  graph.height = 100;
  const startNode = '20,0';
  const endNode = '99,99';
  const path = aStar(graph, startNode, endNode);


  const svg = d3.select(this.$refs.svg);
  const image = this.$refs.map;

  const imageWidth = this.$refs.map.width;
  const imageHeight = image.clientHeight;

    console.log(imageWidth, graph.width, imageHeight, graph.height)

  const scaleX = imageWidth / graph.width;
  const scaleY = imageHeight / graph.height;

  const lineData = path.map((node) => {
    const [x, y] = node.split(',');
    return { x: parseInt(x), y: parseInt(y) };
  });

console.log(scaleX, scaleY)

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

// Move the image to the back
group.lower();

console.log(line(lineData))

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
  svg {
    z-index: 1;
  }
</style>

