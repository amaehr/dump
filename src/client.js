import * as sapper from '@sapper/app';

import { Janus } from 'janus-gateway';

Janus.init({
   debug: true,
   dependencies: Janus.useDefaultDependencies(), // or: Janus.useOldDependencies() to get the behaviour of previous Janus versions
   callback: function() {
           console.log("DONE")
           }
   });

sapper.start({
	target: document.querySelector('#sapper')
});