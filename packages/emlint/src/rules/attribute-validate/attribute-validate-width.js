// rule: attribute-validate-width
// -----------------------------------------------------------------------------

import validateDigitAndUnit from "../../util/validateDigitAndUnit";

function attributeValidateWidth(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateWidth() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateWidth(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "width") {
        // validate the parent
        if (
          ![
            "hr",
            "iframe",
            "img",
            "object",
            "table",
            "td",
            "th",
            "applet",
            "col",
            "colgroup",
            "pre"
          ].includes(node.parent.tagName)
        ) {
          context.report({
            ruleId: "attribute-validate-width",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have this attribute.`,
            fix: null
          });
        } else {
          if (node.parent.tagName === "pre") {
            // number only
            validateDigitAndUnit(node.attribValue, node.attribValueStartsAt, {
              theOnlyGoodUnits: [],
              noUnitsIsFine: true
            }).forEach(errorObj => {
              console.log(`054 RAISE ERROR`);
              context.report(
                Object.assign({}, errorObj, {
                  ruleId: "attribute-validate-width"
                })
              );
            });
          } else if (["colgroup", "col"].includes(node.parent.tagName)) {
            // multilength type
            validateDigitAndUnit(node.attribValue, node.attribValueStartsAt, {
              badUnits: ["px"],
              theOnlyGoodUnits: ["*", "%"],
              noUnitsIsFine: true
            }).forEach(errorObj => {
              console.log(`068 RAISE ERROR`);
              context.report(
                Object.assign({}, errorObj, {
                  ruleId: "attribute-validate-width"
                })
              );
            });
          } else {
            // normal length
            validateDigitAndUnit(node.attribValue, node.attribValueStartsAt, {
              badUnits: ["px"],
              noUnitsIsFine: true
            }).forEach(errorObj => {
              console.log(`081 RAISE ERROR`);
              context.report(
                Object.assign({}, errorObj, {
                  ruleId: "attribute-validate-width"
                })
              );
            });
          }
        }
      }
    }
  };
}

export default attributeValidateWidth;
