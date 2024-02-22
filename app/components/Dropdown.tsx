import { useState } from 'react';
import { Trigger } from './Dropdown.Trigger';
import { DropdownMenu } from './Dropdown.Menu';
import { useService } from '../hooks/useService';
import { fetchUsers } from '../utils';

interface Item {
  icon: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: Item[];
};

const Dropdown = ({ items }: DropdownProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  // const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // const handleKeyDown = (e: React.KeyboardEvent) => {
  //   switch (
  //     e.key
  //     // ... 케이스 구문 ...
  //     // ...  Enter, Space, ArrowDown and ArrowUp 키에 대한 핸들링 ...
  //   ) {
  //   }
  // };
  const {
    isOpen,
    toggleDropdown,
    handleKeyDown,
    selectedItem,
    setSelectedItem,
    selectedIndex,
  } = useDropdown(items);

  const { loading, error, data } = useService(fetchUsers);

  return (
    // <div className='dropdown'>
    //   <div className='trigger' tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
    //     <span className='selection'>
    //       {selectedItem ? selectedItem.text : 'Select an item...'}
    //     </span>
    //   </div>
    //   {isOpen && (
    //     <div className='dropdown-menu'>
    //       {items.map((item, index) => (
    //         <div
    //           key={index}
    //           onClick={() => setSelectedItem(item)}
    //           className='item-container'
    //         >
    //           <img src={item.icon} alt={item.text} />
    //           <div className='details'>
    //             <div>{item.text}</div>
    //             <small>{item.description}</small>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    <div className='dropdown' onKeyDown={handleKeyDown}>
      <Trigger
        label={selectedItem ? selectedItem.text : 'Select an item...'}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <DropdownMenu items={items} onItemClick={setSelectedItem} />}
    </div>
  );
};

function Item({ icon, text, description }: Item) {
  return (
    <div className='item-container'>
      <img src={icon} alt={text} />
      <div className='details'>
        <div>{text}</div>
        <small>{description}</small>
      </div>
    </div>
  );
}

function MenuCheckbox({ icon, text, description }: Item) {
  return (
    <div className='item-container'>
      <img src={icon} alt={text} />
      <div className='details'>
        <div>{text}</div>
        <small>{description}</small>
      </div>
    </div>
  );
}

Dropdown.Item = Item;
Dropdown.MenuCheckbox = MenuCheckbox;

export default Dropdown;

// Example usage:
{
  /* <Dropdown>
  <Dropdown.Item />
  <Dropdown.MenuCheckbox />
</Dropdown>; */
}
