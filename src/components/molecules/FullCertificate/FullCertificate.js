import { html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/lib/unsafe-html.js';
import CSS from './_components.full-certificate-css';
import '../../atoms/CertificateDetails/index';
import '../../atoms/FullCertificateV1';

function renderDisplayHTML (displayHTML) {
  return html`<section class='buv-c-full-certificate'>${unsafeHTML(displayHTML)}</section>`;
}

export default function FullCertificate ({
  hasCertificateDefinition,
  displayHTML
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  return html`
    ${CSS}
    ${displayHTML ? renderDisplayHTML(displayHTML) : html`<buv-full-certificate-v1></buv-full-certificate-v1>`}
    <buv-certificate-details></buv-certificate-details>
  `;
}
