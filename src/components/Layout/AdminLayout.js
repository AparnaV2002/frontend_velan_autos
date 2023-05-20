import React from 'react'
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import { Helmet } from "react-helmet";
import {Toaster} from "react-hot-toast";
const AdminLayout = ({children,title,description,keywords,author}) => {
  return (
  <>
  <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
  <AdminHeader/>
  
  <main style={{
    minHeight: "70vh",
    
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <Toaster/>
    {children}</main>

  <Footer/>
  </>
  )
}

AdminLayout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "aparna",
};
export default AdminLayout
