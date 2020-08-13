import Model from '../model/model';

class BaseData {
  constructor() {
    this.state = [];
  }

  model(name) {
    const model = new Model(name);
    const item = this.state.find((item) => item.name === name);
    if (!item) {
      this.state.push(model);
      return model;
    }
  }
}

export default BaseData;
