import { useState, useCallback } from 'react';
import './App.css';
import List from './List';

const LIST_DATA = [
  { id: 'standard', data: 'standard' },
  { id: 'Javascript', data: 'Javascript' },
  { id: 'HTML', data: 'HTML' },
  { id: 'CSS', data: 'CSS' },
  { id: 'React', data: 'React' },
  { id: 'Redux', data: 'Redux' },
];

function App() {
  const [data, setData] = useState(LIST_DATA);
  const [selectedItem, setSelectedItem] = useState(null);

  const onListItemClickHandler = useCallback(
    (index, id) => {
      setSelectedItem({ index, id });
    },
    [selectedItem]
  );

  const onMoveUpClickHandler = () => {
    const newData = [...data];
    const movedItem = newData.splice(selectedItem?.index, 1)[0];
    newData.splice(selectedItem?.index - 1, 0, movedItem);

    setData(newData);
    setSelectedItem({ index: selectedItem?.index - 1, id: selectedItem?.id });
  };

  const onMoveDownClickHandler = () => {
    const newData = [...data];
    const movedItem = newData.splice(selectedItem?.index, 1)[0];
    newData.splice(selectedItem?.index + 1, 0, movedItem);

    setData(newData);
    setSelectedItem({ index: selectedItem?.index + 1, id: selectedItem?.id });
  };

  return (
    <div className="container">
      <List
        selectedItem={selectedItem}
        data={data}
        onListItemClick={onListItemClickHandler}
      />
      <div className="btnContainer">
        <button
          disabled={selectedItem?.index === 0}
          onClick={onMoveUpClickHandler}
        >
          Move Up
        </button>
        <button
          disabled={selectedItem?.index === LIST_DATA.length - 1}
          onClick={onMoveDownClickHandler}
        >
          Move Down
        </button>
      </div>
    </div>
  );
}

export default App;
