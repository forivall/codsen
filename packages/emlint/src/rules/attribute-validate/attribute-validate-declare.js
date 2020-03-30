// rule: attribute-validate-declare
// -----------------------------------------------------------------------------

import validateVoid from "../../util/validateVoid";

function attributeValidateDeclare(context, ...originalOpts) {
  return {
    attribute: function (node) {
      console.log(
        `███████████████████████████████████████ attributeValidateDeclare() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`originalOpts`}\u001b[${39}m`} = ${JSON.stringify(
          originalOpts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateDeclare(): node = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      const opts = {
        xhtml: false,
      };

      // normalize the given opts (array) and turn them
      // into a plain object
      if (
        Array.isArray(originalOpts) &&
        originalOpts.length &&
        originalOpts.some((val) => val.toLowerCase() === "xhtml")
      ) {
        opts.xhtml = true;
      }

      const errorArr = [];

      if (node.attribName === "declare") {
        // validate the parent
        if (node.parent.tagName !== "object") {
          errorArr.push({
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        } else {
          // validate the value (or absence thereof)
          validateVoid(
            node,
            context,
            errorArr,
            Object.assign({}, opts, {
              enforceSiblingAttributes: null,
            })
          );
        }

        // finally, report gathered errors:
        if (errorArr.length) {
          errorArr.forEach((errorObj) => {
            console.log(`067 RAISE ERROR`);
            context.report(
              Object.assign({}, errorObj, {
                ruleId: "attribute-validate-declare",
              })
            );
          });
        }
      }
    },
  };
}

export default attributeValidateDeclare;
