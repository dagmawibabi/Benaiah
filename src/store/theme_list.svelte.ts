import { theme0 } from './themes/theme0.svelte';
import { theme1 } from './themes/theme1.svelte';
import { theme2 } from './themes/theme2.svelte';
import { theme3 } from './themes/theme3.svelte';

export const themeList = $state({
	themes: [theme1, theme2, theme3, theme0,]
});
