export interface ChartItem {
  nameCn: string;
  nameEn?: string;
  pct: number;
  color?: string;
}

export interface ComparisonSubject {
  name: string;
  val1: string;
  val2: string;
}

export interface AnatomyCallout {
  labelCn: string;
  labelEn?: string;
  desc?: string;
  x?: number;
  y?: number;
}

export interface ModuleListItem {
  title: string;
  desc: string;
  tag?: string;
  scientific?: string;
}

export interface PosterModule {
  number: string;
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
  primary: string;
  secondary: string;
  accent: string;
  cardBg: string;
  bgTone?: string;
}

export interface PosterData {
  mode?: 'nature' | 'character' | 'lookbook';
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

// ==========================================
// 角色设定集 (Character Concept Design Sheet)
// ==========================================

export interface CostumeLayerItem {
  nameCn: string;
  nameEn: string;
  order: number;
  fabric: string;
  colorDesc: string;
  features: string;
  icon?: string;
}

export interface MaterialDetailItem {
  id: string;
  titleCn: string;
  titleEn: string;
  textureType: 'embroidery' | 'jacquard' | 'sheer' | 'accessory' | 'footwear' | 'weapon';
  description: string;
  highlightColor: string;
  magnification?: string;
}

export interface CharacterDesignSheetData {
  mode: 'character';
  id: string;
  characterNameCn: string;
  characterNameEn: string;
  titleCn: string;
  titleEn: string;
  identityTag: string;
  quoteCn: string;
  quoteEn: string;
  eraOrStyle: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    inkTone: string;
    paperTone: string;
    swatches: Array<{ name: string; hex: string }>;
  };
  views: {
    dynamicPose: {
      titleCn: string;
      titleEn: string;
      desc: string;
      stanceNotes: string[];
      weaponOrProp: string;
    };
    auxiliaryViews: {
      titleCn: string;
      titleEn: string;
      sideNotes: string;
      backNotes: string;
    };
  };
  costumeDeconstruction: {
    titleCn: string;
    titleEn: string;
    intro: string;
    layers: CostumeLayerItem[];
  };
  materialGrid: {
    titleCn: string;
    titleEn: string;
    items: MaterialDetailItem[];
  };
  sealText: string;
  artDirectionNotes: string;
  promptBundle: {
    fullSheetPrompt: string;
    dynamicPosePrompt: string;
    turnaroundPrompt: string;
    materialMacroPrompt: string;
  };
}

// ==========================================
// 电商模特拍摄规范图 (Lookbook Tetradic Sheet)
// ==========================================

export interface LookbookColumnItem {
  colIndex: 1 | 2 | 3 | 4;
  shotType: 'headshot' | 'torso' | 'profile' | 'back';
  labelCn: string; // e.g. "大头照 (正面)", "正面半身/全身", "侧面照 (轮廓)", "背面照 (背影)"
  labelEn: string; // "Headshot (Frontal Focus)", "Torso / Full Body Front", "Profile / Side Silhouette", "Back View / Rear Fit"
  focusAreaCn: string; // 重点展示：面部表情、帽子帽檐、衣领高度
  focusAreaEn: string;
  shotRatio: string; // "1:1 Close-up", "3:4 Full Body", etc.
  keyDetails: string[];
}

export interface LookbookSheetData {
  mode: 'lookbook';
  id: string;
  brandOrTitleCn: string; // e.g. "2024 夏季基础款工装全套打版展示"
  brandOrTitleEn: string; // "Urban Techwear Minimalist Lookbook Sheet"
  seasonTag: string; // "SS24 ESSENTIALS / 商业打版规范"
  modelSpecs: {
    genderAge: string; // "亚洲男性青年 / 身高185cm / 穿L码"
    expression: string; // "中性克制表情，直视或自然微侧"
    hairgrooming: string; // "清爽短发配极简黑色鸭舌帽"
  };
  outfitBreakdown: {
    titleCn: string;
    items: Array<{ nameCn: string; nameEn: string; fabric: string; color: string; fitDesc: string }>;
  };
  lightingStudio: {
    lightingType: string; // "影棚双侧八角柔光箱 (Softbox Diffused Lighting)"
    background: string; // "中性灰白无影墙 (#e4e7eb)"
    lensSpecs: string; // "85mm f/5.6 人像定焦 · 零透视畸变"
  };
  columns: [LookbookColumnItem, LookbookColumnItem, LookbookColumnItem, LookbookColumnItem];
  colorPalette: {
    primaryColor: string;
    backgroundGray: string;
    darkBarColor: string;
    swatches: Array<{ name: string; hex: string }>;
  };
  promptBundle: {
    tetradicCollagePrompt: string; // 四联总拼图 Prompt
    headshotPrompt: string; // 单独大头照 Prompt
    frontShotPrompt: string; // 单独正面照 Prompt
    profileShotPrompt: string; // 单独侧面照 Prompt
    backShotPrompt: string; // 单独背面照 Prompt
  };
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
