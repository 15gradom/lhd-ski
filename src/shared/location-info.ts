import { RegionInfo } from "./region-info";
import { TvInfo } from "./tv-info";
import { MunicipalityInfo } from "./municipality-info";
import { DistrictInfo } from "./district-info";
import { AreaInfo } from "./area-info";

export class LocationInfo {
    RegionInfo: RegionInfo;
    TvInfo: TvInfo;
    MunicipalityInfo: MunicipalityInfo;
    DistrictInfo: DistrictInfo;
    AreaInfo: AreaInfo;
}