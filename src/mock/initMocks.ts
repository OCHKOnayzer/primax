export async function initMocks() {
  if (typeof window === "undefined") return;

  const { worker } = await import("./browser");

  await worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });

  console.log("MSW started");
}