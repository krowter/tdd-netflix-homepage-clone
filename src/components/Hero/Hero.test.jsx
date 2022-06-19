import { render, screen, within } from "@testing-library/react";
import { beforeEach, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Hero } from ".";

import HeroImage from "/src/assets/hero-image.jpg";

const baseHeroProps = {
  image: HeroImage,
  description:
    "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
  playUrl: "/watch/breaking-bad",
  onMoreInfoClick: () => {},
};

let rendered;

beforeEach(() => {
  // runs before every it()
  rendered = render(<Hero {...baseHeroProps} />);
});

afterEach(() => {
  vi.clearAllMocks();
});

it("should render a section", () => {
  expect(screen.getByTestId("hero-section")).toBeInTheDocument();
});

it("should render hero image from props", () => {
  expect(
    screen.getByRole("img", {
      name: "breaking bad poster",
    })
  ).toHaveAttribute("src", "/src/assets/hero-image.jpg");
});

it("should have a description text", () => {
  expect(screen.getByTestId("hero-description")).toHaveTextContent(
    "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth."
  );
});

it("should have a play button that links to watchpage", () => {
  const playButton = screen.getByRole("link", {
    name: "Play",
  });
  expect(playButton).toHaveAttribute("href", baseHeroProps.playUrl);
  expect(within(playButton).getByRole('img')).toHaveAttribute('src', '/src/assets/icons/ic_triangle-right.svg')
});

it("should have a more info button that trigger onMoreInfoClick props when clicked", async () => {
  const moreInfoButton = screen.getByRole("button", {
    name: "More Info",
  });
  
  expect(within(moreInfoButton).getByRole('img')).toHaveAttribute('src', '/src/assets/icons/ic_info.svg')
});

it("should have a more info button that trigger onMoreInfoClick props when clicked", async () => {
  const user = userEvent.setup();

  const moreInfoClickSpy = vi.fn();

  // rerender to update props with a spy
  rendered.rerender(
    <Hero {...baseHeroProps} onMoreInfoClick={moreInfoClickSpy} />
  );

  const moreInfoButton = screen.getByRole("button", {
    name: "More Info",
  });

  await user.click(moreInfoButton);

  expect(moreInfoClickSpy).toHaveBeenCalledTimes(1);
});
