import { fireEvent, render, screen, within } from "@testing-library/react";
import { it, vi } from "vitest";
import "@testing-library/jest-dom";

import { Hero } from "./Hero";

it("should render correctly", () => {
  render(<Hero />);
});

it("should render an image with src heroimage.jpg", () => {
  render(<Hero />);

  const heroImage = screen.getByTestId("hero-image");

  expect(heroImage).toHaveAttribute("src", "/src/assets/hero-image.jpg");
});

it("should render an hero info with description and two play buttons", () => {
  render(<Hero />);

  const heroDescription = screen.getByText(
    "Premise. Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer."
  );

  expect(heroDescription).toBeInTheDocument();
});

it("should render play and moreinfo buttons with appropriate icons", () => {
  render(<Hero />);

  const playButton = screen.getByRole("button", { name: "Play" });
  const moreInfoButton = screen.getByRole("button", { name: "More Info" });
  
  expect(within(playButton).getByRole('img', '/src/assets/icons/ic_info.svg')).toBeInTheDocument();
  expect(within(moreInfoButton).getByRole('img', '/src/assets/icons/ic_triangle-right.svg')).toBeInTheDocument();
});

it("should call onPlayClick props on button play clicked", () => {
  const playClickSpy = vi.fn();

  render(<Hero onPlayClick={playClickSpy} />);

  const playButton = screen.getByRole("button", { name: "Play" });

  fireEvent.click(playButton);

  expect(playClickSpy).toHaveBeenCalledTimes(1);
});

it("should call onPlayClick props on button play clicked", () => {
  const moreInfoSpy = vi.fn();

  render(<Hero onMoreInfoClick={moreInfoSpy} />);

  const moreInfoButton = screen.getByRole("button", { name: "More Info" });

  fireEvent.click(moreInfoButton);

  expect(moreInfoSpy).toHaveBeenCalledTimes(1);
});
