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

export interface FootwearLockSpec {
  isEnforced: boolean; // 强制锁死鞋子不可截断
  shoeType: string; // 如：经典复古低帮黑白板鞋、厚底机能战术靴、德训鞋
  upperMaterial: string; // 头层牛皮 / 麂皮拼接 / 拒水尼龙
  soleSpecs: string; // 3.0cm 耐磨防滑生胶大底 / 气垫中底
  colorWay: string; // 哑光黑面 + 纯白侧边条 + 焦糖底
  headToToeLockPhrase: string; // 强制提示词锁如: "full length head-to-toe shot, entire shoes clearly visible touching the floor, no cropped feet"
}

export interface LookbookColumnItem {
  colIndex: 1 | 2 | 3 | 4;
  shotType: 'headshot' | 'torso' | 'profile' | 'back';
  labelCn: string;
  labelEn: string;
  focusAreaCn: string;
  focusAreaEn: string;
  shotRatio: string;
  keyDetails: string[];
}

export interface LookbookSheetData {
  mode: 'lookbook';
  id: string;
  brandOrTitleCn: string;
  brandOrTitleEn: string;
  seasonTag: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '21:9'; // 默认 16:9 宽画幅
  modelSpecs: {
    genderAge: string;
    expression: string;
    hairgrooming: string;
  };
  footwearLock: FootwearLockSpec; // 显化并锁死鞋子设计
  outfitBreakdown: {
    titleCn: string;
    items: Array<{ nameCn: string; nameEn: string; fabric: string; color: string; fitDesc: string }>;
  };
  lightingStudio: {
    lightingType: string;
    background: string;
    lensSpecs: string;
  };
  columns: [LookbookColumnItem, LookbookColumnItem, LookbookColumnItem, LookbookColumnItem];
  colorPalette: {
    primaryColor: string;
    backgroundGray: string;
    darkBarColor: string;
    swatches: Array<{ name: string; hex: string }>;
  };
  promptBundle: {
    tetradicCollagePrompt: string;
    headshotPrompt: string;
    frontShotPrompt: string;
    profileShotPrompt: string;
    backShotPrompt: string;
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
