import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="stylesheet" href="https://unpkg.com/7.css"> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
