import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Erro na aplicação:", error);

  const router = useRouter();

  const handleRetry = async () => {
    await router.invalidate();
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente novamente ou volte para a página
          inicial.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG",
      },
      {
        name: "description",
        content:
          "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. 4,9★ no Google com mais de 70 avaliações reais. Agende pelo WhatsApp.",
      },
      {
        name: "theme-color",
        content: "#050505",
      },

      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Coyotes Lava Rápido",
      },
      {
        property: "og:title",
        content:
          "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG",
      },
      {
        property: "og:description",
        content:
          "Lavagem, polimento, vitrificação e detalhamento automotivo em Extrema/MG.",
      },
      {
        property: "og:url",
        content: "https://coyotes-lavarapido.netlify.app/",
      },
      {
        property: "og:image",
        content:
          "https://coyotes-lavarapido.netlify.app/og-coyotes.png",
      },
      {
        property: "og:image:secure_url",
        content:
          "https://coyotes-lavarapido.netlify.app/og-coyotes.png",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content:
          "Coyotes Lava Rápido e Estética Automotiva em Extrema/MG",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG",
      },
      {
        name: "twitter:description",
        content:
          "Lavagem, polimento, vitrificação e detalhamento automotivo em Extrema/MG.",
      },
      {
        name: "twitter:image",
        content:
          "https://coyotes-lavarapido.netlify.app/og-coyotes.png",
      },
      {
        name: "twitter:image:alt",
        content:
          "Coyotes Lava Rápido e Estética Automotiva em Extrema/MG",
      },
    ],

    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/faviconcoyotes.png",
        type: "image/png",
      },
      {
        rel: "shortcut icon",
        href: "/faviconcoyotes.png",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: "/faviconcoyotes.png",
      },
      {
        rel: "canonical",
        href: "https://coyotes-lavarapido.netlify.app/",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}