import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('layout!!')
    return (
      <>
        <h1>asd</h1>
        <main>{children}</main>
      </>
    )
  }