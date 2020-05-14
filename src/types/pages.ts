import { CmsSimpleHero, CmsLink, CmsImage, CmsCard, CmsSimpleContent } from "./cms";

export interface CmsResult {
  contentType: string;
  content: CMSPages;
}

export type CMSPages = CmsHomePage | CmsSimplePage;

export interface CmsHomePage {
  pageTitle: string;
  covidHero?: CmsSimpleHero;
  leftHeroText: string;
  leftHeroButtonLink: CmsLink;
  rightHeroText: string;
  rightHeroButtonLink: CmsLink;
  heroImage: CmsImage;
  textBelowSplitHero: string;
  midPageContentLeft: CmsCard;
  midPageContentRight: CmsCard;
  contactSectionHeaderText: string;
  contactSectionSubHeaderText: string;
  contactSectionContentLeft: CmsCard;
  contactSectionContentRight: CmsCard;
}


export interface CmsSimplePage {
  pageTitle: string;
  sourceId: string;
  hero: CmsSimpleHero;
  content: CmsSimpleContent;
}