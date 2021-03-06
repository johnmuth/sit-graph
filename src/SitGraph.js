import React, {Component} from 'react';
import {ReactCytoscape} from 'react-cytoscape';
import {Grid, Row, Col} from "react-bootstrap";
import './style.css'


class SitGraph extends Component {

  getElementsCrg() {
    return {
      "nodes": [
        {
          "data": {
            "id": "issuers",
            "label": "issuers"
          }
        },
        {
          "data": {
            "id": "prime-474969",
            "label": "German Pellets GmbH",
            "parent": "issuers"
          }
        },
        {
          "data": {
            "id": "prime-726883",
            "label": "Louisiana Public Facilities Authority",
            "parent": "issuers"
          }
        },
        {
          "data": {
            "id": "prime-4187",
            "label": "Locke Lord LLP"
          }
        },
        {
          "data": {
            "id": "prime-795241",
            "label": "Sanger Texas Industrial Development Corporation",
            "parent": "issuers"
          }
        },
        {
          "data": {
            "id": "prime-4187",
            "label": "Locke Lord LLP"
          }
        },
        {
          "data": {
            "id": "obligors",
            "label": "obligors"
          }
        },
        {
          "data": {
            "id": "prime-760383",
            "label": "Louisiana Pellets, Inc.",
            "parent": "obligors"
          }
        },
        {
          "data": {
            "id": "prime-795242",
            "label": "Texas Pellets Project",
            "parent": "obligors"
          }
        },
        {
          "data": {
            "id": "others",
            "label": "others"
          }
        },
        {
          "data": {
            "id": "prime-5792",
            "label": "Noerr LLP",
            "parent": "others"
          }
        },
        {
          "data": {
            "id": "prime-10572",
            "label": "Mintz Levin Cohn Ferris Glovsky & Popeo",
            "parent": "others"
          }
        }
      ],
      "edges": [
        {
          "data": {
            "id": "prime-4187prime-726883",
            "source": "prime-4187",
            "target": "prime-726883",
            "label": "is Lawyer to"
          }
        },
        {
          "data": {
            "id": "prime-4187prime-795241",
            "source": "prime-4187",
            "target": "prime-795241",
            "label": "is Lawyer to"
          }
        }
      ]
    }
  }

  getElementsCartoon() {
    return {
      nodes: [
        {data: {id: 'a', label:'human'}},
        {data: {id: 'b', label:'cat'}},
        {data: {id: 'c', label:'mouse'}},
        {data: {id: 'd', label:'elephant'}},
      ],
      edges: [
        {data: {id: 'ab', source: 'a', target: 'b', label:'feeds'}},
        {data: {id: 'bc', source: 'b', target: 'c', label:'chases'}},
        {data: {id: 'cd', source: 'c', target: 'd', label:'scares'}},
        {data: {id: 'ad', source: 'a', target: 'd', label:'rides'}}
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
          'content': 'data(label)',
          'text-halign': 'center',
          'text-valign': 'top'
        }
      }
    ]
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col>
            <ReactCytoscape containerID="cy"
                            elements={this.getElementsCartoon()}
                            style={this.getStyle()}
                            cyRef={(cy) => {
                              this.cy = cy;
                              console.log('This is cy', this.cy)
                            }}
                            cytoscapeOptions={{wheelSensitivity: 0.1}}
                            layout={{name: 'dagre', edgeSep:40, rankDir: 'LR', nodeDimensionsIncludeLabels: true}}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SitGraph;