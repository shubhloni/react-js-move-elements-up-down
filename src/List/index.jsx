import './List.css';
import ListItem from './ListItem';

const List = ({ selectedItem, data, onListItemClick }) => {
  return (
    <div className="listContainer">
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          index={index}
          id={item.id}
          data={item.data}
          selected={selectedItem?.id === item.id}
          onListItemClick={onListItemClick}
        />
      ))}
    </div>
  );
};

export default List;
