// rule: attribute-validate-shape
// -----------------------------------------------------------------------------

import { validateString } from "../../util/util";

function attributeValidateShape(context, ...opts) {
  return {
    attribute: function (node) {
      console.log(
        `███████████████████████████████████████ attributeValidateShape() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateShape(): node = ${JSON.stringify(node, null, 4)}`
      );

      if (node.attribName === "shape") {
        // validate the parent
        if (!["area", "a"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-shape",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        const errorArr = validateString(
          node.attribValue, // value
          node.attribValueStartsAt, // offset
          {
            permittedValues: ["default", "rect", "circle", "poly"],
            canBeCommaSeparated: false,
          }
        );

        console.log(
          `045 ${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
            errorArr,
            null,
            4
          )}`
        );

        errorArr.forEach((errorObj) => {
          console.log(`053 RAISE ERROR`);
          context.report(
            Object.assign({}, errorObj, {
              ruleId: "attribute-validate-shape",
            })
          );
        });
      }
    },
  };
}

export default attributeValidateShape;
