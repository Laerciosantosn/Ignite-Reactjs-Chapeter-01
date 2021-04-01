import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/users/Laerciosantosn/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Laerciosantosn/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>List of repositories</h1>

      <ul>
        {repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository} />
          })
        };

      </ul>
    </section>
  )
}