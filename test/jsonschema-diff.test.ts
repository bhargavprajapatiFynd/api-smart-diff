import { addPatch, ExampleResource, removePatch, replacePatch } from "./helpers"
import { annotation, breaking, nonBreaking } from "../src"

const example = new ExampleResource("jsonschema.yaml")

describe("Test JsonSchema diff", () => {
  it("replace of 'title' property should be 'annotation' change", () => {
    const path = ["properties", "age", "title"]
    const value = "size"

    const after = example.clone([replacePatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, after: value, type: annotation }])
  })

  it("increase of 'minimum' property should be 'breaing' change", () => {
    const path = ["properties", "age", "minimum"]
    const oldValue = example.getValue(path)
    const value = oldValue + 1

    const after = example.clone([replacePatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, before: oldValue, after: value, type: breaking }])
  })

  it("decrease of 'maximum' property should be 'breaing' change", () => {
    const path = ["properties", "age", "maximum"]
    const oldValue = example.getValue(path)
    const value = oldValue - 1

    const after = example.clone([replacePatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, before: oldValue, after: value, type: breaking }])
  })

  it("add of 'exclusiveMinimum' property should be 'breaing' change", () => {
    const path = ["properties", "age", "exclusiveMinimum"]
    const value = true

    const after = example.clone([addPatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, after: value, type: breaking }])
  })

  it("replace of required property should be 'breaing' change", () => {
    const path = ["required", 0]

    const after = example.clone([replacePatch(path, "name")])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, type: breaking }])
  })

  it("remove of required property should be 'non-breaing' change", () => {
    const path = ["required", 0]
    const oldValue = example.getValue(path)

    const after = example.clone([removePatch(path)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, before: oldValue, type: nonBreaking }])
  })

  it("add of required property should be 'breaing' change", () => {
    const path = ["required", 1]
    const value = "age"

    const after = example.clone([addPatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, after: value, type: breaking }])
  })

  it("add of required property should be 'non-breaing' change if property has default value", () => {
    const path = ["required", 1]
    const value = "age"

    const after = example.clone([addPatch(path, value), addPatch(["properties", "age", "default"], 10)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(2)
    expect(diff).toMatchObject([{ path, after: value, type: nonBreaking}, { after: 10, type: nonBreaking, action: "add" }])
  })

  it("change type in ref should be 'breaing' change", () => {
    const path = ["$refs", "NameType", "type"]
    const oldValue = example.getValue(path)
    const value = "number"

    const after = example.clone([replacePatch(path, value)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(3)
    expect(diff).toMatchObject([
      { path: ["properties", "name", "type"], before: oldValue, after: value, type: breaking },
      { path: ["properties", "foo",  "properties", "bar", "type"], before: oldValue, after: value, type: breaking },
      { path, before: oldValue, after: value, type: breaking },
    ])
  })

  it("should be 'breaking' change on delete enum item", () => {
    const path = ["properties", 'foo', "properties", "baz", "enum", 2]
    const oldValue = example.getValue(path)

    const after = example.clone([removePatch(path)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, before: oldValue, type: breaking }])
  })

  it("should be 'breaking' change on replace enum item", () => {
    const path = ["properties", 'foo', "properties", "baz", "enum", 3]
    const oldValue = example.getValue(path)

    const after = example.clone([replacePatch(path, 50)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, before: oldValue, after: 50, type: breaking }])
  })

  it("should be 'non-breaking' change on add enum item", () => {
    const path = ["properties", 'foo', "properties", "baz", "enum", 4]

    const after = example.clone([addPatch(path, 50)])
    const diff = example.diff(after)

    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{ path, after: 50, type: nonBreaking }])
  })
})
