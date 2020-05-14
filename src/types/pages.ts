import { CmsSimpleHero, CmsLink, CmsImage, CmsCard, CmsSimpleContent } from "./cms";

export interface CmsResult {
  contentType: string;
  content: CmsHomePage;
}

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
