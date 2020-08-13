export default class Model {
  constructor(name) {
    this.state = [];
    this.name = name;
  }

  get(id) {
    const item = this.state.find((item) => item.id === id);
    return item;
  }

  create(obj) {
    this.state.push(obj);
  }

  delete(id) {
    this.state = this.state.filter((item) => item.id !== id);
    return 'Completed';
  }

  update(id, { name, completed }) {
    const item = this.state.find((item) => item.id === id);
    if (item) {
      item.name = name;
      item.completed = completed;
    }
    return 'Completed';
  }

  getState() {
    return this.state;
  }
}
