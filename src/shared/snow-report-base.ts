export interface WeatherStatus {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface WeatherObservation {
    Id: string;
    Level: string;
    LevelId: string;
    WeatherStatus: WeatherStatus;
}

export interface Measuringpoint {
    Id: string;
    LastUpdate: Date;
    Shortname: string;
    SnowHeight: string;
    newSnowHeight: string;
    Temperature: string;
    LastSnowDate: Date;
    WeatherObservation: WeatherObservation[];
}

export interface SnowReportBase {
    Id: number;
    RID: string;
    Skiregion: string;
    Areaname: string;
    LastUpdate: Date;
    lang: string;
    SkiAreaSlopeKm: string;
    SkiMapUrl: string;
    Measuringpoints: Measuringpoint[];
    WebcamUrl: string[];
    totalskilift: string;
    openskilift: string;
    totalskiliftkm: string;
    openskiliftkm: string;
    totalskislopes: string;
    openskislopes: string;
    totalskislopeskm: string;
    openskislopeskm: string;
    totaltracks: string;
    opentracks: string;
    totaltrackskm: string;
    opentrackskm: string;
    totalslides: string;
    opentslides: string;
    totalslideskm: string;
    opentslideskm: string;
    totaliceskating: string;
    openiceskating: string;
    contactadress: string;
    contacttel: string;
    contactcap: string;
    contactcity: string;
    contactfax: string;
    contactweburl: string;
    contactmail: string;
    contactlogo: string;
    contactgpsnorth: string;
    contactgpseast: string;
}