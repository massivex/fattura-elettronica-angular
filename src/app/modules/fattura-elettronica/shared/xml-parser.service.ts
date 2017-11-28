import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class XmlParserService {

  constructor() { }

  public hasNode(xml: Document, xpath: string) {
    const node = xml.evaluate(xpath, xml, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    return node.singleNodeValue !== null;
  }

  public getText(xml: Document, xpath: string) {
    xpath += '/text()';
    const value = xml.evaluate(xpath, xml, undefined, undefined, undefined);

    let textNode: Node;
    let result: string;
    while (textNode = value.iterateNext()) {
      if (typeof result === 'undefined') {
        result = '';
      }
      result += textNode.nodeValue;
    }
    return result;
  }

  public createDocument(xml: string): Document {
    if (_.isNil(xml)) {
      return null;
    }

    const parser = new DOMParser();
    return parser.parseFromString(xml, 'text/xml');
  }
}
