import { Meta } from './Meta';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <div className="flex flex-col h-full">
      <Navbar />
      <main>{children}</main>
      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  </>
);