import { Measuringpoint } from "./measuringpoint";

export class SnowReportBaseData {
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