#!/usr/bin/env node

import intro from '../src/cli.js';
import brainPrime from '../src/games/prime.js';

const userName = intro();

brainPrime(userName);
