import { useMemo } from 'react';
import useLocalStorageState from '../../../hooks/useLocalStorage';
import useFilters from './useFilters';
import useRepos from './useReposApi';

export default function useTrending() {
  const { repos, error, loading } = useRepos();
  const [stared, setStared] = useLocalStorageState<Record<string, boolean>>(
    'stared',
    {},
  );

  const {
    showStared,
    setShowStared,
    selectedLanguage,
    setSelectedLanguage,
    filteredRepos,
  } = useFilters({ repos, staredRepos: stared });

  const languages = useMemo(
    () =>
      repos
        ? repos.reduce((result, { language }) => {
            const resultLanguage = language || 'Unknown';
            return result.indexOf(resultLanguage) === -1
              ? [...result, resultLanguage]
              : result;
          }, [] as Array<string>)
        : ([] as Array<string>),
    [repos],
  );

  return {
    repos: filteredRepos,
    showStared,
    setShowStared,
    selectedLanguage,
    setSelectedLanguage,
    stared,
    setStared,
    error,
    loading,
    languages,
  };
}
