import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CytoscapeComponent from 'react-cytoscapejs';
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import traceData from './sample.json';
import edgeConnections from 'cytoscape-edge-connections';

function App() {
  Cytoscape.use(edgeConnections);
  const layout = { name: 'breadthfirst', directed: true };
  let nodes = traceData.elements.nodes ; 
  const edges = traceData.elements.edges ;
  
  edges.map( (item) =>{
    nodes.push( item );
  })
  const elements = nodes;

  return (
    <div className="App1">
      <CytoscapeComponent stylesheet={[
    {
      "selector": "node",
      "style": {
        "content": "data(id)",
        "text-opacity": 0.5,
        "text-valign": "center",
        "background-color": "#11479e", 
        "label": "data(value)"
      }
    },
    {
      "selector": "edge",
      "style": {
        "curve-style": "bezier",
        "width": 4,
        "target-arrow-shape": "triangle",
        "line-color": "data(color)",
        "target-arrow-color": "#9dbaea",
        "label": "data(label)"
      }


    }

  ]} directed={true} zoom={1} elements={elements} style={ {  height: '1200px' } } layout={layout}/>
    </div>
  );
}

export default App;
