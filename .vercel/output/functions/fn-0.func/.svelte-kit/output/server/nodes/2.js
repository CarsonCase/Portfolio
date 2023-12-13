

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9b10f254.js","_app/immutable/chunks/scheduler.a629d90a.js","_app/immutable/chunks/index.0dcb5595.js","_app/immutable/chunks/paths.26c4ee27.js"];
export const stylesheets = ["_app/immutable/assets/2.d3060d6f.css"];
export const fonts = [];
