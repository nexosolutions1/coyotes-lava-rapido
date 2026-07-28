import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-UU5-Dte9.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Ci_Wq9gS.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você procura não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("Erro na aplicação:", error);
	const router = useRouter();
	const handleRetry = async () => {
		await router.invalidate();
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Não foi possível carregar esta página"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Ocorreu um erro inesperado. Tente novamente ou volte para a página inicial."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleRetry,
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Voltar ao início"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG" },
			{
				name: "description",
				content: "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. 4,9★ no Google com mais de 70 avaliações reais. Agende pelo WhatsApp."
			},
			{
				name: "theme-color",
				content: "#050505"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Coyotes Lava Rápido"
			},
			{
				property: "og:title",
				content: "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG"
			},
			{
				property: "og:description",
				content: "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. Agende pelo WhatsApp."
			},
			{
				property: "og:image",
				content: "/og-coyotes.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG"
			},
			{
				name: "twitter:description",
				content: "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. Agende pelo WhatsApp."
			},
			{
				name: "twitter:image",
				content: "/og-coyotes.png"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "shortcut icon",
				href: "/faviconcoyotes.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/faviconcoyotes.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-BTKdvLQb.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG" },
			{
				name: "description",
				content: "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. 4,9★ no Google com mais de 70 avaliações reais. Agende pelo WhatsApp."
			},
			{
				property: "og:title",
				content: "Coyotes Lava Rápido — Estética Automotiva Premium"
			},
			{
				property: "og:description",
				content: "Padrão premium em detalhamento automotivo. Av. Brasil, 225 · Extrema/MG."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
