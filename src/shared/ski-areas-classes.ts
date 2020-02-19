export interface Area {
    Id: string;
    Self: string;
}

export interface Cs {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface De {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface En {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface Fr {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface It {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText: string;
    AdditionalText?: any;
}

export interface Nl {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface Pl {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface Ru {
    Title: string;
    Header: string;
    BaseText: string;
    Keywords?: any;
    Language: string;
    MetaDesc: string;
    IntroText: string;
    MetaTitle: string;
    SubHeader: string;
    GetThereText?: any;
    AdditionalText?: any;
}

export interface Detail {
    cs: Cs;
    de: De;
    en: En;
    fr: Fr;
    it: It;
    nl: Nl;
    pl: Pl;
    ru: Ru;
}

export interface GpsInfo {
    Gpstype: string;
    Altitude?: any;
    Latitude: number;
    Longitude: number;
    AltitudeUnitofMeasure: string;
}

export interface Webcamname {
    cs: string;
    de: string;
    en: string;
    fr: string;
    it: string;
    nl: string;
    pl: string;
    ru: string;
}

export interface Webcam {
    GpsInfo: GpsInfo;
    WebcamId: string;
    Webcamurl: string;
    Webcamname: Webcamname;
    ListPosition?: any;
}

export interface OdhTag {
    Id: string;
    Self: string;
}

export interface Region {
    Id: string;
    Self: string;
}

export interface SkiRegion {
    Id: string;
    Self: string;
}

export interface Cs2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface De2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface En2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface Fr2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface It2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface Nl2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface Pl2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface Ru2 {
    Tax?: any;
    Url: string;
    Vat?: any;
    City: string;
    Email: string;
    Address: string;
    LogoUrl: string;
    Surname?: any;
    ZipCode: string;
    Language: string;
    Faxnumber?: any;
    Givenname?: any;
    NamePrefix?: any;
    CompanyName: string;
    CountryCode: string;
    CountryName: string;
    Phonenumber: string;
}

export interface ContactInfos {
    cs: Cs2;
    de: De2;
    en: En2;
    fr: Fr2;
    it: It2;
    nl: Nl2;
    pl: Pl2;
    ru: Ru2;
}

export interface Name {
    cs: string;
    de: string;
    en: string;
    fr: string;
    it: string;
    nl: string;
    pl: string;
    ru: string;
}

export interface TvInfo {
    Id: string;
    Name: Name;
    Self: string;
}

export interface Name2 {
    cs: string;
    de: string;
    en: string;
    fr: string;
    it: string;
    nl: string;
    pl: string;
    ru: string;
}

export interface RegionInfo {
    Id: string;
    Name: Name2;
    Self: string;
}

export interface LocationInfo {
    TvInfo: TvInfo;
    AreaInfo?: any;
    RegionInfo: RegionInfo;
    DistrictInfo?: any;
    MunicipalityInfo?: any;
}

export interface SkiRegionName {
    cs: string;
    de: string;
    en: string;
    fr: string;
    it: string;
    nl: string;
    pl: string;
    ru: string;
}

export interface OperationscheduleName {
    cs: string;
    de: string;
    en: string;
    it: string;
    nl: string;
    pl: string;
}

export interface OperationSchedule {
    Stop: Date;
    Type: string;
    Start: Date;
    OperationScheduleTime: any[];
    OperationscheduleName: OperationscheduleName;
    ClosedonPublicHolidays?: any;
}

export interface TourismAssociation {
    Id: string;
    Self: string;
}

export interface SkiArea {
    Id: string;
    Self: string;
    Areas: Area[];
    Active: boolean;
    AreaId: string[];
    Detail: Detail;
    Webcam: Webcam[];
    Gpstype: string;
    OdhTags: OdhTag[];
    Regions: Region[];
    SmgTags: string[];
    Altitude?: any;
    CustomId?: any;
    Latitude: number;
    LiftCount: string;
    Longitude: number;
    OdhActive: boolean;
    RegionIds: string[];
    Shortname: string;
    SkiRegion: SkiRegion;
    SmgActive: boolean;
    AltitudeTo: number;
    GpsPolygon?: any;
    LastChange: Date;
    SlopeKmRed: string;
    HasLanguage: string[];
    SkiRegionId: string;
    SlopeKmBlue: string;
    AltitudeFrom: number;
    ContactInfos: ContactInfos;
    ImageGallery: any[];
    LocationInfo: LocationInfo;
    SlopeKmBlack: string;
    TotalSlopeKm: string;
    SkiAreaMapURL: string;
    SkiRegionName: SkiRegionName;
    TourismvereinIds: string[];
    OperationSchedule: OperationSchedule[];
    TourismAssociations: TourismAssociation[];
    AltitudeUnitofMeasure: string;
}