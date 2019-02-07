import { TestBed } from '@angular/core/testing';

import { BackerService } from './backer.service';

describe('BackerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BackerService = TestBed.get(BackerService);
        expect(service).toBeTruthy();
    });
});