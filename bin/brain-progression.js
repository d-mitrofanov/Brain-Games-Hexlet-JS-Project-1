#!/usr/bin/env node

import intro from '../src/cli.js';
import brainProgression from '../src/games/progression.js';

const userName = intro();

brainProgression(userName);
