import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadQueueComponent } from './file-upload-queue.component';

describe('FileUploadQueueComponent', () => {
  let component: FileUploadQueueComponent;
  let fixture: ComponentFixture<FileUploadQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
