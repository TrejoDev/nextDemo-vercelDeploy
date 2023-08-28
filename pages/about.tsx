import Link from 'next/link';

import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';
import { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
        <h1>About Page</h1>
        <div className="description">
          <h1 className="titles">
            Go to<Link href="/">Home Page</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/about.tsx</code>
          </p>
        </div>
    </>
  )
}

export default AboutPage;

AboutPage.getLayout = function getLayout (page: JSX.Element) {
  return (
    <MainLayout>
        <DarkLayout>
          { page }
        </DarkLayout>
    </MainLayout>
  )
}
