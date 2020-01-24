import { TestBed } from '@angular/core/testing';

import { SnowReportService } from './snow-report.service';

describe('SnowReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnowReportService = TestBed.get(SnowReportService);
    expect(service).toBeTruthy();
  });
});
