import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-nova-black text-nova-white">
      <Navbar />
      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-60 xl:w-64 shrink-0 border-r border-nova-border bg-nova-deep/30 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
