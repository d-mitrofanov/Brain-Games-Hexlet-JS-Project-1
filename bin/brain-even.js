#!/usr/bin/env node

import intro from '../src/cli.js';
import brainEven from '../src/games/even.js';

const userName = intro();

brainEven(userName);