export class EdgeModel {
  id: string;
  label: string;
  type: string;
  source_id: string;
  target_id: string;

  constructor(id: string, label: string, type: string, source: string, target: string) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.source_id = source;
    this.target_id = target;
  }
}
