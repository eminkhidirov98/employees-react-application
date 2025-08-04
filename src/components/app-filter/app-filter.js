import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <bttton className="btn btn-light" type="button">
        Все сотрудники
      </bttton>
      <bttton className="btn btn-outline-light" type="button">
        На повышение
      </bttton>
      <bttton className="btn btn-outline-light" type="button">
        З/П больше 1000$
      </bttton>
    </div>
  );
};

export default AppFilter;
