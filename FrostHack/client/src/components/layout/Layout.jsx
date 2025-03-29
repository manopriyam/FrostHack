// import from libraries
import React from 'react';


// import from files
import "./Layout.css";
import Header from './Header.jsx';
import Footer from './Footer.jsx';


// layout component
const Layout = ({children, title = "Project Name", description = "Project Description", keywords = "keyword", author = "Manopriya"}) => {
  return (
    <div className="default-layout">
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <Header/>
        <main>
          <Toaster/>
          {children}
        </main>
      <Footer/>
    </div>
  );
}

export default Layout;
