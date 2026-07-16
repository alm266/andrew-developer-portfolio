export interface ProjectFact {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface ProjectDecision {
  title: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface ProjectFlowStep {
  label: string;
  detail: string;
}

export interface ProjectDataState {
  label: string;
  scope: string;
  description: string;
}

export interface ProjectOutcome {
  text: string;
  isPlaceholder?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  confidentialityNote?: string;
  facts: ProjectFact[];
  challenge: string;
  contribution: string[];
  decisions: ProjectDecision[];
  dataStateIntro?: string;
  dataStates?: ProjectDataState[];
  flowSectionLabel?: string;
  flowTitle?: string;
  flowIntro?: string;
  flow: ProjectFlowStep[];
  outcomes: ProjectOutcome[];
  reflection: string;
  reflectionIsPlaceholder?: boolean;
  tools: string[];
}
