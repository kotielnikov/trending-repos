import { useState, useMemo } from 'react';
import { RepoType } from '../../../types';

export default function useFilters({
  repos,
  staredRepos,
}: {
  repos?: Array<RepoType>;
  staredRepos: Record<string, boolean>;
}) {
  const [showStared, setShowStared] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(
    undefined,
  );

  const filteredRepos = useMemo(
    () =>
      repos
        ? repos
            .filter(repo => !showStared || staredRepos[repo.id])
            .filter(
              ({ language }) =>
                !selectedLanguage ||
                (selectedLanguage === 'Unknown'
                  ? !language
                  : language === selectedLanguage),
            )
        : [],
    [repos, showStared, selectedLanguage, staredRepos],
  );

  return {
    showStared,
    setShowStared,
    selectedLanguage,
    setSelectedLanguage,
    filteredRepos,
  };
}
