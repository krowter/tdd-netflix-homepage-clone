import { render, screen } from "@testing-library/react";
import { it, vi } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

const dummyVideos = [
  "https://www.youtube.com/watch?v=DFTNEGHpwyM",
  "https://www.youtube.com/watch?v=O6Nyb9kiZO0",
  "https://www.youtube.com/watch?v=FnwhYEUHw7k",
  "https://www.youtube.com/watch?v=floP7KtPp0U",
  "https://www.youtube.com/watch?v=g3ZvQDRgZrE",
  "https://www.youtube.com/watch?v=uYEb3lZg3Z8",
  "https://www.youtube.com/watch?v=TByW5-HDYTA",
  "https://www.youtube.com/watch?v=Wh1_nlLpNSM",
];

vi.stubGlobal("fetch", () =>
  Promise.resolve({
    json: () => Promise.resolve(dummyVideos),
  })
);

it("should render Hero section", () => {
  render(<App />);

  const HeroSection = screen.getByTestId("hero-section");

  expect(HeroSection).toBeInTheDocument();
});

it("should render continue watching text", async () => {
  render(<App />);

  expect(screen.getByText('Continue Watching')).toBeInTheDocument()
});

it("should render videos section with 8 videos", async () => {
  render(<App />);


  // wait for fetch to complete
  expect(await screen.findAllByTestId("video-thumbnail")).toHaveLength(
    dummyVideos.length
  );
});
