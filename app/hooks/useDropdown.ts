const useDropdown = (items: Item[]) => {
  // ... 상태 변수 ...

  // 헬퍼 함수는 UI에 대한 일부 aria 속성을 반환할 수 있습니다.
  const getAriaAttributes = () => ({
    role: 'combobox',
    'aria-expanded': isOpen,
    'aria-activedescendant': selectedItem ? selectedItem.text : undefined,
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // ... switch 구문 ...
  };

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  return {
    isOpen,
    toggleDropdown,
    handleKeyDown,
    selectedItem,
    setSelectedItem,
    selectedIndex,
  };
};
