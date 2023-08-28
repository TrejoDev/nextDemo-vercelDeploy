import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export interface PageProps {
    children: JSX.Element | JSX.Element []
}

export const DarkLayout = ({ children }: PageProps) => {
  return (
    <div
        style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}
    >
        <h1>DarkLayout</h1>
        <div>
         { children }
        </div>
    </div>
  )
}
