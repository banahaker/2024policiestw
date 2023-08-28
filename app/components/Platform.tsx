import { Select, SelectItem } from "@nextui-org/react";
import { useState, ChangeEvent, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { IPolicy } from "../api/api";
import { Card, CardBody } from "@nextui-org/react";

export default function Platform() {
  const [selected, setSelected] = useState<any>();
  const [data, setData] = useState<Array<IPolicy>>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("/api")).json();
      setData(data);
    };

    dataFetch();
  }, [selected]);

  const candidates = [
    { name: "賴清德", index: 0 },
    { name: "侯友宜", index: 1 },
    { name: "柯文哲", index: 2 },
    { name: "郭台銘", index: 3 },
  ];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelected(newValue);
  };

  return (
    <div className="max-w-[85dvw]  m-auto p-5 border-neutral-500	rounded-md">
      <Select
        label="候選人"
        className="max-w-xs mb-2"
        variant="bordered"
        placeholder="選擇候選人"
        selectedKeys={selected}
        //@ts-ignore
        onChange={onChange}
      >
        {candidates.map((candidates) => (
          <SelectItem key={candidates.index} value={candidates.index}>
            {candidates.name}
          </SelectItem>
        ))}
      </Select>
      <div className="result">
        {data.map((item, index) => {
          if (item.candidate != selected) return;
          return (
            <Card className="mt-3 hover:scale-105">
              <CardBody>
                <h4 className="text-xl text-primary-500">{item.title}</h4>
                <p>
                  Source:{" "}
                  <Link key={index} href={item.source}>
                    {item.source}
                  </Link>
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
