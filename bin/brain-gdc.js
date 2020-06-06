#!/usr/bin/env node

import intro from '../src/cli.js';
import brainGdc from '../src/games/gdc.js';

const userName = intro();

brainGdc(userName);
