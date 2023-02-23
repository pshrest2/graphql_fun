/**
 * @generated SignedSource<<8470c7c73207cb32474b617f210ac8dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artist",
    "kind": "LinkedField",
    "name": "artists",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "artistsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "artistsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "985f7902708c86323e1fb55b2dabbc65",
    "id": null,
    "metadata": {},
    "name": "artistsQuery",
    "operationKind": "query",
    "text": "query artistsQuery {\n  artists {\n    id\n    firstName\n  }\n}\n"
  }
};
})();

node.hash = "a2133b78d40f8851fcbc4c71cc046153";

module.exports = node;
