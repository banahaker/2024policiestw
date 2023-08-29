"use client";
import Navbar from "../components/navbar";
import { Card, CardBody, Link } from "@nextui-org/react";

const ResearchPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="title w-full text-2xl font-bold text-center py-20">
        研究成果
      </div>
      <div className="text-center">日後將會放上相關研究成果或文章至此</div>
    </>
  );
};

export default ResearchPage;
