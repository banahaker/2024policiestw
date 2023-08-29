import { Card, CardFooter, Image, Button } from "@nextui-org/react";

import { IPolicy } from "../api/api";

export interface IProp {
  list: IPolicy[];
}

export default function Dash({ list }: IProp) {
  console.log(list.filter((i) => i.candidate == 0).length);

  return (
    <div className="flex max-w-[90dvw] m-auto pt-5 items-center justify-center gap-2 max-md:flex-wrap">
      <Card radius="lg" className="border-none max-md:w-[120px]">
        <Image
          alt="LeiQingDe"
          className="object-cover"
          height={200}
          src="/images/lei.png"
          width={200}
        />
        <CardFooter className="justify-center overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ml-[10px] mt-[10px] z-10 flex flex-col bg-gray-500/50">
          <p className="text-lg">賴清德</p>
          <p className="text-4xl font-bold">
            {list.filter((i) => i.candidate == 0).length}
          </p>
          <p className="text-white/80">項政見</p>
        </CardFooter>
      </Card>
      <Card radius="lg" className="border-none max-md:w-[120px]">
        <Image
          alt="HuoYuoYi"
          className="object-cover"
          height={200}
          src="/images/huo.png"
          width={200}
        />
        <CardFooter className="justify-center overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ml-[10px] mt-[10px] z-10 flex flex-col bg-gray-500/50">
          <p className="text-lg">侯友宜</p>
          <p className="text-4xl font-bold">
            {list.filter((i) => i.candidate == 1).length}
          </p>
          <p className="text-white/80">項政見</p>
        </CardFooter>
      </Card>
      <Card radius="lg" className="border-none max-md:w-[120px]">
        <Image
          alt="KeWenZe"
          className="object-cover"
          height={200}
          src="/images/ke.png"
          width={200}
        />
        <CardFooter className="justify-center overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ml-[10px] mt-[10px] z-10 flex flex-col bg-gray-500/50">
          <p className="text-lg">柯文哲</p>
          <p className="text-4xl font-bold">
            {list.filter((i) => i.candidate == 2).length}
          </p>
          <p className="text-white/80">項政見</p>
        </CardFooter>
      </Card>
      <Card radius="lg" className="border-none max-md:w-[120px]">
        <Image
          alt="GouTaiMin"
          className="object-cover"
          height={200}
          src="/images/guo.png"
          width={200}
        />
        <CardFooter className="justify-center overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ml-[10px] mt-[10px] z-10 flex flex-col bg-gray-500/50">
          <p className="text-lg">郭台銘</p>
          <p className="text-4xl font-bold">
            {list.filter((i) => i.candidate == 3).length}
          </p>
          <p className="text-white/80">項政見</p>
        </CardFooter>
      </Card>
    </div>
  );
}
