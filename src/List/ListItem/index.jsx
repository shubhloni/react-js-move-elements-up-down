import React from 'react';
import './ListItem.css';

const ListItem = ({ index, id, data, selected, onListItemClick }) => {
  const onListItemClickHandler = (e) => {
    onListItemClick(index, id);
  };

  const classNames = selected ? 'listItem selected' : 'listItem';

  return (
    <div className={classNames} onClick={onListItemClickHandler}>
      {data}
    </div>
  );
};

export default React.memo(
  ListItem,
  (prevProps, nextProps) => prevProps.index === nextProps.index
);
