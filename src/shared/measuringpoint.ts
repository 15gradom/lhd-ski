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

export interface Name {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface RegionInfo {
    Id: string;
    Name: Name;
}

export interface Name2 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface TvInfo {
    Id: string;
    Name: Name2;
}

export interface Name3 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface MunicipalityInfo {
    Id: string;
    Name: Name3;
}

export interface Name4 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface DistrictInfo {
    Id: string;
    Name: Name4;
}

export interface Name5 {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface AreaInfo {
    Id: string;
    Name: Name5;
}

export interface LocationInfo {
    RegionInfo: RegionInfo;
    TvInfo: TvInfo;
    MunicipalityInfo: MunicipalityInfo;
    DistrictInfo: DistrictInfo;
    AreaInfo: AreaInfo;
}

export interface MeasuringPoint {
    Id: string;
    FirstImport: Date;
    LastUpdate: Date;
    Active: boolean;
    SmgActive: boolean;
    Shortname: string;
    Gpstype: string;
    Latitude: number;
    Longitude: number;
    Altitude: number;
    AltitudeUnitofMeasure: string;
    SnowHeight: string;
    newSnowHeight: string;
    Temperature: string;
    LastSnowDate: Date;
    WeatherObservation: WeatherObservation[];
    LocationInfo: LocationInfo;
    OwnerId: string;
    AreaIds: string[];
}