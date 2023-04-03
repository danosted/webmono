import RequireAuthentication from '@/components/RequireAuthentication'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='dark:bg-stone-900 dark:text-red-400 min-h-screen'>
          <RequireAuthentication>
            {children}
          </RequireAuthentication>
        </main>
      </body>
    </html>
  )
}
