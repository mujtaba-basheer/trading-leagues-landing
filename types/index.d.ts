export type InfoItemType = {
  heading: string;
  para: string;
};

export type SocialDataItem = {
  title: string;
  url: string;
};

export type CssItemProps = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  rotation: number;
  size: number;
};

export type TabLinkType = {
  title: string;
  key: string;
};

export type LeagueDetailsType = {
  heading: string;
  key: string;
  main: string;
  paras: string[];
  color: string;
  state?: string;
};

export type TypingDetail = {
  w1: string;
  w2: string;
};
