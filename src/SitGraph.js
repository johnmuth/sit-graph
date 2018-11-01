import React, {Component} from 'react';
import {ReactCytoscape} from 'react-cytoscape';
import {Grid, Row, Col} from "react-bootstrap";
import './style.css'


class SitGraph extends Component {

  getElements() {
    return {
      nodes: [
        {data: {id: 'a', label:'human'}},
        {data: {id: 'b', label:'cat'}},
        {data: {id: 'c', label:'mouse'}}
      ],
      edges: [
        {data: {id: 'ab', source: 'a', target: 'b', label:'feeds'}},
        {data: {id: 'bc', source: 'b', target: 'c', label:'chases'}}
      ]
    };
  }

  getStyle() {
    return [
      {
        selector: 'edge',
        style: {
          'content': 'data(label)',
          'curve-style': 'bezier',
          'line-color': '#9dbaea',
          'target-arrow-color': '#9dbaea',
          'target-arrow-shape': 'triangle',
          'width': 2
        }
      },
      {
        selector: 'node',
        style: {
          'content': 'data(label)'
        }
      }
    ]
  }

  render() {

    return (
      <Grid fluid={true}>
        <Row>
          <Col>
            <ReactCytoscape containerID="cy"
                            elements={this.getElements()}
                            style={this.getStyle()}
                            cyRef={(cy) => {
                              this.cy = cy;
                              console.log('This is cy', this.cy)
                            }}
                            cytoscapeOptions={{wheelSensitivity: 0.1}}
                            layout={{name: 'dagre'}}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SitGraph;