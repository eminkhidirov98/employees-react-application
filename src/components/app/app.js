import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddform from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Alex', salary: 600, increase: false, id: 1 },
        { name: 'Bob', salary: 700, increase: true, id: 2 },
        { name: 'Alice', salary: 8030, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: Date.now(),
    };

    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList data={this.state.data} onDelete={this.deleteItem} />
        <EmployersAddform onAdd={this.addItem} />{' '}
      </div>
    );
  }
}

export default App;
