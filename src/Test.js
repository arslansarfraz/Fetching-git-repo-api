import { useEffect, useState } from "react";

export default function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/arslansarfraz/repos"
    );
    const data = await response.json();
    console.log(data);
    setRepos(data);
  }, []);

  return (
    <div>
      <ul>
        {repos.map((data, index) => {
          return (
            <li key={index}>
              <h1> {data.name}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
