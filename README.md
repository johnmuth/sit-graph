# sit-graph

Interactive graph (edges and nodes), via React and Cytoscape

## Quick start

```bash
nvm use
npm install
npm start
```

### Make a graph from an intel

```
curl https://intelligence-store.mmgapi.net/v2/intelligence/prime-2730666 |jq '.companyRelationshipGroups' > ~/experiments/sit-graph/prime-2730666.crgs.json
node ./crgs2graph.js
```

...and then copy and paste into src/SitGraph.js

## TODO

- fetch crg from intel store on the fly
- Edit a graph
    - Add new node
    - Modify node: edit label
    - Modify edge: add/edit label
    - Modify edge: add/edit direction
    - Save graph to server side
