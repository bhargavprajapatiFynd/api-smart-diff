import { addPatch, ExampleResource } from "./helpers"
import { breaking, nonBreaking } from "../src"

const exampleResource = new ExampleResource("petstore.yaml", "OpenApi3")

describe("Test openapi 3 diff", () => {
  it("add servers should be non-breaking change", () => {
    const path = ["servers", 2]
    const value = {
      url: "http://localhost:3000",
      description: "Local server1"
    }

    const after = exampleResource.clone([addPatch(path, value)])
    const diff = exampleResource.diff(after)
    expect(diff.length).toEqual(1)
    expect(diff).toMatchObject([{
      path,
      after: value,
      type: nonBreaking
    }])
  })

  it("rename path parameter should not be breaking change", () => {
    const after = exampleResource.clone()
    after.paths["/pet/{pet}/uploadImage"] = after.paths["/pet/{petId}/uploadImage"]
    delete after.paths["/pet/{petId}/uploadImage"]
    after.paths["/pet/{pet}/uploadImage"].post.parameters[0].name = "pet"

    const diff = exampleResource.diff(after)
    expect(diff.length).toEqual(2)
    expect(diff).toMatchObject([
      { path: ["paths"], before: "/pet/{petId}/uploadImage", after: "/pet/{pet}/uploadImage", type: nonBreaking },
      { path: ["paths", "/pet/{petId}/uploadImage", "post", "parameters", 0, "name"], type: breaking } // should be non-breaking
    ])
  })
})
