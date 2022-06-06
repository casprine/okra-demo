import { ConnectionProps } from ".";
import { spinnerStyles, containerStyles, iframeStyles } from "./styles";
import qs from "qs";

const widgetId: string = "okra-widget-div";
const iframeId: string = "okra-widget-iframe";
const loaderId: string = "okra-widget-loading-indicator";

/**
 * setups up the iframe to be loaded
 */
export function setup(args: ConnectionProps) {
  //  // safe guard for SSR
  if (!document || !window) return;

  const origin: URL = new URL("http://localhost:8080");

  if (document.getElementById(widgetId) && document.getElementById(iframeId)) {
    // @ts-ignore
    const iframe = (HTMLIFrameElement = document.getElementById(iframeId));
    iframe?.setAttribute("src", origin.href);
    return;
  }

  const queryString = qs.stringify(args);

  // set options to url
  origin.searchParams.set("config", queryString);

  console.log("<queryString>", queryString);

  // container for iframe wrapper
  const container: HTMLDivElement = document?.createElement("div");
  container.setAttribute("id", widgetId);
  container.setAttribute("style", containerStyles);
  document.body.insertBefore(container, document.body.childNodes[0]);

  createIframe(origin);
}

/**
 * creates iframe
 */
function createIframe(origin: URL) {
  const iframe: HTMLIFrameElement = document?.createElement("iframe");

  iframe.setAttribute("src", origin.href);
  iframe.setAttribute("style", iframeStyles);
  iframe.setAttribute("id", iframeId);
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("title", "Okra connect");
  iframe.setAttribute(
    "sandbox",
    "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
  );

  const loader = createLoader();

  document.getElementById(widgetId)?.appendChild(loader);
  document.getElementById(widgetId)?.appendChild(iframe);
}

/**
 * creates loading animation
 */

export function createLoader() {
  let loaderContainer: HTMLDivElement = document.createElement("div");
  loaderContainer.setAttribute("id", loaderId);

  const subDiv1: HTMLDivElement = document.createElement("div");
  const subDiv2: HTMLDivElement = document.createElement("div");
  loaderContainer.classList.add("lds-ripple");

  loaderContainer.appendChild(subDiv1);
  loaderContainer.appendChild(subDiv2);

  return loaderContainer;
}

/**
 * hides iframe widget
 */
export function closeWidget() {
  const container: HTMLElement = document.getElementById(widgetId)!;
  const iframe: HTMLElement = document.getElementById(iframeId)!;

  container.style.display = "none";
  iframe.style.display = "none";
  container.style.visibility = "hidden";
  iframe.style.visibility = "hidden";
}

/**
 * shows iframe widget
 */
export function showWidget() {
  const container: HTMLElement = document.getElementById(widgetId)!;
  const iframe: HTMLElement = document.getElementById(iframeId)!;

  container.style.display = "flex";
  iframe.style.display = "block";
  container.style.visibility = "visible";
  iframe.style.visibility = "visible";
}

/**
 * opens iframe widget
 */

export function openWidget() {
  var container = document.getElementById(widgetId)!;
  var loader = document.getElementById(loaderId)!;
  var iframe = document.getElementById(iframeId)!;

  container.style.visibility = "visible";
  container.style.display = "flex";
  loader.style.display = "block";

  setTimeout(() => {
    showWidget();
    iframe.focus({ preventScroll: false });
    container.focus({ preventScroll: false });
  }, 500);
}

/**
 * adds base spinner styles
 */
export function addStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = spinnerStyles;
  document.head.appendChild(styleSheet);
}
