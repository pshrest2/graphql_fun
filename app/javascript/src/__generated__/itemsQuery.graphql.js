/**
 * @generated SignedSource<<8a0ad4688b77a534c9a4fa73dfb6d66e>>
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
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "items",
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
        "name": "artistId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
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
    "name": "itemsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "itemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b07a2cab0496cbf091e41dbcda740086",
    "id": null,
    "metadata": {},
    "name": "itemsQuery",
    "operationKind": "query",
    "text": "query itemsQuery {\n  items {\n    id\n    artistId\n    imageUrl\n    title\n    createdAt\n  }\n}\n"
  }
};
})();

node.hash = "0ce6885557dbdb714d207668ef759d91";

module.exports = node;
