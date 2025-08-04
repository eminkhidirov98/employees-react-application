import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddform from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
  const data = [
    { name: 'Alex', salary: 600, increase: false, id: 1 },
    { name: 'Bob', salary: 700, increase: true, id: 2 },
    { name: 'Alice', salary: 8030, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployersAddform />
    </div>
  );
}

export default App;
