interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout-outer">
    <div className="layout-inner">{children}</div>
  </div>
)

export default Layout
