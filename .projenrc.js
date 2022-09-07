const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@randyridgley/cdk-constructs',
  repositoryUrl: 'https://github.com/randyridgley/cdk-constructs.git',
  author: 'randy.ridgley@gmail.com',
  description: 'High-level constructs.',
  packageName: '@randyridgley/cdk-constructs',

  deps: [
    'aws-cdk-lib@2.40.0',
    '@aws-cdk/aws-glue-alpha@2.40.0-alpha.0',
    'constructs@10.1.94',
    'cdk-nag@2.18.2',
  ],
  peerDeps: [
    '@aws-cdk/aws-glue-alpha@2.40.0-alpha.0',
  ],
  releaseToNpm: true,
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true,

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();