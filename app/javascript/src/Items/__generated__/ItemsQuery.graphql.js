/**
 * @generated SignedSource<<fa524573757ddb5d39d106779fdc5021>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "65cbc0d4e2ca9dd2fd1f7276a5ba2cb9",
    "id": null,
    "metadata": {},
    "name": "ItemsQuery",
    "operationKind": "query",
    "text": "query ItemsQuery {\n  items {\n    id\n    imageUrl\n    title\n    artist {\n      firstName\n      lastName\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "b8e895fc6858e483575564d6d10b8425";

module.exports = node;
