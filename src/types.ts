export type RepoType = {
  id: string;
  name: string;
  description: string;
  forks_count: string;
  stargazers_count: string;
  language: string | null;
  html_url: string;
  owner: {
    login: string;
  };
};
