import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Navbar } from ".";

it("should render without error", () => {
  render(<Navbar />);
});

it("should render a nav element", () => {
  render(<Navbar />);

  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

it("should contain a logo", () => {
  render(<Navbar />);

  const logo = screen.getByRole("img", {
    name: "company logo",
  });

  expect(logo).toHaveAttribute("src", "/src/assets/logo.svg");
});

it.each([
  ["Home", "/home"],
  ["TV Shows", "/shows"],
  ["Movies", "/movies"],
  ["New & Popular", "/popular"],
  ["My List", "/my-list"],
])("should have nav item %s that links to %s", (label, link) => {
  render(<Navbar />);

  expect(screen.getByRole("link", { name: label })).toHaveAttribute(
    "href",
    link
  );
});
