import { TestBed } from '@angular/core/testing';

import { ProjectService } from './services.service';

describe('ProjectService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ProjectService = TestBed.get(ProjectService);
        expect(service).toBeTruthy();
    });
});