import React, { Component } from 'react';
import { ReactCytoscape } from 'react-cytoscape';
import { Grid, Row, Col, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import './style.css'



class SitGraph extends Component {

  getElements() {
    return {
      nodes: [
        { data: { id: 'a' } },
        { data: { id: 'b' } }
      ],
      edges: [
        { data: { id: 'ab', source: 'a', target: 'b' } }
      ],
      style:[
        {
          selector: 'edge',
          style: {
            'width': 4,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'curve-style': 'bezier'
          }
        }
      ]
    };
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col sm="8">
            <ReactCytoscape containerID="cy"
                            elements={this.getElements()}
                            cyRef={(cy) => { this.cyRef(cy) }}
                            cytoscapeOptions={{ wheelSensitivity: 0.1 }}
                            layout={{ name: 'dagre' }} />
          </Col>
          <Col sm="4">
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>CODE</ControlLabel>
              <FormControl componentClass="textarea" cols="100" rows="20" placeholder="textarea" inputRef={(ref) => this.text = ref} />
            </FormGroup>
            <ButtonToolbar>
              <Button bsSize="small" onClick={this.handleEval.bind(this)}>Eval</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    );
  }

  cyRef(cy) {
    this.cy = cy;
    cy.on('tap', 'node', function (evt) {
      var node = evt.target;
      console.log('tapped ' + node.id());
    });
  }

  handleEval() {
    const cy = this.cy;
    const str = this.text.value;
    eval(str);
  }
}

export default SitGraph;