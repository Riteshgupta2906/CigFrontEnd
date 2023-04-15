import Model from "./Model";
import money from "../postImage/Moneystress.svg";
import "./styles.css";

import { useState } from "react";
export default function Post() {
  return (
    <article class="post-card post tag-weekly ">
      <a class="post-card-image-link">
        <img
          class="post-card-image"
          sizes="(max-width: 1000px) 400px, 700px"
          src={money}
          alt="Weekly Wrapup: ITC Business breakdown"
        />
      </a>

      <div class="post-card-content">
        <a class="post-card-content-link">
          <header class="post-card-header">
            <h2 class="post-card-title">
              Weekly Wrapup: ITC Business breakdown
            </h2>
          </header>

          <section class="post-card-excerpt">
            <p>An explainer on how ITC is structured</p>
          </section>
        </a>

        <footer class="post-card-meta">
          <time class="post-full-meta-date" datetime="2023-04-15">
            15 April 2023
          </time>
          <span class="reading-time">6 min read</span>
        </footer>
      </div>
      <Model title="Hello" img={money} />
    </article>
  );
}
