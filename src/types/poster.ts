export interface ChartItem {
  nameCn: string;
  nameEn?: string;
  pct: number;
  color?: string;
}

export interface ComparisonSubject {
  name: string;
  val1: string; // e.g. length / size
  val2: string; // e.g. weight / speed
}

export interface AnatomyCallout {
  labelCn: string;
  labelEn?: string;
  desc?: string;
  x?: number; // percentage on diagram
  y?: number;
}

export interface ModuleListItem {
  title: string;
  desc: string;
  tag?: string;
  scientific?: string;
}

export interface PosterModule {
  number: string; // "01", "02", ... "09"
  titleCn: string;
  titleEn: string;
  summaryCn: string;
  summaryEn?: string;
  type: 
    | 'size_comparison' 
    | 'anatomy' 
    | 'frequency_motion' 
    | 'bill_microscope' 
    | 'bar_chart' 
    | 'ecg_pulse' 
    | 'route_map' 
    | 'nest_diagram' 
    | 'species_grid'
    | 'generic';
  details?: {
    primaryMetric?: string;
    secondaryMetric?: string;
    tags?: string[];
    chartItems?: ChartItem[];
    comparisonA?: ComparisonSubject;
    comparisonB?: ComparisonSubject;
    listItems?: ModuleListItem[];
    callouts?: AnatomyCallout[];
    frequencyRange?: string;
    phases?: string[];
  };
}

export interface MapLegendItem {
  labelCn: string;
  labelEn?: string;
  color: string;
  value?: string;
}

export interface PosterDistribution {
  titleCn: string;
  titleEn: string;
  regionCn: string;
  regionEn?: string;
  legend: MapLegendItem[];
  footerQuoteCn?: string;
  footerQuoteEn?: string;
  mapType?: 'americas' | 'global' | 'asia' | 'ocean';
}

export interface PosterHero {
  quoteCn: string;
  quoteEn: string;
  badgeTextCn?: string;
  badgeTextEn?: string;
  accentColor?: string;
  customImage?: string;
  illustrationTheme?: string;
}

export interface PosterFooter {
  quoteLeftCn: string;
  quoteLeftEn: string;
  metaCn: string;
  metaEn: string;
}

export interface ColorPalette {
  primary: string; // Deep forest green or slate
  secondary: string;
  accent: string; // Crimson, amber, violet, cyan
  cardBg: string; // Cream off-white or dark glass
  bgTone?: string;
}

export interface PosterData {
  id?: string;
  titleCn: string;
  titleEn: string;
  subTitleCn: string;
  subTitleEn: string;
  taxonomyCn: string;
  taxonomyEn?: string;
  introCn: string;
  introEn?: string;
  keywordsCn?: string;
  keywordsEn?: string;
  distribution: PosterDistribution;
  hero: PosterHero;
  modules: PosterModule[];
  footer: PosterFooter;
  colorPalette: ColorPalette;
}

export type ThemePresetKey = 
  | 'botanical-cream' 
  | 'antique-parchment' 
  | 'deep-forest' 
  | 'obsidian-slate' 
  | 'cyanotype-blue';

export interface ThemeConfig {
  id: ThemePresetKey;
  nameCn: string;
  nameEn: string;
  bgColor: string;
  posterBgClass: string;
  cardBgClass: string;
  textColor: string;
  mutedTextColor: string;
  accentColor: string;
  badgeBg: string;
  paperTextureOverlay: string;
}
