import * as pdfMake from 'pdfmake/build/pdfmake';
import * as virtualFileSystem from 'pdfmake/build/vfs_fonts';

import { RESUME_DATA } from './resume-data';
import { buildResumePdfDefinition, resolveVirtualFileSystem } from './resume-pdf.service';

describe('ResumePdfService document', () => {
  it('should resolve fonts from the wrapped shape produced by a lazy browser import', () => {
    const wrappedFonts = { default: virtualFileSystem };

    expect(resolveVirtualFileSystem(wrappedFonts)['Roboto-Medium.ttf']).toBeTruthy();
    expect(resolveVirtualFileSystem(virtualFileSystem)['Roboto-Regular.ttf']).toBeTruthy();
  });

  it('should build a two-page, backend-leaning document from the shared résumé data', (done) => {
    const definition = buildResumePdfDefinition(RESUME_DATA);
    const serialized = JSON.stringify(definition);

    expect(definition.pageSize).toBe('LETTER');
    expect(serialized).toContain(RESUME_DATA.contact.email);
    expect(serialized).toContain(RESUME_DATA.pdfSummary);
    expect(serialized.indexOf('Order Approval Tool')).toBeLessThan(
      serialized.indexOf('Therapy with Ruth Website')
    );

    const content = definition.content as Array<{ text?: string; pageBreak?: string }>;
    const projectHeading = content.find((item) => item.text === 'SELECTED PROJECTS');

    expect(projectHeading?.pageBreak).toBe('before');

    definition.compress = false;
    pdfMake.createPdf(definition, undefined, undefined, virtualFileSystem).getBuffer((buffer) => {
      const pdfText = new TextDecoder('latin1').decode(new Uint8Array(buffer));
      const pageCount = pdfText.match(/\/Type\s*\/Page\b/g)?.length || 0;

      expect(pageCount).toBe(2);
      done();
    });
  });
});
