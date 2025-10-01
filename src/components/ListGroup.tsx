// import { MouseEvent } from "react";
import { useState, type MouseEvent } from "react";
function ListGroup() {
  let items = [
    'item one',
    'item Two',
    'item Three',
    'item Four',
    'item Five',
  ];
  const handleClick = (event : MouseEvent) => console.log(event )
  const [selectedIndex , setSelectedIndex] = useState(-1);

  // let activeIndex= 0;
// list-group-item active
  return (
    <ul className="list-group">
      {items.length === 0 && <p>Items Not Found</p>}
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={selectedIndex == index ? 'list-group-item active': 'list-group-item'}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
