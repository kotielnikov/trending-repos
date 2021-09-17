import { useCallback, useEffect, useState } from 'react';
import { RepoType } from '../../../types';

export default function useRepos() {
  const [state, setState] = useState<{
    repos?: Array<RepoType>;
    error?: any;
    loading: boolean;
  }>({
    loading: true,
  });

  const refetch = useCallback(async () => {
    setState({
      loading: true,
    });

    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc',
      );
      const json = await response.json();
      setState({
        repos: json.items,
        loading: false,
      });
    } catch (e) {
      setState({
        error: e,
        loading: false,
      });
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { ...state, refetch };
}
