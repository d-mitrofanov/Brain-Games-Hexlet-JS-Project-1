#!/usr/bin/env node

import intro from '../src/cli.js';
import brainCalc from '../src/games/calc.js';

const userName = intro();

brainCalc(userName);
