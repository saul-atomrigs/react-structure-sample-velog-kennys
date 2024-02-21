const items = [{ text: 'Apple' }, { text: 'Orange' }, { text: 'Banana' }];

it('드롭다운 열기/닫기 상태가 핸들링된다.', () => {
  const { result } = renderHook(() => useDropdown(items));

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(false);
});

it('토글을 실행시킨다', async () => {
  render(<Dropdown />);

  const trigger = screen.getByRole('button');

  expect(trigger).toBeInTheDocument();

  await userEvent.click(trigger);

  const list = screen.getByRole('listbox');
  expect(list).toBeInTheDocument();

  await userEvent.click(trigger);

  expect(list).not.toBeInTheDocument();
});

it('키보드 탐색을 통해 항목을 선택한다.', async () => {
  render(<Dropdown />);

  const trigger = screen.getByRole('button');

  expect(trigger).toBeInTheDocument();

  await userEvent.click(trigger);

  const dropdown = screen.getByRole('combobox');
  dropdown.focus();

  await userEvent.type(dropdown, '{arrowdown}');
  await userEvent.type(dropdown, '{enter}');

  await expect(screen.getByTestId('selected-item')).toHaveTextContent(
    items[0].text
  );
});
