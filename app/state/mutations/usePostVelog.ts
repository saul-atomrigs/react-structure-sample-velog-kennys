import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NextApiResponse } from 'next';

const postVelog = ({ postId }): Promise<NextApiResponse> => {
  return put('route/post', {
    postId: postId,
  });
};

const usePostVelog = (options) => {
  return useMutation({
    mutationFn: postVelog,
    ...options,
  });
};

export const usePostVelogWithInvalidation = ({
  postId,
  onSuccess,
  onError,
}) => {
  const queryClient = useQueryClient();

  const { mutate: postVelogMutate, inPending } = usePostVelog();

  const postVelogHandler = () => {
    postVelogMutate(
      { postId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['velog']);
          onSuccess && onSuccess();
        },
        onError: (error) => {
          onError && onError(error);
        },
      }
    );
  };

  return { mutate: postVelogHandler, inPending };
};
