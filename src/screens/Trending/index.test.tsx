import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Chance from 'chance';
import Trending from '.';

import useTrending from './useTrending';

const chance = new Chance();

jest.mock('./useTrending');

function mockUseTrending(input: Partial<ReturnType<typeof useTrending>> = {}) {
  useTrending.mockReset();
  useTrending.mockReturnValue({
    repos: [],
    showStared: false,
    setShowStared: jest.fn(),
    selectedLanguage: undefined,
    setSelectedLanguage: jest.fn(),
    stared: false,
    setStared: jest.fn(),
    languages: [],
    error: undefined,
    loading: false,
    ...input,
  });
}

function getRepoMock() {
  return {
    id: chance.string(),
    name: chance.string(),
    description: chance.string(),
    forks_count: chance.string(),
    stargazers_count: chance.string(),
    language: chance.string(),
    html_url: chance.string(),
    owner: {
      login: chance.string(),
    },
  };
}

describe('Trending page', () => {
  beforeEach(() => {
    mockUseTrending();
  });

  it('shows title', () => {
    const { queryAllByText } = render(<Trending />);
    expect(queryAllByText('Trending').length).toEqual(1);
    expect(
      queryAllByText('See what the GitHub community is most excited about.')
        .length,
    ).toEqual(1);
  });

  it('shows loading', () => {
    mockUseTrending({ loading: true });
    const { queryAllByText } = render(<Trending />);
    expect(queryAllByText('Loading...').length).toEqual(1);
  });

  it('shows error', () => {
    mockUseTrending({ error: Symbol('error') });
    const { queryAllByText } = render(<Trending />);
    expect(
      queryAllByText('Something went wrong', { exact: false }).length,
    ).toEqual(1);
  });

  it('shows repos', () => {
    const repos = [getRepoMock(), getRepoMock()];
    mockUseTrending({ repos });

    const { queryAllByText, getByText } = render(<Trending />);

    repos.forEach(repo => {
      expect(queryAllByText(repo.name).length).toEqual(1);
      expect(queryAllByText(repo.description).length).toEqual(1);
      expect(queryAllByText(repo.forks_count).length).toEqual(1);
      expect(queryAllByText(repo.stargazers_count).length).toEqual(1);
      expect(queryAllByText(repo.language).length).toEqual(1);
      expect(queryAllByText(repo.owner.login, { exact: false }).length).toEqual(
        1,
      );
      expect(getByText(repo.name).closest('a')).toHaveAttribute(
        'href',
        repo.html_url,
      );
    });
  });

  it('shows empty state', () => {
    const { queryAllByText } = render(<Trending />);
    expect(
      queryAllByText(
        'It looks like we don’t have any trending repositories matching your criteria.',
      ).length,
    ).toEqual(1);
  });

  it('updates stared filter', () => {
    const setShowStared = jest.fn();
    mockUseTrending({ setShowStared });
    const { getByText } = render(<Trending />);
    const element = getByText('Stared');
    fireEvent.click(element);
    expect(setShowStared).toBeCalledTimes(1);
    expect(setShowStared).toHaveBeenCalledWith(true);
  });

  it('updates language filter', () => {
    const languages = [chance.string({ alpha: true })];
    const setSelectedLanguage = jest.fn();
    mockUseTrending({ setSelectedLanguage, languages });
    const { getByText, getByTestId } = render(<Trending />);

    const dropdownHeader = getByText('Any');
    fireEvent.click(dropdownHeader);

    const menuItem = getByTestId(`dropdown-menu-item-${languages[0]}`);
    fireEvent.click(menuItem);

    expect(setSelectedLanguage).toBeCalledTimes(1);
    expect(setSelectedLanguage).toBeCalledWith(languages[0]);
  });
});
