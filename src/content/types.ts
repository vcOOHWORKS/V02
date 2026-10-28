// Rich-text blocks shared by the legal pages and journal articles.
export type Block =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  // A highlighted aside, e.g. "see a doctor if…"
  | { note: string };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};
