import React from "react"
import 'fontsource-roboto';
import { SideNav } from "../components/SideNav";
import { Layout } from "../components/Layout";

export default function Home() {
  return <Layout sideNav={<SideNav />}/>
}
