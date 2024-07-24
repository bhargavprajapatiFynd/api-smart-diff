import { Rules, Rule } from "../types"
import {
    breaking, nonBreaking, unclassified,
    allAnnotation, addNonBreaking,
    allBreaking, allNonBreaking, allDeprecated, annotation,
  } from "../constants"
  import { jsonSchemaRules } from "./jsonschema"

const rule: Rule = [
    (data) => {
        return nonBreaking
    }, (data) => {
        return nonBreaking
    }, (data) => {
        return nonBreaking
    }
]
export const webhookRules: Rules = {
    "/asyncapi": rule,
    "/info": {
        "/": rule,
        "/title": rule,
        "/description": rule,
        "/version": rule,
    },
    "/x-group": rule,
    "/channels": {
        "/": rule,
        "/event": {
            "/": rule,
            "/address": rule,
            "/description": rule,
            "/messages": {
                "/": rule,
                "/*": {
                    "/": rule,
                    "/description": rule,
                    "/payload": {
                        "/": rule,
                        "/$ref": rule
                    }
                }
            }
        }
    },
    "/operations": {
        "/": rule,
        "/webhook_event": {
            "/": rule,
            "/action": rule,
            "/channel": {
                "/": rule,
                "/$ref": rule
            }
        }
    },
    "/components": {
        "/": allNonBreaking,
        "/schemas": {
          "/": [nonBreaking, breaking, breaking],
          "/*": jsonSchemaRules(addNonBreaking),
        },
        "/examples": allAnnotation,
      },
  }