'use strict'
/* eslint no-template-curly-in-string: 0 */
/* eslint padded-blocks: 0 */

const test = require('ava')
const c = require('..')
const {readFileSync} = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, 'fixtures')

function compare (t, name) {
  const changelog = readFileSync(path.join(fixtures, `${name}_changelog.md`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}_changelog.expected.md`), 'utf8')
  const packageJson = readFileSync(path.join(fixtures, `${name}_package.json`), 'utf8')
  return t.deepEqual(c(changelog, packageJson), expected)
}

function throws (t, name) {
  const changelog = readFileSync(path.join(fixtures, `${name}_changelog.md`), 'utf8')
  const packageJson = readFileSync(path.join(fixtures, `${name}_package.json`), 'utf8')
  return t.throws(function () { c(changelog, packageJson) })
}

// -----------------------------------------------------------------------------

test('00. if no input, will silently return indefined', (t) => {
  t.deepEqual(c(), undefined,
    '00.01'
  )
})

test('01. ascending order, with wrong package names', (t) => {
  return compare(t, '01_asc_order_wrong_package')
})

test('02. ascending order, with correct package names', (t) => {
  return compare(t, '02_asc_order_correct_package')
})

test('03. correct package names, no footer links at all', (t) => {
  return compare(t, '03_no_footer_links')
})

test('04. descending order, with wrong package names', (t) => {
  return compare(t, '04_desc_order_wrong_package')
})

test('05. descending order, with correct package names', (t) => {
  return compare(t, '05_desc_order_correct_package')
})

test('06. there are no linked titles', (t) => {
  return compare(t, '06_not_linked_titles')
})

test('07. non-GitHub package.json - throws', (t) => {
  return throws(t, '07_gitlab_package_json')
})

test('08. mid links missing in changelog.md', (t) => {
  return compare(t, '08_mid_links_missing')
})

test('09. sneaky cases with tight spacing', (t) => {
  return compare(t, '09_tight_spacing')
})

test('10. redundant footer links present, no git logs in context', (t) => {
  return compare(t, '10_redundant_links')
})

test('11. title dates are in wrong formats, no git logs in context', (t) => {
  return compare(t, '11_wrong_dates')
})

test('12. footer links match titles but have wrong versions in URLs', (t) => {
  return compare(t, '12_wrong_footer_link_versions')
})

test('13. Real world case - https://github.com/guigrpa/giu/', (t) => {
  return compare(t, '13_real_world')
})

test('14. Real world case with slashes and letter v - https://github.com/keystonejs/keystone/', (t) => {
  return compare(t, '14_slashes')
})
