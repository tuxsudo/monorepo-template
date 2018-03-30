import React from "react";
import isTrue, { Component } from "./index";
import renderer from "react-test-renderer";

test("index", () => {
  expect(isTrue()).toBe(true);
});

test("jsx", () => {
  const component = renderer.create(<Component />);
  const tree = component.toJSON();
  expect(tree).toEqual({ type: "h1", props: {}, children: ["hi"] });
});
