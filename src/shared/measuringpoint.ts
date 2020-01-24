import { WeatherObservation } from "./weather-observation";
import { LocationInfo } from "./location-info";

export class Measuringpoint {
    Id: string;
    FirstImport?: Date;
    LastUpdate: Date;
    Active?: boolean;
    SmgActive?: boolean;
    Shortname: string;
    Gpstype?: string;
    Latitude?: number;
    Longitude?: number;
    Altitude?: number;
    AltitudeUnitofMeasure?: string;
    SnowHeight: string;
    newSnowHeight: string;
    Temperature: string;
    LastSnowDate: Date;
    WeatherObservation: WeatherObservation[];
    LocationInfo?: LocationInfo;
    OwnerId?: string;
    AreaIds?: string[];
}