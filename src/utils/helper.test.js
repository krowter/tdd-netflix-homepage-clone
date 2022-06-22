import { it } from "vitest";
import { getThumbnailUrlFromVideo } from "./helper";

it("should return correct thumbnail url based on youtube api", () => {
  expect(
    getThumbnailUrlFromVideo("https://www.youtube.com/watch?v=RzvLz82hwq0")
  ).toEqual("https://img.youtube.com/vi/RzvLz82hwq0/0.jpg");
});

it("should return correct thumbnail url based on youtube api", () => {
  expect(
    getThumbnailUrlFromVideo("https://www.youtube.com/watch?v=qedq-aQds2")
  ).toEqual("https://img.youtube.com/vi/qedq-aQds2/0.jpg");
});
