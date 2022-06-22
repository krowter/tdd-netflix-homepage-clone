import { fireEvent, render, screen } from "@testing-library/react";
import { it } from "vitest";
import { VideoThumbnail } from "./index";
import "@testing-library/jest-dom";

it("should render correctly", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={"https://www.youtube.com/embed/RzvLz82hwq0?autoplay=0"}
    />
  );
});

it("should render an image from thumbnail props", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={"https://www.youtube.com/embed/RzvLz82hwq0?autoplay=0"}
    />
  );

  expect(screen.getByRole("img")).toHaveAttribute("src", "/assets/image.jpg");
});

it("should render an video from videoPreview props", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={"https://www.youtube.com/embed/RzvLz82hwq0?autoplay=0"}
    />
  );

  expect(screen.getByTestId("video-preview")).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/RzvLz82hwq0?autoplay=0"
  );
});

it("should play video when we hover the thumbnail", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={
        "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=0"
      }
    />
  );

  fireEvent.mouseOver(screen.getByRole("img"));

  expect(screen.getByTestId("video-preview")).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=1"
  );
});

it("should hide thumbnail when we hover over it", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={
        "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=0"
      }
    />
  );

  const thumbnail = screen.getByRole("img");

  fireEvent.mouseOver(thumbnail);

  // use string containing because of dynamic class name (css module)
  expect(thumbnail).toHaveAttribute('class', expect.stringContaining("exit"));
});

it("should pause video on mouse leave", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={
        "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=0"
      }
    />
  );

  const thumbnail = screen.getByRole("img");
  fireEvent.mouseEnter(thumbnail);
  fireEvent.mouseLeave(thumbnail);

  expect(screen.getByTestId("video-preview")).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=0"
  );
});

it("should show again thumbnail when on mouse leave", () => {
  render(
    <VideoThumbnail
      thumbnail={"/assets/image.jpg"}
      videoPreview={
        "https://www.youtube.com/embed/RzvLz82hwq0?muted=1&controls=0&autoplay=0"
      }
    />
  );

  const thumbnail = screen.getByRole("img");
  fireEvent.mouseEnter(thumbnail);
  fireEvent.mouseLeave(thumbnail);

  // use string containing because of dynamic class name (css module)
  expect(thumbnail).toHaveAttribute('class', expect.stringContaining("enter"));
});
