# vue_tooltip_bootstrap5
Vue directive tooltip using bootstrap 5 functions



Use:
```
import Vue from 'vue';
import Tooltip from './src/tooltip_bootstrap.js';

Vue.use(Tooltip)
```

On template
v-tooltip="(string) title"

Example:
```
<div v-tooltip="Hi, this is my tooltip!!">Hover to show tooltip</div>
``` 
Is it possible to use positioning and other parameters from bootstrap 5:
```
<div v-tooltip="Hi, this is my tooltip!!" data-bs-trigger="hover focus" data-bs-placement="right">Hover to show tooltip</div>
```

