

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c7605e70.js","_app/immutable/chunks/scheduler.a629d90a.js","_app/immutable/chunks/index.0dcb5595.js"];
export const stylesheets = ["_app/immutable/assets/0.506057c3.css"];
export const fonts = [];
