import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { tick } from '@angular/core/testing';

@Injectable()
export class XmlParserService {

  constructor() { }

  public hasNode(xml: Document, xpath: string) {
    const node = xml.evaluate(xpath, xml, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    return node.singleNodeValue !== null;
  }

  public getDate(xml: Document, xpath: string) {
    const dateText = this.getText(xml, xpath);
    if (_.isUndefined(dateText)) {
      return undefined;
    }

    const ticks = Date.parse(dateText);
    if (isNaN(ticks)) {
      return undefined;
    }

    return new Date(ticks);
  }

  public getText(xml: Document, xpath: string) {
    xpath += '/text()';
    const value = xml.evaluate(xpath, xml, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

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
