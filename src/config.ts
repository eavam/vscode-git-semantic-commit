import { workspace } from 'vscode';

import { extensionIdentifier } from './constants';

const getConfiguration = () => workspace.getConfiguration(extensionIdentifier);

enum ConfigurationProperties {
  commitOptions = 'commitOptions',
  preserveScope = 'preserveScope',
  stageAll = 'stageAll',
  types = 'types'
}

export { getConfiguration, ConfigurationProperties };
