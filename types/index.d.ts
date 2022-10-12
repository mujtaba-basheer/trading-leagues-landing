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
  img_file: string;
  state?: string;
};

export type TypingDetail = {
  w1: string;
  w2: string;
};

export type ApiResponseType = {
  status: "success" | "failure";
  message: string;
  data: number;
  waitlist: number;
  invite: 0 | 1;
};

type FormStatus = "success" | "failure" | "";

export type PopupProps = {
  mobile: string;
  wailist_no: number;
  open_modal: boolean;
  status: [FormStatus, FormStatus, FormStatus];
  loading: [boolean, boolean, boolean];
};
