import Link from 'next/link'

export const Links = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/scssModules">Scss Module Example</Link>
    </li>
    <li>
      <Link href="/absoluteImports">Absolute Import Example</Link>
    </li>
    <li>
      <Link href="/typescript">Typescript Example</Link>
    </li>
    <li>
      <Link href="/nextjsRouting">Next.js Routing Example</Link>
    </li>
    <li>
      <Link href="/nextjsImages">Next.js Images Example</Link>
    </li>
  </ul>
)
