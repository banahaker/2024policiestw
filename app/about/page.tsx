"use client";
import Navbar from "../components/navbar";
import { Card, CardBody, Link } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="title w-full text-2xl font-bold text-center py-20">
        關於專案
      </div>
      <div className="content px-20 flex gap-5 flex-wrap justify-center max-sm:items-center">
        <Card className="w-[45%] max-sm:w-[80%] h-full  ">
          <CardBody>
            <h2 className="font-bold text-xl mb-2 text-primary-400">
              專案起源
            </h2>
            <p>
              2024
              大選將至，各路參選者摩拳擦掌，在攻擊對手的同時也相繼提出自己的政績。但多數人並不清楚各候選人有什麼樣的政績，最後淪為意識形態的選舉，對於民主國家來說是非常不好的現象
              <del>(對執政黨來說就不好說了)</del>
              因此這個專案就產生了，可以讓想瞭解的人查看已整理的政績，也希望公民們可以一同參與這樣的民主過程，因此大家也都可以加上自己看到的政績，而我們也會盡可能去確認訊息真偽，創造好的民主社會。
            </p>
            <ul className="list-disc px-6 py-2">
              <li>
                Github:{" "}
                <Link href="https://github.com/banahaker/2024policiestw">
                  https://github.com/banahaker/2024policiestw
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card className="w-[45%] max-sm:w-[80%] min-h-full">
          <CardBody className="pt-2 px-4 flex-col items-start py-5">
            <h2 className="font-bold text-xl mb-2 text-primary-400">
              作者介紹
            </h2>
            <p>
              Lazp，高中生，資料與軟體工程師，教育工作者，媒體人，長期接觸教育、科技、能源議題，衷於探索社會議題。
            </p>
            <ul className="list-disc px-6 py-5">
              <li>
                Twitter: <Link href="https://twitter.com/islazp">@islazp</Link>
              </li>
              <li>
                Facebook:{" "}
                <Link href="https://www.facebook.com/people/%E6%8B%89%E6%96%AF%E6%99%AE%E8%AA%AA%E8%A9%B1/100095056636158/">
                  拉斯普說話
                </Link>
              </li>
              <li>
                Instagram:{" "}
                <Link href="https://www.instagram.com/pn0818x/">@pn0818x</Link>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;
