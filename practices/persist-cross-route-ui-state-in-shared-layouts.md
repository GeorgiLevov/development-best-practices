> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Persist cross-route flash messages in a shared layout Provider instead of route-local state

**When to use**: When toast notifications, audio players, or transient UI feedback must survive a redirect (`router.push()`) across App Router routes, or when organizing distinct route layouts.

**Rule**: In App Router, navigating between pages unmounts the outgoing `page.js` and destroys its local `useState`, while shared `layout.js` components stay mounted and preserve React state across child navigations. Host cross-route UI providers (`ToastProvider` + `<ToastShelf />`, audio/playback context) inside a thin `'use client'` wrapper rendered by the shared `layout.js`, so any page can trigger a toast right before calling `router.push('/next-step')` without losing the notification. Use Route Groups `(groupName)` to organize folders or share/opt out of specific layouts without changing URL paths—noting that navigating between two *separate root layouts* triggers a full browser reload.

**Example**:
```jsx
// app/layout.js (Server Component): hosts shared client ToastProvider across routes
import ToastProvider from '@/components/ToastProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
```

**Avoid**: Storing post-redirect flash toasts in the submitting `page.js` (where `router.push()` unmounts them immediately), or accidentally creating conflicting URLs across `(group)` folders.

**Source**: [Routing Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/04.04-routing-exercises), [next-routing-exercises — GitHub](https://github.com/joy-of-react/next-routing-exercises), [Pages and Layouts — Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), [Route Groups — Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
