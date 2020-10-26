import { TestBed } from '@angular/core/testing';

import { UploadImageFireStoreService } from './upload-image-fire-store.service';

describe('UploadImageFireStoreService', () => {
  let service: UploadImageFireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadImageFireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
