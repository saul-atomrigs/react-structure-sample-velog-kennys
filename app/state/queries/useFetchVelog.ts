import { useQuery } from '@tanstack/react-query';

function todos({ status, page }) {
  const result = useQuery({
    queryKey: ['todos', { status, page }],
    queryFn: fetchTodoList,
  });
}

function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey;

  return new Promise();
}
