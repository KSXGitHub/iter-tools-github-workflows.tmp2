/**
 * @generated-from ./$includes.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import internalIncludes from '../$includes_/includes';
const config = {
  any: false,
  subseq: false,
};
export function includes(iterable, value) {
  return internalIncludes(iterable, config, value);
}
export default iterableCurry(includes, {
  reduces: true,
});
