import useMongoUserStore from '@/stores/AuthStore';
import './globals.css'
import LoginForm from '@/hooks/useLogin';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const clientService = useMongoUserStore((state) => state.clientService);
  const client = await clientService;
  const db = client?.db("MoneyHandler");
  db?.createCollection
  const isConnected = db !== undefined;
  return (
    <html lang="en">
      <body>
        <main>
          {
            isConnected ? children : <LoginForm />
          }
        </main>
      </body>
    </html>
  )
}
