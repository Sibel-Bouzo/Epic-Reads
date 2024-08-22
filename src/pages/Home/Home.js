import React from "react";
import { Books } from "./components/books/Books";

export const Home = () => {
  return (
    <div className="px-16 home">
      <h1 className="mb-5">
        Welcome to Epic Reads,
        <span className="gradient-text">Your Gateway to Endless Stories</span>
      </h1>
      <p>
        Discover a world of imagination, knowledge, and inspiration at Epic
        Reads. Whether you're searching for the latest bestsellers, timeless
        classics, or hidden gems across every genre, our carefully curated
        collection has something for every reader. Dive into thrilling
        adventures, explore new ideas, and find your next favorite book among
        our extensive selection. We're here to bring the joy of reading to your
        fingertips—browse, explore, and let your literary journey begin.
      </p>
      <Books />
    </div>
  );
};
