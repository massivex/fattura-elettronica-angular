import { UploaderModule } from './uploader.module';

describe('UploaderModule', () => {
  let uploaderModule: UploaderModule;

  beforeEach(() => {
    uploaderModule = new UploaderModule();
  });

  it('should create an instance', () => {
    expect(uploaderModule).toBeTruthy();
  });
});
