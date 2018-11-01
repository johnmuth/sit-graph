import React, {Component} from 'react';
import {ReactCytoscape} from 'react-cytoscape';
import {Grid, Row, Col} from "react-bootstrap";
import './style.css'


class SitGraph extends Component {

  getElements() {
    return {
      nodes: [
        {data: {id: 'a'}},
        {data: {id: 'b'}}
      ],
      edges: [
        {data: {id: 'ab', source: 'a', target: 'b'}}
      ]
    };
  }

  getStyle() {
    return [
      {
        selector: 'edge',
        style: {
          'width': 4,
          'target-arrow-shape': 'triangle',
          'line-color': '#9dbaea',
          'target-arrow-color': '#9dbaea',
          'curve-style': 'bezier'
        }
      },
      {
        selector: 'node',
        style: {
          'content': 'data(id)'
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