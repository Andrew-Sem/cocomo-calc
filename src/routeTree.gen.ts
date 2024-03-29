/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const Cocomo2LazyImport = createFileRoute('/cocomo-2')()
const Cocomo1LazyImport = createFileRoute('/cocomo-1')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const Cocomo2LazyRoute = Cocomo2LazyImport.update({
  path: '/cocomo-2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cocomo-2.lazy').then((d) => d.Route))

const Cocomo1LazyRoute = Cocomo1LazyImport.update({
  path: '/cocomo-1',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cocomo-1.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cocomo-1': {
      preLoaderRoute: typeof Cocomo1LazyImport
      parentRoute: typeof rootRoute
    }
    '/cocomo-2': {
      preLoaderRoute: typeof Cocomo2LazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  Cocomo1LazyRoute,
  Cocomo2LazyRoute,
])

/* prettier-ignore-end */
