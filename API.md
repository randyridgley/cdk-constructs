# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3DeliveryPipeline <a name="S3DeliveryPipeline" id="@randyridgley/cdk-constructs.S3DeliveryPipeline"></a>

#### Initializers <a name="Initializers" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer"></a>

```typescript
import { S3DeliveryPipeline } from '@randyridgley/cdk-constructs'

new S3DeliveryPipeline(scope: Construct, id: string, props: DeliveryPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps">DeliveryPipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps">DeliveryPipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.isConstruct"></a>

```typescript
import { S3DeliveryPipeline } from '@randyridgley/cdk-constructs'

S3DeliveryPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.property.deliveryStream">deliveryStream</a></code> | <code>aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.property.firehoseLogGroup">firehoseLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.property.processedTable">processedTable</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.S3DeliveryPipeline.property.rawTable">rawTable</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: CfnDeliveryStream;
```

- *Type:* aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream

---

##### `firehoseLogGroup`<sup>Required</sup> <a name="firehoseLogGroup" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.property.firehoseLogGroup"></a>

```typescript
public readonly firehoseLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

---

##### `processedTable`<sup>Required</sup> <a name="processedTable" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.property.processedTable"></a>

```typescript
public readonly processedTable: CfnTable;
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@randyridgley/cdk-constructs.S3DeliveryPipeline.property.rawTable"></a>

```typescript
public readonly rawTable: CfnTable;
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable

---


### SecureBucket <a name="SecureBucket" id="@randyridgley/cdk-constructs.SecureBucket"></a>

#### Initializers <a name="Initializers" id="@randyridgley/cdk-constructs.SecureBucket.Initializer"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

new SecureBucket(scope: Construct, id: string, props: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_s3.BucketProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@randyridgley/cdk-constructs.SecureBucket.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@randyridgley/cdk-constructs.SecureBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@randyridgley/cdk-constructs.SecureBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@randyridgley/cdk-constructs.SecureBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@randyridgley/cdk-constructs.SecureBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@randyridgley/cdk-constructs.SecureBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@randyridgley/cdk-constructs.SecureBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@randyridgley/cdk-constructs.SecureBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@randyridgley/cdk-constructs.SecureBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@randyridgley/cdk-constructs.SecureBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@randyridgley/cdk-constructs.SecureBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@randyridgley/cdk-constructs.SecureBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@randyridgley/cdk-constructs.SecureBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@randyridgley/cdk-constructs.SecureBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@randyridgley/cdk-constructs.SecureBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@randyridgley/cdk-constructs.SecureBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@randyridgley/cdk-constructs.SecureBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

   arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@randyridgley/cdk-constructs.SecureBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@randyridgley/cdk-constructs.SecureBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@randyridgley/cdk-constructs.SecureBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@randyridgley/cdk-constructs.SecureBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

     const grant = bucket.grantPublicAccess();
     grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@randyridgley/cdk-constructs.SecureBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@randyridgley/cdk-constructs.SecureBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@randyridgley/cdk-constructs.SecureBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="@randyridgley/cdk-constructs.SecureBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling {@link grantWrite} or {@link grantReadWrite} no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@randyridgley/cdk-constructs.SecureBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="@randyridgley/cdk-constructs.SecureBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the {@link grantPutAcl} method.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@randyridgley/cdk-constructs.SecureBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the {@link grantPutAcl} method.

###### `identity`<sup>Required</sup> <a name="identity" id="@randyridgley/cdk-constructs.SecureBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@randyridgley/cdk-constructs.SecureBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@randyridgley/cdk-constructs.SecureBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@randyridgley/cdk-constructs.SecureBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@randyridgley/cdk-constructs.SecureBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@randyridgley/cdk-constructs.SecureBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@randyridgley/cdk-constructs.SecureBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@randyridgley/cdk-constructs.SecureBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@randyridgley/cdk-constructs.SecureBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@randyridgley/cdk-constructs.SecureBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@randyridgley/cdk-constructs.SecureBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@randyridgley/cdk-constructs.SecureBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@randyridgley/cdk-constructs.SecureBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@randyridgley/cdk-constructs.SecureBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@randyridgley/cdk-constructs.SecureBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@randyridgley/cdk-constructs.SecureBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@randyridgley/cdk-constructs.SecureBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@randyridgley/cdk-constructs.SecureBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@randyridgley/cdk-constructs.SecureBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@randyridgley/cdk-constructs.SecureBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@randyridgley/cdk-constructs.SecureBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable {@link IBucket} based on a low-level {@link CfnBucket}. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@randyridgley/cdk-constructs.SecureBucket.isConstruct"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@randyridgley/cdk-constructs.SecureBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@randyridgley/cdk-constructs.SecureBucket.isOwnedResource"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@randyridgley/cdk-constructs.SecureBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@randyridgley/cdk-constructs.SecureBucket.isResource"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@randyridgley/cdk-constructs.SecureBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketArn"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketAttributes"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketName"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@randyridgley/cdk-constructs.SecureBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@randyridgley/cdk-constructs.SecureBucket.fromCfnBucket"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable {@link IBucket} based on a low-level {@link CfnBucket}.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@randyridgley/cdk-constructs.SecureBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@randyridgley/cdk-constructs.SecureBucket.validateBucketName"></a>

```typescript
import { SecureBucket } from '@randyridgley/cdk-constructs'

SecureBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@randyridgley/cdk-constructs.SecureBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@randyridgley/cdk-constructs.SecureBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="@randyridgley/cdk-constructs.SecureBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@randyridgley/cdk-constructs.SecureBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@randyridgley/cdk-constructs.SecureBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@randyridgley/cdk-constructs.SecureBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@randyridgley/cdk-constructs.SecureBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@randyridgley/cdk-constructs.SecureBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@randyridgley/cdk-constructs.SecureBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


## Structs <a name="Structs" id="Structs"></a>

### DeliveryPipelineProps <a name="DeliveryPipelineProps" id="@randyridgley/cdk-constructs.DeliveryPipelineProps"></a>

#### Initializer <a name="Initializer" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.Initializer"></a>

```typescript
import { DeliveryPipelineProps } from '@randyridgley/cdk-constructs'

const deliveryPipelineProps: DeliveryPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.baseTableName">baseTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.database">database</a></code> | <code>@aws-cdk/aws-glue-alpha.Database</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.processedColumns">processedColumns</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.rawColumns">rawColumns</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.timestampColumn">timestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.processedPartitions">processedPartitions</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.rawPartitions">rawPartitions</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]</code> | *No description.* |
| <code><a href="#@randyridgley/cdk-constructs.DeliveryPipelineProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.Stream</code> | *No description.* |

---

##### `baseTableName`<sup>Required</sup> <a name="baseTableName" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.baseTableName"></a>

```typescript
public readonly baseTableName: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `database`<sup>Required</sup> <a name="database" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.database"></a>

```typescript
public readonly database: Database;
```

- *Type:* @aws-cdk/aws-glue-alpha.Database

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `processedColumns`<sup>Required</sup> <a name="processedColumns" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.processedColumns"></a>

```typescript
public readonly processedColumns: ColumnProperty[];
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]

---

##### `rawColumns`<sup>Required</sup> <a name="rawColumns" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.rawColumns"></a>

```typescript
public readonly rawColumns: ColumnProperty[];
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: string;
```

- *Type:* string

---

##### `processedPartitions`<sup>Optional</sup> <a name="processedPartitions" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.processedPartitions"></a>

```typescript
public readonly processedPartitions: ColumnProperty[];
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]

---

##### `rawPartitions`<sup>Optional</sup> <a name="rawPartitions" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.rawPartitions"></a>

```typescript
public readonly rawPartitions: ColumnProperty[];
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable.ColumnProperty[]

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@randyridgley/cdk-constructs.DeliveryPipelineProps.property.stream"></a>

```typescript
public readonly stream: Stream;
```

- *Type:* aws-cdk-lib.aws_kinesis.Stream

---



