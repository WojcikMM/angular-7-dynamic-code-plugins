import { TestBed } from '@angular/core/testing';

import { PluginBService } from './plugin-b.service';

describe('PluginBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PluginBService = TestBed.get(PluginBService);
    expect(service).toBeTruthy();
  });
});
