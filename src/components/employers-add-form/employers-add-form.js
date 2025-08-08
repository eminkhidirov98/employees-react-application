import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: 0,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, salary } = this.state;
    if (name.trim() === '' || !salary) return;

    this.props.onAdd(name, salary);
    this.setState({
      name: '',
      salary: 0,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить 1000$
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddform;
