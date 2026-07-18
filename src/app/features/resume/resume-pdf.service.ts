import { Injectable } from '@angular/core';
import { Content, ContentText, TDocumentDefinitions } from 'pdfmake/interfaces';

import {
  ResumeData,
  ResumeExperience,
  ResumeProject,
} from './resume-data';

const ACCENT = '#6a4f2d';
const INK = '#181816';
const MUTED = '#55524d';
const RULE = '#c8c4ba';

export function buildResumePdfDefinition(data: ResumeData): TDocumentDefinitions {
  const projects = [...data.projects].sort(
    (first, second) => (first.pdfOrder || 99) - (second.pdfOrder || 99)
  );

  const content: Content[] = [
    { text: data.contact.name, style: 'name' },
    { text: data.contact.title, style: 'headline' },
    {
      text: [
        data.contact.location,
        { text: '   •   ', color: RULE },
        { text: data.contact.email, link: `mailto:${data.contact.email}` },
        { text: '   •   ', color: RULE },
        { text: data.contact.githubLabel, link: data.contact.githubUrl },
        { text: '   •   ', color: RULE },
        { text: data.contact.linkedinLabel, link: data.contact.linkedinUrl },
      ],
      style: 'contact',
    },
    sectionRule(),
    sectionHeading('Professional summary'),
    { text: data.pdfSummary, style: 'summary' },
    sectionHeading('Technical skills'),
    {
      table: {
        widths: [112, '*'],
        body: data.skillGroups.map((group) => [
          { text: group.label, style: 'skillLabel' },
          { text: group.skills.join(' · '), style: 'skillList' },
        ]),
      },
      layout: 'noBorders',
      margin: [0, 0, 0, 4],
    },
    sectionHeading('Professional experience'),
    ...data.experience.flatMap((entry) => experienceContent(entry)),
    {
      ...sectionHeading('Selected projects'),
      pageBreak: 'before',
    },
    ...projects.flatMap((project) => projectContent(project)),
    sectionHeading('Education'),
    {
      columns: [
        {
          width: '*',
          text: [
            { text: data.education.degree, bold: true },
            ` · ${data.education.secondaryStudy}\n`,
            data.education.institution,
          ],
        },
        {
          width: 'auto',
          text: data.education.graduation,
          alignment: 'right',
          color: MUTED,
        },
      ],
      style: 'education',
    },
    {
      text: data.education.details.map((detail) => `${detail.label}: ${detail.value}`).join('\n'),
      style: 'educationDetail',
    },
  ];

  return {
    info: {
      title: `${data.contact.name} Resume`,
      author: data.contact.name,
      subject: 'Backend-leaning full-stack software engineering resume',
      keywords: 'full-stack engineer, backend, Python, Node.js, Angular, APIs, testing',
    },
    pageSize: 'LETTER',
    pageMargins: [36, 30, 36, 30],
    content,
    defaultStyle: {
      font: 'Roboto',
      fontSize: 8.2,
      lineHeight: 1.14,
      color: INK,
    },
    styles: {
      name: { fontSize: 23, bold: true, color: INK, margin: [0, 0, 0, 2] },
      headline: { fontSize: 10, bold: true, color: ACCENT, margin: [0, 0, 0, 5] },
      contact: { fontSize: 7.2, color: MUTED, margin: [0, 0, 0, 8] },
      sectionHeading: {
        fontSize: 9,
        bold: true,
        color: ACCENT,
        characterSpacing: 0.7,
        margin: [0, 8, 0, 5],
      },
      summary: { fontSize: 8.5, lineHeight: 1.18, margin: [0, 0, 0, 2] },
      skillLabel: { fontSize: 7.6, bold: true, color: INK, margin: [0, 1, 8, 1] },
      skillList: { fontSize: 7.6, color: MUTED, margin: [0, 1, 0, 1] },
      entryTitle: { fontSize: 9, bold: true, color: INK },
      entryDate: { fontSize: 7.5, color: MUTED },
      entryMeta: { fontSize: 7.3, italics: true, color: MUTED, margin: [0, 1, 0, 2] },
      bullets: { fontSize: 7.8, lineHeight: 1.12, margin: [11, 0, 0, 5] },
      projectSummary: { fontSize: 7.8, color: MUTED, margin: [0, 2, 0, 2] },
      tools: { fontSize: 7.2, color: ACCENT, margin: [0, 0, 0, 6] },
      education: { fontSize: 8.2, margin: [0, 0, 0, 3] },
      educationDetail: { fontSize: 7.4, color: MUTED, lineHeight: 1.15 },
    },
    footer: (currentPage: number, pageCount: number) => ({
      columns: [
        { text: data.contact.name },
        { text: `${currentPage} / ${pageCount}`, alignment: 'right' },
      ],
      margin: [36, 10, 36, 0],
      fontSize: 6.8,
      color: '#77736c',
    }),
  };
}

@Injectable({ providedIn: 'root' })
export class ResumePdfService {
  async download(data: ResumeData): Promise<void> {
    const [pdfMake, fontModule] = await Promise.all([
      import('pdfmake/build/pdfmake'),
      import('pdfmake/build/vfs_fonts'),
    ]);

    const virtualFileSystem = resolveVirtualFileSystem(fontModule);

    await new Promise<void>((resolve) => {
      pdfMake
        .createPdf(buildResumePdfDefinition(data), undefined, undefined, virtualFileSystem)
        .download('Andrew_Marshall_Full_Stack_Resume.pdf', resolve);
    });
  }
}

export function resolveVirtualFileSystem(fontModule: unknown): Record<string, string> {
  if (!isRecord(fontModule)) {
    throw new Error('The PDF font bundle could not be loaded.');
  }

  const defaultExport = fontModule['default'];
  const virtualFileSystem = isRecord(defaultExport) ? defaultExport : fontModule;

  if (typeof virtualFileSystem['Roboto-Medium.ttf'] !== 'string') {
    throw new Error('The PDF font bundle is missing the required Roboto fonts.');
  }

  return virtualFileSystem as Record<string, string>;
}

function sectionHeading(text: string): ContentText {
  return { text: text.toUpperCase(), style: 'sectionHeading' };
}

function sectionRule(): Content {
  return {
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 0,
        x2: 540,
        y2: 0,
        lineWidth: 0.6,
        lineColor: RULE,
      },
    ],
  };
}

function experienceContent(entry: ResumeExperience): Content[] {
  return [
    {
      columns: [
        {
          width: '*',
          text: `${entry.role} — ${entry.company}`,
          style: 'entryTitle',
        },
        {
          width: 'auto',
          text: entry.dateRange,
          style: 'entryDate',
          alignment: 'right',
        },
      ],
    },
    { text: entry.location, style: 'entryMeta' },
    { ul: selectedHighlights(entry), style: 'bullets' },
  ];
}

function projectContent(project: ResumeProject): Content[] {
  return [
    {
      columns: [
        {
          width: '*',
          text: `${project.name} — ${project.role}`,
          style: 'entryTitle',
        },
        {
          width: 'auto',
          text: project.dateRange,
          style: 'entryDate',
          alignment: 'right',
        },
      ],
      margin: [0, 0, 0, 1],
    },
    { text: project.description, style: 'projectSummary' },
    { ul: selectedHighlights(project), style: 'bullets' },
    { text: project.tools.join(' · '), style: 'tools' },
  ];
}

function selectedHighlights(
  entry: Pick<ResumeExperience | ResumeProject, 'highlights' | 'pdfHighlightIndexes'>
): string[] {
  if (!entry.pdfHighlightIndexes) {
    return [...entry.highlights];
  }

  return entry.pdfHighlightIndexes
    .map((index) => entry.highlights[index])
    .filter((highlight): highlight is string => Boolean(highlight));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
