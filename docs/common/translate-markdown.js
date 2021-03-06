import { H2, H3, H4 } from '~/components/base/headings';
import { PDIV, P, Quote } from '~/components/base/paragraph';
import { UL, OL, LI } from '~/components/base/list';
import { Code, InlineCode } from '~/components/base/code';
import { ExternalLink } from '~/components/base/link';
import { ExpoKitDetails, BareWorkflowDetails } from '~/components/base/details';

import Permalink from '~/components/Permalink';

const createPermalinkedComponent = (BaseComponent, customIconStyle) => {
  return ({ children }) => (
    <Permalink customIconStyle={customIconStyle}>
      <BaseComponent>{children}</BaseComponent>
    </Permalink>
  );
};

export const p = PDIV;
export const strong = P.B;
export const ul = UL;
export const li = LI;
export const ol = OL;
export const h2 = createPermalinkedComponent(H2);
export const h3 = createPermalinkedComponent(H3);
export const h4 = createPermalinkedComponent(H4);
export const code = Code;
export const inlineCode = InlineCode;
export const a = ExternalLink;
export const blockquote = Quote;
export const expokitDetails = ExpoKitDetails;
export const bareworkflowDetails = BareWorkflowDetails;
export const subpropertyAnchor = createPermalinkedComponent(PDIV, { left: -44, top: -8 });
export const propertyAnchor = createPermalinkedComponent(PDIV, { top: -8 });
