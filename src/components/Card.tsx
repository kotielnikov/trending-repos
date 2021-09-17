import React from 'react';
import Icon from './Icon';

export default function Card({
  isStared,
  owner,
  name,
  description,
  forksCount,
  stargazersCount,
  toggleStared,
  language,
  url,
}: {
  isStared: boolean;
  owner: string;
  name: string;
  description: string;
  forksCount: string;
  stargazersCount: string;
  toggleStared(): void;
  language: string;
  url: string;
}) {
  return (
    <article className="Box-row">
      <div className="float-right d-flex">
        <div className="d-block starring-container ">
          <button type="button" className="btn btn-sm" onClick={toggleStared}>
            <Icon
              type={isStared ? 'star-filled' : 'star'}
              className="octicon mr-0 mr-md-1"
            />
            <span className="d-none d-md-inline">
              {isStared ? 'Unstar' : 'Star'}
            </span>
          </button>
        </div>
      </div>
      <h1 className="h3 lh-condensed">
        <a href={url} target="_blank" rel="noreferrer">
          <Icon
            type="repo"
            className="octicon octicon-repo mr-1 color-text-secondary"
          />
          <span className="text-normal">{owner} /</span>
          {name}
        </a>
      </h1>
      <p className="col-9 color-text-secondary my-1 pr-4">{description}</p>
      <div className="f6 color-text-secondary mt-2">
        <span className="d-inline-block ml-0 mr-3">{language}</span>
        <span className="d-inline-block mr-3">
          <Icon type="star" className="octicon octicon-repo-forked" />
          {stargazersCount}
        </span>
        <span className="d-inline-block mr-3">
          <Icon type="fork" className="octicon octicon-repo-forked" />
          {forksCount}
        </span>
      </div>
    </article>
  );
}
