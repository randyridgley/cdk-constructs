import { App, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { SecureBucket } from '../../src/';

test('Check Bucket', () => {
  let app: App;

  app = new App();
  const stack = new Stack(app, 'testing-stack');
  const bucket = new SecureBucket(stack, 'test-bucket', {});

  expect(bucket).toBeInstanceOf(Bucket);
});