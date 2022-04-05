export class EdgeModel {
  id: String;
  label: String;
  type: String;
  source_id: String;
  target_id: String;

  constructor(id: String, label: String, type: String, source: String, target: String) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.source_id = source;
    this.target_id = target;
  }
}
