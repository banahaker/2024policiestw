import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";

import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { Link } from "@nextui-org/react";
import { IPolicy } from "../api/api";
import { Card, CardBody } from "@nextui-org/react";

interface IForm {
  title: string;
  source: string;
  candidate: number;
}

export default function Platform() {
  const [selected, setSelected] = useState<any>();

  const [value, setValue] = useState("");

  const validateEmail = (value: string) => {
    const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);
    return value.match(regex);
  };

  const validationState = useMemo(() => {
    if (value === "") return undefined;

    return validateEmail(value) ? "valid" : "invalid";
  }, [value]);

  const [form, setForm] = useState<IForm>();

  const [data, setData] = useState<Array<IPolicy>>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const newPolicy = () => {
    console.log(form);
    if (!form?.candidate || !form.source || !form.title) return;
    fetch("/api", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("新增成功\n編號:" + data._id);
      })
      .catch((e) => {
        alert("伺服器錯誤！我們將儘快處裡！");
      });
  };

  return (
    <div className="max-w-[85dvw]  m-auto p-5 border-neutral-500	rounded-md">
      <div className="top flex justify-between items-center gap-5">
        <Select
          label="候選人"
          className="max-w-xs mb-2 outline-none"
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
        <Button
          onPress={onOpen}
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg outline-none"
          radius="full"
        >
          新增
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-xl">
                  為候選人新增政見
                </ModalHeader>
                <ModalBody>
                  <Select
                    label="候選人"
                    className="max-w-xs mb-2 outline-none"
                    variant="bordered"
                    placeholder="選擇候選人"
                    name="candidate"
                    //@ts-ignore
                    selectedKeys={form?.candidate}
                    //@ts-ignore
                    onChange={onFormChange}
                  >
                    {candidates.map((candidates) => (
                      <SelectItem
                        key={candidates.index}
                        value={candidates.index}
                      >
                        {candidates.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    type="text"
                    label="標題(政策簡述)"
                    name="title"
                    onChange={onFormChange}
                  />
                  <Input
                    type="text"
                    label="來源(網址)"
                    name="source"
                    color={validationState === "invalid" ? "danger" : "success"}
                    errorMessage={
                      validationState === "invalid" && "請輸入正確格式的網址"
                    }
                    validationState={validationState}
                    onChange={onFormChange}
                  />
                  <p className="text-sm text-slate-400 px-1">
                    完整填寫資料才會成功送出喔
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    關閉
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      newPolicy();
                      onClose();
                    }}
                  >
                    送出
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="result">
        {data.map((item, index) => {
          if (item.candidate != selected) return;
          return (
            <Card className="mt-3 hover:scale-105">
              <CardBody>
                <h4 className="text-xl text-primary-500">{item.title}</h4>
                <p>
                  來源:{" "}
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
