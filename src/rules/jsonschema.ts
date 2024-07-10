import { breakingIf, breakingIfAfterTrue } from "../utils"
import { DiffTypeFunc, Rule, Rules } from "../types"
import {
  breaking, nonBreaking, addNonBreaking, 
  allAnnotation, allBreaking, allUnclassified,
  onlyAddBreaking, allDeprecated,
} from "../constants"

const maxClassifier: Rule = [
  breaking, 
  nonBreaking, 
  ({ before, after }) => breakingIf(before > after)
]

const minClassifier: Rule = [
  breaking,
  nonBreaking,
  ({ before, after }) => breakingIf(before < after)
]

const exclusiveClassifier: Rule = [
  breakingIfAfterTrue, 
  nonBreaking, 
  breakingIfAfterTrue
]

const booleanClassifier: Rule = [
  breakingIfAfterTrue,
  nonBreaking,
  breakingIfAfterTrue
]

const multipleOfClassifier: Rule = [
  breaking,
  nonBreaking,
  ({ before, after }) => breakingIf(!!(before % after))
]

const nonBreakingIfDefault: DiffTypeFunc = ({ after, up }) => up(2).after?.properties?.[after]?.default !== undefined ? nonBreaking : breaking

// if property added
const breakingIfNewFieldRequiredOrInnerFieldRequired: DiffTypeFunc = ({ _path, up }) => {
  // check if properties inner field is required
  if (up(1).after.required && up(1).after.required.length) {
    return breaking
  }
  // check if property itself is required
  if (up(3).after.required && up(3).after.required.includes(_path.pop())) {
    return breaking
  }
  return nonBreaking
}

const breakingIfCurrentFieldIsRequired: DiffTypeFunc = ({ _path, up }) => {
  console.log(_path.join("."));
  if (up(2).after.required) {
    if (up(2).after.required.includes(_path.pop())) {
      return breaking
    }
  }
  return nonBreaking
}

export const jsonSchemaRules = (rootRule: Rule = allUnclassified): Rules => ({
  "/": rootRule,
  "/title": allAnnotation,
  "/multipleOf": multipleOfClassifier,
  "/maximum": maxClassifier,
  "/exclusiveMaximum": exclusiveClassifier,
  "/minimum": minClassifier,
  "/exclusiveMinimum": exclusiveClassifier,
  "/maxLength": maxClassifier,
  "/minLength": minClassifier,
  "/pattern": [breaking, nonBreaking, breaking], // TODO: Compare Regex before vs after
  "/maxItems": maxClassifier,
  "/minItems": minClassifier,
  "/uniqueItems": booleanClassifier,
  "/maxProperties": maxClassifier,
  "/minProperties": minClassifier,
  "/required": {
    "/": onlyAddBreaking,
    "/*": [nonBreakingIfDefault, nonBreaking, nonBreakingIfDefault],
  },
  "/enum": {
    "/": [breaking, nonBreaking, breaking],
    "/*": [nonBreaking, breaking, breaking],
  },
  "/type": {
    "/": [breaking, nonBreaking, breaking],
    "/*": [nonBreaking, breaking, breaking]
  },
  "/not": {
    "/": [breaking, nonBreaking, breaking],
    "/*": () => jsonSchemaRules(allBreaking),
  },
  "/allOf": {
    "/": [breaking, nonBreaking, breaking],
    "/*": () => jsonSchemaRules(allBreaking),
  },
  "/oneOf": {
    "/": [breaking, nonBreaking, breaking],
    "/*": () => jsonSchemaRules(addNonBreaking),
  },
  "/anyOf": {
    "/": [breaking, nonBreaking, breaking],
    "/*": () => jsonSchemaRules(addNonBreaking),
  },
  "/items": () => jsonSchemaRules(addNonBreaking),
  "/properties": {
    "/": [breakingIfNewFieldRequiredOrInnerFieldRequired, nonBreaking, breaking],
    "/*": () => jsonSchemaRules([breakingIfCurrentFieldIsRequired, breaking, breaking]),
  },
  "/additionalProperties": () => jsonSchemaRules([breaking, breaking, breakingIfAfterTrue]),
  "/description": allAnnotation,
  "/format": [breaking, nonBreaking, breaking],
  "/default": [nonBreaking, breaking, breaking],
  "/nullable": booleanClassifier,
  "/discriminator": {
    // TODO
    "/": allUnclassified,
    "/propertyName": allUnclassified,
    "/mapping": allUnclassified,
  },
  "/readOnly": booleanClassifier,
  "/writeOnly": booleanClassifier,
  "/example": allAnnotation,
  "/examples": allAnnotation,
  "/externalDocs": allAnnotation,
  "/deprecated": allDeprecated,
  "/xml": {
    // TODO
    "/": allUnclassified,
    "/name": allUnclassified,
    "/namespace": allUnclassified,
    "/prefix": allUnclassified,
    "/attribute": allUnclassified,
    "/wrapped": allUnclassified,
  },
})
