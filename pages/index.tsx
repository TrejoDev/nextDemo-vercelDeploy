import Link from 'next/link';

import { MainLayout } from '@/components/layouts/MainLayout';


export default function HomePage() {
  return (
   <MainLayout>
      <h1>Home Page</h1>
        <div className="description">
          <h1 className="titles">
            Go to<Link href="/contact">
              Contact
            </Link>
            Go to<Link href="/about">
              About
            </Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.tsx</code>
          </p>
        </div>
   </MainLayout>
  )
}
