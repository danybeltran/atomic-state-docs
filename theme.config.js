export default {
  github: 'https://github.com/danybeltran/atomic-state',
  docsRepositoryBase:
    'https://github.com/danybeltran/atomic-state-docs/blob/master',
  titleSuffix: ' – Atomic State',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Atomic State</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A(nother) state management library
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Atomic State - a(nother) state management library"
      />
      <meta
        name="og:description"
        content="Atomic State is a state management library for React apps"
      />
      <meta name="og:title" content="Atomic State" />
      <meta name="apple-mobile-web-app-title" content="Atomic State" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()}</>,
}
