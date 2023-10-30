import Model from "./Model";
import money from "../postImage/Moneystress.svg";
import "./styles.css";
import React from "react";

import { useState } from "react";
export default function Post(props) {
  return (
    <article class="post-card card tag-weekly ">
    <div className="box">

    <a class="post-card-image-link">
        <img
          class="post-card-image"
          // sizes="(max-width: 1000px) 400px, 700px"
          src={props.image}
          alt="Weekly Wrapup: ITC Business breakdown"
        />
      </a>

      <div class="post-card-content">
        <a class="post-card-content-link">
          <header class="post-card-header">
            <h2 class="post-card-title">
             {props.title}
            </h2>
          </header>

          <section class="post-card-excerpt">
            <p>{props.description}</p>
          </section>
        </a>
      </div>
      <Model title={props.title} content={props.content} image={props.image}  />
    </div>
      
      <footer class="post-card-meta">
          <time class="post-full-meta-date" datetime="2023-04-15">
            15 April 2023
          </time>
          <span class="reading-time">6 min read</span>
        </footer>
      
    </article>
  );
}
