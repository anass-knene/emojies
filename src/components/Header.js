import React from "react";
import GitHubButton from "react-github-btn";
export default function Header() {
  return (
    <div className="header">
      <h1>
        Search Emoji <span>&#x1F984;</span>
      </h1>
      <p>Simple React Tool for search emoji with React JS</p>
      <p>
        <GitHubButton
          href="https://github.com/anass-knene"
          target="_blank"
          data-show-count={true}
          data-size="large"
          data-text="star"
          data-icon="octicon-star"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/anass-knene"
          target="_blank"
          data-show-count={true}
          data-size="large"
          data-text="form"
          data-icon="octicon-repo-forked"
        >
          Fork
        </GitHubButton>
      </p>
    </div>
  );
}
