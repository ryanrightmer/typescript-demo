export interface CmsImage {
  sourceId: string;
  source: string;
  altText: string;
}

export interface CmsIcon {
  sourceId: string;
  iconName: string;
  altText: string;
  fill?: 'disabled' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'white' | 'primary-light' | 'secondary-light' | 'tertiary' | 'tertiary-light' | 'tertiary-dark' | 'text-body' | undefined;
}

export interface CmsLink {
  sourceId: string;
  text: string;
  destination: string;
  icon?: CmsIcon;
}

export interface CmsSimpleHero {
  sourceId: string;
  title: string;
  subTitle?: string;
  image?: CmsImage;
  link?: CmsLink;
  backgroundImage?: CmsImage;
}

export interface CmsCard {
  sourceId: string;
  icon?: CmsIcon;
  headerText: string;
  paragraphText: string;
  link?: CmsLink;
}

export interface CmsSimpleContent {
  sourceId: string;
  title?: string;
  body?: string;
}