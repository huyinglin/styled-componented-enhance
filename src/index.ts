/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled from 'styled-components';

export const tuple = <T extends string[]>(...args: T) => args;

// Thanks to ReactDOMFactories for this handy list!
const domElements = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',

  // SVG
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
];

const ColumnFixedPlacements = tuple(['left', 'right']);

function styledFactory(
  element?: typeof ColumnFixedPlacements[number] | React.ReactNode,
  interpolations?: string,
) {
  return styled(element || 'div')`
    ${interpolations || ''}
    ${({children, theme, forwardedComponent, forwardedRef, ...style}: any) => styledFormat(style)};
  `;
}

function styleHyphenFormat(cssName: string) {
  return cssName.replace(/[A-Z]/g, (match: string) => '-' + match.toLowerCase());
}

function styledFormat(style: React.CSSProperties) {
  const cssRules = {};
  for (const cssName in style) {
    const cssValue = style[cssName];
    cssRules[styleHyphenFormat(cssName)] = isNumber(cssValue) ? `${cssValue}px` : cssValue;
  }
  return cssRules;
}

function getTag(value: unknown) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

function isObjectLike(value: unknown) {
  return typeof value === 'object' && value !== null
}

function isNumber(value: unknown) {
  return typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) == '[object Number]');
}

export {
  styledFactory
};