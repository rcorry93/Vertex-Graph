import { GraphModel } from 'src/app/models/graph';
import { Node, Edge } from '@swimlane/ngx-graph';

export const mockCorrectJson = `{
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
}`;

export const mockIncorrectJson = `Incorrect Json`;

export const mockEdgesJson = `{
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
}`;

export const mockVerticesJson = `{
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
      "label": "Alarm 1",
      "type": "alarm",
      "color": "#0034c2"
    }
  ]
}`;

export const mockEdgeArrayObject: Edge[] = [
  {
    id: 'e1',
    label: 'edge n1-n2',
    data: { type: 'link', customColor: '#06c200' },
    source: 'n1',
    target: 'n2',
  },
];

export const mockNodeArrayObject: Node[] = [
  {
    id: 'n1',
    label: 'Node 1',
    data: { type: 'node', customColor: '#06c200' },
  },
];

export const mockGraph = new GraphModel(
  mockEdgeArrayObject,
  mockNodeArrayObject
);
