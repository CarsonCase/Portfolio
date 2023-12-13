import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import "sse.js";
const GalleryWindowContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Hello world" } = $$props;
  let { src = "https://i.chzbgr.com/full/9784437760/h01FE6466/hamster" } = $$props;
  let { link = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div style="width:600px;" class="container"><div class="flex justify-center py-5"><div class="wordart rainbow"><span class="text">${escape(text)}</span></div></div> <img style="width:600px; height:500px;"${add_attribute("src", src, 0)} alt=""> ${slots.default ? slots.default({}) : ``} <a${add_attribute("href", link, 0)} target="_blank" class="button w-full"><button data-svelte-h="svelte-1mb09gz">Check it out</button></a></div>`;
});
const Window_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".draggable.svelte-a5qxa8{user-select:none;cursor:move;border:solid 1px gray;position:absolute}",
  map: null
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { onClose = function() {
  } } = $$props;
  let left = 0;
  let top = 0;
  let windowElement;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$1);
  return `<section style="${"left: " + escape(left, true) + "px; top: " + escape(top, true) + "px;"}" class="draggable svelte-a5qxa8"${add_attribute("this", windowElement, 0)}><div class="window active" style=""><div class="title-bar"><div class="title-bar-text">${escape(text)}</div> <div class="title-bar-controls"><button aria-label="Close"></button></div></div> <div class="window-body has-space">${slots.default ? slots.default({}) : ``}</div></div></section> `;
});
const DesktopIcon_svelte_svelte_type_style_lang = "";
const css = {
  code: ".outlined-text.svelte-1arutq3{color:white;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}",
  map: null
};
const DesktopIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const PATH = `${base}/static/icons/`;
  let { src = "Windows 7 Folder.png" } = $$props;
  let { display = false } = $$props;
  let { text = "My Folder" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="p-5 flex"><div><img${add_attribute("src", PATH + src, 0)} alt=""> <p class="outlined-text text-center text-md svelte-1arutq3">${escape(text)}</p></div></div> ${display ? `${validate_component(Window, "Window").$$render(
    $$result,
    {
      text,
      onClose() {
        display = false;
      }
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}` : ``}`;
});
const AIChatWindowContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chatMessages = [];
  let scrollToDiv;
  return `<div class="h-[500px] w-[600px] overflow-y-auto flex flex-col justify-end"><div class="container">${chatMessages.length == 0 ? `<div class="p-4 opacity-50" data-svelte-h="svelte-m3dnmf"><div class="wordart rainbow"><span class="text">AI Chatbot</span></div> <p>It&#39;s like I&#39;m right here with you...</p></div>` : ``} ${each(chatMessages, (message) => {
    return `<div role="tooltip" class="is-top is-right px-2 my-5">${escape(message.content)} </div>`;
  })} ${``} ${``}</div> <div class=""><div><form><textarea class="w-full" name="" id="" cols="30" rows="7" placeholder="Enter prompt here...">${escape("")}</textarea> <button class="my-2" type="submit" data-svelte-h="svelte-5u6hsh">Submit</button></form></div></div> <div${add_attribute("this", scrollToDiv, 0)}></div></div>`;
});
const MenuBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul role="menubar" class="can-hover" data-svelte-h="svelte-1i3qv7b"><li role="menuitem" tabindex="0" aria-haspopup="true">File
    <ul role="menu"><li role="menuitem"><a href="#menubar">Open <span>Ctrl+O</span></a></li> <li role="menuitem"><a href="#menubar">Save <span>Ctrl+S</span></a></li> <li role="menuitem" class="has-divider"><a href="#menubar">Save As... <span>Ctrl+Shift+S</span></a></li> <li role="menuitem"><a href="#menubar">Exit</a></li></ul></li> <li role="menuitem" tabindex="0" aria-haspopup="true">Edit
    <ul role="menu"><li role="menuitem"><a href="#menubar">Undo</a></li> <li role="menuitem"><a href="#menubar">Copy</a></li> <li role="menuitem"><a href="#menubar">Cut</a></li> <li role="menuitem" class="has-divider"><a href="#menubar">Paste</a></li> <li role="menuitem"><a href="#menubar">Delete</a></li> <li role="menuitem"><a href="#menubar">Find...</a></li> <li role="menuitem"><a href="#menubar">Replace...</a></li> <li role="menuitem"><a href="#menubar">Go to...</a></li></ul></li> <li role="menuitem" tabindex="0" aria-haspopup="true">View
    <ul role="menu"><li role="menuitem" tabindex="0" aria-haspopup="true">Zoom
        <ul role="menu"><li role="menuitem"><button>Zoom In</button></li> <li role="menuitem"><button>Zoom Out</button></li></ul></li> <li role="menuitem"><a href="#menubar">Status Bar</a></li></ul></li> <li role="menuitem" tabindex="0" aria-haspopup="true">Help
    <ul role="menu"><li role="menuitem"><a href="#menubar">View Help</a></li> <li role="menuitem"><a href="#menubar">About</a></li></ul></li></ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  innerWidth = 0;
  return `<div class="flex"><div class="h-screen w-screen" style="background-image: url('https://wallpapers.com/images/hd/windows-10-default-k4s3pap71thyjavb.jpg');">${innerWidth >= 1e3 ? `${validate_component(DesktopIcon, "DesktopIcon").$$render(
    $$result,
    {
      display: true,
      text: "About Me",
      src: "Windows 7 Information.png"
    },
    {},
    {
      default: () => {
        return `<div class="w-[800px]"><div class="grid grid-cols-2" data-svelte-h="svelte-f0e45r"><div><p class="text-6xl">Hello!</p> <p class="text-3xl">I&#39;m Carson Case, a passionate software engineer</p> <p class="text-3xl">specializing in</p> <p class="text-4xl">Blockchain and Fintech development</p></div> <div class="flex justify-center"><img class="h-[300px]" src="${escape(base, true) + "/static/Headshot.jpg"}" alt=""></div></div> <div><div class="py-2">${validate_component(MenuBar, "MenuBar").$$render($$result, {}, {}, {})}</div> <div class="text-lg h-[200px] overflow-y-auto" data-svelte-h="svelte-661mzz"><p>👋 Welcome to my digital space, where creativity meets functionality.</p> <p class="py-5">💻 As a blockchain enthusiast, my expertise lies in crafting Smart Contracts using Solidity, Hardhat, Foundry and many more tools. However, I&#39;m not confined to just one realm; I&#39;m a seasoned full-stack developer proficient in languages like Javascript/Typescript, Python, and Golang.</p> <p class="py-5">🔍 Click on each project&#39;s desktop icon to reveal a gallery window, complete with a live link, screenshot, and detailed description. Whether it&#39;s blockchain smart contracts or dynamic frontend interfaces, you&#39;ll find a diverse showcase of my skills and creativity.</p> <p class="py-5">🤖 Wish we could talk right here, right now? Click AI Chat to do the next best thing and have a conversation with an AI prompted on my projects, resume and personality!</p> <p class="py-5">📞 Ready to discuss how we can collaborate on the next big thing? Let&#39;s connect! Book a call with me through Calendly and let&#39;s bring your ideas to life.</p> <p class="py-5">Find my Calendly at Contact &gt; Socials &gt; Calendly (or just click <a href="https://calendly.com/carsonpcase/30min" target="_blank">here</a> if you want to be boring.</p> <p class="py-6 text-xl">Let&#39;s build the future together!</p></div></div> <div data-svelte-h="svelte-1esd2qq"></div></div>`;
      }
    }
  )} ${validate_component(DesktopIcon, "DesktopIcon").$$render(
    $$result,
    {
      text: "Contact",
      src: "Windows 7 Contacts.png"
    },
    {},
    {
      default: () => {
        return `${``} <img src="https://i.gifer.com/origin/81/819e6ef27c2f13b211813f61ee68b201_w200.gif" alt=""> <button class="w-full" data-svelte-h="svelte-qecrgi">Socials</button>`;
      }
    }
  )} ${validate_component(DesktopIcon, "DesktopIcon").$$render(
    $$result,
    {
      text: "Capybara",
      src: "Windows 7 Cyan Check.png"
    },
    {},
    {
      default: () => {
        return `${validate_component(GalleryWindowContent, "GalleryWindowContent").$$render($$result, { text: "I love Capybaras!" }, {}, {
          default: () => {
            return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem ducimus recusandae commodi, vero culpa praesentium labore. Mollitia perferendis aut cumque hic, pariatur maxime, minima iusto odio, ratione dignissimos cupiditate.`;
          }
        })}`;
      }
    }
  )} ${validate_component(DesktopIcon, "DesktopIcon").$$render(
    $$result,
    {
      text: "AI Chat",
      src: "Windows 7 Connect to Internet.png"
    },
    {},
    {
      default: () => {
        return `${validate_component(AIChatWindowContent, "AiChatWindowContent").$$render($$result, {}, {}, {})}`;
      }
    }
  )} ${validate_component(DesktopIcon, "DesktopIcon").$$render(
    $$result,
    {
      text: "Flight Price Tracker",
      src: "Windows 7 Time and Date.png"
    },
    {},
    {
      default: () => {
        return `${validate_component(GalleryWindowContent, "GalleryWindowContent").$$render(
          $$result,
          {
            text: "Flight Price Tracker",
            link: "http://81.4.109.207/"
          },
          {},
          {
            default: () => {
              return `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam alias tenetur corrupti eligendi ad maxime. Aliquam quisquam ipsum ut doloribus tempora nemo quae, alias exercitationem officia excepturi corrupti eum.`;
            }
          }
        )}`;
      }
    }
  )} ${validate_component(DesktopIcon, "DesktopIcon").$$render($$result, { text: "ETH Pizza" }, {}, {})}` : `<div class="flex flex-col text-center" data-svelte-h="svelte-gnb80r"><h1>Please access this site on desktop</h1> <p>I know, mobile is great. But this site has a really cool gimmick that&#39;s much better on a larger screen</p></div>`}</div></div> `;
});
export {
  Page as default
};
