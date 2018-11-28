/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { ConfigurationAdapter } from './configuration';
import { Events } from './events';
import { FrameworkAdapter, FrameworkRequest } from './framework';
import { IndexFields } from './index_fields';
import { SourceStatus } from './source_status';
import { SourceConfigurations, Sources } from './sources';

export interface AppDomainLibs {
  events: Events;
  fields: IndexFields;
}

export interface AppBackendLibs extends AppDomainLibs {
  configuration: ConfigurationAdapter<Configuration>;
  framework: FrameworkAdapter;
  sources: Sources;
  sourceStatus: SourceStatus;
}

export interface Configuration {
  enabled: boolean;
  query: {
    partitionSize: number;
    partitionFactor: number;
  };
  sources: SourceConfigurations;
}

export interface Context {
  req: FrameworkRequest;
}
