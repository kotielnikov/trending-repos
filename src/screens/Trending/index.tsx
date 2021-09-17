import React from 'react';
import Card from '../../components/Card';
import DropdownMenu from '../../components/DropdownMenu';
import EmptyState from '../../components/EmptyState';
import PageHeader from '../../components/PageHeader';
import StaredSwitch from './StaredSwitch';
import useTrending from './useTrending';

export default function Trending() {
  const {
    repos,
    showStared,
    setShowStared,
    selectedLanguage,
    setSelectedLanguage,
    stared,
    setStared,
    languages,
    error,
    loading,
  } = useTrending();

  return (
    <>
      <PageHeader
        title="Trending"
        subtitle="See what the GitHub community is most excited about."
      />

      <div className="position-relative container-lg p-responsive pt-6 pb-6">
        <div className="Box">
          <div className="Box-header d-md-flex flex-items-center flex-justify-between">
            <StaredSwitch
              showStaredOnly={showStared}
              setShowStaredOnly={setShowStared}
            />

            <DropdownMenu
              items={languages}
              value={selectedLanguage}
              title="Language"
              header="Select a language"
              onChange={setSelectedLanguage}
              resetTitle="Clear language"
            />
          </div>
          <div>
            {repos.length && !loading ? (
              repos.map(repo => (
                <Card
                  key={repo.id}
                  isStared={stared[repo.id]}
                  toggleStared={() =>
                    setStared({ ...stared, [repo.id]: !stared[repo.id] })
                  }
                  name={repo.name}
                  description={repo.description}
                  owner={repo.owner.login}
                  forksCount={repo.forks_count}
                  stargazersCount={repo.stargazers_count}
                  language={repo.language || 'Unknown'}
                  url={repo.html_url}
                />
              ))
            ) : (
              <EmptyState>
                {(() => {
                  if (loading) {
                    return 'Loading...';
                  }

                  if (error) {
                    return 'Something went wrong. Try to reload the page.';
                  }

                  return 'It looks like we don’t have any trending repositories matching your criteria.';
                })()}
              </EmptyState>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
