

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.31894cc6.js","_app/immutable/chunks/scheduler.a629d90a.js","_app/immutable/chunks/index.0dcb5595.js","_app/immutable/chunks/singletons.fb01cbc6.js","_app/immutable/chunks/paths.26c4ee27.js"];
export const stylesheets = [];
export const fonts = [];
