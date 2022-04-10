
# Vertex Graph Generator

This is an Angular project created to convert JSON files/text into graphs.

Graphs were created by using  [NGX-Graph](https://swimlane.github.io/ngx-graph/ "NGX-Graph's Homepage")



## Run Locally

Clone the project

```bash
  git clone https://github.com/rcorry93/Vertex-Graph.git
```

Go to the project directory

```bash
  cd vertex-graph/vertex-graph
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Json Format Example

```json
{
  "vertices": [
    {
      "id": "n1",
      "label": "Node 1",
      "type": "node",
      "color": "#06c200"
    },
    {
      "id": "n3",
      "label": "Node 3",
      "type": "node",
      "color": "#ff0800"
    },
    {
      "id": "n2",
      "label": "Node 2",
      "type": "node",
      "color": "#eaff00"
    },
    {
      "id": "a1",
      "label": "Node 4",
      "type": "node",
      "color": "#0034c2"
    }
  ],
  "edges": [
    {
      "id": "e1",
      "label": "edge n1-n2",
      "type": "link",
      "source_id": "n1",
      "target_id": "n2",
      "color": "#06c200"
    },
    {
      "id": "e2",
      "label": "edge n2-a1",
      "type": "link",
      "source_id": "n2",
      "target_id": "a1",
      "color": "#06c200"
    },
    {
      "id": "e3",
      "label": "edge n3-a1",
      "type": "link",
      "source_id": "n3",
      "target_id": "a1"
    }
  ]
}
```

